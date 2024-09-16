import { Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClassKey, getKcClsx } from "keycloakify/login/lib/kcClsx";
import { CxArg } from "keycloakify/tools/clsx_withTransform";
import * as classData from "../../../assets/theme.properties.json";

@Pipe({
    name: "kcClass",
    standalone: true
})
export class KcClassPipe implements PipeTransform {
    private kcClsx?: (...args: CxArg<ClassKey>[]) => string;

    constructor(private route: ActivatedRoute) {
        const doUseDefaultCss: boolean =
            this.route.snapshot.data["doUseDefaultCss"] ?? true;
        this.loadClasses(doUseDefaultCss);
    }

    private loadClasses(doUseDefaultCss = true): void {
        const params = {
            doUseDefaultCss,
            classes: classData
        };
        this.kcClsx = getKcClsx(params).kcClsx;
    }

    transform(value: CxArg<ClassKey>): string {
        return this.kcClsx ? this.kcClsx(value) : "";
    }
}
