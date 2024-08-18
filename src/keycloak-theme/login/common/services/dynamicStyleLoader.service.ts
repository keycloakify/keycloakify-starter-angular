import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicStyleLoader {
  constructor() {}

  loadStyle(url: string): Observable<void> {
    return new Observable<void>((observer) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;

      link.onload = () => {
        observer.next();
        observer.complete();
      };

      link.onerror = () => {
        observer.error(new Error(`Failed to load stylesheet: ${url}`));
      };

      document.head.appendChild(link);
    });
  }
}
