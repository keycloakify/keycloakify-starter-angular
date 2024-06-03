import {Component, Input, OnInit} from '@angular/core';
import {ClassNameService} from "../../service/class-name.service";

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() kcContext: any;

  constructor(private classNameService: ClassNameService) {
  }

  ngOnInit() {
  }

  getClassName(classKey: string): string {
    console.log("getClassName", classKey, this.classNameService.getClassName(classKey));
    return this.classNameService.getClassName(classKey);
  }

  onSubmit() {
    console.log("submit")
  }
}
