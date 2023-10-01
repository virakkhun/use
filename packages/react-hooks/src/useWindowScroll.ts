import { useState } from 'react'
import { useEventListener } from './useEventLister'

export type WindowScroll = {
	/**
	 * `scrollX`
	 */
	scrollX: number

	/**
	 * `scrollY`
	 */
	scrollY: number
}

/**
 * Return stateful value when scroll.
 *
 * @returns `scrollX` & `scrollY`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-window-scroll
 */
export function useWindowScroll(): WindowScroll {
	const [{ scrollX, scrollY }, setScroll] = useState<WindowScroll>({
		scrollX: 0,
		scrollY: 0,
	})

	const init = () => {
		setScroll(() => ({
			scrollX: window.scrollX,
			scrollY: window.scrollY,
		}))
	}

	useEventListener('scroll', init, [scrollX, scrollY])

	return {
		scrollX,
		scrollY,
	}
}
