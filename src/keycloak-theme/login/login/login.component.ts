import { Component, Input, OnInit } from '@angular/core';
import type { KcContext } from "../kcContext";
import { clsx } from "keycloakify/tools/clsx";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import {NgClass} from "@angular/common";
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() props: any;

  constructor() {
  }
  displayInfo: boolean = false;
  displayMessage: boolean = true;
  displayRequiredFields: boolean = false;
  displayWide: boolean = false;
  showAnotherWayIfPresent: boolean = true;
  headerNode: any;
  showUsernameNode: any = null;
  infoNode: any = null;
  kcContext: any;
  i18n: any;
  doUseDefaultCss: any;
  classes: any;
  isReady: boolean = false;

  ngOnInit() {

    const {
      displayInfo = false,
      displayMessage = true,
      displayRequiredFields = false,
      displayWide = false,
      showAnotherWayIfPresent = true,
      headerNode,
      showUsernameNode = null,
      infoNode = null,
      kcContext,
      i18n,
      doUseDefaultCss,
      classes,
    } = this.props;

    const { getClassName } = useGetClassName({
      doUseDefaultCss,
      classes
    });
    this.displayInfo = displayInfo;
    this.displayMessage = displayMessage;
    this.displayRequiredFields = displayRequiredFields;
    this.displayWide = displayWide;
    this.showAnotherWayIfPresent = showAnotherWayIfPresent;
    this.headerNode = headerNode;
    this.showUsernameNode = showUsernameNode;
    this.infoNode = infoNode;
    this.kcContext = kcContext;
    this.i18n = i18n;
    this.doUseDefaultCss = doUseDefaultCss;
    this.classes = classes;

    this.prepareTemplate();
  }

  prepareTemplate() {
    // Logik zur Vorbereitung des Templates hier einfügen
    // ...

    this.isReady = true;
  }

  changeLocale(languageTag: string) {
    // Logik für den Sprachwechsel hier einfügen
    // ...
  }

  submitForm() {
    // Logik für das Absenden des Formulars hier einfügen
    // ...
  }


  msg(key: string, ...args: any[]) {
    // Logik zur Behandlung von internationalisierten Texten hier einfügen
    // ...
    return ''; // Platzhalter für den Text
  }
}
