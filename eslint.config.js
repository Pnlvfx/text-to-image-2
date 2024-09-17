import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist', 'tools', 'coverage'],
  },
  eslint.configs.recommended,
  unicorn.configs['flat/recommended'],
  sonarjs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.builtin,
    },
  },
  {
    rules: {
      'no-var': 'error',
      semi: 'error',
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-multi-spaces': 'error',
      'no-empty-function': 'error',
      'no-floating-decimal': 'error',
      'no-implied-eval': 'error',
      'no-lone-blocks': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-new': 'error',
      'no-octal-escape': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'no-unsafe-negation': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'sonarjs/sonar-no-unused-vars': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/catch-error-name': 'off',

      // enable back when sonar fix it
      'sonarjs/sonar-no-fallthrough': 'off',
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
);
