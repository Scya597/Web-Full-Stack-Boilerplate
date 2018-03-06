module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "rules": {
      "no-console": 0,
      "no-else-return": 0,
      "global-require": 0,
      "react/prop-types": 0,
      "react/sort-comp": 0,
      "camelcase": 0,
      "no-loop-func": 0,
      "no-param-reassign": 0,
      "import/no-extraneous-dependencies": 0,
      "require-jsdoc": [1, { "require": { "FunctionDeclaration": false, "ClassDeclaration": true, "MethodDefinition": true } }],
      "valid-jsdoc": [1, { "requireReturn": false, "requireReturnType": true, "requireParamDescription": true, "requireReturnDescription": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
}
