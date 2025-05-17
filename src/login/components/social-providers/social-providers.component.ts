import { ChangeDetectionStrategy, Component, forwardRef, inject, input } from '@angular/core';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import type { I18n } from '../../i18n';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import type { ClassKey } from '../../../../lib/kcClsx';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';

@Component({
    selector: 'kc-social-providers',
    templateUrl: './social-providers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KcClassDirective],
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => SocialProvidersComponent)
        }
    ]
})
export class SocialProvidersComponent extends ComponentReference {
    i18n = inject<I18n>(LOGIN_I18N);
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);
    social: any = input.required<any>();

    constructor() {
        super();
    }
}
