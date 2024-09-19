import { inject, Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { getI18n, type I18n } from "../../i18n";
import { KC_CONTEXT } from "../providers/keycloak-context.provider";

@Injectable({ providedIn: "root" })
export class I18nService {
    private kcContext = inject(KC_CONTEXT);

    public get i18n$(): Observable<I18n> {
        const { i18n, prI18n_currentLanguage } = getI18n({
            kcContext: this.kcContext
        });
        if (prI18n_currentLanguage) {
            return from(prI18n_currentLanguage);
        }
        return of(i18n);
    }
}
