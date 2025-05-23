import { createGetKcClsx } from 'keycloakify/lib/getKcClsx';

export type ClassKey =
    | 'darkMode'
    | 'kcAlertClass'
    | 'kcAlertDescriptionClass'
    | 'kcAlertIconClass'
    | 'kcAlertTitleClass'
    | 'kcAuthenticatorDefaultClass'
    | 'kcAuthenticatorOTPClass'
    | 'kcAuthenticatorPasswordClass'
    | 'kcAuthenticatorWebAuthnClass'
    | 'kcAuthenticatorWebAuthnPasswordlessClass'
    | 'kcButtonBlockClass'
    | 'kcButtonClass'
    | 'kcButtonDefaultClass'
    | 'kcButtonLargeClass'
    | 'kcButtonLinkClass'
    | 'kcButtonPrimaryClass'
    | 'kcButtonSecondaryClass'
    | 'kcCheckClass'
    | 'kcCheckInputClass'
    | 'kcCheckLabelClass'
    | 'kcCheckboxClass'
    | 'kcCheckboxInputClass'
    | 'kcCheckboxLabelClass'
    | 'kcCheckboxLabelRequiredClass'
    | 'kcCommonLogoIdP'
    | 'kcContainerClass'
    | 'kcContentClass'
    | 'kcContentWrapperClass'
    | 'kcDarkModeClass'
    | 'kcError'
    | 'kcFeedbackAreaClass'
    | 'kcFeedbackErrorIcon'
    | 'kcFeedbackInfoIcon'
    | 'kcFeedbackSuccessIcon'
    | 'kcFeedbackWarningIcon'
    | 'kcFill'
    | 'kcFormActionGroupClass'
    | 'kcFormAreaClass'
    | 'kcFormButtonsClass'
    | 'kcFormCardClass'
    | 'kcFormClass'
    | 'kcFormControlToggleIcon'
    | 'kcFormControlUtilClass'
    | 'kcFormGroupClass'
    | 'kcFormGroupErrorClass'
    | 'kcFormGroupHeader'
    | 'kcFormGroupLabelClass'
    | 'kcFormHeaderClass'
    | 'kcFormHelperTextClass'
    | 'kcFormLabelClass'
    | 'kcFormLabelTextClass'
    | 'kcFormOptionsClass'
    | 'kcFormPasswordVisibilityButtonClass'
    | 'kcFormPasswordVisibilityIconHide'
    | 'kcFormPasswordVisibilityIconShow'
    | 'kcFormReadOnlyClass'
    | 'kcFormSettingClass'
    | 'kcFormSocialAccountGridItem'
    | 'kcFormSocialAccountLinkClass'
    | 'kcFormSocialAccountListButtonClass'
    | 'kcFormSocialAccountListClass'
    | 'kcFormSocialAccountListGridClass'
    | 'kcFormSocialAccountListItemClass'
    | 'kcFormSocialAccountNameClass'
    | 'kcFormSocialAccountSectionClass'
    | 'kcHeaderClass'
    | 'kcHtmlClass'
    | 'kcInfoAreaClass'
    | 'kcInputClass'
    | 'kcInputClassCheckbox'
    | 'kcInputClassCheckboxInput'
    | 'kcInputClassCheckboxLabel'
    | 'kcInputClassRadio'
    | 'kcInputClassRadioCheckboxLabelDisabled'
    | 'kcInputClassRadioInput'
    | 'kcInputClassRadioLabel'
    | 'kcInputErrorIconClass'
    | 'kcInputErrorIconStatusClass'
    | 'kcInputErrorMessageClass'
    | 'kcInputGroup'
    | 'kcInputGroupItemClass'
    | 'kcInputHelperTextAfterClass'
    | 'kcInputHelperTextBeforeClass'
    | 'kcInputHelperTextClass'
    | 'kcInputHelperTextItemClass'
    | 'kcInputHelperTextItemTextClass'
    | 'kcInputLargeClass'
    | 'kcInputRequiredClass'
    | 'kcInputWrapperClass'
    | 'kcLabelClass'
    | 'kcLabelWrapperClass'
    | 'kcListClass'
    | 'kcLocaleClass'
    | 'kcLocaleItemClass'
    | 'kcLocaleListClass'
    | 'kcLocaleMainClass'
    | 'kcLogin'
    | 'kcLoginClass'
    | 'kcLoginContainer'
    | 'kcLoginFooterBand'
    | 'kcLoginFooterBandItem'
    | 'kcLoginMain'
    | 'kcLoginMainBody'
    | 'kcLoginMainFooter'
    | 'kcLoginMainFooterBand'
    | 'kcLoginMainFooterBandItem'
    | 'kcLoginMainFooterHelperText'
    | 'kcLoginMainHeader'
    | 'kcLoginMainHeaderUtilities'
    | 'kcLoginMainTitle'
    | 'kcLoginOTPListClass'
    | 'kcLoginOTPListInputClass'
    | 'kcLoginOTPListItemHeaderClass'
    | 'kcLoginOTPListItemIconBodyClass'
    | 'kcLoginOTPListItemIconClass'
    | 'kcLoginOTPListItemTitleClass'
    | 'kcLoginOTPListSelectedClass'
    | 'kcLogoClass'
    | 'kcLogoIdP-bitbucket'
    | 'kcLogoIdP-facebook'
    | 'kcLogoIdP-github'
    | 'kcLogoIdP-gitlab'
    | 'kcLogoIdP-google'
    | 'kcLogoIdP-instagram'
    | 'kcLogoIdP-linkedin'
    | 'kcLogoIdP-microsoft'
    | 'kcLogoIdP-openshift-v4'
    | 'kcLogoIdP-paypal'
    | 'kcLogoIdP-stackoverflow'
    | 'kcLogoIdP-twitter'
    | 'kcLogoLink'
    | 'kcMarginTopClass'
    | 'kcPanelClass'
    | 'kcPanelMainBodyClass'
    | 'kcPanelMainClass'
    | 'kcRecoveryCodesActions'
    | 'kcRecoveryCodesConfirmation'
    | 'kcRecoveryCodesList'
    | 'kcRecoveryCodesWarning'
    | 'kcResetFlowIcon'
    | 'kcSelectAuthListClass'
    | 'kcSelectAuthListItemArrowClass'
    | 'kcSelectAuthListItemArrowIconClass'
    | 'kcSelectAuthListItemBodyClass'
    | 'kcSelectAuthListItemClass'
    | 'kcSelectAuthListItemDescriptionClass'
    | 'kcSelectAuthListItemFillClass'
    | 'kcSelectAuthListItemHeadingClass'
    | 'kcSelectAuthListItemIconClass'
    | 'kcSelectAuthListItemIconPropertyClass'
    | 'kcSelectAuthListItemTitle'
    | 'kcSelectAuthListItemWrapperClass'
    | 'kcSignUpClass'
    | 'kcSrOnlyClass'
    | 'kcTextareaClass'
    | 'kcWebAuthnBLE'
    | 'kcWebAuthnDefaultIcon'
    | 'kcWebAuthnInternal'
    | 'kcWebAuthnKeyIcon'
    | 'kcWebAuthnNFC'
    | 'kcWebAuthnUSB'
    | 'kcWebAuthnUnknownIcon'
    | 'kcBodyClass';

