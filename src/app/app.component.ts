import { Component } from '@angular/core';
import {kcContext} from "./keycloak-theme/kcContext";
import {KcContext} from "keycloakify/login/kcContext";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 public kcContext: any;
  constructor() {
    this.kcContext = kcContext;
  }


}




