# @marknjunge/eslint-config

[![npm (scoped)](https://img.shields.io/npm/v/@marknjunge/eslint-config)](https://www.npmjs.com/package/@marknjunge/eslint-config)

My ESLint config

## Usage

Install the package

```
npm install --save-dev @marknjunge/eslint-config
```

Add it to the `extends` section of your `.eslintrc` file.

```javascript
extends: ["...", "@marknjunge/eslint-config"]
```

Add the following helpful scripts

```json
"lint": "eslint **/*.js",
"lint:fix": "eslint **/*.js --fix"
```
