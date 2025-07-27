import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/login';
import { UserProfileFormFieldsComponent } from '@keycloakify/angular/login/components/user-profile-form-fields';
import { TemplateComponent } from '@keycloakify/angular/login/template';
import type { ClassKey } from 'keycloakify/login';
import type { KcContext } from './KcContext';

export const classes = {} satisfies Partial<Record<ClassKey, string>>;
export const doUseDefaultCss = false;
export const doMakeUserConfirmPassword = true;

export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
    switch (pageId) {
        case 'login.ftl':
            return {
                PageComponent: (await import('./pages/login/login.component')).LoginComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes,
            };

        default:
            return {
                PageComponent: await getDefaultPageComponent(pageId),
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
            };
    }
}
