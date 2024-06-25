import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kc-app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
})

export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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