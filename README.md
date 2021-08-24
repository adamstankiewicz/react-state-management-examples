## Getting started

To get started with these example apps, run the following commands:

```
npm install
lerna bootstrap
lerna run start --stream
```

This will install all dependencies in both example packages and start them both:
* `prop-drilling`: Uses prop drilling. Runs on http://localhost:3000.
* `context-usereducer`: Uses React Context API and `useReducer`. Runs on http://localhost:3001.
* `redux`: Uses Redux via `@reduxjs/toolkit`. Runs on http://localhost:3002.

To run NPM scripts for a specific package:

```
lerna run <command> --scope=<package_name> --stream
```

Example:

```
lerna run start --scope=redux --stream
```
