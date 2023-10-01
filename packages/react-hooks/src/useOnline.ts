import { useEffect, useState } from 'react'

export type ConnectionStatus = {
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
export function useOnline(): ConnectionStatus {
	const [isOnline, setIsOnline] = useState(true)

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
