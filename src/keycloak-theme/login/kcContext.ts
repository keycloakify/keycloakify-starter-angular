import { Injectable } from '@angular/core';
import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension =
  | { pageId: "login.ftl"; extraThemeProperties: { foo: string; }; }
  | { pageId: "my-extra-page-1.ftl"; }
  | { pageId: "my-extra-page-2.ftl"; someCustomValue: string; }
  | { pageId: "register.ftl"; authorizedMailDomains: string[]; };

@Injectable({
  providedIn: 'root',
})
export class KcContext {
  getKcContext = createGetKcContext<KcContextExtension>({
    mockData: [
      {
        pageId: "login.ftl",
        locale: {
          currentLanguageTag: "fr",
        },
      },
      {
        pageId: "my-extra-page-2.ftl",
        someCustomValue: "foo bar baz"
      },
      {
        pageId: "register-user-profile.ftl",
        locale: {
          currentLanguageTag: "fr"
        },
        profile: {
          attributes: [
            {
              validators: {
                pattern: {
                  pattern: "^[a-zA-Z0-9]+$",
                  "ignore.empty.value": true,
                  "error-message": "${alphanumericalCharsOnly}",
                },
              },
              value: undefined,
              name: "username"
            },
            {
              validators: {
                options: {
                  options: ["male", "female", "non-binary", "transgender", "intersex", "non_communicated"]
                }
              },
              displayName: "${gender}",
              annotations: {},
              required: true,
              groupAnnotations: {},
              readOnly: false,
              name: "gender"
            }
          ]
        }
      },
      {
        pageId: "register.ftl",
        authorizedMailDomains: [
          "example.com",
          "another-example.com",
          "*.yet-another-example.com",
          "*.example.com",
          "hello-world.com"
        ],
        messagesPerField: {
          printIfExists: <T>(fieldName: string, className: T) => { console.log({ fieldName }); return fieldName === "email" ? className : undefined; },
          existsError: (fieldName: string) => fieldName === "email",
          get: (fieldName: string) => `Fake error for ${fieldName}`,
          exists: (fieldName: string) => fieldName === "email"
        },
      }
    ]
  });

}
