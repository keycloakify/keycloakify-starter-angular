import { AsyncPipe, NgClass } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { KC_CONTEXT } from "../../../keycloak-context.provider";
import { KcContext } from "../../../models/KcContext";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { I18nService } from "../../common/services/i18n.service";
import { TemplateComponent } from "../../template.component";

@Component({
  selector: "kc-login",
  templateUrl: "./login.component.html",
  standalone: true,
  imports: [
    KcClassPipe,
    AsyncPipe,
    SanitizeHtmlPipe,
    PasswordWrapperComponent,
    NgClass,
    TemplateComponent
  ]
})
export class LoginComponent {
  kcContext: KcContext<"login.ftl"> = inject<KcContext<"login.ftl">>(KC_CONTEXT);
  isLoginButtonDisabled = signal(false);
  i18nService = inject(I18nService);
  displayInfo: boolean =
    !!this.kcContext?.realm?.password &&
    !!this.kcContext?.realm?.registrationAllowed &&
    !this.kcContext?.registrationDisabled;
  displayMessage: boolean = !this.kcContext?.messagesPerField?.existsError(
    "username",
    "password"
  );
}
