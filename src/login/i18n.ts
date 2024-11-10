import { i18nBuilder } from '@keycloakify/angular/login';
import type { ThemeName } from '../kc.gen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { getI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>() // See: https://docs.keycloakify.dev/theme-variants#different-text-for-each-of-your-theme-variants
  .withExtraLanguages({}) // See: https://docs.keycloakify.dev/i18n/adding-support-for-extra-languages
  .withCustomTranslations({}) // See: https://docs.keycloakify.dev/i18n/adding-new-translation-messages-or-changing-the-default-ones
  .build();
type I18n = typeof ofTypeI18n;
export { getI18n, type I18n };
