import {
    APP_INITIALIZER,
    EnvironmentProviders,
    isDevMode,
    makeEnvironmentProviders
} from "@angular/core";
import { KcContextLike } from "keycloakify/login/i18n";
import { I18nService } from "../services/i18n.service";
import { KC_CONTEXT } from "./keycloak-context.provider";

const fetchTranslations = async (
    kcContext: KcContextLike
): Promise<Record<string, Record<string, string>>> => {
    if (!isDevMode()) {
        const translations: Record<string, Record<string, string>> = {};
        const i18nFiles: { languageTag: string; url: string; label: string }[] =
            kcContext?.locale?.supported || [];

        for (const lang of i18nFiles) {
            const module = await import(`../../../assets/i18n/${lang.languageTag}.json`);
            translations[lang.languageTag] = module.default;
        }
        return translations;
    }
    return {};
};

export const initializeThemeDefinedMessages = (
    i18nService: I18nService,
    kcContext: KcContextLike
) => {
    return async () => {
        const translations = await fetchTranslations(kcContext);
        i18nService.intializeThemeDefinedMessages(translations);
    };
};

export const provideI18nThemeDefinedMessages = (): EnvironmentProviders =>
    makeEnvironmentProviders([
        {
            provide: APP_INITIALIZER,
            useFactory: initializeThemeDefinedMessages,
            multi: true,
            deps: [I18nService, KC_CONTEXT]
        }
    ]);
