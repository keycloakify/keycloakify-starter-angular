import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from "./login/app.module";
import "zone.js";
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
