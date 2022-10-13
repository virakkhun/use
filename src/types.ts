/**
 * Auto remove event listener
 *
 * @type void
 */

import { useEffect } from 'react'

type EventType = keyof WindowEventMap
type ListerType = EventListenerOrEventListenerObject

export function useEventListener<
	MaybeType extends ListerType,
	MaybeDep = React.DependencyList,
>(type: EventType, handler: MaybeType, deps?: MaybeDep[]) {
	return useEffect(() => {
		window.addEventListener(type, handler)

		return () => window.removeEventListener(type, handler)
	}, [deps])
}
