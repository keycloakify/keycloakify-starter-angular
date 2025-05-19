import { ChangeDetectionStrategy, Component, computed, forwardRef, inject, input, output } from '@angular/core';
import { ToArrayPipe } from '@keycloakify/angular/lib/pipes/to-array';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { FormAction, FormFieldError } from '@keycloakify/angular/login/services/user-profile-form';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { type Attribute } from 'keycloakify/login/KcContext';
import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
import { PasswordWrapperComponent } from '../../password-wrapper/password-wrapper.component';
import { InputTagSelectsComponent } from '../input-tag-selects/input-tag-selects.component';
import { InputTagComponent } from '../input-tag/input-tag.component';
import { SelectTagComponent } from '../select-tag/select-tag.component';
import { TextareaTagComponent } from '../textarea-tag/textarea-tag.component';

@Component({
    styles: [
        `
            :host {
                display: contents;
            }
        `
    ],
    imports: [ToArrayPipe, TextareaTagComponent, SelectTagComponent, InputTagSelectsComponent, InputTagComponent, PasswordWrapperComponent],
    selector: 'kc-input-field-by-type',
    templateUrl: 'input-field-by-type.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => InputFieldByTypeComponent)
        }
    ]
})
export class InputFieldByTypeComponent extends ComponentReference {
    attribute = input<Attribute>();
    valueOrValues = input<string | string[]>();
    displayableErrors = input<FormFieldError[]>();
    dispatchFormAction = output<FormAction>();
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    attributePassword = computed<Attribute>(() => {
        const attribute: Attribute = this.attribute() ?? ({} as Attribute);
        return {
            ...attribute,
            annotations: { ...(attribute.annotations ?? {}), inputType: 'password' }
        };
    });
}
