var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
      "react"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        // Possible Errors (overrides from recommended set)
        "no-unexpected-multiline": ERROR,
        // All JSDoc comments must be valid
        "valid-jsdoc": [ ERROR, {
            "requireReturn": false,
            "requireReturnDescription": false,
            "requireParamDescription": true,
            "prefer": {
                "return": "returns"
            }
        }],
        "@typescript-eslint/explicit-module-boundary-types": OFF,
        "@typescript-eslint/no-explicit-any": OFF,
    }
};