import { useState } from 'react'
import { useEventListener } from './types'

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
	const [mouse, setMouse] = useState<MouseOptions>({
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
	})

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

	useEventListener<any, keyof number[]>('mousemove', init, [
		mouse.clientX,
		mouse.clientY,
		mouse.pageX,
		mouse.pageY,
	])

	return {
		clientX: mouse.clientX,
		clientY: mouse.clientY,
		pageX: mouse.pageX,
		pageY: mouse.pageY,
	}
}
