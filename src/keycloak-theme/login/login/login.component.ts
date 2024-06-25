import {Component} from '@angular/core';
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
export class LoginComponent {

  kcContext: any;
  constructor() {
    this.kcContext = window.kcContext;
  }

}
