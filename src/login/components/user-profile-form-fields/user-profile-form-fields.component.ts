import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, forwardRef, inject, TemplateRef } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { FieldErrorsComponent } from '../field-errors/field-errors.component';
import { GroupLabelComponent } from '../group-label/group-label.component';
import { InputFieldByTypeComponent } from '../input-field-by-type/input-field-by-type.component';
import { KcClassDirective } from '@keycloakify/angular/login/directives/kc-class';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';
import { type FormAction, UserProfileFormService } from '@keycloakify/angular/login/services/user-profile-form';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { DO_MAKE_USER_CONFIRM_PASSWORD } from '@keycloakify/angular/login/tokens/make-user-confirm-password';
import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
import { map } from 'rxjs';

@Component({
    styles: [
        `
            :host {
                display: contents;
            }
        `
    ],
    imports: [KcClassDirective, FieldErrorsComponent, InputFieldByTypeComponent, GroupLabelComponent, NgTemplateOutlet, AsyncPipe],
    selector: 'kc-user-profile-form-fields',
    templateUrl: 'user-profile-form-fields.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        UserProfileFormService,
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => UserProfileFormFieldsComponent)
        }
    ]
})
export class UserProfileFormFieldsComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);
    kcContext = inject<KcContext>(KC_LOGIN_CONTEXT);
    #userProfileFormService = inject(UserProfileFormService);
    doMakeUserConfirmPassword = inject(DO_MAKE_USER_CONFIRM_PASSWORD);
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    formState$ = this.#userProfileFormService.formState$;
    xAttributeLocale$ = this.formState$.pipe(map(s => s.formFieldStates.find(x => x.attribute.name === 'locale')));

    @ContentChild('beforeField') beforeField: TemplateRef<unknown> | undefined;
    @ContentChild('afterField') afterField: TemplateRef<unknown> | undefined;

    onDispatch(formAction: FormAction) {
        this.#userProfileFormService.dispatchFormAction(formAction);
    }
}
