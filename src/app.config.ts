import {
    provideExperimentalZonelessChangeDetection,
    type ApplicationConfig
} from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [provideExperimentalZonelessChangeDetection()]
};
