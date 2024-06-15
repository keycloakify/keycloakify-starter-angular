import { Injectable } from '@angular/core';
import { DeepPartial } from 'keycloakify/tools/DeepPartial';
  
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./kcContext";
import { themeNames, kcEnvDefaults } from '../../kc.gen';
import { KcContext } from './kcContext';

@Injectable({
  providedIn: 'root',
})
export class KcContextService {
  private kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
      ...kcEnvDefaults,
    },
  };

  private kcContextExtensionPerPage: KcContextExtensionPerPage = {};

  private getKcContextMock = createGetKcContextMock({
    kcContextExtension: this.kcContextExtension,
    kcContextExtensionPerPage: this.kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {},
  }).getKcContextMock;

  getKcContext<PageId extends KcContext['pageId']>(pageId: PageId, overrides?: DeepPartial<Extract<KcContext, { pageId: PageId }>>): KcContext {
    return this.getKcContextMock({ pageId, overrides });
  }
}
