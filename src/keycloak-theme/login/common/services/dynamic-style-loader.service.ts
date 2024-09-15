import { inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DynamicStyleLoader {
    private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
    loadStyle(url: string): Observable<void> {
        return new Observable<void>(observer => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;

            link.onload = () => {
                observer.next();
                observer.complete();
            };

            link.onerror = () => {
                observer.error(new Error(`Failed to load stylesheet: ${url}`));
            };

            this.renderer.appendChild(document.head, link);
        });
    }
}
