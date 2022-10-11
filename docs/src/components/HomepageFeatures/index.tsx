import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
	title: string
	Svg: React.ComponentType<React.ComponentProps<'img'>>
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Easy to Use',
		Svg: require('@site/static/img/undraw_to_the_moon_re_q21i.svg').default,
		description: <>URH-react-hooks is rely on the React.</>,
	},
	{
		title: 'Focus on What Matters',
		Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
		description: <>URH-react-hooks make your day happier.</>,
	},
	{
		title: 'Powered by React',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Inspired by <a href="https://vueuse.org/">VueUse</a> &{' '}
				<a href="https://usehooks.com/">useHooks</a>
			</>
		),
	},
]

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
