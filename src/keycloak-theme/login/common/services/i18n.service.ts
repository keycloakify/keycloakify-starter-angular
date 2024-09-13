import { inject, Injectable, OnDestroy } from "@angular/core";
import { createGetI18n, GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { BehaviorSubject, filter, interval, of, Subject, switchMap, takeUntil } from "rxjs";
import { KC_CONTEXT } from "../../../keycloak-context.provider";

export const{ getI18n } = createGetI18n({})
@Injectable({ providedIn: 'root' })
export class I18nService implements OnDestroy {

  private readonly checkInterval = 100;
  private readonly i18nSubject = new BehaviorSubject<GenericI18n_noJsx<string>>({} as GenericI18n_noJsx<string>);
  private destroy$ = new Subject<void>();
  private kcContext = inject(KC_CONTEXT)

  constructor() {
    this.initializeI18n();
  }

  private initializeI18n(): void {
    this.i18nSubject.next(getI18n({ kcContext: this.kcContext }).i18n as GenericI18n_noJsx<string>);
  
    interval(this.checkInterval)
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          const i18n = getI18n({ kcContext: this.kcContext }).i18n as GenericI18n_noJsx<string>;
          if (i18n.isFetchingTranslations === false) {
            this.i18nSubject.next(i18n);
          }
          return of();
        })
      )
      .subscribe();
  }

  get i18n$() {
    return this.i18nSubject.asObservable().pipe(
      filter(i18n => i18n?.isFetchingTranslations === false)
    );
  }

  public updateI18n(): void {
    const newI18n = getI18n({ kcContext: this.kcContext }).i18n as GenericI18n_noJsx<string>;
    this.i18nSubject.next(newI18n);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}