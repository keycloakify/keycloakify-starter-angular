import { AfterViewInit, Component, ElementRef, forwardRef, inject, input, viewChild } from '@angular/core';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../../lib/kcClsx';
import { I18n } from '../../../i18n';
import type { KcContext } from '../../../KcContext';
import { ErrorIconComponent } from '../error-icon/error-icon.component';
import { GroupComponent } from '../group/group.component';

@Component({
    selector: 'kc-password',
    imports: [GroupComponent, KcClassDirective, ErrorIconComponent],
    templateUrl: './password.component.html',
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => PasswordComponent)
        }
    ],
    styles: [
        `
            :host {
                display: contents;
            }
        `
    ]
})
export class PasswordComponent extends ComponentReference implements AfterViewInit {
    i18n = inject<I18n>(LOGIN_I18N);
    kcContext = inject<Extract<KcContext, { pageId: 'login.ftl' }>>(KC_LOGIN_CONTEXT);

    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    name = input<string | undefined>();
    label = input<string | undefined>();
    value = input<string>('');
    required = input<boolean>(false);
    forgotPassword = input<boolean>(false);
    fieldName = input<string>(this.name() ?? '');
    error = input<string | undefined>(this.kcContext?.messagesPerField?.get(this.name() ?? ''));
    autocomplete = input<string>('off');
    autofocus = input<boolean>(false);

    passwordInput = viewChild.required<ElementRef>('passwordInput');
    passwordToggleButton = viewChild.required<ElementRef>('passwordToggleButton');

    ngAfterViewInit(): void {
        this.setupPasswordToggle();
    }

    setupPasswordToggle() {
        const toggleButton = this.passwordToggleButton().nativeElement;
        const passwordInput = this.passwordInput().nativeElement;

        toggleButton.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            const iconShow = toggleButton.getAttribute('data-icon-show');
            const iconHide = toggleButton.getAttribute('data-icon-hide');
            const labelShow = toggleButton.getAttribute('data-label-show');
            const labelHide = toggleButton.getAttribute('data-label-hide');

            const iconElement = toggleButton.querySelector('i');

            if (type === 'password') {
                iconElement.className = iconShow;
                toggleButton.setAttribute('aria-label', labelShow);
            } else {
                iconElement.className = iconHide;
                toggleButton.setAttribute('aria-label', labelHide);
            }
        });
    }
}
