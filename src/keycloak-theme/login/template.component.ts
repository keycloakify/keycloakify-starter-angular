import { AsyncPipe } from "@angular/common";
import { Component, inject, input, isDevMode, OnDestroy, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcContext } from "keycloakify/login/KcContext/KcContext";
import { forkJoin, Unsubscribable } from "rxjs";
import { KC_CONTEXT } from "../keycloak-context.provider";
import { KcClassPipe } from "./common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "./common/pipes/sanitize-html.pipe";
import { DynamicStyleLoader } from "./common/services/dynamicStyleLoader.service";
import { I18nService } from "./common/services/i18n.service";

@Component({
  selector: "kc-login-template",
  templateUrl: "./template.component.html",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, KcClassPipe, SanitizeHtmlPipe],
  providers: [KcClassPipe]
})
export class TemplateComponent implements OnInit, OnDestroy {
  stylesheetsLoaded?: boolean = false;
  kcContext: KcContext = inject(KC_CONTEXT);
  i18nService = inject(I18nService);
  private kcClassPipe = inject(KcClassPipe);
  private dynamicStyleLoader = inject(DynamicStyleLoader);
  displayRequiredFields = false;

  displayInfo = input(true);
  displayMessage = input(true);

  subscription: Unsubscribable | undefined;

  ngOnInit() {
    this.loadStyles();
    this.applyKcIndexClasses();
  }

  private applyKcIndexClasses() {
    // TODO: maybe is better to load classes in app.component ?
    const kcBodyClass = this.kcClassPipe.transform("kcBodyClass");
    const kcHtmlClass = this.kcClassPipe.transform("kcHtmlClass");

    const kcBodyClasses = kcBodyClass.split(" ");
    const kcHtmlClasses = kcHtmlClass.split(" ");

    document.body.classList.add(...kcBodyClasses);
    document.documentElement.classList.add(...kcHtmlClasses);
  }

  private loadStyles(): void {
    // TODO: maybe is better to load stylesheets in app.component ?
    if (isDevMode()) {
      this.stylesheetsLoaded = true;
      return;
    }
    
    const stylesheets = [
      `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`,
      `${this.kcContext.url.resourcesPath}/css/login.css`
    ];

    this.subscription = forkJoin(stylesheets.map(url => this.dynamicStyleLoader.loadStyle(url))).subscribe({
      next: () => {
        this.stylesheetsLoaded = true;
      },
      error: error => {
        console.error("Error loading styles:", error);
      }
    });
    
  }

  tryAnotherWay() {
    document.forms["kc-select-try-another-way-form" as never].submit();
  }

  get publicUrl() {
    return PUBLIC_URL;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
