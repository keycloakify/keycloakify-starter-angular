import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { KcClassPipe } from "../../pipes/classname.pipe";

@Component({
    selector: "kc-logout-other-sessions",
    standalone: true,
    imports: [KcClassPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./logout-other-sessions.component.html"
})
export class LogoutOtherSessionsComponent {
    i18n = input<GenericI18n_noJsx<string>>();
}
