// global.d.ts
import { KcContext } from '../keycloak-theme/login/models/KcContext.js'; // Adjust the path as necessary

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

