import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { KC_CONTEXT } from "../../../keycloak-context.provider";
import { KcContext } from "../../models/KcContext";
import { LogoutOtherSessionsComponent } from "../../common/components/logout-other-sessions/logout-other-sessions.component";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { I18nService } from "../../common/services/i18n.service";

@Component({
    selector: "kc-login-update-password",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        KcClassPipe,
        PasswordWrapperComponent,
        SanitizeHtmlPipe,
        CommonModule,
        LogoutOtherSessionsComponent
    ],
    templateUrl: "./login-update-password.component.html"
})
export class LoginUpdatePasswordComponent {
    kcContext =
        inject<Extract<KcContext, { pageId: "login-update-password.ftl" }>>(KC_CONTEXT);
    i18nService: I18nService = inject(I18nService);
    displayInfo = false;
    displayMessage: boolean = !this.kcContext?.messagesPerField?.existsError("username");
}
