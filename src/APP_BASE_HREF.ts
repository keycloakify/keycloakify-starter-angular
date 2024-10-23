/* eslint-disable @typescript-eslint/no-explicit-any */
import { isDevMode } from '@angular/core';
import { WELL_KNOWN_DIRECTORY_BASE_NAME } from 'keycloakify/bin/shared/constants';

// TODO: This should be exported from `@keycloakify/angular/APP_BASE_HREF`
// It should be an injection token, not a string.
export const APP_BASE_HREF = (() => {
    const kcContext: { 'x-keycloakify': { resourcesPath: string } } | undefined = (
        window as any
    ).kcContext;

    if (kcContext === undefined || isDevMode()) {
        // Here I return "/" but it should actually depend of the configuration `<base href="/" />`
        return '/';
    }

    return `${kcContext['x-keycloakify'].resourcesPath}/${WELL_KNOWN_DIRECTORY_BASE_NAME.DIST}/`;
})();
