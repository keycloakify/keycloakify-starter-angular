import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "kc-terms",
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./terms.component.html"
})
export class TermsComponent {}
