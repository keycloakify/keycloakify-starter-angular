import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../../pipes/classname.pipe';
import { GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { SharedService } from '../service/shared.service';
import { Observable } from 'rxjs';
import { SanitizeHtmlPipe } from "../../../pipes/sanitize-html.pipe";
import { KcContext } from '../KcContext';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe]
})
export class LoginComponent implements OnInit  {
  i18n$?: Observable<GenericI18n_noJsx<any>>;
  i18n?: GenericI18n_noJsx<any>;
  
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  @ViewChild('displayInfo') displayInfo?: boolean;

  kcContext: any = window.kcContext;
  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.i18n$ = this.sharedService.getI18n();
    this.displayInfo = this.kcContext.realm.password && this.kcContext.realm?.registrationAllowed && !this.kcContext.registrationDisabled;
  }

}
