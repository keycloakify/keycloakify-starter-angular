import type { ExtendKcContext } from "keycloakify/login";
import type { KcContext as K } from "keycloakify/login/KcContext";
import type { KcEnvName, ThemeName } from "./kc.gen";

export type KcContextExtension = {
  themeName: ThemeName;
  properties: Record<KcEnvName, string> & {};
};

export type PageId = K["pageId"];
export type KcContextExtensionPerPage<T extends string = PageId> = Record<
  T,
  Record<string, unknown>
>;
export type KcContext<
  T extends string = PageId,
  J = 
  T extends "saml-post-form.ftl" ? K.SamlPostForm :
  T extends "login.ftl" ? K.Login : 
  T extends "register.ftl" ? K.Register :
  T extends "info.ftl" ? K.Info :
  T extends "error.ftl" ? K.Error :
  T extends "login-reset-password.ftl" ? K.LoginResetPassword :
  T extends "login-verify-email.ftl" ? K.LoginVerifyEmail :
  T extends "terms.ftl" ? K.Terms :
  T extends "login-oauth2-device-verify-user-code.ftl.ftl" ? K.LoginDeviceVerifyUserCode :
  T extends "login-oauth-grant.ftl" ? K.LoginOauthGrant :
  T extends "login-otp.ftl" ? K.LoginOtp :
  T extends "login-username.ftl" ? K.LoginUsername :
  T extends "login-password.ftl" ? K.LoginPassword :
  T extends "webauthn-authenticate.ftl" ? K.WebauthnAuthenticate :
  T extends "webauthn-register.ftl" ? K.WebauthnRegister :
  T extends "login-update-password.ftl" ? K.LoginUpdatePassword :
  T extends "login-idp-link-confirm.ftl" ? K.LoginIdpLinkConfirm :
  T extends "login-idp-link-email.ftl" ? K.LoginIdpLinkEmail :
  T extends "login-page-expired.ftl" ? K.LoginPageExpired :
  T extends "login-config-totp.ftl" ? K.LoginConfigTotp :
  T extends "logout-confirm.ftl" ? K.LogoutConfirm :
  T extends "login-update-profile.ftl" ? K.LoginUpdateProfile :
  T extends "idp-review-user-profile.ftl" ? K.IdpReviewUserProfile :
  T extends "update-email.ftl" ? K.UpdateEmail :
  T extends "select-authenticator.ftl" ? K.SelectAuthenticator :
  T extends "delete-credential.ftl" ? K.DeleteCredential :
  T extends "code.ftl" ? K.Code :
  T extends "delete-account-confirm.ftl" ? K.DeleteAccountConfirm :
  T extends "frontchannel-logout.ftl" ? K.FrontchannelLogout :
  T extends "login-recovery-authn-code-config.ftl" ? K.LoginRecoveryAuthnCodeConfig :
  T extends "login-recovery-authn-code-input.ftl" ? K.LoginRecoveryAuthnCodeInput :
  T extends "login-reset-otp.ftl" ? K.LoginResetOtp :
  T extends "login-x509-info.ftl" ? K.LoginX509Info :
  T extends "webauthn-error.ftl" ? K.WebauthnError :
  T extends "login-passkeys-conditional-authenticate.ftl" ? K.LoginPasskeysConditionalAuthenticate :
  T extends "login-idp-link-confirm-override.ftl" ? K.LoginIdpLinkConfirmOverride :
  K.Common
> = J & ExtendKcContext<KcContextExtension, KcContextExtensionPerPage<T>>;

export declare namespace KcContext {}
