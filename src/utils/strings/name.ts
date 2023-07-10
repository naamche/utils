import { map, words } from 'lodash';

import { formatString } from './string';
import { FormatFullNameOptions } from './string.type';

/**
 * Formats a full name based on the specified options.
 * Use a custom callback if necessary.
 * @param firstName The first name to format.
 * @param lastName The last name to format.
 * @param options The options to use when formatting the full name.
 * @returns The formatted full name.
 */
export function formatFullName(
  firstName?: string,
  lastName?: string,
  options?: FormatFullNameOptions
): string {
  if (firstName && lastName) {
    return formatString(`${firstName} ${lastName}`, options);
  }

  if (firstName) {
    return formatString(firstName, options);
  }

  if (lastName) {
    return formatString(lastName, options);
  }
  return '';
}

/**
 * Returns the initials of a full name.
 * @param fullName The full name to get the initials from.
 * @param maxLength The maximum number of initials to return.
 * @returns The initials of the full name.
 */
export function getInitials(fullName: string, maxLength = 2): string {
  if (maxLength < 0) {
    throw new RangeError('Max length cannot be less than 0');
  }
  const nameWords: string[] = words(fullName);

  const initials: string[] = map(nameWords, (word) =>
    word.charAt(0).toUpperCase()
  );

  return initials.slice(0, Math.min(maxLength, initials.length)).join('');
}
