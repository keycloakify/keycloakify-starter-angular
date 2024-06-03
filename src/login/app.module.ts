import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {APP_BASE_HREF} from "@angular/common";
import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
