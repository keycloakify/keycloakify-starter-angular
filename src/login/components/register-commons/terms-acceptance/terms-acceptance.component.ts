import { Component, forwardRef, inject, output } from '@angular/core';
import { KcSanitizePipe } from '@keycloakify/angular/lib/pipes/kc-sanitize';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { KcClassDirective } from '@keycloakify/angular/login/directives/kc-class';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { ClassKey } from '../../../../../lib/kcClsx';

import { I18n } from '../../../i18n';
import { KcContext } from '../../../KcContext';

@Component({
    selector: 'kc-terms-acceptance',
    imports: [KcClassDirective, KcSanitizePipe],
    templateUrl: './terms-acceptance.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => TermsAcceptanceComponent)
        }
    ]
})
export class TermsAcceptanceComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);
    kcContext = inject<Extract<KcContext, { pageId: 'register.ftl' }>>(KC_LOGIN_CONTEXT);
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    areTermsAccepted = output<boolean>();
}
