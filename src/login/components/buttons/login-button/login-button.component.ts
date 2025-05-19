import { Component, forwardRef, inject } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
import { I18n } from '../../../i18n';
import { ActionGroupComponent } from '../action-group/action-group.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'kc-login-button',
    imports: [ActionGroupComponent, ButtonComponent],
    templateUrl: './login-button.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginButtonComponent)
        }
    ]
})
export class LoginButtonComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);
}
