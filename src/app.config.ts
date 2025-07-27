import {
    provideZonelessChangeDetection,
    type ApplicationConfig
} from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [provideZonelessChangeDetection()]
};
