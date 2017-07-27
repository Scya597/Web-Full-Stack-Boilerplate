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
      "import/no-extraneous-dependencies": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
}
