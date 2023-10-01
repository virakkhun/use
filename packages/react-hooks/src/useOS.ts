import { useEffect, useState } from 'react'

export type OS = 'Android' | 'iOS' | 'iPadOS' | 'macOS' | 'Window' | ''

enum Devices {
	ANDROID = 'Android',
	IPHONE = 'iPhone',
	IPAD = 'iPad',
	MAC = 'Mac',
	WINDOW = 'Window',
}

const getOS = (userAgent: string): OS => {
	if (userAgent.includes(Devices.ANDROID)) return 'Android'
	if (userAgent.includes(Devices.IPAD)) return 'iPadOS'
	if (userAgent.includes(Devices.IPHONE)) return 'iOS'
	if (userAgent.includes(Devices.MAC)) return 'macOS'
	if (userAgent.includes(Devices.WINDOW)) return 'Window'
	return ''
}

/**
 * @function useOS
 * @description a function use to capture the OS such as Android, iOS, iPadOS, macOS, Window.
 * it will return empty string when the above os can't be detected
 * @returns `'Android' | 'iOS' | 'iPadOS' | 'macOS' | 'Window' | ''`
 * @default ```const [platform, setPlatform] = useState<OS>('') ```
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-os
 */

export function useOS() {
	const [os, setOs] = useState<OS>('')

	const init = () => {
		setOs(() => getOS(navigator.userAgent))
	}

	useEffect(init, [os])

	return { os }
}
