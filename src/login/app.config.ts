import { APP_BASE_HREF } from '@angular/common';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(BrowserModule),
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
};