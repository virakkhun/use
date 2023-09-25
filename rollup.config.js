import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const entry = './packages/urh-react-hooks/index.ts'
const outputDir = './packages/urh-react-hooks/dist'

export default [
	{
		input: entry,
		plugins: [
			esbuild(),
			resolve({ extensions: ['.ts'] }),
			commonjs(),
			terser(),
		],
		output: [
			{
				file: `${outputDir}/index.mjs`,
				format: 'es',
			},
			{
				file: `${outputDir}/index.cjs`,
				format: 'cjs',
			},
		],
		external: ['react', 'react-dom'],
	},
	{
		input: entry,
		plugins: [dts()],
		output: [
			{
				file: `${outputDir}/index.d.ts`,
				format: 'es',
			},
		],
	},
]
