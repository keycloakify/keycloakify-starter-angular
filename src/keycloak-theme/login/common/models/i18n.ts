import { createUseI18n } from "keycloakify/login/i18n/";

export const { useI18n, ofTypeI18n } = createUseI18n({});

export type I18n = typeof ofTypeI18n;
