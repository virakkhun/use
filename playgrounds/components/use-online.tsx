import React from 'react'
import { useOnline } from 'urh-react-hooks'

export const UseIsOnline = () => {
	const { isOnline } = useOnline()
	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}
