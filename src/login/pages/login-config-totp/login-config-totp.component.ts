import { ChangeDetectionStrategy, Component, forwardRef, inject, type TemplateRef, viewChild } from '@angular/core';
import { KcSanitizePipe } from '@keycloakify/angular/lib/pipes/kc-sanitize';
import { USE_DEFAULT_CSS } from '@keycloakify/angular/lib/tokens/use-default-css';
import { ComponentReference } from '@keycloakify/angular/login/classes/component-reference';
import { LOGIN_CLASSES } from '@keycloakify/angular/login/tokens/classes';
import { LOGIN_I18N } from '@keycloakify/angular/login/tokens/i18n';
import { KC_LOGIN_CONTEXT } from '@keycloakify/angular/login/tokens/kc-context';
import { KcClassDirective } from '../../../../lib/kc-class.directive';
import { ClassKey } from '../../../../lib/kcClsx';
import { ErrorIconComponent } from '../../components/field/error-icon/error-icon.component';
import { LogoutOtherSessionsComponent } from '../../components/logout-other-sessions/logout-other-sessions.component';
import type { I18n } from '../../i18n';
import type { KcContext } from '../../KcContext';

@Component({
    imports: [KcClassDirective, KcSanitizePipe, LogoutOtherSessionsComponent, ErrorIconComponent],
    selector: 'kc-login-config-totp',
    templateUrl: 'login-config-totp.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ComponentReference,
            useExisting: forwardRef(() => LoginConfigTotpComponent)
        }
    ]
})
export class LoginConfigTotpComponent extends ComponentReference {
    kcContext = inject<Extract<KcContext, { pageId: 'login-config-totp.ftl' }>>(KC_LOGIN_CONTEXT);
    i18n = inject<I18n>(LOGIN_I18N);
    override doUseDefaultCss = inject<boolean>(USE_DEFAULT_CSS);
    override classes = inject<Partial<Record<ClassKey, string>>>(LOGIN_CLASSES);

    documentTitle: string | undefined;
    bodyClassName: string | undefined;

    displayRequiredFields = false;
    displayInfo = false;
    displayMessage = this.kcContext.messagesPerField.existsError('totp', 'userLabel');

    headerNode = viewChild<TemplateRef<HTMLElement>>('headerNode');
    infoNode = viewChild<TemplateRef<HTMLElement>>('infoNode');
    socialProvidersNode = viewChild<TemplateRef<HTMLElement>>('socialProvidersNode');
}
