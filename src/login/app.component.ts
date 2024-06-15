import {Component, Input, OnInit} from '@angular/core';
import {PUBLIC_URL} from "keycloakify/PUBLIC_URL";

//It would maybe make sense to make kcContext and i18n injectable services
import {DynamicStyleLoaderService} from "./services/dynamic-style-loader.service";
import {ClassNameService} from "./services/class-name.service";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { I18n, useI18n } from './services/i18n';
import { KcContext } from './services/kcContext';
import { DeepPartial } from 'keycloakify/tools/DeepPartial';
import { KcContextService } from './services/kc-context.service';
@Component({
    selector: 'kc-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [LoginComponent, RegisterComponent],
    providers: [ClassNameService, DynamicStyleLoaderService, KcContextService],
})

export class AppComponent implements OnInit {
  protected kcContext!: KcContext;
  protected i18n!: I18n;

  @Input() pageId!: KcContext['pageId'];
  @Input() kcContextOverrides?: DeepPartial<KcContext>;



  constructor(private dynamicStyleLoader: DynamicStyleLoaderService, private classNameService: ClassNameService, private kcContextService: KcContextService) {
  }

  ngOnInit() {
    this.kcContext = this.kcContextService.getKcContext(this.pageId, this.kcContextOverrides);
    console.log("blaaaaaaa", this.kcContext);
  }

  getClassName(name: any) {
    return this.classNameService.getClassName(name);
  } 
}





