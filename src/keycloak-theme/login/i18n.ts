import { createGetI18n } from "keycloakify/login/i18n/i18n";

export const { getI18n } = createGetI18n({
    en: {
        hello: "Hello"
    },
    de: {
        hello: "Hallo"
    }
});

export type I18n = ReturnType<typeof getI18n>["i18n"];
