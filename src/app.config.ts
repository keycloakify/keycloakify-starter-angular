import {
    type ApplicationConfig,
    provideAppInitializer,
    provideExperimentalZonelessChangeDetection
} from '@angular/core';

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

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideAppInitializer(initializeDarkMode)
    ]
};
