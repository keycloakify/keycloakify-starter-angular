import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicStyleLoaderService {

  constructor() {
  }

  loadStyle(url: string) {
    const head = document.getElementsByTagName('head')[0];

    let style: HTMLLinkElement = document.createElement('link');
    style.href = url;
    style.type = 'text/css';
    style.rel = 'stylesheet';

    head.appendChild(style);
  }
}
