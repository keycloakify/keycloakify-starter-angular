import { Route } from "@angular/router";
import { styleSheetResolver } from "./common/resolvers/stylesheet.resolver";

export const LOGIN_ROUTES: Route[] = [
    {
        path: "",
        children: [
            {
                path: "login",
                loadComponent: () =>
                    import("./pages/login/login.component").then(m => m.LoginComponent),
                data: { doUseDefaultCss: true },
                resolve: { styleSheetResolver }
            },
            {
                path: "register",
                loadComponent: () =>
                    import("./pages/register/register.component").then(
                        m => m.RegisterComponent
                    ),
                data: { doUseDefaultCss: true },
                resolve: { styleSheetResolver }
            },
            {
                path: "error",
                loadComponent: () =>
                    import("./pages/error/error.component").then(m => m.ErrorComponent),
                data: { doUseDefaultCss: true },
                resolve: { styleSheetResolver }
            },
            {
                path: "login-reset-password",
                loadComponent: () =>
                    import(
                        "./pages/login-reset-password/login-reset-password.component"
                    ).then(m => m.LoginResetPasswordComponent),
                data: { doUseDefaultCss: true },
                resolve: { styleSheetResolver }
            },
            {
                path: "login-update-password",
                loadComponent: () =>
                    import(
                        "./pages/login-update-password/login-update-password.component"
                    ).then(m => m.LoginUpdatePasswordComponent),
                data: { doUseDefaultCss: true },
                resolve: { styleSheetResolver }
            },
            {
                path: "**",
                redirectTo: "error"
            }
        ]
    }
];
