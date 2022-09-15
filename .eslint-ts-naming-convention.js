module.exports = {
    rules: {
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "variable",
                "types": [
                    "boolean"
                ],
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "variable",
                "types": [
                    "array"
                ],
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "function",
                "format": [
                    "camelCase"
                ],
            },
            {
                "selector": "parameter",
                "format": [
                    "camelCase",
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "parameter",
                "types": [
                    "boolean"
                ],
                "format": [
                    "camelCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "parameter",
                "types": [
                    "array"
                ],
                "format": [
                    "camelCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "format": [
                    "camelCase",
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "string",
                    "number",
                    "function"
                ],
                "format": [
                    "camelCase",
                    "UPPER_CASE",
                    "snake_case",
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "array"
                ],
                "format": [
                    "camelCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "boolean"
                ],
                "format": [
                    "camelCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "modifiers": [
                    "readonly"
                ],
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "string",
                    "number",
                    "function"
                ],
                "modifiers": [
                    "readonly"
                ],
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "array"
                ],
                "modifiers": [
                    "readonly"
                ],
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "property",
                "types": [
                    "boolean"
                ],
                "modifiers": [
                    "readonly"
                ],
                "format": [
                    "camelCase",
                    "UPPER_CASE"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "method",
                "format": [
                    "camelCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "enum",
                "format": [
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "enumMember",
                "format": [
                    "UPPER_CASE",
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "class",
                "format": [
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "interface",
                "format": [
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "typeAlias",
                "format": [
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            },
            {
                "selector": "typeParameter",
                "format": [
                    "PascalCase"
                ],
                "trailingUnderscore": "forbid",
            }
        ]
    },
};