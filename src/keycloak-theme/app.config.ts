import { provideHttpClient } from "@angular/common/http";
import {
    ApplicationConfig,
    importProvidersFrom,
    provideExperimentalZonelessChangeDetection
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";
import { THEME_ROUTES } from "./app.routes";
import { provideKcContext } from "./login/common/providers/keycloak-context.provider";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule),
        provideExperimentalZonelessChangeDetection(),
        provideRouter(THEME_ROUTES, withPreloading(PreloadAllModules)),
        provideKcContext(),
        provideHttpClient()
    ]
};
