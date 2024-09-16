import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    OnInit,
    Renderer2
} from "@angular/core";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcContext } from "keycloakify/login/KcContext/KcContext";
import { KcClassPipe } from "./common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "./common/pipes/sanitize-html.pipe";
import { KC_CONTEXT } from "./common/providers/keycloak-context.provider";
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
export class TemplateComponent implements OnInit {
    kcContext: KcContext = inject(KC_CONTEXT);
    i18nService = inject(I18nService);
    renderer = inject(Renderer2);
    private kcClassPipe = inject(KcClassPipe);
    displayRequiredFields = false;
    route = inject(ActivatedRoute);

    displayInfo = input(true);
    displayMessage = input(true);

    ngOnInit() {
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

    tryAnotherWay() {
        document.forms["kc-select-try-another-way-form" as never].submit();
    }

    get publicUrl() {
        return PUBLIC_URL;
    }
}
