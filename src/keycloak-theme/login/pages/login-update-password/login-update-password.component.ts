import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { LogoutOtherSessionsComponent } from "../../common/components/logout-other-sessions/logout-other-sessions.component";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { KcContext } from "../../common/models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { KC_CONTEXT } from "../../common/providers/keycloak-context.provider";
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
    providers: [KcClassPipe],
    templateUrl: "./login-update-password.component.html"
})
export class LoginUpdatePasswordComponent {
    kcContext =
        inject<Extract<KcContext, { pageId: "login-update-password.ftl" }>>(KC_CONTEXT);
    i18nService: I18nService = inject(I18nService);
    displayInfo = false;
    displayMessage: boolean = !this.kcContext?.messagesPerField?.existsError("username");
}
