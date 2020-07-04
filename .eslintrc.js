module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser" : "babel-eslint",
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-filename-extension': 0,
        "indent": ["error", 2],
        "jsx-a11y/control-has-associated-label": 0
        // "global-require": 1,
    }
};