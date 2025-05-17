import { Component, computed, forwardRef, inject, input } from '@angular/core';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { I18n } from '../../../i18n';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ClassKey } from '../../../../../lib/kcClsx';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { GroupComponent } from '../group/group.component';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ErrorIconComponent } from '../error-icon/error-icon.component';

@Component({
    selector: 'kc-input',
    imports: [GroupComponent, KcClassDirective, ErrorIconComponent],
    templateUrl: './input.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => InputComponent)
        }
    ]
})
export class InputComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    name = input<string | undefined>();
    label = input<string | undefined>();
    value = input<string>('');
    required = input<boolean>(false);
    fieldName = computed(() => this.name);
    error = input<string | undefined>();
    autocomplete = input<string>('off');
    autofocus = input<boolean>(false);
}
