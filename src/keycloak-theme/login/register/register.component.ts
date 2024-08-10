import { Component, Input } from '@angular/core';
import { KcClassPipe } from "../../../pipes/classname.pipe";

@Component({
    selector: 'kc-register',
    standalone: true,
    templateUrl: './register.component.html',
    imports: [KcClassPipe]
})
export class RegisterComponent {

  kcContext: any;
  constructor() {
    this.kcContext = window.kcContext;
   }

  ngOnInit() {
  
  }

}
