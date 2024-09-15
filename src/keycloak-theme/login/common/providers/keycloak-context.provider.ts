import {
    EnvironmentProviders,
    InjectionToken,
    isDevMode,
    makeEnvironmentProviders
} from "@angular/core";
import type { LoginThemePageId } from "keycloakify/bin/shared/constants";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import { environment } from "../../../../environments/environment";
import { kcEnvDefaults, themeNames } from "../models/kc.gen";
import {
    KcContext,
    KcContextExtension,
    KcContextExtensionPerPage
} from "../models/KcContext";

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
            overrides: {}
        });
    }
    return window.kcContext as KcContext;
};

export const KC_CONTEXT = new InjectionToken<KcContext>("keycloak context");

export const provideKcContext = (): EnvironmentProviders =>
    makeEnvironmentProviders([
        { provide: KC_CONTEXT, useFactory: initializeEnvironment }
    ]);
