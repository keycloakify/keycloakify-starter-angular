import { AfterViewInit, Component, ElementRef, forwardRef, inject, input, Renderer2 } from '@angular/core';
import { KcSanitizePipe } from '@keycloakify/angular/lib/pipes/kc-sanitize';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KcClassDirective } from '../../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../../lib/kcClsx';
import { I18n } from '../../../i18n';

@Component({
    selector: 'kc-button',
    imports: [KcClassDirective, KcSanitizePipe],
    templateUrl: './button.component.html',
    styles: [
        `
            :host {
                display: contents;
            }
        `
    ],
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => ButtonComponent)
        }
    ]
})
export class ButtonComponent extends ComponentReference implements AfterViewInit {
    i18n = inject<I18n>(LOGIN_I18N);
    label = input<string>('Submit');
    id = input<string | undefined>(undefined);
    name = input<string | undefined>(undefined);
    type = input<'button' | 'submit' | 'reset'>('submit');
    disabled = input<boolean>(false);
    classList = input<ClassKey | ClassKey[] | undefined>('kcButtonClass');

    private readonly elementRef = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);

    readonly extraAttributes = input<{ [key: string]: any } | undefined>();

    private attributesApplied = false;

    ngAfterViewInit(): void {
        if (!this.attributesApplied) {
            const attributes = this.extraAttributes();
            const buttonElement = this.elementRef.nativeElement.querySelector('button');

            if (buttonElement && attributes && Object.keys(attributes).length > 0) {
                for (const key in attributes) {
                    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
                        const value = attributes[key];
                        if (value !== null && value !== undefined) {
                            this.renderer.setAttribute(buttonElement, key, String(value));
                        }
                    }
                }
                this.attributesApplied = true;
            }
        }
    }
}
