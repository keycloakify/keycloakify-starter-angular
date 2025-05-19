import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/login';
import type { ClassKey } from 'keycloakify/login';
import type { KcContext } from './KcContext';
import { UserProfileFormFieldsComponent } from './components/user-profile-commons/user-profile-form-fields/user-profile-form-fields.component';
import { TemplateComponent } from './template/template.component';

const classes = {} satisfies Partial<Record<ClassKey, string>>;
const doUseDefaultCss = false;
const doMakeUserConfirmPassword = true;

export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
    switch (pageId) {
        case 'login.ftl':
            return {
                PageComponent: (await import('./pages/login/login.component'))
                    .LoginComponent,
                TemplateComponent,
                UserProfileFormFieldsComponent,
                doMakeUserConfirmPassword,
                doUseDefaultCss,
                classes
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
