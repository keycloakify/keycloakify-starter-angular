
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading
} from '@angular/router';

import { THEME_ROUTES } from './app.routes';
import { environmentProvider } from './environment.provider';
export const appConfig: ApplicationConfig = {
  providers: [     
    environmentProvider,
    importProvidersFrom(BrowserModule),
    provideRouter(
      THEME_ROUTES, 
      withPreloading(PreloadAllModules)
    ),
    
  ]
};