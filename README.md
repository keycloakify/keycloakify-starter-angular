# Angular Keycloakify Starter Project

## Overview

This repository is an Angular-based starter project tailored for Keycloakify integration. The Angular build process has been adjusted to ensure Keycloakify functions correctly within the framework.
The application is operational with the Login Page in development and assets functioning correctly.
## Key Adjustments

- **Webpack Configuration**: A custom webpack config was necessary to accommodate Keycloakify.
- **Angular.json Changes**: The build configuration in `angular.json` has been altered to align with Keycloakify's requirements.
- **Index Transform**: Angular's relative path generation for `index.html` led to file path issues for main.js/runtime.js and style.css. That's why index transform (option of custom webpack builder) was used to manually adjust the path. There might be other ways to solve this.
## Structure
The login theme can be found under src/keycloak-theme/login.

![image](https://github.com/kathari00/keycloakify-starter-angular/assets/42547712/16a25fb9-383c-4692-b6a5-59386a93053e)
