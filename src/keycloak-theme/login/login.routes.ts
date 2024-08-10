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
          import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: "register",
        outlet: "login",
        loadComponent: () =>
          import('./register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: "error",
        outlet: "login",
        loadComponent: () =>
          import('./error/error.component').then((m) => m.ErrorComponent),
      },
      // Add more routes to ftls here
      {
        path: "**",
        redirectTo: "error",
      }
    ]
  }
];