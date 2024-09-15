import { AsyncPipe, NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { KC_CONTEXT } from "../../../keycloak-context.provider";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { I18nService } from "../../common/services/i18n.service";
import { KcContext } from "../../models/KcContext";
import { TemplateComponent } from "../../template.component";

@Component({
    selector: "kc-login",
    templateUrl: "./login.component.html",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    kcContext = inject<Extract<KcContext, { pageId: "login.ftl" }>>(KC_CONTEXT);
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
