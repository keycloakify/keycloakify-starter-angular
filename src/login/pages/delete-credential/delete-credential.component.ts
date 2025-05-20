import { ChangeDetectionStrategy, Component, forwardRef, inject, type TemplateRef, viewChild } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../lib/kcClsx';
import { ActionGroupComponent } from '../../components/buttons/action-group/action-group.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    imports: [KcClassDirective, ButtonComponent, ActionGroupComponent],
    selector: 'kc-delete-credential',
    templateUrl: 'delete-credential.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => DeleteCredentialComponent)
        }
    ]
})
export class DeleteCredentialComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'delete-credential.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage = false;

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');
}
