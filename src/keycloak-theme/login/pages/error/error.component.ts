import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, Unsubscribable } from "rxjs";
import { KcContext } from "../../common/models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { KC_CONTEXT } from "../../common/providers/keycloak-context.provider";

@Component({
    selector: "kc-error",
    standalone: true,
    imports: [KcClassPipe, AsyncPipe],
    providers: [ActivatedRoute],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./error.component.html"
})
export class ErrorComponent {
    kcContext = inject<Extract<KcContext, { pageId: "error.ftl" }>>(KC_CONTEXT);
    subscription: Unsubscribable | undefined;
    private route = inject(ActivatedRoute);
    errorMessage: Observable<string | undefined> = this.route.data.pipe(
        map(data => {
            const routerErrorMessage = data["errorMessage"];

            if (!this.kcContext?.message) {
                return routerErrorMessage || "An error occurred. Please try again later.";
            }

            if (this.kcContext?.message?.summary) {
                return this.kcContext.message.summary;
            }
            return;
        })
    );
}
