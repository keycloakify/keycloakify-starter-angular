import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders
} from "@angular/core";

const themeDefinedMessages: Record<string, object> = {
  // write your messages
  en: {
    hello: "Hello"
  },
  de: {
    hello: "Hallo"
  }
};

export const I18N_THEME_DEFINED_MESSAGES = new InjectionToken<Record<string, object>>(
  "i18n theme defined messages"
);

export const provideI18nThemeDefinedMessages = (): EnvironmentProviders =>
  makeEnvironmentProviders([
    { provide: I18N_THEME_DEFINED_MESSAGES, useValue: themeDefinedMessages }
  ]);
