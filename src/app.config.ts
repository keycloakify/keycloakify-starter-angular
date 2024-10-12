import { type ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection()],
};
