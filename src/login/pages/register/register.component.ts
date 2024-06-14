import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassNameService } from '../../services/class-name.service';

@Component({
  selector: 'kc-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({});
  @Input() kcContext: any;
  constructor(private formBuilder: FormBuilder, private classNameService: ClassNameService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  getClassName(classKey: string): string {
    return this.classNameService.getClassName(classKey);
  }
}
