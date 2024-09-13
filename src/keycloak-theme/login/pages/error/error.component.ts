import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, Unsubscribable } from "rxjs";
import { KC_CONTEXT } from "../../../keycloak-context.provider";
import { KcContext } from "../../../models/KcContext";
import { KcClassPipe } from "../../common/pipes/classname.pipe";

@Component({
  selector: "kc-error",
  standalone: true,
  imports: [KcClassPipe, AsyncPipe],
  providers: [ActivatedRoute],
  templateUrl: "./error.component.html"
})
export class ErrorComponent {
  kcContext: KcContext<"error.ftl"> = inject<KcContext<"error.ftl">>(KC_CONTEXT);
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
