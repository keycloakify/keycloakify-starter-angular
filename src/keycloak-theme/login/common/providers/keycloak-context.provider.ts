import {
    EnvironmentProviders,
    InjectionToken,
    isDevMode,
    makeEnvironmentProviders
} from "@angular/core";
import type { LoginThemePageId } from "keycloakify/bin/shared/constants";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import { environment } from "../../../../environments/environment";
import { kcEnvDefaults, themeNames } from "../../models/kc.gen";
import {
    KcContext,
    KcContextExtension,
    KcContextExtensionPerPage
} from "../../models/KcContext";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};

const kcContextExtensionPerPage: KcContextExtensionPerPage =
    {} as KcContextExtensionPerPage;

const initializeEnvironment = (): KcContext => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).process = {
        env: { NODE_ENV: "production" }
    };
    if (isDevMode()) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).process = {
            env: { NODE_ENV: "development", PUBLIC_URL: environment.PUBLIC_URL }
        };

        const { getKcContextMock } = createGetKcContextMock({
            kcContextExtension,
            kcContextExtensionPerPage,
            overrides: {},
            overridesPerPage: {}
        });

        window.kcContext = getKcContextMock({
            pageId: environment.mockPageId as LoginThemePageId,
            overrides: {
                social: {
                    displayInfo: true,
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Microsoft",
                            iconClasses: "fa fa-windows"
                        },
                        {
                            loginUrl: "facebook",
                            alias: "facebook",
                            providerId: "facebook",
                            displayName: "Facebook",
                            iconClasses: "fa fa-facebook"
                        },
                        {
                            loginUrl: "instagram",
                            alias: "instagram",
                            providerId: "instagram",
                            displayName: "Instagram",
                            iconClasses: "fa fa-instagram"
                        },
                        {
                            loginUrl: "twitter",
                            alias: "twitter",
                            providerId: "twitter",
                            displayName: "Twitter",
                            iconClasses: "fa fa-twitter"
                        },
                        {
                            loginUrl: "linkedin",
                            alias: "linkedin",
                            providerId: "linkedin",
                            displayName: "LinkedIn",
                            iconClasses: "fa fa-linkedin"
                        },
                        {
                            loginUrl: "stackoverflow",
                            alias: "stackoverflow",
                            providerId: "stackoverflow",
                            displayName: "Stackoverflow",
                            iconClasses: "fa fa-stack-overflow"
                        },
                        {
                            loginUrl: "github",
                            alias: "github",
                            providerId: "github",
                            displayName: "Github",
                            iconClasses: "fa fa-github"
                        },
                        {
                            loginUrl: "gitlab",
                            alias: "gitlab",
                            providerId: "gitlab",
                            displayName: "Gitlab",
                            iconClasses: "fa fa-gitlab"
                        },
                        {
                            loginUrl: "bitbucket",
                            alias: "bitbucket",
                            providerId: "bitbucket",
                            displayName: "Bitbucket",
                            iconClasses: "fa fa-bitbucket"
                        },
                        {
                            loginUrl: "paypal",
                            alias: "paypal",
                            providerId: "paypal",
                            displayName: "PayPal",
                            iconClasses: "fa fa-paypal"
                        },
                        {
                            loginUrl: "openshift",
                            alias: "openshift",
                            providerId: "openshift",
                            displayName: "OpenShift",
                            iconClasses: "fa fa-cloud"
                        }
                    ]
                }
            }
        });
    }
    return window.kcContext as KcContext;
};

export const KC_CONTEXT = new InjectionToken<KcContext>("keycloak context");

export const provideKcContext = (): EnvironmentProviders =>
    makeEnvironmentProviders([
        { provide: KC_CONTEXT, useFactory: initializeEnvironment }
    ]);
