
import "zone.js";

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from "./keycloak-theme/app.component";
import { appConfig } from "./keycloak-theme/app.config";
import { MockDataService } from "./services/mockdata.service";
import { isDevMode } from "@angular/core";
import { environment } from "../environments/environment";

const mockDataService = new MockDataService();

(window as any).process = {
  env: { NODE_ENV: 'development', PUBLIC_URL: environment.PUBLIC_URL}
};
if(isDevMode()) {
  window.kcContext = mockDataService.getData(environment.mockPageId);
}

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
