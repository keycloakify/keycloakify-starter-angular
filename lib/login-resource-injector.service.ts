import { inject, Injectable } from '@angular/core';
import { type Script } from '@keycloakify/angular/lib/models/script';
import { ResourceInjectorService } from '@keycloakify/angular/lib/services/resource-injector';
import type { KcContext } from '@keycloakify/angular/login/KcContext';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { catchError, forkJoin, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginResourceInjectorService {
    private kcContext: KcContext = inject<KcContext>(KC_LOGIN_CONTEXT);
    private resourceInjectorService: ResourceInjectorService = inject(
        ResourceInjectorService
    );

    injectResource(doUseDefaultCss = true) {
        if (!doUseDefaultCss) {
            this.injectScripts();
            return of(true);
        }
        //reversed order of stylesheets to accomodate prepending to head
        const stylesheets = [
            `${this.kcContext.url.resourcesPath}/css/styles.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly-v5/patternfly/patternfly-addons.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly-v5/patternfly/patternfly.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`
        ];

        return forkJoin(
            stylesheets.map(url => this.resourceInjectorService.createLink(url))
        ).pipe(
            switchMap(() => {
                this.injectScripts();
                return of(true);
            }),
            catchError(error => {
                console.error('Error loading styles:', error);
                return of(false);
            })
        );
    }

    insertAdditionalScripts(scripts: Script[]) {
        scripts.map(script => this.resourceInjectorService.createScript(script));
    }

    private injectScripts() {
        const scripts: Script[] = [
            {
                type: 'module',
                id: `${this.kcContext.url.resourcesPath}/js/menu-button-links.js`,
                src: `${this.kcContext.url.resourcesPath}/js/menu-button-links.js`
            },
            ...(this.kcContext.scripts ?? []).map(script => ({
                type: 'text/javascript',
                src: script,
                id: script
            })),
            {
                type: 'module',
                id: 'authenticationSession',
                textContent: `
        import { checkCookiesAndSetTimer } from "${this.kcContext.url.resourcesPath}/js/authChecker.js";

        checkCookiesAndSetTimer(
            "${this.kcContext.url.ssoLoginInOtherTabsUrl}"
        );`
            }
        ];
        this.insertAdditionalScripts(scripts);
    }
}
