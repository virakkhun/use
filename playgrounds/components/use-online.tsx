import { useOnline } from '@virakkhun/react-hooks'
import React from 'react'

export const UseIsOnline = () => {
	const { isOnline } = useOnline()
	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}
