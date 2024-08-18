import { Component, TemplateRef, ViewChild } from '@angular/core';
import { createGetI18n, GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { Observable } from 'rxjs';
import { KcClassPipe } from '../../common/pipes/classname.pipe';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../../common/pipes/sanitize-html.pipe';
export const{ getI18n } = createGetI18n({})

@Component({
  selector: 'kc-login-reset-password',
  standalone: true,
  imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe],
  templateUrl: './login-reset-password.component.html'
})
export class LoginResetPasswordComponent {
  i18n$?: Observable<GenericI18n_noJsx<any>>;
  i18n?: GenericI18n_noJsx<any>;
  
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  @ViewChild('displayInfo') displayInfo?: boolean;

  kcContext: any = window.kcContext;
  constructor(){}

  ngOnInit(){
    this.displayInfo = this.kcContext.realm.password && this.kcContext.realm?.registrationAllowed && !this.kcContext.registrationDisabled;
  }
}
