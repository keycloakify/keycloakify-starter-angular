import { Component, Input, OnInit } from '@angular/core';
import { KcClassPipe } from "../../pipes/classname.pipe";

@Component({
  selector: 'kc-password-wrapper',
  standalone: true,
  imports: [KcClassPipe],
  templateUrl: './password-wrapper.component.html',
  styleUrl: './password-wrapper.component.scss'
})
export class PasswordWrapperComponent implements OnInit {
  @Input() passwordInputId?: string;
  @Input() i18n: any;

  isPasswordRevealed: boolean = false;

  ngOnInit(): void {
    this.setPasswordInputType();
  }

  togglePasswordVisibility(): void {
    this.isPasswordRevealed = !this.isPasswordRevealed;
    this.setPasswordInputType();
  }

  private setPasswordInputType(): void {
    if (!this.passwordInputId) {
      return
    }
    const passwordInputElement = document.getElementById(this.passwordInputId) as HTMLInputElement;
    if (passwordInputElement) {
      passwordInputElement.type = this.isPasswordRevealed ? 'text' : 'password';
    }
  }
}
