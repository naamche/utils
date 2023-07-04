import { Duration, formatDuration, intervalToDuration } from 'date-fns';
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
export function formatDurationInUnits(
  startDate: Date | string | number,
  endDate: Date | string | number,
  options?: FormatDurationInUnitsOptions
): string {
  const {
    numberOfUnits = 6,
    canEndDateBeLessThanStartDate = false,
    delimiter,
    fallBackDuration = '0 days',
  } = options ?? {};
  if (!canEndDateBeLessThanStartDate) {
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
