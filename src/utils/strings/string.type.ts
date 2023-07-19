/**
 * Represents the available format types for a string.
 */
export type FormatType =
  | 'title'
  | 'capitalFirst'
  | 'camel'
  | 'kebab'
  | 'snake'
  | 'lower'
  | 'upper';

/**
 * Defines the format options for a string.
 */
export type FormatStringOptions = {
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
export type FormatFullNameOptions = FormatStringOptions;
