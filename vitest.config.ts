import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'packages/shared/src'),
      '@ui': path.resolve(__dirname, 'packages/ui/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'website/**/*.{test,spec}.{js,ts,tsx}',
      'software/**/*.{test,spec}.{js,ts,tsx}',
      'tools/**/*.{test,spec}.{js,ts,tsx}',
      'cli/**/*.{test,spec}.{js,ts,tsx}',
      'sdk/**/*.{test,spec}.{js,ts,tsx}',
    ],
    exclude: ['node_modules', 'dist', 'build', 'target'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [
        'website/**/*.{js,ts,tsx}',
        'software/**/*.{js,ts,tsx}',
        'tools/**/*.{js,ts,tsx}',
        'cli/**/*.{js,ts,tsx}',
        'sdk/**/*.{js,ts,tsx}',
      ],
      exclude: [
        '**/*.d.ts',
        '**/node_modules/**',
        'dist/**',
        'build/**',
        'target/**',
        'packages/ui/**',
      ],
    },
    alias: {},
    setupFiles: './vitest.setup.ts',
    watch: false,
    reporters: 'default',
    passWithNoTests: true,
  },
});
