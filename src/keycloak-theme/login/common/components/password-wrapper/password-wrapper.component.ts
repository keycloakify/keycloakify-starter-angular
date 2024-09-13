import { ChangeDetectionStrategy, Component, input, OnInit } from "@angular/core";
import { GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { KcClassPipe } from "../../pipes/classname.pipe";
import { I18nService } from '../../services/i18n.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: "kc-password-wrapper",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KcClassPipe],
  templateUrl: "./password-wrapper.component.html",
  styleUrl: "./password-wrapper.component.scss"
})
export class PasswordWrapperComponent implements OnInit {
  passwordInputId = input<string>();
  i18n = input<GenericI18n_noJsx<string>>();

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
    const passwordInputId = this.passwordInputId();
    if (!passwordInputId) {
      return;
    }
    const passwordInputElement = document.getElementById(
      passwordInputId
    ) as HTMLInputElement;
    if (passwordInputElement) {
      passwordInputElement.type = this.isPasswordRevealed ? "text" : "password";
    }
  }
}
