import { Component, Input, OnInit } from '@angular/core';
import {useGetClassName} from "keycloakify/login/lib/useGetClassName";
import {ClassKey} from "keycloakify/login/TemplateProps";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() kcContext: any;
  @Input() classes: any;
  @Input() doUseDefaultCss: any;

  constructor() {
  }

  ngOnInit() {
  }

  //TODO wie Default Klassen laden?
  getClassName(classKey: string): string {
    return "my-class";
  }
}
