import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, signal, type TemplateRef, viewChild } from '@angular/core';
import { KcSanitizePipe } from '@keycloakify/angular/lib/pipes/kc-sanitize';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { KcClassDirective } from '@keycloakify/angular/login/directives/kc-class';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
import { LoginButtonComponent } from '../../components/buttons/login-button/login-button.component';
import { CheckboxComponent } from '../../components/field/checkbox/checkbox.component';
import { InputComponent } from '../../components/field/input/input.component';
import { SocialProvidersComponent } from '../../components/social-providers/social-providers.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    selector: 'kc-login-username',
    templateUrl: 'login-username.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        KcClassDirective,
        AsyncPipe,
        KcSanitizePipe,
        NgClass,
        SocialProvidersComponent,
        InputComponent,
        CheckboxComponent,
        LoginButtonComponent
    ],
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginUsernameComponent)
        }
    ]
})
export class LoginUsernameComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login-username.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo: boolean = !!this.kcContext?.realm?.password && !!this.kcContext?.realm?.registrationAllowed && !this.kcContext?.registrationDisabled;
    displayMessage: boolean = this.kcContext?.messagesPerField?.existsError('username');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');

    isLoginButtonDisabled = signal(false);

    get usernameLabel(): string {
        if (!this.kcContext?.realm) {
            return this.i18n.msgStr('username');
        } else if (!this.kcContext?.realm?.registrationEmailAsUsername) {
            return this.i18n.msgStr('usernameOrEmail');
        }
        return this.i18n.msgStr('email');
    }
}
