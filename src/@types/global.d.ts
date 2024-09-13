// global.d.ts
import { KcContext } from '../keycloak-theme/models/KcContext.js'; // Adjust the path as necessary

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

