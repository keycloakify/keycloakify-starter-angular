import {Component, Input, OnInit} from '@angular/core';
import {ClassNameService} from "../../services/class-name.service";
import {CommonModule} from '@angular/common';

@Component({
    selector: 'kc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class LoginComponent implements OnInit {
  @Input() kcContext: any;

  constructor(private classNameService: ClassNameService) {
  }

  ngOnInit() {
  }

  getClassName(classKey: string): string {
    return this.classNameService.getClassName(classKey);
  }

}
