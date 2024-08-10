import { Pipe, PipeTransform } from '@angular/core';
import { getKcClsx } from 'keycloakify/login/lib/kcClsx';
import * as classData from '../assets/theme.properties.json';

@Pipe({
  name: 'kcClass',
  standalone: true,
})
export class KcClassPipe implements PipeTransform {
  private kcClsx?: (...args: any[]) => string;

  constructor() {
    this.loadClasses();
  }

  private loadClasses(): void {
    const params = {
        doUseDefaultCss: true,
        classes: classData
    };
    this.kcClsx = getKcClsx(params).kcClsx; 
  }

  transform(value: any): string {
    return this.kcClsx ? this.kcClsx(value) : '';
  }
}




