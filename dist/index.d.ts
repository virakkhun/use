interface useOnline {
    isOnline: boolean;
}
/**
 * Return a boolean value based on the internet connection.
 *
 * @default `true`
 *
 * @return `boolean`
 *
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-online
 */
declare function useOnline(): useOnline;

interface intersectionObserverOptions {
    threshold?: number;
    rootMargin?: string | undefined;
    root?: Element | Document | null | undefined;
    /**
     * a target where you want it to observe
     */
    target: string;
    /**
     * a class where you add to style base on your preferences
     */
    className: string;
}
/**
 * Trigger an element when reaching the target.
 * @params `threshold` , `rootMargin`, `root`, `target`, `className`
 * @types number, string | px | em | rem | etc, Element | Document | null | undefined, string, string
 * @return void
 * @see https://urh-react-hooks.vercel.app/docs/hooks/user-intersect
 */
declare function useIntersectionObserver(options: intersectionObserverOptions): void;

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
declare function useAcceptOnlyInteger(): {
    value: string;
    setValue: (value: string) => void;
    handleKey: (event: any) => boolean;
};

/**
 * Return a current language
 * @return language
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-language
 */
declare function useLanguage(): {
    lang: string;
};

declare type options = {
    /**
     * Current type of network
     */
    effectiveType: '4g' | '3g' | '2g' | 'slow-2g';
    /**
     * Return downlink speeds
     */
    downlink: number;
    /**
     * effective round-trip time of the current connection
     */
    rtt: number;
    saveData: boolean;
};
/**
 * Return a current status of network.
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-network-connection
 */
declare function useNetworkConnection(options?: options): {
    network: options | undefined;
};

declare type MouseOptions = {
    /**
     * The X coordinate of the mouse pointer in local (DOM content) coordinates.
     *
     * @readonly
     */
    clientX: number;
    /**
     * The Y coordinate of the mouse pointer in local (DOM content) coordinates.
     *
     * @readonly
     */
    clientY: number;
    /**
     * The X coordinate of the mouse pointer relative to the whole document.
     *
     * @readonly
     */
    pageX: number;
    /**
     * The Y coordinate of the mouse pointer relative to the whole document.
     *
     * @readonly
     */
    pageY: number;
};
/**
 * Return a stateful value of mouse coordinate.
 *
 * @returns The coordinate of `pageX`, `pageY`, `clientX` and `clientY`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-mouse-move
 */
declare function useMouseMove(): MouseOptions;

declare type geolocationOption = {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
    heading: number | null;
    speed: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
};
declare type geoError = {
    code: number | null;
    message: string | null;
    PERMISSION_DENIED: number | null;
};
declare type geoLocationReturn = {
    /**
     * Geolocation coords type.
     *
     * @return `coords`
     */
    coords: geolocationOption;
    /**
     * Geolocation errors type.
     *
     * @return `error`
     */
    error: geoError;
};
/**
 * Return a stateful value of current geolocation.
 *
 * @returns `coords` & `errors`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-geo
 */
declare function useGeolocaiton(): geoLocationReturn;

declare type windowSizeOption = {
    /**
     * The width of the window
     */
    width: number;
    /**
     * The height of
     */
    height: number;
};
/**
 * Return a stateful value of current window size.
 *
 * @returns the `width` and the `height`
 * @see https://urh-react-hooks.vercel.app/docs/hooks/use-window-size
 */
declare function useWindowSize(): windowSizeOption;

export { MouseOptions, geoError, geoLocationReturn, geolocationOption, intersectionObserverOptions, useAcceptOnlyInteger, useGeolocaiton, useIntersectionObserver, useLanguage, useMouseMove, useNetworkConnection, useOnline, useWindowSize, windowSizeOption };
