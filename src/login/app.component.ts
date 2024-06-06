import {Component, OnInit} from '@angular/core';
import {PageProps} from "keycloakify/login";
import {PUBLIC_URL} from "keycloakify/PUBLIC_URL";

//It would maybe make sense to make kcContext and i18n injectable services
import {KcContext, kcContext} from "./services/kcContext";
import {I18n, useI18n} from "./services/i18n";
import {DynamicStyleLoaderService} from "./services/dynamic-style-loader.service";
import {ClassNameService} from "./services/class-name.service";

@Component({
  selector: 'kc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  protected readonly kcContext = kcContext;
  protected readonly PUBLIC_URL = PUBLIC_URL;

  // This is like adding classes to theme.properties
  // https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
  classes: PageProps<any, any>["classes"] = {
    // NOTE: The classes are defined in ./KcApp.css
    "kcHeaderWrapperClass": "my-color my-font"
  };

  constructor(private dynamicStyleLoader: DynamicStyleLoaderService, private classNameService: ClassNameService) {
  }

  ngOnInit() {
    if (this.kcContext) {
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/lib/zocial/zocial.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesPath}/css/login.css`);
    }
  }

  getClassName(classKey: string): string {
    return this.classNameService.getClassName(classKey);
  }

}





