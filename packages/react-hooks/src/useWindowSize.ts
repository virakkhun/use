import { useState } from 'react'
import { useEventListener } from './useEventLister'

export type WindowSize = {
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
export function useWindowSize(): WindowSize {
	const [{ height, width }, setWindowSize] = useState<WindowSize>({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	const init = () => {
		const win = window

		setWindowSize({
			height: win.innerHeight,
			width: win.innerWidth,
		})
	}

	useEventListener('resize', init, [height, width])

	return {
		height,
		width,
	}
}
