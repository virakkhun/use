import { useOS } from '@virakkhun/react-hooks'
import * as React from 'react'

export const UseOS = () => {
	const { os } = useOS()

	return <p>{os}</p>
}
