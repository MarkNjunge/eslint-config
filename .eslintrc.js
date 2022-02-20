/* eslint-disable no-magic-numbers */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    // Possible Errors
    "no-console": "error",
    "no-template-curly-in-string": "error",

    // Best Practices
    "block-scoped-var": "error",
    curly: ["error", "all"],
    "dot-location": ["error", "property"],
    eqeqeq: "off",
    "no-else-return": "off",
    "no-empty-function": "warn",
    "no-implicit-coercion": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-new-func": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    yoda: ["error", "never", { exceptRange: true }],

    // Variables
    "no-unused-vars": "warn",

    // Stylistic Issues
    "array-bracket-newline": ["error", { multiline: true }],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "comma-dangle": "off",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: ["error", 2],
    "key-spacing": ["error", { beforeColon: false }],
    "keyword-spacing": [
      "error",
      {
        overrides: {
          if: { after: true },
          for: { after: true },
          while: { after: true }
        }
      }
    ],
    "linebreak-style": ["error", "unix"],
    "max-depth": ["error", { max: 4 }],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true
      }
    ],
    "max-lines-per-function": ["error", { max: 40, skipBlankLines: true, skipComments: true }],
    "max-nested-callbacks": ["error", { max: 3 }],
    "max-params": ["error", { max: 4 }],
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-inline-comments": "off",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error"],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "one-var": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "padding-line-between-statements": ["off"],
    "quote-props": ["error", "consistent-as-needed"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "semi-style": ["error", "last"],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" }
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": "error",

    // ECMAScript 6
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error"
  }
};
