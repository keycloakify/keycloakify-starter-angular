import { Component, TemplateRef, ViewChild } from '@angular/core';
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { PasswordWrapperComponent } from "../../common/components/password-wrapper/password-wrapper.component";
import { I18nService } from '../../common/services/i18n.service';
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { CommonModule } from '@angular/common';
import { LogoutOtherSessionsComponent } from "../../common/components/logout-other-sessions/logout-other-sessions.component";
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
  selector: 'kc-login-update-password',
  standalone: true,
  imports: [KcClassPipe, PasswordWrapperComponent, SanitizeHtmlPipe, CommonModule, LogoutOtherSessionsComponent],
  templateUrl: './login-update-password.component.html'
})
export class LoginUpdatePasswordComponent {
  kcContext = window.kcContext as KcContext.LoginUpdatePassword;

  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  displayMessage: boolean = !this.kcContext.messagesPerField.existsError("password", "password-confirm");

  constructor(public i18nService: I18nService){}
}
