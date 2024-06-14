import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './login/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import "zone.js";
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
  .catch(err => console.error(err));
