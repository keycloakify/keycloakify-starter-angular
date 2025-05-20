import type { ExtendKcContext } from 'keycloakify/login';
import type { KcEnvName, ThemeName } from '../kc.gen';

export type KcContextExtension = {
    themeName: ThemeName;
    properties: Record<KcEnvName, string> & {};
};

export type KcContextExtensionPerPage = {
    // Here you can declare additional properties on the KcContext
    // See: https://docs.keycloakify.dev/features/styling-a-custom-page-not-included-in-base-keycloak

    'link-idp-action.ftl': {
        idpDisplayName: string;
    };
};

export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
