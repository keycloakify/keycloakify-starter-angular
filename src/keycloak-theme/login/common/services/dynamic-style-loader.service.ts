import {
    inject,
    Injectable,
    isDevMode,
    Renderer2,
    RendererFactory2
} from "@angular/core";
import { KcContext } from "keycloakify/login/KcContext";
import { catchError, forkJoin, Observable, of, switchMap } from "rxjs";
import { KC_CONTEXT } from "../providers/keycloak-context.provider";

@Injectable({
    providedIn: "root"
})
export class DynamicStyleLoader {
    private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
    kcContext: KcContext = inject(KC_CONTEXT);
    loadStyle() {
        let stylesheets = [
            `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`,
            `${this.kcContext.url.resourcesPath}/css/login.css`
        ];
        if (isDevMode()) {
            stylesheets = stylesheets.map(s => `/static/media${s}`);
        }

        return forkJoin(stylesheets.map(url => this.createLink(url))).pipe(
            switchMap(() => of(true)),
            catchError(error => {
                console.error("Error loading styles:", error);
                return of(false);
            })
        );
    }
    private createLink(url: string): Observable<void> {
        return new Observable<void>(observer => {
            // check if the style is already injected
            if (Array.from(document.styleSheets).some(s => s.href?.includes(url))) {
                observer.next();
                observer.complete();
                console.debug(`stylesheet: ${url} already loaded`);
                return;
            }
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;

            link.onload = () => {
                observer.next();
                observer.complete();
            };

            link.onerror = () => {
                observer.error(new Error(`Failed to load stylesheet: ${url}`));
            };

            this.renderer.appendChild(document.head, link);
        });
    }
}
