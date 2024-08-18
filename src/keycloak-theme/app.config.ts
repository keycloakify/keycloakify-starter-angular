
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading
} from '@angular/router';

import { THEME_ROUTES } from './app.routes';
import { kcContextMockProvider } from './login/common/kc-context-mock.provider';
export const appConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(BrowserModule),
    provideRouter(
      THEME_ROUTES, 
      withPreloading(PreloadAllModules)
    ),
    kcContextMockProvider
  ]
};