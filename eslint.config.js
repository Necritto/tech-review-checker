import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'eslint/config';
import {includeIgnoreFile} from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';
import svelte from 'eslint-plugin-svelte';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs.recommended,
    sonarjs.configs.recommended,
], {
    files: ['**/*.svelte', '**/*.js', '**/*.ts'],
    languageOptions: {
        sourceType: 'module',
        globals: {
            ...globals.browser,
            ...globals.node,
        },
        parserOptions: {
            parser: tseslint.parser,
            extraFileExtensions: ['.svelte'],
            svelteConfig,
        },
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ArrayExpression: 1,
                ObjectExpression: 1,
            },
        ],
        'no-tabs': [
            0,
            {
                allowIndentationTabs: true,
            },
        ],
        'no-console': 'off',
        'max-len': ['error', 120],
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'linebreak-style': 'off',
        'new-cap': 'off',
        'newline-before-return': 'error',
        'no-array-constructor': 'error',
        'no-const-assign': 'error',
        'no-duplicate-imports': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-object': 'error',
        'no-unreachable': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-constructor': 'error',
        'nonblock-statement-body-position': ['error', 'beside'],
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '&&': 'after',
                },
            },
        ],
        'padded-blocks': ['error', 'never'],
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                object: true,
                array: true,
            },
        ],
        'prefer-promise-reject-errors': 'off',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'require-jsdoc': 'off',
        semi: ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'space-before-function-paren': [
            'error',
            {
                named: 'never',
                anonymous: 'always',
                asyncArrow: 'always',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        'sonarjs/todo-tag': 'warn',
    },
});
