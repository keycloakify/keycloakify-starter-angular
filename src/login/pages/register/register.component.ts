import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, input, signal, type TemplateRef, Type, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { KcSanitizePipe } from '@keycloakify/angular/lib/pipes/kc-sanitize';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { KcClassDirective } from '@keycloakify/angular/login/directives/kc-class';
import { UserProfileFormService } from '@keycloakify/angular/login/services/user-profile-form';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { map } from 'rxjs';
import { TermsAcceptanceComponent } from '../../components/register-commons/terms-acceptance/terms-acceptance.component';

import { UserProfileFormFieldsComponent } from '@keycloakify/angular/login/components/user-profile-form-fields';
import { ClassKey } from '../../../../lib/kcClsx';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    selector: 'kc-register',
    templateUrl: 'register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KcClassDirective, KcSanitizePipe, NgComponentOutlet, TermsAcceptanceComponent],
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => RegisterComponent)
        }
    ]
})
export class RegisterComponent extends ComponentReference {
    #userProfileFormService = inject(UserProfileFormService);
    kcContext = inject<Extract<KcContext, { pageId: 'register.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage: boolean = this.kcContext?.messagesPerField?.existsError('global');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');

    isFormSubmittable = toSignal(this.#userProfileFormService.formState$.pipe(map(s => s.isFormSubmittable)), { initialValue: false });
    userProfileFormFields = input<Type<UserProfileFormFieldsComponent>>();
    areTermsAccepted = signal(false);

    onCallback() {
        (document.getElementById('kc-register-form') as HTMLFormElement).submit();
    }
}
