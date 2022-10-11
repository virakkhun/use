import { useEffect, useState } from 'react'

/**
 * Return a current language
 * @return language
 */
export function useLanguage() {
	const [lang, setLang] = useState<string>(navigator.language)

	const init = () => {
		const language = navigator.languages

		setLang(language[1])
	}

	useEffect(() => {
		init()
	}, [lang])

	return {
		lang,
	}
}
