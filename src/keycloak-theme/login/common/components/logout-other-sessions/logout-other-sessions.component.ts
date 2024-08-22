import { Component, Input } from '@angular/core';
import { KcClassPipe } from "../../pipes/classname.pipe";
import { GenericI18n_noJsx } from 'keycloakify/login/i18n/i18n';

@Component({
  selector: 'kc-logout-other-sessions',
  standalone: true,
  imports: [KcClassPipe],
  templateUrl: './logout-other-sessions.component.html',
})
export class LogoutOtherSessionsComponent {
  @Input() i18n?: GenericI18n_noJsx<any>;
}
