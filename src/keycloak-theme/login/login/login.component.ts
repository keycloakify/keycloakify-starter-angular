import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../../pipes/classname-pipe';
import { DynamicStyleLoaderService } from '../../../services/dynamic-style-loader.service';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [KcClassPipe],
    providers: [DynamicStyleLoaderService, CommonModule],
})
export class LoginComponent implements OnInit {
  kcClsx: any;
  kcContext: any;
  constructor(private dynamicStyleLoader: DynamicStyleLoaderService) {
    this.kcContext = window.kcContext;
    console.log("blaaaaaaaaaa")
  }

  ngOnInit() {
    if(this.kcContext) {
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesCommonPath}/lib/zocial/zocial.css`);
      this.dynamicStyleLoader.loadStyle(`${this.kcContext.url.resourcesPath}/css/login.css`);
     
    } 

  
  }


}
