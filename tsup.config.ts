import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  // Externalize peer dependencies - remove crypto since we handle it manually
  external: ['react', 'react-dom'],
  // Generate both .js and .mjs files
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js',
    }
  },
  // Enable esbuild's tree shaking
  treeshake: true,
  // Minify when --minify flag is passed
  minify: options.minify,
  // Target modern browsers and Node.js
  target: 'es2020',
  // Enable JSX transformation for React components
  esbuildOptions(esbuildOptions) {
    esbuildOptions.jsx = 'automatic'
    esbuildOptions.jsxImportSource = 'react'
    // Don't bundle crypto - let it be resolved at runtime
    esbuildOptions.external = esbuildOptions.external || []
    if (!esbuildOptions.external.includes('crypto')) {
      esbuildOptions.external.push('crypto')
    }
  },
}))
