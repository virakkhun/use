import { nullOrUndefined } from '../utils/null-or-undefined.util'
import { useEventListener } from './useEventLister'

/**
 * The function trigger the callback function whenver the window is resize
 * @param callback
 */
export function useWindowResize(callback: Function) {
	const init = () => {
		if (nullOrUndefined(callback)) throw new Error('callback does not provided')

		callback()
	}

	useEventListener('resize', init)
}
