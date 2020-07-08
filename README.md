# Azure Functions URL Shortener

This repo contains a very simple URL shortener implementation. It is meant to be used as a demo for authoring Azure Functions with bindings using JavaScript.

## Local Execution

In order to locally edit and execute code you need to install:

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/)
3. The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) for Visual Studio Code
4. Either the [Cosmos DB emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator) (Windows Only) or a Cosmos DB account on Azure.

To edit the code, simply open the folder in VSCode. First, add a `local.settings.json` file, and add an entry named `RegistrationsDB` which points to your Cosmos DB account (either online or emulator). Then, execute the functions app locally by running `npm start`.

### Registering a URL

Send a URL registration command by running the terminal command:

```
curl -v -X POST -H 'Content-Type: application/json' \
  -d '{ "url": "http://mydomain.com", "vanity": "shortname" }' \
  http://localhost:7071/register
```

### Getting a Redirect

In order to get a redirect, run the following command in the terminal:

```
curl -v -X GET http://localhost:7071/shortname
```
