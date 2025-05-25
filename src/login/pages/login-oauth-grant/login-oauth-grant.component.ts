import { ChangeDetectionStrategy, Component, forwardRef, inject, type TemplateRef, viewChild } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { ActionGroupComponent } from '../../components/buttons/action-group/action-group.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    imports: [KcClassDirective, ActionGroupComponent, ButtonComponent],
    selector: 'kc-login-oauth-grant',
    templateUrl: 'login-oauth-grant.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginOauthGrantComponent)
        }
    ]
})
export class LoginOauthGrantComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login-oauth-grant.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    documentTitle: string | undefined;
    bodyClassName = 'oauth';

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage = false;

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');
}
