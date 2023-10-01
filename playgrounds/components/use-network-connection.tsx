import React from 'react'
import { useNetworkConnection } from 'urh-react-hooks'

export const UseNetworkConnection = () => {
	const { network } = useNetworkConnection()
	return <p>{network ? JSON.stringify(network) : JSON.stringify(network)}</p>
}
