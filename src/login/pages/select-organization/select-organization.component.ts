import { ChangeDetectionStrategy, Component, forwardRef, inject, input, type TemplateRef, viewChild } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { ClassKey } from '../../../../lib/kcClsx';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { KcClassDirective } from '../../../../lib/kc-class.directive';

@Component({
    imports: [KcClassDirective],
    selector: 'kc-select-authenticator',
    templateUrl: 'select-organization.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => SelectOrganizationComponent)
        }
    ]
})
export class SelectOrganizationComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'select-organization.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage = true;

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');
    protected readonly input = input;
    protected readonly document = document;
}
