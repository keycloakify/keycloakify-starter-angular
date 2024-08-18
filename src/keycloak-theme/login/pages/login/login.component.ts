import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../common/pipes/classname.pipe';
import { SanitizeHtmlPipe } from "../../common/pipes/sanitize-html.pipe";
import { PasswordWrapperComponent } from '../../common/components/password-wrapper/password-wrapper.component';
import { ActivatedRoute} from '@angular/router';
import { GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe, PasswordWrapperComponent]
})
export class LoginComponent implements OnInit  {
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  @ViewChild('displayInfo') displayInfo?: boolean;

  kcContext: any = window.kcContext;
  i18n: GenericI18n_noJsx<any> | null = null;
  constructor( public router: ActivatedRoute){}

  ngOnInit(){
    this.router.data.subscribe(data => {
      this.i18n = data['i18n'];
    });
    this.displayInfo = this.kcContext.realm.password && this.kcContext.realm?.registrationAllowed && !this.kcContext.registrationDisabled;
  }
}
