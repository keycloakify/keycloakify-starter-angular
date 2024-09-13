import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./keycloak-theme/app.component";
import { appConfig } from "./keycloak-theme/app.config";
import { environment } from "./environments/environment";

/**
 * Prevent app bootstrap if no kcContext
 * in dev mode we provide a context mock
 */

if (!environment.production || (typeof window !== 'undefined' && window.kcContext)) {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
}
