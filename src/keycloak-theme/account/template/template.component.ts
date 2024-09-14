import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "kc-login-template",
    templateUrl: "./template.component.html",
    styleUrls: ["./template.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class TemplateComponent {}
