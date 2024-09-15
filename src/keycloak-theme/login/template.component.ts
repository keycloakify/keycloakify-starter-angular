import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    isDevMode,
    OnDestroy,
    OnInit,
    Renderer2
} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcContext } from "keycloakify/login/KcContext/KcContext";
import {
    catchError,
    forkJoin,
    NEVER,
    Observable,
    of,
    switchMap,
    Unsubscribable
} from "rxjs";
import { KcClassPipe } from "./common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "./common/pipes/sanitize-html.pipe";
import { KC_CONTEXT } from "./common/providers/keycloak-context.provider";
import { DynamicStyleLoader } from "./common/services/dynamic-style-loader.service";
import { I18nService } from "./common/services/i18n.service";

@Component({
    selector: "kc-login-template",
    templateUrl: "./template.component.html",
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        AsyncPipe,
        KcClassPipe,
        SanitizeHtmlPipe,
        NgTemplateOutlet
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [KcClassPipe]
})
export class TemplateComponent implements OnInit, OnDestroy {
    stylesheetsLoaded$: Observable<boolean> | undefined;
    kcContext: KcContext = inject(KC_CONTEXT);
    i18nService = inject(I18nService);
    renderer = inject(Renderer2);
    private kcClassPipe = inject(KcClassPipe);
    private dynamicStyleLoader = inject(DynamicStyleLoader);
    displayRequiredFields = false;

    displayInfo = input(true);
    displayMessage = input(true);

    subscription: Unsubscribable | undefined;

    ngOnInit() {
        this.loadStyles();
        this.applyKcIndexClasses();
    }

    private applyKcIndexClasses() {
        const kcBodyClass = this.kcClassPipe.transform("kcBodyClass");
        const kcHtmlClass = this.kcClassPipe.transform("kcHtmlClass");

        const kcBodyClasses = kcBodyClass.split(/\s+/);
        const kcHtmlClasses = kcHtmlClass.split(/\s+/);

        kcBodyClasses.forEach(klass => {
            this.renderer.addClass(document.body, klass);
        });
        kcHtmlClasses.forEach(klass => {
            this.renderer.addClass(document.documentElement, klass);
        });
    }

    private loadStyles(): void {
        if (isDevMode()) {
            this.stylesheetsLoaded$ = of(true);
            return;
        }

        const stylesheets = [
            `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
            `${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`,
            `${this.kcContext.url.resourcesPath}/css/login.css`
        ];

        this.stylesheetsLoaded$ = forkJoin(
            stylesheets.map(url => this.dynamicStyleLoader.loadStyle(url))
        ).pipe(
            switchMap(() => of(true)),
            catchError(error => {
                console.error("Error loading styles:", error);
                return NEVER;
            })
        );
    }

    tryAnotherWay() {
        document.forms["kc-select-try-another-way-form" as never].submit();
    }

    get publicUrl() {
        return PUBLIC_URL;
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