export const { getKcClsx } = createGetKcClsx<ClassKey>({
    defaultClasses: {
        darkMode: 'true',
        kcAlertClass: 'pf-v5-c-alert pf-m-inline pf-v5-u-mb-md',
        kcAlertDescriptionClass: 'pf-v5-c-alert__description',
        kcAlertIconClass: 'pf-v5-c-alert__icon',
        kcAlertTitleClass: 'pf-v5-c-alert__title',
        kcAuthenticatorDefaultClass: 'fa fa-list list-view-pf-icon-lg',
        kcAuthenticatorOTPClass: 'fa fa-mobile list-view-pf-icon-lg',
        kcAuthenticatorPasswordClass: 'fa fa-unlock list-view-pf-icon-lg',
        kcAuthenticatorWebAuthnClass: 'fa fa-key list-view-pf-icon-lg',
        kcAuthenticatorWebAuthnPasswordlessClass: 'fa fa-key list-view-pf-icon-lg',
        kcButtonBlockClass: 'pf-m-block',
        kcButtonClass: 'pf-v5-c-button',
        kcButtonDefaultClass: 'btn-default',
        kcButtonLargeClass: 'btn-lg',
        kcButtonLinkClass: 'pf-v5-c-button pf-m-link',
        kcButtonPrimaryClass: 'pf-v5-c-button pf-m-primary',
        kcButtonSecondaryClass: 'pf-v5-c-button pf-m-secondary',
        kcCheckClass: 'pf-c-check',
        kcCheckInputClass: 'pf-c-check__input',
        kcCheckLabelClass: 'pf-c-check__label',
        kcCheckboxClass: 'pf-v5-c-check',
        kcCheckboxInputClass: 'pf-v5-c-check__input',
        kcCheckboxLabelClass: 'pf-v5-c-check__label',
        kcCheckboxLabelRequiredClass: 'pf-v5-c-check__label-required',
        kcCommonLogoIdP: 'pf-v5-c-login__main-footer-links-item',
        kcContainerClass: 'container-fluid',
        kcContentClass:
            'col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3',
        kcContentWrapperClass: 'pf-v5-u-mb-md-on-md',
        kcDarkModeClass: 'pf-v5-theme-dark',
        kcError: 'pf-m-error',
        kcFeedbackAreaClass: 'col-md-12',
        kcFeedbackErrorIcon: 'fa fa-fw fa-exclamation-circle',
        kcFeedbackInfoIcon: 'fa fa-fw fa-info-circle',
        kcFeedbackSuccessIcon: 'fa fa-fw fa-check-circle',
        kcFeedbackWarningIcon: 'fa fa-fw fa-exclamation-triangle',
        kcFill: 'pf-m-fill',
        kcFormActionGroupClass: 'pf-v5-c-form__actions pf-v5-u-pt-xs  pf-v5-u-gap-md',
        kcFormAreaClass:
            'col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2',
        kcFormButtonsClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
        kcFormCardClass: 'card-pf',
        kcFormClass: 'pf-v5-c-form pf-v5-u-w-100',
        kcFormControlToggleIcon: 'pf-v5-c-form-control__toggle-icon',
        kcFormControlUtilClass: 'pf-v5-c-form-control__utilities',
        kcFormGroupClass: 'pf-v5-c-form__group',
        kcFormGroupErrorClass: 'has-error',
        kcFormGroupHeader: 'pf-c-form__group',
        kcFormGroupLabelClass: 'pf-v5-c-form__group-label pf-v5-u-pb-xs',
        kcFormHeaderClass: 'login-pf-header',
        kcFormHelperTextClass: 'pf-v5-c-form__helper-text',
        kcFormLabelClass: 'pf-v5-c-form__label',
        kcFormLabelTextClass: 'pf-v5-c-form__label-text',
        kcFormOptionsClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
        kcFormPasswordVisibilityButtonClass: 'pf-v5-c-button pf-m-control',
        kcFormPasswordVisibilityIconHide: 'fa fa-eye-slash',
        kcFormPasswordVisibilityIconShow: 'fa fa-eye',
        kcFormReadOnlyClass: 'pf-m-readonly',
        kcFormSettingClass: 'login-pf-settings',
        kcFormSocialAccountGridItem: 'pf-v5-l-grid__item',
        kcFormSocialAccountLinkClass: 'pf-c-login__main-footer-links-item-link',
        kcFormSocialAccountListButtonClass:
            'pf-v5-c-button pf-m-secondary pf-m-block pf-v5-u-display-flex pf-v5-u-align-items-center pf-v5-u-justify-content-space-between',
        kcFormSocialAccountListClass:
            'pf-v5-c-login__main-body pf-v5-u-pl-0 pf-v5-u-pr-0',
        kcFormSocialAccountListGridClass:
            'pf-v5-l-grid pf-m-gutter pf-m-all-6-col-on-xl pf-m-all-6-col-on-sm',
        kcFormSocialAccountListItemClass: 'pf-v5-u-pb-sm',
        kcFormSocialAccountNameClass: 'pf-v5-u-m-auto',
        kcFormSocialAccountSectionClass: 'kc-social-section kc-social-gray',
        kcHeaderClass: 'login-pf-page-header',
        kcHtmlClass: 'login-pf',
        kcInfoAreaClass: 'col-xs-12 col-sm-4 col-md-4 col-lg-5 details',
        kcInputClass: 'pf-v5-c-form-control',
        kcInputClassCheckbox: 'pf-c-check',
        kcInputClassCheckboxInput: 'pf-c-check__input',
        kcInputClassCheckboxLabel: 'pf-c-check__label',
        kcInputClassRadio: 'pf-c-radio',
        kcInputClassRadioCheckboxLabelDisabled: 'pf-m-disabled',
        kcInputClassRadioInput: 'pf-c-radio__input',
        kcInputClassRadioLabel: 'pf-c-radio__label',
        kcInputErrorIconClass: 'fas fa-exclamation-circle',
        kcInputErrorIconStatusClass: 'pf-v5-c-form-control__icon pf-m-status',
        kcInputErrorMessageClass:
            'pf-v5-c-helper-text__item-text pf-m-error kc-feedback-text',
        kcInputGroup: 'pf-v5-c-input-group',
        kcInputGroupItemClass: 'pf-v5-c-input-group__item',
        kcInputHelperTextAfterClass:
            'pf-c-form__helper-text pf-c-form__helper-text-after',
        kcInputHelperTextBeforeClass:
            'pf-c-form__helper-text pf-c-form__helper-text-before',
        kcInputHelperTextClass:
            'pf-v5-c-helper-text pf-v5-u-display-flex pf-v5-u-justify-content-space-between',
        kcInputHelperTextItemClass: 'pf-v5-c-helper-text__item',
        kcInputHelperTextItemTextClass: 'pf-v5-c-helper-text__item-text',
        kcInputLargeClass: 'input-lg',
        kcInputRequiredClass: 'pf-v5-c-form__label-required',
        kcInputWrapperClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
        kcLabelClass: 'pf-v5-c-form__label',
        kcLabelWrapperClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
        kcListClass: 'pf-v5-c-list',
        kcLocaleClass: 'col-xs-12 col-sm-1',
        kcLocaleItemClass: 'pf-c-dropdown__menu-item',
        kcLocaleListClass: 'pf-c-dropdown__menu pf-m-align-right',
        kcLocaleMainClass: 'pf-c-dropdown',
        kcLogin: 'pf-v5-c-login',
        kcLoginClass: 'pf-v5-c-login__main',
        kcLoginContainer: 'pf-v5-c-login__container',
        kcLoginFooterBand: 'pf-v5-c-login__main-footer-band',
        kcLoginFooterBandItem: 'pf-v5-c-login__main-footer-band-item',
        kcLoginMain: 'pf-v5-c-login__main',
        kcLoginMainBody: 'pf-v5-c-login__main-body',
        kcLoginMainFooter: 'pf-v5-c-login__main-footer',
        kcLoginMainFooterBand: 'pf-v5-c-login__main-footer-band',
        kcLoginMainFooterBandItem: 'pf-v5-c-login__main-footer-band-item',
        kcLoginMainFooterHelperText: 'pf-v5-u-font-size-sm pf-v5-u-color-200',
        kcLoginMainHeader: 'pf-v5-c-login__main-header',
        kcLoginMainHeaderUtilities: 'pf-v5-c-login__main-header-utilities',
        kcLoginMainTitle: 'pf-v5-c-title pf-m-3xl',
        kcLoginOTPListClass: 'pf-v5-c-tile',
        kcLoginOTPListInputClass: 'pf-c-tile__input',
        kcLoginOTPListItemHeaderClass: 'pf-v5-c-tile__header pf-m-stacked',
        kcLoginOTPListItemIconBodyClass: 'pf-v5-c-tile__icon',
        kcLoginOTPListItemIconClass: 'fa fa-mobile',
        kcLoginOTPListItemTitleClass: 'pf-v5-c-tile__title',
        kcLoginOTPListSelectedClass: 'pf-m-selected',
        kcLogoClass: 'login-pf-brand',
        'kcLogoIdP-bitbucket': '',
        'kcLogoIdP-facebook': '',
        'kcLogoIdP-github': '',
        'kcLogoIdP-gitlab': '',
        'kcLogoIdP-google': '',
        'kcLogoIdP-instagram': '',
        'kcLogoIdP-linkedin': '',
        'kcLogoIdP-microsoft': '',
        'kcLogoIdP-openshift-v4': '',
        'kcLogoIdP-paypal': '',
        'kcLogoIdP-stackoverflow': '',
        'kcLogoIdP-twitter': '',
        kcLogoLink: 'http://www.keycloak.org',
        kcMarginTopClass: 'pf-v5-u-mt-md-on-md',
        kcPanelClass: 'pf-v5-c-panel pf-m-raised',
        kcPanelMainBodyClass: 'pf-v5-c-panel__main-body',
        kcPanelMainClass: 'pf-v5-c-panel__main',
        kcRecoveryCodesActions: 'kc-recovery-codes-actions',
        kcRecoveryCodesConfirmation: 'kc-recovery-codes-confirmation',
        kcRecoveryCodesList: 'kc-recovery-codes-list',
        kcRecoveryCodesWarning:
            'pf-v5-c-alert pf-m-warning pf-m-inline pf-v5-u-mb-md kc-recovery-codes-warning',
        kcResetFlowIcon: 'pf-icon fas fa-share-square',
        kcSelectAuthListClass: 'pf-v5-c-data-list select-auth-container',
        kcSelectAuthListItemArrowClass: 'pf-l-split__item select-auth-box-arrow',
        kcSelectAuthListItemArrowIconClass: 'fa fa-angle-right fa-lg',
        kcSelectAuthListItemBodyClass:
            'pf-v5-c-data-list__cell pf-m-no-fill pf-v5-u-pt-md pf-v5-u-pb-md',
        kcSelectAuthListItemClass: 'pf-v5-c-data-list__item-row select-auth-box-parent',
        kcSelectAuthListItemDescriptionClass:
            'pf-v5-c-data-list__cell pf-m-no-fill select-auth-box-desc',
        kcSelectAuthListItemFillClass: 'pf-v5-c-data-list__item-action',
        kcSelectAuthListItemHeadingClass:
            'pf-v5-u-font-family-heading select-auth-box-headline',
        kcSelectAuthListItemIconClass:
            'pf-v5-c-data-list__cell pf-m-icon pf-v5-u-display-flex pf-v5-u-pt-0 pf-v5-u-align-items-center  ',
        kcSelectAuthListItemIconPropertyClass: 'fa-2x select-auth-box-icon-properties',
        kcSelectAuthListItemTitle: 'select-auth-box-paragraph',
        kcSelectAuthListItemWrapperClass: 'pf-v5-c-data-list__item pf-m-clickable',
        kcSignUpClass: 'login-pf-signup',
        kcSrOnlyClass: 'sr-only',
        kcTextareaClass: 'form-control',
        kcWebAuthnBLE: 'fa fa-bluetooth-b',
        kcWebAuthnDefaultIcon: 'pf-v5-c-icon pf-m-lg',
        kcWebAuthnInternal: 'pficon pficon-key',
        kcWebAuthnKeyIcon: 'pficon pficon-key',
        kcWebAuthnNFC: 'fa fa-wifi',
        kcWebAuthnUSB: 'fa fa-usb',
        kcWebAuthnUnknownIcon: 'pficon pficon-key unknown-transport-class',
        kcBodyClass: ''
    }
});
