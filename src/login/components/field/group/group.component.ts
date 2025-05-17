import { Component, forwardRef, inject, input } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../../i18n';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../../lib/kcClsx';

@Component({
    selector: 'kc-group',
    imports: [KcClassDirective],
    templateUrl: './group.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => GroupComponent)
        }
    ]
})
export class GroupComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    label = input<string | undefined>();
    error = input<string | undefined>();
    info = input<string | undefined>();
    required = input<boolean | undefined>();
    name = input<string | undefined>();
}
