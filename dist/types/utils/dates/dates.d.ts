import { FormatDurationInUnitsOptions } from './date.type';
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
export declare function formatDurationInUnits(startDate: Date | string | number, endDate: Date | string | number, options?: FormatDurationInUnitsOptions): string;
/**
 * Formats a date to the full format string 'MMM dd, yyyy'
 * @param date The date to format
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
export declare function formatDateFull(date: Date | number | string): string;
/**
 * Formats a date to the short format string 'MMM dd'
 * @param date The date to format
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
export declare function formatDateShort(date: Date | number | string): string;
/**
 * Formats a date to the US date format 'MM/dd/yyyy'
 * @param date The date to format
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
export declare function formatDateUS(date: Date | number | string): string;
/**
 * Formats a date to the full date and time format string 'MMM dd, yyyy hh:mm a'
 * @param date The date to format
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
export declare function formatDateTimeFull(date: Date | string): string;
/**
 * Formats a date to the short date and time format string 'MMM dd hh:mm a'
 * @param date The date to format
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
export declare function formatDateTimeShort(date: Date | number | string): string;
/**
 * Formats a date to the US date and time format string 'MM/dd hh:mm a'
 * @param date The date to format
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
export declare function formatDateTimeUS(date: Date | number | string): string;
/**
 * Formats a date to the 12-hour time format string 'hh:mm a'
 * @param date The date to format
 * @returns A string representing the formatted time in the 12-hour time format string 'hh:mm a'
 *
 * @example
 * ```typescript
 * formatTime12hr(new Date());
 * // => '12:00 AM'
 *
 * formatTime12hr('2022-01-01T12:00:00Z');
 * // => '12:00 AM'
 * ```
 */
export declare function formatTime12hr(date: Date | number | string): string;
/**
 * Formats a date using the specified format string
 * @param date The date to format
 * @param dateFnsFormat The format string to use
 * @returns A string representing the formatted date
 *
 * @example
 * ```typescript
 * formatDate(new Date(), 'MMM dd, yyyy');
 * // => 'Jan 01, 2022'
 *
 * formatDate('2022-01-01', 'MMM dd');
 * // => 'Jan 01'
 * ```
 */
export declare function formatDate(date: Date | number | string, dateFnsFormat: string): string;
