// src/app/keycloak-theme/environment.provider.ts
import { APP_INITIALIZER, Provider } from '@angular/core';
import { isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { createGetKcContextMock } from 'keycloakify/login/KcContext';
import { KcContextExtension, KcContextExtensionPerPage } from './login/KcContext';
import { themeNames, kcEnvDefaults } from '../kc.gen';
import type { LoginThemePageId } from 'keycloakify/bin/shared/constants';
import { createGetI18n } from 'keycloakify/login/i18n/i18n';

const kcContextExtension: KcContextExtension = {
  themeName: themeNames[0],
  properties: {
    ...kcEnvDefaults,
  },
};

const kcContextExtensionPerPage: KcContextExtensionPerPage = {};
function initializeEnvironment(): () => void {
  return () => {
    (window as any).process = {
      env: { NODE_ENV: 'production' },
    };

    if (isDevMode()) {
      (window as any).process = {
        env: { NODE_ENV: 'development', PUBLIC_URL: environment.PUBLIC_URL },
      };

      const { getKcContextMock } = createGetKcContextMock({
        kcContextExtension,
        kcContextExtensionPerPage,
        overrides: {},
        overridesPerPage: {},
      });

      (window as any).kcContext = getKcContextMock({
        pageId: environment.mockPageId as LoginThemePageId,
        overrides: {},
      });
    }

  };
}

export const kcContextMockProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeEnvironment,
  multi: true,
};
