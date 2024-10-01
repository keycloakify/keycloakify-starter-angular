import '@angular/compiler';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideKeycloakifyAngularAccount } from '@keycloakify/angular/account/providers/keycloakify-angular.providers';
import { UserProfileFormFieldsComponent } from '@keycloakify/angular/login/components/user-profile-form-fields/user-profile-form-fields.component';
import { provideKeycloakifyAngularLogin } from '@keycloakify/angular/login/providers/keycloakify-angular.providers';
import { KcPage } from './kc.gen-angular';

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
import { getKcContextMock } from './login/KcContextMock';

window.kcContext = getKcContextMock({
  pageId: 'login.ftl',
  overrides: {},
});

if (!window.kcContext) {
  const NoContextComponentPromise = import('./no-context.component').then((c) => c.NoContextComponent);
  NoContextComponentPromise.then((NoContextComponent) =>
    bootstrapApplication(NoContextComponent, { providers: [provideExperimentalZonelessChangeDetection()] }),
  );
} else {
  const { Page, getI18n } = KcPage(window.kcContext)!;
  Promise.all([Page, getI18n]).then(
    ([{ ComponentBootstrap, doMakeUserConfirmPassword, doUseDefaultCss, classes }, getI18n]) => {
      bootstrapApplication(ComponentBootstrap, {
        providers: [
          provideExperimentalZonelessChangeDetection(),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window.kcContext as any).themeType === 'account'
            ? provideKeycloakifyAngularAccount({
                classes,
                doUseDefaultCss,
                getI18n: getI18n,
              })
            : provideKeycloakifyAngularLogin({
                classes,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                getI18n: getI18n,
              }),
        ],
      }).then((appRef) => {
        appRef.components.forEach((componentRef) => {
          if ('userProfileFormFields' in componentRef.instance) {
            componentRef.setInput('userProfileFormFields', UserProfileFormFieldsComponent);
          }
        });
      });
    },
  );
}
