/* eslint-disable @angular-eslint/component-class-suffix */
import {Component, inject, OnInit, provideAppInitializer, Type} from '@angular/core';
import {provideKeycloakifyAngular} from '@keycloakify/angular/login/providers/keycloakify-angular';
import {TemplateComponent} from './template/template.component';
import {KC_LOGIN_CONTEXT} from '@keycloakify/angular/login/tokens/kc-context';
import {createGetKcContextMock} from 'keycloakify/login/KcContext';
import {kcEnvDefaults, themeNames} from '../kc.gen';
import type {KcContextExtension, KcContextExtensionPerPage} from './KcContext';
import {getKcPage} from './KcPage';
import {getI18n} from './i18n';

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {}
});

type StoryContextLike = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globals: Record<string, any>;
};

const DARK_MODE_CLASS = 'pf-v5-theme-dark';

function initializeDarkMode(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', event => updateDarkMode(event.matches));

    function updateDarkMode(isEnabled: boolean): void {
        const { classList } = document.documentElement;
        isEnabled ? classList.add(DARK_MODE_CLASS) : classList.remove(DARK_MODE_CLASS);
    }
}

export const decorators = (_: unknown, context: StoryContextLike) => ({
    applicationConfig: {
        providers: [
            provideAppInitializer(initializeDarkMode),
            provideKeycloakifyAngular({
                doUseDefaultCss: true,
                classes: {},
                kcContext: getKcContextMock({
                    pageId: context.globals['pageId'],
                    overrides: context.globals['kcContext']
                }),
                getI18n: getI18n
            })
        ]
    }
});

@Component({
    selector: 'kc-page-story',
    template: `@if (pageComponent) {
        <kc-root [page]="pageComponent"></kc-root>
    }`,
    standalone: true,
    imports: [TemplateComponent]
})
export class KcPageStory implements OnInit {
    pageComponent: Type<unknown> | undefined;
    kcContext = inject(KC_LOGIN_CONTEXT);

    ngOnInit() {
        getKcPage(this.kcContext.pageId).then(kcPage => {
            this.pageComponent = kcPage.PageComponent;
        });
    }
}
