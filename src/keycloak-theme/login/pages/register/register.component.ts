import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { KcContext } from "../../../models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { I18nService } from "../../common/services/i18n.service";
import { KC_CONTEXT } from "../../../keycloak-context.provider";

@Component({
  selector: "kc-register",
  standalone: true,
  templateUrl: "./register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KcClassPipe, AsyncPipe]
})
export class RegisterComponent {
  kcContext: KcContext<"register.ftl"> = inject<KcContext<"register.ftl">>(KC_CONTEXT);
  i18nService = inject(I18nService);
}
