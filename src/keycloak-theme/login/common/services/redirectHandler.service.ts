import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Params } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RedirectService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public postRedirect(params: Params, url: string) {
    console.log("params: ", params);
    const form = this.document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = "_top";
    for (const prop in params) {
      const input = this.document.createElement("input");
      input.type = "hidden";
      input.name = prop;
      input.value = params[prop];
      form.append(input);
    }
    this.document.body.appendChild(form);
    form.submit();
  }

  public getRedirect(url: string) {
    this.document.location.href = url;
  }
}
