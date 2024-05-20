// kc-app.component.ts
import {AfterViewInit, Component, Input, input, OnInit} from '@angular/core';
import {PageProps} from "keycloakify/login";

@Component({
  selector: 'app-kc-app',
  templateUrl: './kc-app.component.html',
})
export class KcAppComponent implements AfterViewInit {

  @Input() kcContext: any;

  pageId: any;

  // This is like adding classes to theme.properties
  // https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
  classes: PageProps<any, any>["classes"] = {
    // NOTE: The classes are defined in ./KcApp.css
    "kcHtmlClass": "my-root-class",
    "kcHeaderWrapperClass": "my-color my-font"
  };

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageId = this.kcContext.pageId;
      console.log("KcAppComponent ngAfterViewInit pageId: " + this.pageId);
    }, 50);
  }

  getClassName(classKey: string) {
  }

}
