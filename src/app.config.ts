import {
    type ApplicationConfig,
    provideExperimentalZonelessChangeDetection
} from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [provideExperimentalZonelessChangeDetection()]
};
