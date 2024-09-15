import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from "@angular/core";
import { KcClassPipe } from "../../pipes/classname.pipe";
import { I18nService } from "../../services/i18n.service";

@Component({
    selector: "kc-password-wrapper",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [KcClassPipe, AsyncPipe],
    templateUrl: "./password-wrapper.component.html"
})
export class PasswordWrapperComponent implements OnInit {
    passwordInputId = input<string>();
    i18nService = inject(I18nService);

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
