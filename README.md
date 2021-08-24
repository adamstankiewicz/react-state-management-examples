## Getting started

To get started with these example apps, run the following commands:

```
npm install
lerna bootstrap
lerna run start --stream
```

This will install all dependencies in both example packages and start them both:
* `hooks`: Uses `useReducer` and Context API
* `redux`: Uses `@reduxjs/toolkit`

To run NPM scripts for a specific package:

```
lerna run <command> --scope=<package_name> --stream
```

Example:

```
lerna run start --scope=hooks --stream
```
