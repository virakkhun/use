import { useEffect, useState } from 'react'

export interface useOnline {
	isOnline: boolean
}

/**
 * Return a boolean value based on the internet connection.
 *
 * @default `true`
 *
 * @return `boolean`
 *
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-online
 */
export function useOnline(): useOnline {
	const [isOnline, setIsOnline] = useState<boolean>(true)

	const toggleOnlineState = () => {
		setIsOnline((online) => !online)
	}

	useEffect(() => {
		window.addEventListener('online', toggleOnlineState)
		window.addEventListener('offline', toggleOnlineState)

		return () => (
			window.removeEventListener('online', toggleOnlineState),
			window.removeEventListener('offline', toggleOnlineState)
		)
	}, [isOnline])

	return {
		isOnline,
	}
}
