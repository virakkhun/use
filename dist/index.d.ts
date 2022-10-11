interface useOnline {
    isOnline: boolean;
}
/**
 * Return a boolean value based on the internet connection.
 *
 * @default `true`
 *
 * @return `boolean`
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
 */
declare function useIntersectionObserver(options: intersectionObserverOptions): void;

/**
 * A hook use to accept only interger of an input field
 * * use Ctrl + Backspace to clear all value in input field
 * @closure setValue
 * @closure handleKey
 * @return value , setValue, handleKey
 * @example
 * ```ts
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
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
 */
declare function useNetworkConnection(options?: options): {
    network: options | undefined;
};

export { intersectionObserverOptions, useAcceptOnlyInteger, useIntersectionObserver, useLanguage, useNetworkConnection, useOnline };
