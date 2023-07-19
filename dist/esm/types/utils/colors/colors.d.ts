import { StringToColorOptions } from './colors.type';
/**
 * Converts a string to a unique HSL color code.
 * @param str The string to convert to a color code.
 * @param {StringToColorOptions} options The options to use when converting the string to a color code.
 * @returns A unique HSL color code generated from the given string.
 */
export declare function stringToColor(str?: string, options?: StringToColorOptions): string;
