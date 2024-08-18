import {
  ChangeDetectorRef,
  Component,
  isDevMode,
  OnInit,
  TemplateRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { forkJoin, Observable } from "rxjs";
import { PUBLIC_URL } from "keycloakify/PUBLIC_URL";
import { KcContext } from "keycloakify/login/KcContext/KcContext";
import { GenericI18n_noJsx } from "keycloakify/login/i18n/i18n";
import { KcClassPipe } from "./common/pipes/classname.pipe";
import { SanitizeHtmlPipe } from "./common/pipes/sanitize-html.pipe";
import { DynamicStyleLoader } from "./common/services/dynamicStyleLoader.service";
import { I18nService } from "./common/services/i18n.service";

@Component({
  selector: "kc-login-template",
  templateUrl: "./template.component.html",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    RouterOutlet,
    KcClassPipe,
    SanitizeHtmlPipe,
  ],
  providers: [KcClassPipe, I18nService],
})
export class TemplateComponent implements OnInit {
  stylesheetsLoaded?: boolean = false;
  kcContext: KcContext = window.kcContext;
  displayRequiredFields = false;
  i18n$?: Observable<GenericI18n_noJsx<any> | null>;
  i18n?: GenericI18n_noJsx<any> | null;

  // Child data
  displayInfo?: boolean = true;
  headerNode?: TemplateRef<any>;
  infoNode?: TemplateRef<any>;
  socialProvidersNode?: TemplateRef<any>;

  constructor(
    private cdref: ChangeDetectorRef,
    public i18nService: I18nService,
    private kcClassPipe: KcClassPipe,
    private dynamicStyleLoader: DynamicStyleLoader,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadStyles();
    this.setNavigationToPageId();
    this.applyKcIndexClasses();
    this.i18nService.i18n$.subscribe((i18n) => {
      this.i18n = i18n;
    });
  }

  onRouterOutletActivate(event: any) {
    this.cdref.detectChanges();
    // Here you can set Nodes from children like headerNode
    this.headerNode = event.headerNode;
    this.infoNode = event.infoNode;
    this.socialProvidersNode = event.socialProvidersNode;
    console.log(event);
    this.displayInfo = event.displayInfo;
  }

  private setNavigationToPageId() {
    this.router.navigate(
      [
        "login",
        { outlets: { login: this.trimPageIdSuffix(window.kcContext.pageId) } },
      ],
      { skipLocationChange: true }
    );
  }

  private trimPageIdSuffix(pageId: string): string {
    if (pageId.length > 4) {
      return pageId.substring(0, pageId.length - 4);
    }
    return pageId;
  }

  private applyKcIndexClasses() {
    const kcBodyClass = this.kcClassPipe.transform("kcBodyClass");
    const kcHtmlClass = this.kcClassPipe.transform("kcHtmlClass");

    const kcBodyClasses = kcBodyClass.split(" ");
    const kcHtmlClasses = kcHtmlClass.split(" ");

    document.body.classList.add(...kcBodyClasses);
    document.documentElement.classList.add(...kcHtmlClasses);
  }

  private loadStyles(): void {
    if (isDevMode()) {
      this.stylesheetsLoaded = true;
      return;
    }

    const stylesheets = [
      `${this.kcContext.url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
      `${this.kcContext.url.resourcesCommonPath}/lib/pficon/pficon.css`,
      `${this.kcContext.url.resourcesPath}/css/login.css`,
    ];

    forkJoin(
      stylesheets.map((url) => this.dynamicStyleLoader.loadStyle(url))
    ).subscribe({
      next: () => {
        this.stylesheetsLoaded = true;
      },
      error: (error) => {
        console.error("Error loading styles:", error);
      },
    });
  }

  tryAnotherWay() {
    document.forms["kc-select-try-another-way-form" as never].submit();
  }

  get publicUrl() {
    return PUBLIC_URL;
  }
}
