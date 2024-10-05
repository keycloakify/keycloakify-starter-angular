import { KcContext } from './kc.gen';

export const KcPage = (kcContext: KcContext) => {
  switch (kcContext.themeType) {
    case 'login': {
      return {
        Page: import('./login/KcPage').then((p) => p.KcPage(kcContext.pageId)),
        getI18n: import('./login/i18n').then((c) => c.getI18n),
      };
    }
    case 'account': {
      return {
        Page: import('./account/KcPage').then((p) => p.KcPage(kcContext.pageId)),
        getI18n: import('./account/i18n').then((c) => c.getI18n),
      };
    }
    default:
      throw new Error('no themeType');
  }
};
