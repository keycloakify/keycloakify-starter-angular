import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, input, signal, type TemplateRef, viewChild } from '@angular/core';
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
import { PasswordComponent } from '../../components/field/password/password.component';
import { SocialProvidersComponent } from '../../components/social-providers/social-providers.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    selector: 'kc-login',
    templateUrl: 'login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        KcClassDirective,
        CommonModule,
        SocialProvidersComponent,
        InputComponent,
        PasswordComponent,
        PasswordComponent,
        CheckboxComponent,
        LoginButtonComponent
    ],
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginComponent)
        }
    ]
})
export class LoginComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = !!this.kcContext?.realm?.password && !!this.kcContext?.realm?.registrationAllowed && !this.kcContext?.registrationDisabled;
    displayMessage = !this.kcContext?.messagesPerField?.existsError('username', 'password');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');

    isLoginButtonDisabled = signal(false);

    constructor() {
        super();
    }

    protected readonly input = input;

    get usernameLabel(): string {
        if (!this.kcContext?.realm) {
            return this.i18n.msgStr('username');
        } else if (!this.kcContext?.realm?.registrationEmailAsUsername) {
            return this.i18n.msgStr('usernameOrEmail');
        }
        return this.i18n.msgStr('email');
    }
}
