import { FormatFullNameOptions, FormatStringOptions } from './string.type';
/**
 * Formats a string based on the specified options.
 * Use a custom callback if necessary.
 * @param str The string to format.
 * @param options The options to use when formatting the string.
 * @returns The formatted string.
 */
export declare function formatString(str?: string, options?: FormatStringOptions): string;
/**
 * Formats a full name based on the specified options.
 * Use a custom callback if necessary.
 * @param firstName The first name to format.
 * @param lastName The last name to format.
 * @param options The options to use when formatting the full name.
 * @returns The formatted full name.
 */
export declare function formatFullName(firstName?: string, lastName?: string, options?: FormatFullNameOptions): string;
