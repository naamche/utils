import {
  Duration,
  format,
  formatDuration,
  intervalToDuration,
  isAfter,
  isFuture,
  isThisYear,
  isToday,
  isTomorrow,
  isValid,
  isYesterday,
  sub,
} from 'date-fns';
import { FormatDurationInUnitsOptions, RawDate } from './date.type';

export function sanitizeAndCall<T>(
  func: (date: RawDate) => T
): (date: RawDate) => T {
  return function (date: RawDate): T {
    if (!date) throw new Error('Date is required to avoid 1970/01/01');
    if (date instanceof Date) return func(date);

    const dateObj = new Date(date);
    if (!isValid(dateObj)) throw new Error('Date is invalid');

    return func(dateObj);
  };
}

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
export function formatDurationInUnits(
  startDate: RawDate,
  endDate: RawDate,
  options?: FormatDurationInUnitsOptions
): string {
  const {
    numberOfUnits = 6,
    throwIfEndDateLowerThanStartDate = false,
    delimiter,
    fallBackDuration = '0 days',
  } = options ?? {};
  if (throwIfEndDateLowerThanStartDate) {
    if (new Date(startDate) > new Date(endDate)) {
      throw new RangeError('Start date is after end date');
    }
  }
  if (numberOfUnits < 1 || numberOfUnits > 6) {
    throw new RangeError('Number of units must be between 1 and 6');
  }
  const getDuration = (duration: Duration): Duration => {
    const intervalRankMap = new Map<number, keyof Duration>();
    intervalRankMap.set(0, 'years');
    intervalRankMap.set(1, 'months');
    intervalRankMap.set(2, 'days');
    intervalRankMap.set(3, 'hours');
    intervalRankMap.set(4, 'minutes');
    intervalRankMap.set(5, 'seconds');

    const sortedIntervals = Array.from(intervalRankMap.entries())
      .filter(([key]) => {
        const interval = intervalRankMap.get(key);
        return interval !== undefined && duration[interval] !== 0;
      })
      .sort(([a], [b]) => a - b)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(([_, interval]) => interval);

    const highestUnits = sortedIntervals.slice(0, numberOfUnits);
    const remainingIntervals = sortedIntervals.slice(numberOfUnits);

    const updatedDuration: Duration = highestUnits.reduce((acc, interval) => {
      return { ...acc, [interval]: duration[interval] };
    }, {});

    return remainingIntervals.reduce((acc, interval) => {
      return { ...acc, [interval]: 0 };
    }, updatedDuration);
  };
  return (
    formatDuration(
      getDuration(
        intervalToDuration({
          start: new Date(startDate),
          end: new Date(endDate),
        })
      ),
      { delimiter }
    ) || fallBackDuration
  );
}

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
export function formatDateFull(date: RawDate): string {
  return formatDate(date, 'MMM dd, yyyy');
}

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
export function formatDateShort(date: RawDate): string {
  return formatDate(date, 'MMM dd');
}

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
export function formatDateUS(date: RawDate): string {
  return formatDate(date, 'MM/dd/yyyy');
}

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
export function formatDateTimeFull(date: RawDate): string {
  return formatDate(date, 'MMM dd, yyyy hh:mm a');
}

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
export function formatDateTimeShort(date: RawDate): string {
  return formatDate(date, 'MMM dd hh:mm a');
}

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
export function formatDateTimeUS(date: RawDate): string {
  return formatDate(date, 'MM/dd/yyyy hh:mm a');
}

/**
 * Formats a date to the 12-hour time format string 'hh:mm a'
 * @param date The date to format
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
export function formatTime12hr(date: RawDate): string {
  return formatDate(date, 'h:mm aaa');
}

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
export function formatDate(date: RawDate, dateFnsFormat: string): string {
  return sanitizeAndCall((sanitizedDate) =>
    format(new Date(sanitizedDate), dateFnsFormat)
  )(date);
}

/**
 * Formats a timestamp to a dynamic string based on its proximity to the current date.
 * @param timestamp The timestamp to format
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
export function formatTimestampDynamic(timestamp: RawDate): string {
  return sanitizeAndCall((date: RawDate) => {
    const dateObj = new Date(date);
    const today = new Date();
    if (isTomorrow(dateObj)) {
      return 'Tomorrow';
    }
    if (isToday(dateObj)) {
      return formatTime12hr(dateObj);
    }
    if (isYesterday(dateObj)) {
      return 'Yesterday';
    }
    if (isFuture(dateObj)) {
      return formatDateUS(dateObj);
    }
    if (isAfter(dateObj, sub(today, { weeks: 1 }))) {
      return format(dateObj, 'EEE');
    }
    if (isThisYear(dateObj)) {
      return formatDateShort(dateObj);
    }
    return formatDateUS(dateObj);
  })(timestamp);
}
