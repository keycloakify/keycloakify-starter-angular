
## Overview

This is an Angular-based starter project specifically tailored for integrating Keycloakify.

## Getting Started

- **`ng serve`**: Launch the page for local development (configurable in `environment.ts`).
- **`npx keycloakify start-keycloak`**: Executes the keycloakify build steps and deploys a local server.

## Project Structure

- **CSS Classes**: Use `theme.properties` (located in `assets`) to add custom CSS classes.
- **Class Name Handling**: Edit class name parameters in `classname.pipe`.
- **Post Requests & Forms**: Utilize `redirectHandler` for handling post requests and Angular Material forms.
- **Local Development**: Use `kc-context-mock.provider.ts` to define a custom `KcContext`. Use `npx keycloakify copy-keycloak-resources-to-public` to get locale default stylesheets 
- **Routing**: Add routes using login routes; the other route distinguishes between account and login.
- **Stylesheet Changes**: Add new stylesheets to `assets` for local development and configure URLs in the template for the server environment (stylesheets are loaded dynamically). To get local default Keycloak resources call npx keycloakify copy-keycloak-resources-to-public
- **Page Structure**: Maintain the existing structure (e.g., passing `socialProviderNode`, `infoNode`, etc.) when implementing custom components.

If you have any questions, if you want to contribute to this topic or if you are an angular expert, feel free to hmu. I would love this to be a finished starter and to learn more about angular.
