import { Component, Input } from '@angular/core';
import { KcClassPipe } from '../../../pipes/classname-pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kc-error',
  standalone: true,
  imports: [KcClassPipe, CommonModule],
  providers: [ActivatedRoute],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  errorMessage?: string;
  kcContext: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const routerErrorMessage = data['errorMessage'];
      this.kcContext = window.kcContext;

      if (!this.errorMessage && !this.kcContext?.message) {
        this.errorMessage = routerErrorMessage || 'An error occurred. Please try again later.';
      }

      if (this.kcContext?.message?.summary) {
        this.errorMessage = this.kcContext.message.summary;
      }

      console.log('kcContext: ', this.kcContext);
    });
  }
}
