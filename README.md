# Angular Keycloakify Starter Project

## Overview

This repository is an Angular-based starter project tailored for Keycloakify integration. The Angular build process has been adjusted to ensure Keycloakify functions correctly within the framework.
The application is operational with the Login Page in development and assets functioning correctly.
## Key Adjustments

- **Webpack Configuration**: A custom webpack config was necessary to accommodate Keycloakify.
- **Angular.json Changes**: The build configuration in `angular.json` has been altered to align with Keycloakify's requirements.
- **Index Transform**: Angular's relative path generation for `index.html` led to file path issues for main.js/runtime.js and style.css. That's why index transform (option of custom webpack builder) was used to manually adjust the path. There might be other ways to solve this.
## Development Notes

- **Service Mocks**: The `getClass` function is currently mocked under services due to unfamiliarity with the React hook concept.
- **Font Paths**: Unable to use BasePath for fonts, the paths have been set manually in `index.html`.
- **KcContext**: It might make sense to make this an injectable service
- **KC styles**: I would usually set the global styles in Angular json but I wasn't sure about the paths so I set it in runtime.
- **I18n**: needs to be implemented
## Structure

- The template component is not implemented; `app-component` is used instead.
- Consider making login and related features as submodules, similar to the React starter project.

![image](https://github.com/kathari00/keycloakify-starter-angular/assets/42547712/16a25fb9-383c-4692-b6a5-59386a93053e)
