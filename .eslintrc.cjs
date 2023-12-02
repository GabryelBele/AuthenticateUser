module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true  // Adicione o ambiente Node.js
    },
    "extends": [
      "eslint:recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "dotenv-eslint"  // Adicione o plugin dotenv-eslint
    ],
    "overrides": [
      {
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "env": {
          "node": true
        },
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "rules": {
    }
  };
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "dotenv-eslint"
  ],
  "overrides": [
    {
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "env": {
        "node": true
      },
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "rules": {
    
  }
};
  