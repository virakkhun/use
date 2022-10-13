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

	function online() {
		setIsOnline(true)
	}

	function offline() {
		setIsOnline(false)
	}

	useEffect(() => {
		window.addEventListener('online', online)
		window.addEventListener('offline', offline)

		return () => (
			window.removeEventListener('online', online),
			window.removeEventListener('offline', offline)
		)
	}, [isOnline])

	return {
		isOnline,
	}
}
