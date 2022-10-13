import { useEffect, useState } from 'react'

export type windowSizeOption = {
	/**
	 * The width of the window
	 */
	width: number

	/**
	 * The height of
	 */
	height: number
}

/**
 * Return a stateful value of current window size.
 *
 * @returns the `width` and the `height`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-window-size
 */
export function useWindowSize(): windowSizeOption {
	const [windowSize, setWindowSize] = useState<windowSizeOption>({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	const init = () => {
		if (typeof window !== null) {
			const win = window

			setWindowSize({
				height: win.innerHeight,
				width: win.innerWidth,
			})
		}
	}

	useEffect(() => {
		window.addEventListener('resize', init)

		return () => window.removeEventListener('resize', init)
	}, [windowSize.width, windowSize.height])

	return {
		height: windowSize.height,
		width: windowSize.width,
	}
}
