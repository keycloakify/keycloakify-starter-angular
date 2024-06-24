import { Pipe, PipeTransform } from '@angular/core';
import { getKcClsx } from 'keycloakify/login/lib/kcClsx';

@Pipe({
  name: 'kcClass',
  standalone: true
})
export class KcClassPipe implements PipeTransform {
  kcClsx: (...args: any[]) => string;

  constructor() {
    const params = {
      doUseDefaultCss: true,
      classes: {},
    };
    this.kcClsx = getKcClsx(params).kcClsx;
  }

  transform(value: string): string {
    return this.kcClsx(value);
  }
}