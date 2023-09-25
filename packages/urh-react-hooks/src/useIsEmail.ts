import { useState } from 'react'

export type isEmail = {
	isEmail: boolean

	/**
	 * Check the input value.
	 *
	 * @type void
	 */
	checkIfEmail(): void
}

/**
 * Return a boolean value if the it is an email format.
 *
 * @initial `isEmail = false`
 *
 * @returns `isEmail` & `checkIfEmail()`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-is-email
 */
export function useIsEmail(value: string): isEmail {
	const [isEmail, setIsEmail] = useState<boolean>(false)

	const regex = new RegExp(
		/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	)

	const checkIfEmail = () => {
		setIsEmail(regex.test(value))
	}

	return {
		isEmail,
		checkIfEmail,
	}
}
