type FormatDurationInUnitsOptions = {
    numberOfUnits?: number;
    canEndDateBeLessThanStartDate?: boolean;
    delimiter?: string;
    fallBackDuration?: string;
};

/**
 * Formats the duration between two dates in the specified number of units
 * @param startDate The start of the interval
 * @param endDate The end of the interval
 * @param options Options to pass for calculation duration in units
 * @returns A string representing the duration between the start and end date in the specified number of units
 *
 * @example
 * ```typescript
 * formatDurationInUnits('2021-01-01', '2021-01-02', { numberOfUnits: 2 });
 * // => '1 day'
 *
 * formatDurationInUnits('2021-01-01', '2021-02-02', { numberOfUnits: 2, delimiter: ', ' });
 * // => '1 month, 1 day'
 * ```
 */
declare function formatDurationInUnits(startDate: Date | string | number, endDate: Date | string | number, options?: FormatDurationInUnitsOptions): string;

type FormatStringOptions = {
    type?: 'title' | 'capitalFirst' | 'camel' | 'kebab' | 'snake' | 'lower' | 'upper';
    fn?: (str: string) => string;
    fallback?: string;
};

/**
 * Formats a string based on the specified options.
 * Use a custom callback if necessary.
 * @param str The string to format.
 * @param options The options to use when formatting the string.
 * @returns The formatted string.
 */
declare function formatString(str?: string, options?: FormatStringOptions): string;

export { formatDurationInUnits, formatString };
