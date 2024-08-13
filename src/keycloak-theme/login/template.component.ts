import { AfterViewInit, ChangeDetectorRef, Component,  OnInit,  TemplateRef} from '@angular/core';
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcClassPipe } from '../../pipes/classname.pipe';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KcContext } from 'keycloakify/login/KcContext/KcContext';
import { SanitizeHtmlPipe } from "../../pipes/sanitize-html.pipe";

import { createGetI18n, GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';
import { SharedService } from './service/shared.service';
import { Observable } from 'rxjs';
import { RedirectService } from './service/redirectHandler.service';
import { DynamicStyleLoaderService } from './service/dynamicStyleLoader.service';

export const{ getI18n } = createGetI18n({})
@Component({
  selector: 'kc-login-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterOutlet, KcClassPipe, SanitizeHtmlPipe],
  providers: [KcClassPipe]
})

export class TemplateComponent implements OnInit {
  kcContext: KcContext = window.kcContext;
  displayRequiredFields = false;
  
  headerNode?: TemplateRef<any>;
  infoNode?: TemplateRef<any>
  socialProvidersNode?: TemplateRef<any>
  locale?: {
    supported: {
        url: string;
        label: string;
        languageTag: string;
    }[];
    currentLanguageTag: string;
  };

  i18n$: Observable<GenericI18n_noJsx<string>>

  constructor(private router: Router, private cdref: ChangeDetectorRef, private sharedService: SharedService, private dynamicStyleLoader: DynamicStyleLoaderService) {

    this.i18n$ = this.sharedService.getI18n();
  }

  ngOnInit() {
    
    this.locale = this.kcContext.locale;
      this.locale = this.kcContext.locale;
      this.router.navigate(['login', { outlets: { login: this.trimPageIdSuffix(this.kcContext.pageId) }}], { skipLocationChange: true });

      setTimeout(() => {
        this.sharedService.updateI18n();
      }, 300)
    }

    trimPageIdSuffix(pageId: string): string {
      if (pageId.length > 4) {
        return pageId.substring(0, pageId.length - 4);
      }
      return pageId;
    }
    
    get publicUrl() {
      return PUBLIC_URL;
  }

  public onRouterOutletActivate(event : any) {
      this.cdref.detectChanges();
      this.headerNode = event.headerNode;
      this.infoNode = event.infoNode;
      this.socialProvidersNode = event.socialProvidersNode;
      
  }  
}