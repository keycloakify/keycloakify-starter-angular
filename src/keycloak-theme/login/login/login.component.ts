import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../../pipes/classname.pipe';
import { GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { SharedService } from '../service/shared.service';
import { Observable } from 'rxjs';
import { SanitizeHtmlPipe } from "../../../pipes/sanitize-html.pipe";

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [KcClassPipe, CommonModule, SanitizeHtmlPipe],
    providers: [],
})
export class LoginComponent implements OnInit  {
  i18n$?: Observable<GenericI18n_noJsx<any>>;
  i18n?: GenericI18n_noJsx<any>;
  
  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;

  kcContext: any;
  constructor(private sharedService: SharedService){
    this.kcContext = window.kcContext;
 
  }

  ngOnInit(){
    this.i18n$ = this.sharedService.getI18n();
  }

}
