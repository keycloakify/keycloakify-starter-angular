import { HttpClient } from "@angular/common/http";
import {
    APP_INITIALIZER,
    EnvironmentProviders,
    makeEnvironmentProviders
} from "@angular/core";
import { forkJoin, lastValueFrom, map } from "rxjs";
import { I18nService } from "../services/i18n.service";

export const initializeThemeDefinedMessages = (
    http: HttpClient,
    i18nService: I18nService
) => {
    return async () => {
        const languages = ["en", "de"];
        const translationObjects: Record<string, Record<string, string>>[] =
            await lastValueFrom(
                forkJoin(
                    languages.map(lang =>
                        http
                            .get(`static/media/i18n/${lang}.json`, {
                                responseType: "json"
                            })
                            .pipe(
                                map(translation => ({
                                    [lang]: translation as Record<string, string>
                                }))
                            )
                    )
                )
            );
        const themeDefinedMessages = translationObjects.reduce<
            Record<string, Record<string, string>>
        >((acc, curr) => {
            const lang = Object.keys(curr)[0];
            acc[lang] = curr[lang];
            return acc;
        }, {});
        i18nService.intializeThemeDefinedMessages(themeDefinedMessages);
    };
};

export const provideI18nThemeDefinedMessages = (): EnvironmentProviders =>
    makeEnvironmentProviders([
        {
            provide: APP_INITIALIZER,
            useFactory: initializeThemeDefinedMessages,
            multi: true,
            deps: [HttpClient, I18nService]
        }
    ]);
