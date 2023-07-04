import { FormatFullNameOptions, FormatStringOptions } from './string.type';

/**
 * Formats a string based on the specified options.
 * Use a custom callback if necessary.
 * @param str The string to format.
 * @param options The options to use when formatting the string.
 * @returns The formatted string.
 */
export function formatString(
  str?: string,
  options?: FormatStringOptions
): string {
  const { fallback, type, fn } = options ?? {};
  if (str === undefined) {
    if (fallback === undefined) {
      throw new Error('Fallback is required when string is undefined');
    }
    return fallback;
  }
  if (type && fn) {
    throw new Error('Cannot specify both type and string manipulation fn');
  }
  if (fn) {
    return fn(str);
  }
  if (type) {
    switch (type) {
      case 'title':
        return str
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      case 'capitalFirst':
        return str.charAt(0).toUpperCase() + str.slice(1);
      case 'camel':
        return str
          .split(' ')
          .map((word, index) =>
            index === 0
              ? word.charAt(0).toLowerCase() + word.slice(1)
              : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join('');
      case 'kebab':
        return str.replace(/\s+/g, '-').toLowerCase();
      case 'snake':
        return str.replace(/\s+/g, '_').toLowerCase();
      case 'lower':
        return str.toLowerCase();
      case 'upper':
        return str.toUpperCase();
      default:
        throw new Error('Invalid type');
    }
  }
  return str;
}

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
