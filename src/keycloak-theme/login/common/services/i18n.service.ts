import { inject, Injectable, OnDestroy } from "@angular/core";
import { createGetI18n, GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { BehaviorSubject, from, Observable, Subject, takeUntil } from "rxjs";
import { KC_CONTEXT } from "../../../keycloak-context.provider";
import { I18N_THEME_DEFINED_MESSAGES } from "../../../i18n-theme-defined-messages.provider";

@Injectable({ providedIn: "root" })
export class I18nService implements OnDestroy {
    private readonly i18nSubject: BehaviorSubject<GenericI18n_noJsx<string>>;
    private destroy$ = new Subject<void>();
    private kcContext = inject(KC_CONTEXT);
    private i18nThemeDefinedMessages = inject(I18N_THEME_DEFINED_MESSAGES);

    readonly i18n$: Observable<GenericI18n_noJsx<string>>;

    constructor() {
        const { getI18n } = createGetI18n(this.i18nThemeDefinedMessages);
        const { i18n, prI18n_currentLanguage } = getI18n({ kcContext: this.kcContext });
        this.i18nSubject = new BehaviorSubject(i18n as GenericI18n_noJsx<string>);
        this.i18n$ = this.i18nSubject.asObservable();
        if (prI18n_currentLanguage) {
            from(prI18n_currentLanguage)
                .pipe(takeUntil(this.destroy$))
                .subscribe(prI18n =>
                    this.i18nSubject.next(prI18n as GenericI18n_noJsx<string>)
                );
        }
    }

    public get i18n() {
        return this.i18nSubject.value;
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
