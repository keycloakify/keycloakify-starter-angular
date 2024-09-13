import {Component, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../common/pipes/classname.pipe';
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { PasswordWrapperComponent } from '../../common/components/password-wrapper/password-wrapper.component';
import { I18nService } from '../../common/services/i18n.service';
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe, PasswordWrapperComponent],
    providers: [I18nService]
})
export class LoginComponent{
  
  
  kcContext = window.kcContext as KcContext.Login;
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  displayInfo: boolean = this.kcContext.realm.password && this.kcContext.realm?.registrationAllowed && !this.kcContext.registrationDisabled;
  displayMessage: boolean = !this.kcContext.messagesPerField.existsError("username", "password");
  isLoginButtonDisabled: boolean = false;

  constructor(public i18nService: I18nService){}

}
