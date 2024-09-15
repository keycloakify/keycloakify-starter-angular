// global.d.ts
import type { KcContext } from "../keycloak-theme/login/common/models/KcContext"; // Adjust the path as necessary

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}
