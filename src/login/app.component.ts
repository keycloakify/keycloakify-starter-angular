import {Component, OnInit} from '@angular/core';
import {PageProps} from "keycloakify/login";
import {PUBLIC_URL} from "keycloakify/PUBLIC_URL";

//Would it make sense to make kcContext and i18n injectable services?
import {KcContext, kcContext} from "./service/kcContext";
import {I18n, useI18n} from "./service/i18n";
import {DynamicStyleLoaderService} from "./service/dynamic-style-loader.service";
import {ClassNameService} from "./service/class-name.service";


@Component({
  selector: 'kc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[style.--background-image-url]': 'backgroundImageUrl'
  }
})

export class AppComponent implements OnInit {
  kcContext: any;

  protected readonly PUBLIC_URL = PUBLIC_URL;
  backgroundImageUrl = "url" + PUBLIC_URL + "static/media/background.svg)";

  // This is like adding classes to theme.properties
  // https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
  classes: PageProps<any, any>["classes"] = {
    // NOTE: The classes are defined in ./KcApp.css
    "kcHtmlClass": "my-root-class",
    "kcHeaderWrapperClass": "my-color my-font"
  };

  constructor(private dynamicStyleLoader: DynamicStyleLoaderService, private classNameService: ClassNameService) {
  }

  ngOnInit() {
    this.kcContext = kcContext;
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





