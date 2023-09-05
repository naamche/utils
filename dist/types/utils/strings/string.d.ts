import { FormatStringOptions } from './string.type';
/**
 * Formats a string based on the specified options.
 * Use a custom callback if necessary.
 * @param str The string to format.
 * @param {FormatStringOptions} options The options to use when formatting the string.
 * @returns The formatted string.
 */
export declare function formatString(str?: string, options?: FormatStringOptions): string;
/**
 * Formats a string with an appropriate article ('a' or 'an') based on the first letter of the string.
 * @param str - The string to format.
 * @param lowercase - @default false Whether to return the article in lowercase.
 * @returns The formatted string with the appropriate article.
 */
export declare const formatStringWithArticle: (str: string, lowercase?: boolean) => string;
