// global.d.ts
import { KcContext } from './keycloak-theme/login/kcContext'; // Adjust the path as necessary

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

// This is necessary to make TypeScript recognize this file as a module
export {};
