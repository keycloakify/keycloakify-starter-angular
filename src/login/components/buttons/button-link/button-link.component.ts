import { Component, forwardRef, inject, input } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../../i18n';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../../lib/kcClsx';

@Component({
    selector: 'kc-button-link',
    standalone: true,
    imports: [KcClassDirective],
    templateUrl: './button-link.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => ButtonLinkComponent)
        }
    ]
})
export class ButtonLinkComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    href = input.required<string>();
    label = input<string>('Link');
    id = input<string>('undefined');
    class = input<ClassKey>('kcButtonSecondaryClass');
}
