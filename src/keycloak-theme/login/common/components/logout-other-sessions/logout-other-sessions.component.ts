import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import type { I18n } from "../../../i18n";
import { KcClassPipe } from "../../pipes/classname.pipe";

@Component({
    selector: "kc-logout-other-sessions",
    standalone: true,
    imports: [KcClassPipe],
    providers: [KcClassPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./logout-other-sessions.component.html"
})
export class LogoutOtherSessionsComponent {
    i18n = input<I18n>();
}
