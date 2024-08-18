import { Component, TemplateRef, ViewChild } from '@angular/core';
import { createGetI18n, GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { Observable } from 'rxjs';
import { KcClassPipe } from '../../common/pipes/classname.pipe';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../../common/pipes/sanitize-html.pipe';
import { ActivatedRoute } from '@angular/router';
export const{ getI18n } = createGetI18n({})

@Component({
  selector: 'kc-login-reset-password',
  standalone: true,
  imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe],
  templateUrl: './login-reset-password.component.html'
})
export class LoginResetPasswordComponent {
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  displayInfo?: boolean = true;

  kcContext: any = window.kcContext;
  i18n: GenericI18n_noJsx<any> | null = null;
  constructor( public router: ActivatedRoute){}

  ngOnInit(){
    this.router.data.subscribe(data => {
      this.i18n = data['i18n'];
    });
  }
}
