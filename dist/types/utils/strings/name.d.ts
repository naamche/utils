import { FormatFullNameOptions } from './string.type';
/**
 * Formats a full name based on the specified options.
 * Use a custom callback if necessary.
 * @param firstName The first name to format.
 * @param lastName The last name to format.
 * @param options The options to use when formatting the full name.
 * @returns The formatted full name.
 */
export declare function formatFullName(firstName?: string | null, lastName?: string | null, options?: FormatFullNameOptions): string;
/**
 * Returns the initials of a full name.
 * @param fullName The full name to get the initials from.
 * @param maxLength The maximum number of initials to return.
 * @returns The initials of the full name.
 */
export declare function getInitials(fullName: string, maxLength?: number): string;
