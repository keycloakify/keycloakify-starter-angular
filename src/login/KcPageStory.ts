/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, inject, OnInit, Type } from '@angular/core';
import { provideKeycloakifyAngular } from '@keycloakify/angular/login/providers/keycloakify-angular';
import { TemplateComponent } from '@keycloakify/angular/login/template';
import { getKcPage } from './KcPage';
import { getI18n } from './i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { createGetKcContextMock } from 'keycloakify/login/KcContext';
import { kcEnvDefaults, themeNames } from '../kc.gen';
import type { KcContextExtension, KcContextExtensionPerPage } from './KcContext';

const kcContextExtension: KcContextExtension = {
  themeName: themeNames[0],
  properties: {
    ...kcEnvDefaults,
  },
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
  kcContextExtension,
  kcContextExtensionPerPage,
  overrides: {},
  overridesPerPage: {},
});

type StoryContextLike = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  globals: Record<string, any>;
};

export const decorators = (_: unknown, context: StoryContextLike) => ({
  applicationConfig: {
    providers: [
      provideKeycloakifyAngular({
        doUseDefaultCss: true,
        classes: {},
        kcContext: getKcContextMock({
          pageId: context.globals['pageId'],
          overrides: context.globals['overrides'],
        }),
        getI18n: getI18n,
      }),
    ],
  },
});

@Component({
  selector: 'kc-page-story',
  template: `@if (pageComponent) {
    <kc-root [page]="pageComponent"></kc-root>
  }`,
  standalone: true,
  imports: [TemplateComponent],
})
export class KcPageStory implements OnInit {
  pageComponent: Type<unknown> | undefined;
  kcContext = inject(KC_LOGIN_CONTEXT);
  ngOnInit() {
    getKcPage(this.kcContext.pageId).then((kcPage) => {
      this.pageComponent = kcPage.PageComponent;
    });
  }
}
