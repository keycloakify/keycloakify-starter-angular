import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {
    ApplicationConfig,
    importProvidersFrom,
    provideExperimentalZonelessChangeDetection
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";
import { THEME_ROUTES } from "./app.routes";
import { provideI18nThemeDefinedMessages } from "./login/common/providers/i18n-theme-defined-messages.provider";
import { provideKcContext } from "./login/common/providers/keycloak-context.provider";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule),
        provideExperimentalZonelessChangeDetection(),
        provideRouter(THEME_ROUTES, withPreloading(PreloadAllModules)),
        provideI18nThemeDefinedMessages(),
        provideKcContext(),
        provideHttpClient(withInterceptorsFromDi())
    ]
};
