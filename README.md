## Getting started


```
npm install
lerna bootstrap
```

To run NPM scripts for a specific package:

```
lerna run <command> --scope=<package_name> --stream
```

Example:

```
lerna run start --scope=hooks --stream
```
