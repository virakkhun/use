import { useEffect, useState } from 'react'

type options = {
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
export function useNetworkConnection(options?: options) {
	const [network, setNetwork] = useState<typeof options>({} as options)

	const init = () => {
		const navigator = window?.navigator

		if (navigator && 'connection' in navigator) {
			const nav = (navigator as any).connection as options
			setNetwork({
				downlink: nav.downlink,
				effectiveType: nav.effectiveType,
				rtt: nav.rtt,
				saveData: nav.saveData,
			})
		}
	}

	useEffect(() => {
		init()
	}, [network?.downlink, network?.effectiveType, network?.rtt])

	return {
		network,
	}
}
