import { Injectable } from '@angular/core';
import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension =
  | { pageId: "login.ftl"; }

@Injectable({
  providedIn: 'root',
})
export class KcContext {
  getKcContext = createGetKcContext<KcContextExtension>({
    mockData: [
      {
        pageId: "login.ftl",
        locale: {
          currentLanguageTag: "de",
        },
      },

    ]
  });

}
