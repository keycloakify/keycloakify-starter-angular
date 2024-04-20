import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {KcAppComponent} from "../keycloak-theme/login/kc-app/kc-app.component";
import {LoginComponent} from "../keycloak-theme/login/login/login.component";
import {TemplateComponent} from "../keycloak-theme/login/Template";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    KcAppComponent,
    LoginComponent,
    TemplateComponent
    // Declare other Angular components for different pages
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
