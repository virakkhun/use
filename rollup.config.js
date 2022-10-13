import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import packages from './package.json'
import { terser } from 'rollup-plugin-terser'

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
		external: ['react', 'react-dom'],
	}),
	bundle({
		plugins: [dts()],
		output: {
			file: `${name}.d.ts`,
			format: 'es',
		},
	}),
]
