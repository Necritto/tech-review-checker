import {defineConfig} from 'eslint/config';
import {includeIgnoreFile} from '@eslint/compat';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import sonarjs from 'eslint-plugin-sonarjs';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    includeIgnoreFile(gitignorePath),
    {files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: {js}, extends: ['js/recommended']},
    tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
    ...pluginVue.configs['flat/recommended'],
    sonarjs.configs.recommended,
    {files: ['**/*.vue'], languageOptions: {parserOptions: {parser: tseslint.parser}}},
], {
    settings: {
        
    },
    languageOptions: {
        sourceType: 'module',
        globals: {
            ...globals.browser,
            ...globals.node,
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
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/no-v-for-template-key': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'always',
                    component: 'always',
                },
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'error',
        'vue/require-prop-types': 'error',
        'vue/require-default-prop': 'error',
        'vue/attributes-order': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/padding-line-between-blocks': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/first-attribute-linebreak': 'error',
        'vue/multiline-html-element-content-newline': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'sonarjs/todo-tag': 'warn',
    },
});
