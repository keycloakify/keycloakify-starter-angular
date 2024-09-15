import { DOCUMENT } from "@angular/common";
import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Params } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class RedirectService {
    private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
    private document: Document = inject(DOCUMENT);

    public postRedirect(params: Params, url: string) {
        const form = this.document.createElement("form");
        form.method = "POST";
        form.action = url;
        form.target = "_top";
        for (const prop in params) {
            const input = this.document.createElement("input");
            input.type = "hidden";
            input.name = prop;
            input.value = params[prop];
            this.renderer.appendChild(form, input);
        }
        this.renderer.appendChild(this.document.body, form);
        form.submit();
    }

    public getRedirect(url: string) {
        this.document.location.href = url;
    }
}
