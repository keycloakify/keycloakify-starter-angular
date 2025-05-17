import { Component, forwardRef, inject, input } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { I18n } from '../../../i18n';
import { ClassKey } from 'keycloakify/login';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';

@Component({
    selector: 'kc-checkbox',
    imports: [KcClassDirective],
    templateUrl: './checkbox.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => CheckboxComponent)
        }
    ]
})
export class CheckboxComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);
    name = input<string | undefined>();
    label = input<string | undefined>();
    value = input<boolean>(false);
    required = input<boolean>(false);
}
