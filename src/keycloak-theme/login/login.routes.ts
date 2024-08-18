import { Route } from '@angular/router';
import { TemplateComponent } from './template.component';
import { inject } from '@angular/core';
import { I18nService } from './common/services/i18n.service';

export const LOGIN_ROUTES: Route[] = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'login',
        outlet: "login",
        resolve: {i18n: () => inject(I18nService).i18n$},
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: "register",
        outlet: "login",
        resolve: {i18n: () => inject(I18nService).i18n$},
        loadComponent: () =>
          import('./pages/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: "error",
        outlet: "login",
        resolve: {i18n: () => inject(I18nService).i18n$},
        loadComponent: () =>
          import('./pages/error/error.component').then((m) => m.ErrorComponent),
      },
      {
        path: "login-reset-password",
        outlet: "login",
        resolve: {i18n: () => inject(I18nService).i18n$},
        loadComponent: () =>
          import('./pages/login-reset-password/login-reset-password.component').then((m) => m.LoginResetPasswordComponent),
      },
      // Add more routes to ftls here
      {
        path: "**",
        redirectTo: "error",
      }
    ]
  }
];