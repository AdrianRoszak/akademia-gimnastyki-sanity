
import prettier from 'eslint-plugin-prettier'

import tseslint from 'typescript-eslint'

import path from 'node:path'
import js from '@eslint/js'

import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends('prettier', 'plugin:prettier/recommended', 'eslint-config-sanity' ),
  ...tseslint.configs.recommended,
  {
    ignores: ['**/node_modules', '**/.cache', '**/public', '*.config.*']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier,
      '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir:
          '/Users/adrian/Desktop/Adrian/Projects/ERBACHER/Petfood-PL/petfood-pl-josera-partner-lp-front'
      }
    },
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-console': [
        'error',
        {
          allow: ['warn', 'error']
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_[^_].*$|^_$',
          varsIgnorePattern: '^_[^_].*$|^_$',
          caughtErrorsIgnorePattern: '^_[^_].*$|^_$'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error'
    }
  }
]
