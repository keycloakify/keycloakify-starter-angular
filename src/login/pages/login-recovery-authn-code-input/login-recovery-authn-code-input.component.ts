import { ChangeDetectionStrategy, Component, forwardRef, inject, type TemplateRef, viewChild } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { ClassKey } from '../../../../lib/kcClsx';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { InputComponent } from '../../components/field/input/input.component';
import { LoginButtonComponent } from '../../components/buttons/login-button/login-button.component';

@Component({
    imports: [KcClassDirective, InputComponent, LoginButtonComponent],
    selector: 'kc-login-recovery-authn-code-input',
    templateUrl: 'login-recovery-authn-code-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginRecoveryAuthnCodeInputComponent)
        }
    ]
})
export class LoginRecoveryAuthnCodeInputComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login-recovery-authn-code-input.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage: boolean = this.kcContext.messagesPerField.existsError('recoveryCodeInput');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');
}
