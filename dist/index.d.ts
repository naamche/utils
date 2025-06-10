/**
 * Options for converting a string to a color.
 */
type StringToColorOptions = {
    /**
     * Saturation value for the generated color. Must be a number between 0 and 100.
     * @default 70
     */
    saturation?: number;
    /**
     * Lightness value for the generated color. Must be a number between 0 and 100.
     * @default 30
     */
    lightness?: number;
    /**
     * Fallback color to use if the generated color is invalid. Must be a valid CSS color string.
     * @default 'hsl(0, 0%, 80%)''
     */
    fallbackColor?: string;
};

/**
 * Converts a string to a unique HSL color code.
 * @param str The string to convert to a color code.
 * @param {StringToColorOptions} options The options to use when converting the string to a color code.
 * @returns A unique HSL color code generated from the given string.
 */
declare function stringToColor(str?: string, options?: StringToColorOptions): string;

/**
 * Formats a given amount as US currency.
 * @param amount - The amount to format as currency.
 * @returns A string representing the formatted currency.
 *
 * @example
 * ```typescript
 * formatUSCurrency(10); // '$10.00'
 * formatUSCurrency(10.7454); // '$10.75'
 * formatUSCurrency(100000.7); // '$100,000.70'
 * ```
 */
declare function formatUSCurrency(amount: number): string;

/**
 * Defines the options for formatting a duration in units.
 */
type FormatDurationInUnitsOptions = {
    /**
     * The number of units to format the duration in. Defaults to 6.
     */
    numberOfUnits?: number;
    /**
     * If true, an error will be thrown if the end date is lower than the start date. Defaults to false.
     */
    throwIfEndDateLowerThanStartDate?: boolean;
    /**
     * The delimiter to use between each unit. Defaults to a space.
     */
    delimiter?: string;
    /**
     * The fallback duration to use if the duration is zero. Defaults to "0 days".
     */
    fallBackDuration?: string;
};
/**
 * Represents a raw date value that can be used to create a `Date` object.
 * This can be a `Date` object, a number representing the number of milliseconds since January 1, 1970, or a string representing a date.
 */
type RawDate = Date | number | string;

declare function sanitizeAndCall<T>(func: (date: RawDate) => T): (date: RawDate) => T;
/**
 * Formats the duration between two dates in the specified number of units
 * @param {RawDate} startDate The start of the interval
 * @param {RawDate} endDate The end of the interval
 * @param {FormatDurationInUnitsOptions} options Options to pass for calculation duration in units
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
declare function formatDurationInUnits(startDate: RawDate, endDate: RawDate, options?: FormatDurationInUnitsOptions): string;
/**
 * Formats a date to the full format string 'MMM dd, yyyy'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the full format string 'MMM dd, yyyy'
 *
 * @example
 * ```typescript
 * formatDateFull(new Date());
 * // => 'Jan 01, 2022'
 *
 * formatDateFull('2022-01-01');
 * // => 'Jan 01, 2022'
 * ```
 */
declare function formatDateFull(date: RawDate): string;
/**
 * Formats a date to the short format string 'MMM dd'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the short format string 'MMM dd'
 *
 * @example
 * ```typescript
 * formatDateShort(new Date());
 * // => 'Jan 01'
 *
 * formatDateShort('2022-01-01');
 * // => 'Jan 01'
 * ```
 */
declare function formatDateShort(date: RawDate): string;
/**
 * Formats a date to the US date format 'MM/dd/yyyy'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the US date format 'MM/dd/yyyy'
 *
 * @example
 * ```typescript
 * formatDateUS(new Date());
 * // => '01/01/2022'
 *
 * formatDateUS('2022-01-01');
 * // => '01/01/2022'
 * ```
 */
declare function formatDateUS(date: RawDate): string;
/**
 * Formats a date to the full date and time format string 'MMM dd, yyyy hh:mm a'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the full date and time format string 'MMM dd, yyyy hh:mm a'
 *
 * @example
 * ```typescript
 * formatDateTimeFull(new Date());
 * // => 'Jan 01, 2022 12:00 AM'
 *
 * formatDateTimeFull('2022-01-01T12:00:00Z');
 * // => 'Jan 01, 2022 12:00 AM'
 * ```
 */
declare function formatDateTimeFull(date: RawDate): string;
/**
 * Formats a date to the short date and time format string 'MMM dd hh:mm a'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the short date and time format string 'MMM dd hh:mm a'
 *
 * @example
 * ```typescript
 * formatDateTimeShort(new Date());
 * // => 'Jan 01 12:00 AM'
 *
 * formatDateTimeShort('2022-01-01T12:00:00Z');
 * // => 'Jan 01 12:00 AM'
 * ```
 */
