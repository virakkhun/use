import { useReducer } from 'react'

/**
 * A hook use to accept only interger of an input field
 * * use Ctrl + Backspace to clear all value in input field
 * @returns `value` , `setValue`, `handleKey`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-accept-only-interger
 * @example
 * ```tsx
 * const { value, setValue, handleKey } = useAcceptOnlyInteger
 * return (
 *   <input
 *     type="text"
 *     value={value}
 *     onChange={(e) => setValue(e.target.value)}
 *     onKeyDown={handleKey}
 *   />
 * )
 * ```
 */
export function useAcceptOnlyInteger() {
	const keysCanBeAccept = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
	]

	const allowKey = [
		'Backspace',
		'Delete',
		'ArrowUp',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ShiftLeft',
		'AltLeft',
		'F5',
	]

	const [value, dispatch] = useReducer((state: string, action: string) => {
		return (state = action)
	}, '')

	/**
	 * Set a value
	 * @param value accept the value when pass the key
	 */
	const setValue = (value: string) => {
		dispatch(value)
	}

	/**
	 * Allow user to input only integer
	 * @param event accept keyboard event
	 */
	const handleKey = (event: any): boolean => {
		const ev = event as KeyboardEvent

		if (keysCanBeAccept.includes(ev.key) || allowKey.includes(ev.code)) {
			return true
		}

		ev.preventDefault()
		return false
	}

	return {
		value,
		setValue,
		handleKey,
	}
}
