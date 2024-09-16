import { inject, Injectable } from "@angular/core";
import {
    createGetI18n,
    GenericI18n_noJsx,
    KcContextLike
} from "keycloakify/login/i18n/i18n";
import { from, NEVER, Observable, of } from "rxjs";
import { KC_CONTEXT } from "../providers/keycloak-context.provider";

@Injectable({ providedIn: "root" })
export class I18nService {
    private kcContext = inject(KC_CONTEXT);
    private getI18n:
        | ((params: { kcContext: KcContextLike }) => {
              i18n: GenericI18n_noJsx<string>;
              prI18n_currentLanguage: Promise<GenericI18n_noJsx<string>> | undefined;
          })
        | undefined;

    public get i18n$(): Observable<GenericI18n_noJsx<string>> {
        if (this.getI18n) {
            const { i18n, prI18n_currentLanguage } = this.getI18n({
                kcContext: this.kcContext
            });
            if (prI18n_currentLanguage) {
                return from(prI18n_currentLanguage as Promise<GenericI18n_noJsx<string>>);
            }
            return of(i18n as GenericI18n_noJsx<string>);
        }
        return NEVER;
    }

    intializeThemeDefinedMessages(
        i18nThemeDefinedMessages: Record<string, Record<string, string>>
    ) {
        this.getI18n = createGetI18n(i18nThemeDefinedMessages).getI18n;
    }
}
