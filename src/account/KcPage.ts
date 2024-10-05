import { Type } from '@angular/core';
import { DefaultPage } from '@keycloakify/angular/account/DefaultPage';
import { ClassKey } from 'keycloakify/account';
import { KcContext } from './KcContext';

const classes = {} satisfies { [key in ClassKey]?: string };

const KcPage = async (
  pageId: KcContext['pageId'],
): Promise<{
  ComponentBootstrap: Type<unknown>;
  doMakeUserConfirmPassword: boolean;
  doUseDefaultCss: boolean;
  classes: { [key in ClassKey]?: string };
}> => {
  const doUseDefaultCss = true;
  switch (pageId) {
    default:
      return DefaultPage(pageId, doUseDefaultCss, classes);
  }
};

export { KcPage };
