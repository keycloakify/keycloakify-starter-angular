import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { KcContext } from "../../common/models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { KC_CONTEXT } from "../../common/providers/keycloak-context.provider";
import { I18nService } from "../../common/services/i18n.service";

@Component({
    selector: "kc-register",
    standalone: true,
    templateUrl: "./register.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KcClassPipe, AsyncPipe],
    providers: [KcClassPipe]
})
export class RegisterComponent {
    kcContext = inject<Extract<KcContext, { pageId: "register.ftl" }>>(KC_CONTEXT);
    i18nService = inject(I18nService);
}
