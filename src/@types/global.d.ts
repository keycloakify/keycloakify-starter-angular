// global.d.ts
import type { KcContext } from "../login/common/models/KcContext"; // Adjust the path as necessary

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}
