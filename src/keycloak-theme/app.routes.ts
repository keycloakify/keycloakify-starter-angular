// app-routing.module.ts
import { Route } from "@angular/router";
export const THEME_ROUTES: Route[] = [
    {
        path: "login",
        loadChildren: () => import("./login/login.routes").then(m => m.LOGIN_ROUTES)
    },
    {
        path: "account",
        loadComponent: () =>
            import("./account/template/template.component").then(m => m.TemplateComponent)
    },
    {
        path: "**",
        redirectTo: "login/error"
    }
];
