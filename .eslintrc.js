module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars":
        [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false,
                "argsIgnorePattern": "^_$"
            }
        ]
    }
};
