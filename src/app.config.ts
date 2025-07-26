import {
    provideZonelessChangeDetection,
    type ApplicationConfig, isDevMode
} from '@angular/core';
import { WELL_KNOWN_DIRECTORY_BASE_NAME } from 'keycloakify/bin/shared/constants';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { APP_BASE_HREF } from '@angular/common';

function appBaseHrefFactory(kcContext: {'x-keycloakify': {resourcesPath: string}}): string | undefined {
    if(kcContext === undefined || isDevMode() || kcContext['x-keycloakify'].resourcesPath === undefined) return;
    return `${kcContext['x-keycloakify'].resourcesPath}/${WELL_KNOWN_DIRECTORY_BASE_NAME.DIST}/`
}

export const appConfig: ApplicationConfig = {
    providers: [provideZonelessChangeDetection(),
    {provide: APP_BASE_HREF, useFactory: appBaseHrefFactory, deps: [KC_LOGIN_CONTEXT]},],
};
