import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
import packages from './package.json'

const name = packages.main.replace(/\.js$/, '')

const bundle = (config) => ({
	...config,
	input: './src/index.ts',
})

export default [
	bundle({
		plugins: [esbuild(), terser()],
		output: [
			{
				file: `${name}.js`,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: `${name}.mjs`,
				format: 'es',
				sourcemap: true,
			},
		],
	}),
	bundle({
		plugins: [dts()],
		output: {
			file: `${name}.d.ts`,
			format: 'es',
		},
	}),
]
