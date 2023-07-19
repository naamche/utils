/**
 * Options for converting a string to a color.
 */
export type StringToColorOptions = {
  /**
   * Saturation value for the generated color. Must be a number between 0 and 100. Defaults to 70.
   */
  saturation?: number;
  /**
   * Lightness value for the generated color. Must be a number between 0 and 100. Defaults to 30.
   */
  lightness?: number;
  /**
   * Fallback color to use if the generated color is invalid. Must be a valid CSS color string. Defaults to 'hsl(0, 0%, 80%)'.
   */
  fallbackColor?: string;
};
