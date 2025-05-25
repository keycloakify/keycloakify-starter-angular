import { ChangeDetectionStrategy, Component, forwardRef, inject, signal, type TemplateRef, viewChild } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../lib/kcClsx';
import { LoginButtonComponent } from '../../components/buttons/login-button/login-button.component';
import { InputComponent } from '../../components/field/input/input.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    imports: [KcClassDirective, InputComponent, LoginButtonComponent],
    selector: 'kc-login-otp',
    templateUrl: 'login-otp.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginOtpComponent)
        }
    ]
})
export class LoginOtpComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login-otp.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage: boolean = this.kcContext.messagesPerField.existsError('totp');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');

    isLoginButtonDisabled = signal(false);

    toggleOTP(index: number, value: string) {
        const selectedCredentialId = document.getElementById('selectedCredentialId') as HTMLInputElement;
        if (selectedCredentialId) {
            selectedCredentialId.value = value;
        }

        // remove selected class from all OTP credentials
        const selectedClass = this.classes.kcLoginOTPListSelectedClass;
        if (selectedClass) {
            Array.from(document.getElementsByClassName(selectedClass)).forEach((i: Element) => {
                i.classList.remove(selectedClass);
            });
        }
        // add selected class to the clicked OTP credential
        const otpCredentialElement = document.getElementById('kc-otp-credential-' + index);
        if (otpCredentialElement && selectedClass) {
            otpCredentialElement.classList.add(selectedClass);
        }
    }
}
