import { Component, OnInit} from '@angular/core';
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcClassPipe } from '../../pipes/classname-pipe';
import { DynamicStyleLoaderService } from '../../services/dynamic-style-loader.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kc-login-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterOutlet, KcClassPipe],
  providers: [],
})

export class TemplateComponent implements OnInit {
  kcContext: any;

  constructor(private dynamicStyleLoader: DynamicStyleLoaderService, private router: Router) {
    this.kcContext = window.kcContext;
    if(this.kcContext) {
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/lib/zocial/zocial.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesPath}/css/login.css`);
     
    } 
  }

  ngOnInit() {
    this.router.navigate(['login', { outlets: { login: this.trimPageIdSuffix(this.kcContext.pageId) }}], { skipLocationChange: true });
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
}