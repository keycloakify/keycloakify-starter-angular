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
  
  displayInfo?: boolean = false;
  headerNode?: TemplateRef<any>;
  infoNode?: TemplateRef<any>
  socialProvidersNode?: TemplateRef<any>

  stylesheetsLoaded = false;
  locale?: {
    supported: {
        url: string;
        label: string;
        languageTag: string;
    }[];
    currentLanguageTag: string;
  };

  i18n$?: Observable<GenericI18n_noJsx<string>>

  constructor(private cdref: ChangeDetectorRef, private sharedService: SharedService, private kcClassPipe: KcClassPipe, private dynamicStyleLoader: DynamicStyleLoaderService, private router: Router) {}

  ngOnInit() {
    this.setNavigationToPageId();
    this.loadStyles();
    this.applyKcIndexClasses();
    this.i18n$ = this.sharedService.getI18n();
    setTimeout(() => {
      this.sharedService.updateI18n();
    }, 300);
  }

  onRouterOutletActivate(event : any) {
    this.cdref.detectChanges();
    //here you can set Nodes from children like headerNode
    this.headerNode = event.headerNode;
    this.infoNode = event.infoNode;
    this.socialProvidersNode = event.socialProvidersNode;      
    this.displayInfo = event.displayInfo;
  }  

  public setNavigationToPageId() {
    this.router.navigate(['login', { outlets: { login: this.trimPageIdSuffix(window.kcContext.pageId) }}], { skipLocationChange: true });
}

private trimPageIdSuffix(pageId: string): string {
    if (pageId.length > 4) {
        return pageId.substring(0, pageId.length - 4);
    }
    return pageId;
}

  applyKcIndexClasses() {
    const kcBodyClass = this.kcClassPipe.transform("kcBodyClass");
    const kcHtmlClass = this.kcClassPipe.transform("kcHtmlClass");
    
    const kcBodyClasses = kcBodyClass.split(" ");
    const kcHtmlClasses = kcHtmlClass.split(" ");

    document.body.classList.add(...kcBodyClasses);
    document.documentElement.classList.add(...kcHtmlClasses);
  }

  loadStyles() {
    this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`);
    this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`);
    this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`);
    this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`)
    this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesPath}/css/login.css`);
    this.stylesheetsLoaded = true;
  }

  tryAnotherWay() { 
    document.forms["kc-select-try-another-way-form" as never].submit();
  }

  get publicUrl() {
    return PUBLIC_URL;
  }
}