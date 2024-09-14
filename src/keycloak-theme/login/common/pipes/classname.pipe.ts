import { Pipe, PipeTransform } from "@angular/core";
import { ClassKey, getKcClsx } from "keycloakify/login/lib/kcClsx";
import * as classData from "../../../assets/theme.properties.json";
import { CxArg } from "keycloakify/tools/clsx_withTransform";

@Pipe({
    name: "kcClass",
    standalone: true
})
export class KcClassPipe implements PipeTransform {
    private kcClsx?: (...args: CxArg<ClassKey>[]) => string;

    constructor() {
        this.loadClasses();
    }

    private loadClasses(): void {
        const params = {
            doUseDefaultCss: true,
            classes: classData
        };
        this.kcClsx = getKcClsx(params).kcClsx;
    }

    transform(value: CxArg<ClassKey>): string {
        return this.kcClsx ? this.kcClsx(value) : "";
    }
}
