import { Injectable } from "@angular/core";
import { GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { BehaviorSubject, filter, interval, of, Subject, switchMap, takeUntil, tap } from "rxjs";
import { getI18n } from "../../pages/login-reset-password/login-reset-password.component";

@Injectable({ providedIn: 'root' })
export class I18nService {

  private readonly checkInterval = 100;
  private readonly i18nSubject = new BehaviorSubject<GenericI18n_noJsx<any>>({} as GenericI18n_noJsx<any>);
  private destroy$ = new Subject<void>();

  constructor() {
    this.initializeI18n();
  }

  private initializeI18n(): void {
    this.i18nSubject.next(getI18n({ kcContext: window.kcContext }).i18n as GenericI18n_noJsx<any>);
  
    interval(this.checkInterval)
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          const i18n = getI18n({ kcContext: window.kcContext }).i18n as GenericI18n_noJsx<any>;
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
    const newI18n = getI18n({ kcContext: window.kcContext }).i18n as GenericI18n_noJsx<any>;
    this.i18nSubject.next(newI18n);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}