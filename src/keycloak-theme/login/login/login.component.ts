import {Component, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KcClassPipe } from '../../../pipes/classname.pipe';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [KcClassPipe],
    providers: [CommonModule],
})
export class LoginComponent {

  
  @ViewChild('header', { static: true }) headerTemplate!: TemplateRef<any>;
  kcContext: any;
  constructor() {
    this.kcContext = window.kcContext;
  }

}
