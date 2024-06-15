
import { AppComponent } from './login/app.component';
import "zone.js";
import { appConfig } from './login/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
