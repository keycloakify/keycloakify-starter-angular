import { Component, input, OnInit } from "@angular/core";
import { GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { KcClassPipe } from "../../pipes/classname.pipe";

@Component({
  selector: "kc-password-wrapper",
  standalone: true,
  imports: [KcClassPipe],
  templateUrl: "./password-wrapper.component.html",
  styleUrl: "./password-wrapper.component.scss"
})
export class PasswordWrapperComponent implements OnInit {
  passwordInputId = input<string>();
  i18n = input<GenericI18n_noJsx<string>>();

  isPasswordRevealed: boolean = false;

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
