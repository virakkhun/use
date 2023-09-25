/**
 * Auto remove event listener
 *
 * @type void
 */

import { useEffect } from 'react'

type EventMapType = keyof WindowEventMap
type ListenerType = EventListenerOrEventListenerObject

export function useEventListener<
	MaybeType extends ListenerType = ListenerType,
	MaybeDep = React.DependencyList,
>(type: EventMapType, handler: MaybeType, deps?: MaybeDep[]) {
	return useEffect(() => {
		window.addEventListener(type, handler)

		return () => window.removeEventListener(type, handler)
	}, [deps])
}
