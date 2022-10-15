/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docSidebar: [
		'intro',
		{
			type: 'category',
			label: 'Hooks',
			collapsed: false,
			collapsible: true,
			items: [
				'hooks/use-accept-only-interger',
				'hooks/use-geo',
				'hooks/use-intersect',
				'hooks/use-is-email',
				'hooks/use-language',
				'hooks/use-mouse-move',
				'hooks/use-network-connection',
				'hooks/use-online',
				'hooks/use-window-scroll',
				'hooks/use-window-size',
			],
		},
	],
}

module.exports = sidebars
