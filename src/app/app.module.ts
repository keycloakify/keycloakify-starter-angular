import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {KcAppComponent} from "./keycloak-theme/kc-app/kc-app.component";
import {KcContext} from "keycloakify/login/kcContext";
import {APP_BASE_HREF} from "@angular/common";
import { AppComponent } from './app.component';
import {LoginComponent} from "./keycloak-theme/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    KcAppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
