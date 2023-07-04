import { StringToColorOptions } from './colors.type';

/**
 * Converts a string to a unique HSL color code.
 * @param str The string to convert to a color code.
 * @returns A unique HSL color code generated from the given string.
 */
export function stringToColor(str?: string, options?: StringToColorOptions) {
  const {
    saturation = 70,
    lightness = 30,
    fallbackColor = 'hsl(0, 0%, 80%)',
  } = options ?? {};

  if (!str) {
    return fallbackColor;
  }

  if (saturation < 0 || saturation > 100) {
    throw new RangeError('Saturation must be between 0 and 100');
  }

  if (lightness < 0 || lightness > 100) {
    throw new RangeError('Lightness must be between 0 and 100');
  }

  /**
   * Calculates a hash code for the given string.
   * @param str The string to calculate the hash code for.
   * @returns The hash code for the given string.
   */
  function hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      // eslint-disable-next-line no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  return `hsl(${hashCode(str) % 360}, ${saturation}%, ${lightness}%)`;
}
