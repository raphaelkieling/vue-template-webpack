# Vue 2 Template Webpack

- Autofix with prettier
- Jest tests
- Typescript
- Vue composable api

## Lint

If you use Vscode, put that on `settings.json`


```json
{
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        {
            "language": "typescript",
            "autoFix": true
        }
    ],
    "[typescript]": {
        "editor.formatOnSave": true
    },
    "[vue]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```