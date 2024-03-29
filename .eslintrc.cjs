/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    settings: {
        'svelte3/typescript': () => require('typescript'),
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['svelte3', '@typescript-eslint'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
    },
    ignorePatterns: ['*.cjs', '**/lz-string/**', '/build', '/.svelte-kit'],
};
