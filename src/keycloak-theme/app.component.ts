import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicStyleLoaderService } from './login/service/dynamicStyleLoader.service';
import { KcContext } from 'keycloakify/login/KcContext';

@Component({
  selector: 'kc-app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  providers: [DynamicStyleLoaderService]
})

export class AppComponent implements OnInit {

  kcContext?: KcContext;
  constructor(private router: Router, private dynamicStyleLoader: DynamicStyleLoaderService) { 
    
  }

  ngOnInit() {
    this.kcContext = window.kcContext;
    if(this.kcContext) {
    } 
    this.navigateToThemeType();
  }


  
  navigateToThemeType() {
    let themeType: string = window.kcContext && window.kcContext.themeType || "";
    switch (themeType) {
      case "login":
        this.router.navigate(['login', { outlets: { login: 'login' }, }], { skipLocationChange: true} );
        break;
      case "account":
        this.router.navigate(['account'], { skipLocationChange: true });
        break;
      default:
        this.router.navigate(['error'], { skipLocationChange: true });
        break;
    }
  }

}