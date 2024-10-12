import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { bootstrapKcApplication } from './kc.gen';

// The following block can be uncommented to test a specific page with `ng serve`
// Don't forget to comment back or your bundle size will increase
/*
import { isDevMode } from '@angular/core';
import { getKcContextMock } from './login/KcContextMock';

if (isDevMode()) {
  window.kcContext = getKcContextMock({
    pageId: 'register.ftl',
    overrides: {},
  });
}
*/
(async () => {
  if (window.kcContext === undefined) {
    const { NoContextComponent } = await import('./no-context.component');

    bootstrapApplication(NoContextComponent, appConfig);

    return;
  }

  bootstrapKcApplication({
    kcContext: window.kcContext,
    bootstrapApplication: ({ KcRootComponent, kcProvider }) =>
      bootstrapApplication(KcRootComponent, {
        ...appConfig,
        providers: [...appConfig.providers, kcProvider],
      }),
  });
})();
