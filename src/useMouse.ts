import { useEffect, useState } from 'react'

export type MouseOptions = {
	/**
	 * The X coordinate of the mouse pointer in local (DOM content) coordinates.
	 *
	 * @readonly
	 */
	clientX: number

	/**
	 * The Y coordinate of the mouse pointer in local (DOM content) coordinates.
	 *
	 * @readonly
	 */
	clientY: number

	/**
	 * The X coordinate of the mouse pointer relative to the whole document.
	 *
	 * @readonly
	 */
	pageX: number

	/**
	 * The Y coordinate of the mouse pointer relative to the whole document.
	 *
	 * @readonly
	 */
	pageY: number
}

/**
 * Return a stateful value of mouse coordinate.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
 * @returns The coordinate of `pageX`, `pageY`, `clientX` and `clientY`
 */
export function useMouse(): MouseOptions {
	const [mouse, setMouse] = useState({} as MouseOptions)

	function init(ev: MouseEvent) {
		if (typeof window !== undefined) {
			setMouse({
				clientX: ev.clientX,
				clientY: ev.clientY,
				pageX: ev.pageX,
				pageY: ev.pageY,
			})
		}
	}

	useEffect(() => {
		window.addEventListener('mousemove', init)
		window.removeEventListener('mousemove', init)
	}, [mouse.clientX, mouse.clientY, mouse.pageX, mouse.pageY])

	return {
		clientX: mouse.clientX,
		clientY: mouse.clientY,
		pageX: mouse.pageX,
		pageY: mouse.pageY,
	}
}
