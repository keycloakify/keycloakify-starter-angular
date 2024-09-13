import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { KcClassPipe } from "../../common/pipes/classname.pipe";
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
    selector: 'kc-register',
    standalone: true,
    templateUrl: './register.component.html',
    imports: [KcClassPipe]
})
export class RegisterComponent {

  kcContext = window.kcContext as KcContext.Register;

  @ViewChild('headerNode') headerNode?: TemplateRef<any>;
  @ViewChild('infoNode') infoNode?: TemplateRef<any>;
  @ViewChild('socialProvidersNode') socialProvidersNode?: TemplateRef<any>;
  displayInfo?: boolean;
  displayMessage: boolean = !this.kcContext.messagesPerField.existsError("username");
  constructor() {
   }


}
