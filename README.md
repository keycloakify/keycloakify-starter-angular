<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Angular 18 Keycloakify Starter</a> v11 starter 🚀</i>
    <br/>
    <br/>
</p>

This starter is based on Angular with Webpack. There is also [a Vite based starter](https://github.com/luca-peruzzo/analog-keycloakify-starter/).

# Quick start

```bash
git clone https://github.com/kathari00/keycloakify-starter-angular
cd keycloakify-starter-angular
npm install # Or use an other package manager, just be sure to delete the package.lock if you use another package manager.
```

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

```bash
npm run build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/targeting-specific-keycloak-versions).

# Initializing the account theme

```bash
TODO
```

# Initializing the email theme

```bash
npx keycloakify initialize-email-theme
```
