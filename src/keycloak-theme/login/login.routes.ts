
import { Route } from '@angular/router';
import { TemplateComponent } from './template.component';





export const LOGIN_ROUTES: Route[] = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: "register",
        loadComponent: () =>
          import('./pages/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: "error",
        loadComponent: () =>
          import('./pages/error/error.component').then((m) => m.ErrorComponent),
      },
      {
        path: "login-reset-password",
        loadComponent: () =>
          import('./pages/login-reset-password/login-reset-password.component').then((m) => m.LoginResetPasswordComponent),
      },
      {
        path:"login-update-password",
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