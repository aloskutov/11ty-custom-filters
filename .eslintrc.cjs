/** eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    root: true,
    "ignorePatterns": ["*.config.js"],
    "rules": {
        "camelcase": ["error"],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "max-len": ["error", {
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "no-confusing-arrow": ["error"],
        "no-duplicate-imports": ["error"],
        "no-self-compare": ["error"],
        "no-return-await": ["error"],
        "no-use-before-define": ["error"],
        "no-unused-vars": ["error"],
        "quotes": ["error", "single", {
            "allowTemplateLiterals": true
        }],
        "semi": ["error", "always"],
        "strict": "warn"
    }
};
