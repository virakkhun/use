import { useState } from 'react'
import { useEventListener } from './useEventLister'

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
 * @returns The coordinate of `pageX`, `pageY`, `clientX` and `clientY`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-mouse-move
 */
export function useMouseMove(): MouseOptions {
	const [{ clientX, clientY, pageX, pageY }, setMouse] = useState<MouseOptions>(
		{
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
		},
	)

	const init = (ev: MouseEvent) => {
		setMouse(() => ({
			clientX: ev.clientX,
			clientY: ev.clientY,
			pageX: ev.pageX,
			pageY: ev.pageY,
		}))
	}

	useEventListener('mousemove', () => init, [clientX, clientY, pageX, pageY])

	return {
		clientX,
		clientY,
		pageX,
		pageY,
	}
}
