// kc-app.component.ts
import { Component, OnInit } from '@angular/core';
import {KcContext} from "../kcContext";

@Component({
  selector: 'app-kc-app',
  templateUrl: './kc-app.component.html'
})
export class KcAppComponent implements OnInit {
  kcContext: any;
  pageId: any;
  constructor(kcContext: KcContext) {
    this.kcContext = kcContext;
    console.log("blabalbal");
  }

  ngOnInit(): void {
    this.pageId = this.kcContext.pageId;
  }
}
