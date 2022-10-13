import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import packages from './package.json'

const name = packages.main.replace(/\.cjs$/, '')

const bundle = (config) => ({
	...config,
	input: './src/index.ts',
})

export default [
	bundle({
		plugins: [esbuild(), terser(), commonjs(), resolve()],
		output: [
			{
				file: `${name}.cjs`,
				format: 'cjs',
			},
			{
				file: `${name}.mjs`,
				format: 'es',
			},
			{
				file: `${name}.min.js`,
				format: 'umd',
				name: `${name}.min.js`,
			},
		],
		external: Object.keys(packages.peerDependencies),
	}),
	bundle({
		plugins: [dts()],
		output: {
			file: `${name}.d.ts`,
			format: 'es',
		},
		external: Object.keys(packages.peerDependencies),
	}),
]
