import { Component } from '@angular/core';
import { KcContext } from "../keycloak-theme/login/kcContext";
import { KcAppComponent } from "../keycloak-theme/login/kc-app/kc-app.component";
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, kcContext: KcContext) {
    if (kcContext !== undefined) {
      this.router.navigate(['/login']);
    }
  }


}