declare function formatDateTimeShort(date: RawDate): string;
/**
 * Formats a date to the US date and time format string 'MM/dd hh:mm a'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted date in the US date and time format string 'MM/dd hh:mm a'
 *
 * @example
 * ```typescript
 * formatDateTimeUS(new Date());
 * // => '01/01 12:00 AM'
 *
 * formatDateTimeUS('2022-01-01T12:00:00Z');
 * // => '01/01 12:00 AM'
 * ```
 */
declare function formatDateTimeUS(date: RawDate): string;
/**
 * Formats a date to the 12-hour time format string 'hh:mm a'
 * @param {RawDate} date The date to format
 * @returns A string representing the formatted time in the 12-hour time format string 'hh:mm a'
 *
 * @example
 * ```typescript
 * formatTime12hr(new Date());
 * // => '12:00 am'
 *
 * formatTime12hr('2022-01-01T12:00:00Z');
 * // => '12:00 am'
 * ```
 */
declare function formatTime12hr(date: RawDate): string;
/**
 * Formats a date to a string using the specified format string.
 * @param {RawDate} date The date to format
 * @param dateFnsFormat The format string to use for formatting the date
 * @returns A string representing the formatted date using the specified format string
 *
 * @example
 * ```typescript
 * formatDate(new Date(), 'MMM dd, yyyy');
 * // => 'Jan 01, 2022'
 *
 * formatDate('2022-01-01T12:00:00Z', 'MMM dd');
 * // => 'Jan 01'
 * ```
 */
declare function formatDate(date: RawDate, dateFnsFormat: string): string;
/**
 * Formats a timestamp to a dynamic string based on its proximity to the current date.
 * @param {RawDate} timestamp The timestamp to format
 * @returns A string representing the formatted timestamp based on its proximity to the current date
 *
 * @example
 * ```typescript
 * formatTimestampDynamic(new Date());
 * // => '12:00 am'
 *
 * formatTimestampDynamic('2022-01-01T12:00:00Z');
 * // => '01/01/2022'
 * ```
 */
declare function formatTimestampDynamic(timestamp: RawDate): string;
/**
 * Timezone-agnostic date formatting:
 * - Uses UTC for "Today/Yesterday/Tomorrow" checks
 * - Falls back to date-fns's format() for other cases
 */
declare function formatDateSmart(date: RawDate): string;

/**
 * Represents the available format types for a string.
 */
type FormatType = 'title' | 'capitalFirst' | 'camel' | 'kebab' | 'snake' | 'lower' | 'upper';
/**
 * Defines the format options for a string.
 */
type FormatStringOptions = {
    /**
     * The format type to apply to the string.
     */
    type?: FormatType;
    /**
     * A custom function to apply to the string.
     */
    fn?: (str: string) => string;
    /**
     * A fallback string to use if the input string is null or undefined.
     */
    fallback?: string;
};
/**
 * Defines the format options for a full name string.
 */
type FormatFullNameOptions = FormatStringOptions;

/**
 * Formats a full name based on the specified options.
 * Use a custom callback if necessary.
 * @param firstName The first name to format.
 * @param lastName The last name to format.
 * @param options The options to use when formatting the full name.
 * @returns The formatted full name.
 */
declare function formatFullName(firstName?: string | null, lastName?: string | null, options?: FormatFullNameOptions): string;
/**
 * Returns the initials of a full name.
 * @param fullName The full name to get the initials from.
 * @param maxLength The maximum number of initials to return.
 * @returns The initials of the full name.
 */
declare function getInitials(fullName: string, maxLength?: number): string;

/**
 * Formats a string based on the specified options.
 * Use a custom callback if necessary.
 * @param str The string to format.
 * @param {FormatStringOptions} options The options to use when formatting the string.
 * @returns The formatted string.
 */
declare function formatString(str?: string, options?: FormatStringOptions): string;
/**
 * Formats a string with an appropriate article ('a' or 'an') based on the first letter of the string.
 * @param str - The string to format.
 * @param lowercase - @default false Whether to return the article in lowercase.
 * @returns The formatted string with the appropriate article.
 */
declare const formatStringWithArticle: (str: string, lowercase?: boolean) => string;

export { formatDate, formatDateFull, formatDateShort, formatDateSmart, formatDateTimeFull, formatDateTimeShort, formatDateTimeUS, formatDateUS, formatDurationInUnits, formatFullName, formatString, formatStringWithArticle, formatTime12hr, formatTimestampDynamic, formatUSCurrency, getInitials, sanitizeAndCall, stringToColor };
