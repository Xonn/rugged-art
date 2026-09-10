import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
  // The application predates the stricter defaults bundled with Next 16.
  // Keep the checks visible during incremental cleanup without blocking CI.
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      'no-var': 'warn',
      'prefer-const': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react/jsx-key': 'warn',
      'react/no-children-prop': 'warn',
    },
  },
];

export default config;
