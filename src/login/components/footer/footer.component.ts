import { Component, forwardRef, inject } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../i18n';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ClassKey } from '../../../../lib/kcClsx';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';

@Component({
    selector: 'kc-footer',
    imports: [],
    templateUrl: './footer.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => FooterComponent)
        }
    ]
})
export class FooterComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);
}
