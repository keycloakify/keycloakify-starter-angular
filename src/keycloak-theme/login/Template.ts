import { Component } from "@angular/core";

@Component({
  selector: 'app-template',
  template: `
        <p>bla</p>
    `,
  styles: [`
        /* Hier kommt Ihr CSS-Code hin */
    `]
})
export class TemplateComponent {
  constructor() {}

  onLocaleChange(locale: string): void {
    // Ihre Logik hier
  }

  onSubmitTryAnotherWay(): void {
    // Logik für das Einreichen der anderen Möglichkeit
    // @ts-ignore
    document.forms['kc-select-try-another-way-form'].submit();
  }
}
