
import { ApplicationConfig, importProvidersFrom, ɵprovideZonelessChangeDetection as provideExperimentalZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading
} from '@angular/router';

import { THEME_ROUTES } from './app.routes';
import { kcContextMockProvider } from './login/common/kc-context-mock.provider';
import { I18nService } from './login/common/services/i18n.service';
import { KcClassPipe } from './login/common/pipes/classname.pipe';
export const appConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(BrowserModule),
    provideRouter(
      THEME_ROUTES, 
      withPreloading(PreloadAllModules)
    ),
    {provide: 'I18nService', useValue: I18nService},
    kcContextMockProvider
  ]
};