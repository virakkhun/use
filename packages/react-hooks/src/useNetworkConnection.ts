import { useEffect, useState } from 'react'

export type NetworkConnection = {
	/**
	 * Current type of network
	 */
	effectiveType: '4g' | '3g' | '2g' | 'slow-2g'

	/**
	 * Return downlink speeds
	 */
	downlink: number

	/**
	 * effective round-trip time of the current connection
	 */
	rtt: number

	saveData: boolean
}

/**
 * Return a current status of network.
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-network-connection
 */
export function useNetworkConnection() {
	const [network, setNetwork] = useState({} as NetworkConnection)

	const init = () => {
		const navigator = window.navigator

		if (!navigator)
			throw new Error('navigator does not exist in window object.')

		if (!('connection' in navigator))
			throw new Error('connection object does not exist in navigator')

		const nav = navigator.connection as NetworkConnection

		setNetwork(() => ({
			downlink: nav.downlink,
			effectiveType: nav.effectiveType,
			rtt: nav.rtt,
			saveData: nav.saveData,
		}))
	}

	useEffect(() => {
		init()
	}, [network?.downlink, network?.effectiveType, network?.rtt])

	return {
		network,
	}
}
