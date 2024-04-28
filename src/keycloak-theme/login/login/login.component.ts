import { Component, Input, OnInit } from '@angular/core';
import type { KcContext } from "../kcContext";
import {PageProps} from "keycloakify/login";
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() props: any;

  constructor(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>>) {
    this.props = props;
  }

  ngOnInit() {

  }




}
