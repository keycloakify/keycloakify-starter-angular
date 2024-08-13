import { Injectable } from '@angular/core';
import { createGetI18n, GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
const { getI18n } = createGetI18n({
    en: {
       "hello": "Hello"
    },
    de: {
       "hello": "Hallo"
    }
});

@Injectable({ providedIn: 'root' })
export class SharedService {

    private i18nSubject: BehaviorSubject<GenericI18n_noJsx<string>>;
    public i18n$: Observable<GenericI18n_noJsx<string>>;

    constructor() {
        const i18n = getI18n({ kcContext: window.kcContext }).i18n as GenericI18n_noJsx<string>;

        this.i18nSubject = new BehaviorSubject<GenericI18n_noJsx<string>>(i18n);
        this.i18n$ = this.i18nSubject.asObservable();
    }

    public getI18n(): Observable<GenericI18n_noJsx<string>> {
        return this.i18n$;
    }

    public updateI18n(): void {
        const newI18n = getI18n({ kcContext: window.kcContext }).i18n as GenericI18n_noJsx<string>;
        this.i18nSubject.next(newI18n);
    };
    
}