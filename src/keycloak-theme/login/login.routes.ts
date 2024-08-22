
import { Route } from '@angular/router';
import { TemplateComponent } from './template.component';





export const LOGIN_ROUTES: Route[] = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'login',
        outlet: "login",
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: "register",
        outlet: "login",
        loadComponent: () =>
          import('./pages/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: "error",
        outlet: "login",
        loadComponent: () =>
          import('./pages/error/error.component').then((m) => m.ErrorComponent),
      },
      {
        path: "login-reset-password",
        outlet: "login",
        loadComponent: () =>
          import('./pages/login-reset-password/login-reset-password.component').then((m) => m.LoginResetPasswordComponent),
      },
      {
        path:"login-update-password",
        outlet: "login",
        loadComponent: () =>
          import('./pages/login-update-password/login-update-password.component').then((m) => m.LoginUpdatePasswordComponent),
      },
      {
        path: "**",
        redirectTo: "error",
      }
    ]
  }
];