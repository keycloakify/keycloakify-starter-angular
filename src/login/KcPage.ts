import { Type } from '@angular/core';
import { DefaultPage } from '@keycloakify/angular/login/DefaultPage';
import { ClassKey } from 'keycloakify/login';
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
  const doMakeUserConfirmPassword = true;
  switch (pageId) {
    default:
      return DefaultPage(pageId, doMakeUserConfirmPassword, doUseDefaultCss, classes);
  }
};

export { KcPage };

