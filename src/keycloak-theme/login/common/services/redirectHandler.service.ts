import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RedirectService {
  constructor(
    @Inject(DOCUMENT)
    private document: Document
  ) {}

  public postRedirect(params: any, url:string) {
    console.log("params: ", params)
    const form = this.document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = "_top";
    for (let prop in params) {
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