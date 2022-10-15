import { useEffect, useState } from 'react'
import { useEventListener } from './types'

export type WindowScrollOption = {
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
export function useWindowScroll(): WindowScrollOption {
	const [scroll, setScroll] = useState<WindowScrollOption>({
		scrollX: 0,
		scrollY: 0,
	})

	const init = () => {
		if (typeof window !== 'undefined') {
			setScroll({
				scrollX: window.scrollX,
				scrollY: window.scrollY,
			})
		}
	}

	useEventListener<any, keyof number[]>('scroll', init, [
		scroll.scrollX,
		scroll.scrollY,
	])

	return {
		scrollX,
		scrollY,
	}
}
