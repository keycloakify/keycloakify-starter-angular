import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { DynamicStyleLoader } from "../services/dynamic-style-loader.service";

export const styleSheetResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot) => {
    const dynamicStyleLoader = inject(DynamicStyleLoader);
    const doUseDefaultCss: boolean = route.data["doUseDefaultCss"] ?? true;
    if (!doUseDefaultCss) return true;

    return dynamicStyleLoader.loadStyle();
};
