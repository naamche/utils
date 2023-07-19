/**
 * Defines the options for formatting a duration in units.
 */
export type FormatDurationInUnitsOptions = {
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
export type RawDate = Date | number | string;
