import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "kc-login-template",
    templateUrl: "./template.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class TemplateComponent {}
