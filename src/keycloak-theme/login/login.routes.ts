import { Route } from '@angular/router';
import { TemplateComponent } from './template/template.component';

export const LOGIN_ROUTES: Route[] = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
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
    ]
  }
];