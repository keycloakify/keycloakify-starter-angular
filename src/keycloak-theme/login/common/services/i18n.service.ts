import { inject, Injectable } from "@angular/core";
import { createGetI18n, GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { from, Observable, of } from "rxjs";
import { I18N_THEME_DEFINED_MESSAGES } from "../providers/i18n-theme-defined-messages.provider";
import { KC_CONTEXT } from "../providers/keycloak-context.provider";

import * as i18nData from "../../../assets/i18n.json";
@Injectable({ providedIn: "root" })
export class I18nService {
    private kcContext = inject(KC_CONTEXT);
    private i18nThemeDefinedMessages = inject(I18N_THEME_DEFINED_MESSAGES);
    private getI18n = createGetI18n(i18nData).getI18n;

    public get i18n$(): Observable<GenericI18n_noJsx<string>> {
        const { i18n, prI18n_currentLanguage } = this.getI18n({
            kcContext: this.kcContext
        });
        if (prI18n_currentLanguage) {
            return from(prI18n_currentLanguage as Promise<GenericI18n_noJsx<string>>);
        }
        return of(i18n as GenericI18n_noJsx<string>);
    }
}
