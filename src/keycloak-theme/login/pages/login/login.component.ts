import { AsyncPipe, NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { KcContext } from "../../common/models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { KC_CONTEXT } from "../../common/providers/keycloak-context.provider";
import { I18nService } from "../../common/services/i18n.service";
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
    ],
    providers: [KcClassPipe]
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
