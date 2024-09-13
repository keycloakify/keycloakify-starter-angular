import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { KcContext } from "keycloakify/login/KcContext";
import { KC_CONTEXT } from "./keycloak-context.provider";

@Component({
  selector: "kc-app-root",
  template: "<router-outlet></router-outlet>",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule]
})
export class AppComponent implements OnInit {
  kcContext: KcContext = inject(KC_CONTEXT);
  private router = inject(Router);

  ngOnInit() {
    this.navigateToThemeType();
  }

  private trimPageIdSuffix(pageId: string): string {
    if (pageId.length > 4) {
      return pageId.substring(0, pageId.length - 4);
    }
    return pageId;
  }
  navigateToThemeType() {
    const themeType: string = this.kcContext.themeType || "";
    switch (themeType) {
      case "login":
        this.router.navigate(["login", this.trimPageIdSuffix(this.kcContext.pageId)], {
          skipLocationChange: true
        });
        break;
      case "account":
        this.router.navigate(["account"], { skipLocationChange: true });
        break;
      default:
        this.router.navigate(["error"], { skipLocationChange: true });
        break;
    }
  }
}
