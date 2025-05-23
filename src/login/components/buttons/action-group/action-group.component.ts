import { Component, forwardRef, inject, input } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../../lib/kcClsx';
import type { I18n } from '../../../i18n';

@Component({
    selector: 'kc-action-group',
    imports: [KcClassDirective],
    templateUrl: './action-group.component.html',

    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => ActionGroupComponent)
        }
    ]
})
export class ActionGroupComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    horizontal = input<boolean>(false);
}
