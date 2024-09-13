import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { KcContext } from "../../models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { I18nService } from "../../common/services/i18n.service";
import { TemplateComponent } from "../../template.component";
import { KC_CONTEXT } from "../../../keycloak-context.provider";

@Component({
  selector: "kc-login-reset-password",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KcClassPipe, AsyncPipe, SanitizeHtmlPipe, TemplateComponent],
  templateUrl: "./login-reset-password.component.html"
})
export class LoginResetPasswordComponent {
  kcContext: KcContext<"login-reset-password.ftl"> = inject<KcContext<"login-reset-password.ftl">>(KC_CONTEXT);
  i18nService: I18nService = inject(I18nService);
  displayInfo = false;
  displayMessage: boolean = !this.kcContext?.messagesPerField?.existsError("username");
}
