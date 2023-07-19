import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.min.js',
        format: 'umd',
        sourcemap: true,
        name: 'NaamcheUtils',
        exports: 'named',
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      terser(),
    ],
    external: [],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];
