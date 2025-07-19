import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/login';
import type { KcContext } from './KcContext';
import { UserProfileFormFieldsComponent } from './components/user-profile-commons/user-profile-form-fields/user-profile-form-fields.component';
import { TemplateComponent } from './template/template.component';
import { ClassKey } from '../../lib/kcClsx';

const classes = {} satisfies Partial<Record<ClassKey, string>>;
const doUseDefaultCss = false;
const doMakeUserConfirmPassword = true;

export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
    switch (pageId) {
        case 'login.ftl':
            return {
                PageComponent: (await import('./pages/login/login.component'))
                    .LoginComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-username.ftl':
            return {
                PageComponent: (
                    await import('./pages/login-username/login-username.component')
                ).LoginUsernameComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-password.ftl':
            return {
                PageComponent: (
                    await import('./pages/login-password/login-password.component')
                ).LoginPasswordComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'code.ftl':
            return {
                PageComponent: (await import('./pages/code/code.component'))
                    .CodeComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'delete-account-confirm.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/delete-account-confirm/delete-account-confirm.component'
                    )
                ).DeleteAccountConfirmComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'delete-credential.ftl':
            return {
                PageComponent: (
                    await import('./pages/delete-credential/delete-credential.component')
                ).DeleteCredentialComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'link-idp-action.ftl':
            return {
                PageComponent: (
                    await import('./pages/link-idp-action/link-idp-action.component')
                ).LinkIdpActionComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-config-totp.ftl':
            return {
                PageComponent: (
                    await import('./pages/login-config-totp/login-config-totp.component')
                ).LoginConfigTotpComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-oauth-grant.ftl':
            return {
                PageComponent: (
                    await import('./pages/login-oauth-grant/login-oauth-grant.component')
                ).LoginOauthGrantComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-otp.ftl':
            return {
                PageComponent: (await import('./pages/login-otp/login-otp.component'))
                    .LoginOtpComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-reset-password.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/login-reset-password/login-reset-password.component'
                    )
                ).LoginResetPasswordComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };

        case 'webauthn-register.ftl':
            return {
                PageComponent: (
                    await import('./pages/webauthn-register/webauthn-register.component')
                ).WebauthnRegisterComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'select-authenticator.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/select-authenticator/select-authenticator.component'
                    )
                ).SelectAuthenticatorComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'webauthn-error.ftl':
            return {
                PageComponent: (
                    await import('./pages/webauthn-error/webauthn-error.component')
                ).WebauthnErrorComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'terms.ftl':
            return {
                PageComponent: (await import('./pages/terms/terms.component'))
                    .TermsComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-update-password.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/login-update-password/login-update-password.component'
                    )
                ).LoginUpdatePasswordComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };

        case 'select-organization.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/select-organization/select-organization.component'
                    )
                ).SelectOrganizationComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-recovery-authn-code-input.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/login-recovery-authn-code-input/login-recovery-authn-code-input.component'
                    )
                ).LoginRecoveryAuthnCodeInputComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
        case 'login-recovery-authn-code-config.ftl':
            return {
                PageComponent: (
                    await import(
                        './pages/login-recovery-authn-code-config/login-recovery-authn-code-config.component'
                    )
                ).LoginRecoveryAuthnCodeConfigComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };

        default:
            return {
                PageComponent: await getDefaultPageComponent(pageId),
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
    }
}
