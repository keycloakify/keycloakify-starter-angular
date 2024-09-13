import { Component, TemplateRef, ViewChild } from '@angular/core';
import { KcClassPipe } from '../../common/pipes/classname.pipe';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../../common/pipes/sanitize-html.pipe';
import { I18nService } from '../../common/services/i18n.service';
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
  selector: 'kc-login-reset-password',
  standalone: true,
  imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe],
  templateUrl: './login-reset-password.component.html'
})
export class LoginResetPasswordComponent {
  kcContext = window.kcContext as KcContext.LoginResetPassword;

  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  displayInfo?: boolean;
  displayMessage: boolean = !this.kcContext.messagesPerField.existsError("username");

  constructor(public i18nService: I18nService){}
}
