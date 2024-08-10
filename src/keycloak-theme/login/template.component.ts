import { AfterViewInit, ChangeDetectorRef, Component,  OnInit,  TemplateRef} from '@angular/core';
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcClassPipe } from '../../pipes/classname.pipe';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KcContext } from 'keycloakify/login/KcContext/KcContext';
import { SanitizeHtmlPipe } from "../../pipes/sanitize-html.pipe";

@Component({
  selector: 'kc-login-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterOutlet, KcClassPipe, SanitizeHtmlPipe],
})

export class TemplateComponent implements OnInit {
  kcContext: KcContext = window.kcContext;

  headerTemplate?: TemplateRef<any>;

  locale?: {
    supported: {
        url: string;
        label: string;
        languageTag: string;
    }[];
    currentLanguageTag: string;
  };


  constructor(private router: Router, private cdref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.locale = this.kcContext.locale;
    this.router.navigate(['login', { outlets: { login: this.trimPageIdSuffix(this.kcContext.pageId) }}], { skipLocationChange: true });
    this.cdref.detectChanges();
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
      this.headerTemplate = event.headerTemplate;
  }
}