import { useEffect, useState } from 'react'

export type geolocationOption = {
	latitude: number | null
	longitude: number | null
	accuracy: number | null
	heading: number | null
	speed: number | null
	altitude: number | null
	altitudeAccuracy: number | null
}

export type geoError = {
	code: number | null
	message: string | null
	PERMISSION_DENIED: number | null
}

export type geoLocationReturn = {
	/**
	 * Geolocation coords type.
	 *
	 * @return `coords`
	 */
	coords: geolocationOption

	/**
	 * Geolocation errors type.
	 *
	 * @return `error`
	 */
	error: geoError
}

/**
 * Return a stateful value of current geolocation.
 *
 * @returns `coords` & `errors`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-geo
 */
export function useGeolocaiton(): geoLocationReturn {
	const [geo, setGeo] = useState<geolocationOption>({
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		speed: null,
		accuracy: null,
		latitude: null,
		longitude: null,
	})

	const [geoError, setGeoError] = useState<geoError>({
		code: null,
		message: null,
		PERMISSION_DENIED: null,
	})

	const init = () => {
		/**
		 * Geolocation options.
		 *
		 * @tiemout 5000
		 * @enableHighAccuracy true
		 * @maximumAge 0
		 */
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		}

		if (navigator && 'geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(s) => {
					success(s.coords)
				},
				(e) => {
					error(e)
				},
				options,
			)
		}

		const success = (coords: geolocationOption) => {
			const {
				altitude,
				altitudeAccuracy,
				heading,
				speed,
				accuracy,
				latitude,
				longitude,
			} = coords

			setGeo(() => ({
				accuracy: accuracy,
				latitude: latitude,
				longitude: longitude,
				altitude: altitude,
				altitudeAccuracy: altitudeAccuracy,
				heading: heading,
				speed: speed,
			}))
		}

		const error = (payload: geoError) => {
			setGeoError(() => ({
				code: payload.code,
				message: payload.message,
				PERMISSION_DENIED: payload.PERMISSION_DENIED,
			}))
		}
	}

	useEffect(() => {
		init()
	}, [geo.latitude, geo.longitude, geo.heading, geo.speed])

	return {
		coords: {
			accuracy: geo.accuracy,
			altitude: geo.altitude,
			altitudeAccuracy: geo.altitudeAccuracy,
			heading: geo.heading,
			latitude: geo.latitude,
			longitude: geo.longitude,
			speed: geo.speed,
		},
		error: {
			code: geoError.code,
			message: geoError.message,
			PERMISSION_DENIED: geoError.PERMISSION_DENIED,
		},
	}
}
