import { Component, Input, OnInit } from '@angular/core';
import { KcClassPipe } from "../../pipes/classname.pipe";
import { I18nService } from '../../services/i18n.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kc-password-wrapper',
  standalone: true,
  imports: [KcClassPipe, CommonModule],
  templateUrl: './password-wrapper.component.html'
})
export class PasswordWrapperComponent implements OnInit {
  @Input() passwordInputId?: string;

  isPasswordRevealed: boolean = false;

  constructor(public i18nService: I18nService) { }
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
