import { stringToColor } from './colors';

describe('Colors utility', () => {
  it('should return a color code from string', () => {
    expect(stringToColor('Color Code')).toBe('hsl(266, 70%, 30%)');
  });

  it('should return a color code from string with custom saturation and lightness', () => {
    expect(stringToColor('Color Code', { saturation: 50, lightness: 40 })).toBe(
      'hsl(266, 50%, 40%)'
    );
  });

  it('should return a fixed code if string is empty', () => {
    expect(stringToColor()).toBe('hsl(0, 0%, 80%)');
  });

  it('should return a fixed code if string is empty with custom fallback color', () => {
    expect(stringToColor('', { fallbackColor: 'hsl(0, 0%, 50%)' })).toBe(
      'hsl(0, 0%, 50%)'
    );
  });

  it('should throw an error if saturation is less than 0', () => {
    expect(() => stringToColor('Color Code', { saturation: -1 })).toThrow(
      'Saturation must be between 0 and 100'
    );
  });

  it('should throw an error if saturation is greater than 100', () => {
    expect(() => stringToColor('Color Code', { saturation: 101 })).toThrow(
      'Saturation must be between 0 and 100'
    );
  });

  it('should throw an error if lightness is less than 0', () => {
    expect(() => stringToColor('Color Code', { lightness: -1 })).toThrow(
      'Lightness must be between 0 and 100'
    );
  });

  it('should throw an error if lightness is greater than 100', () => {
    expect(() => stringToColor('Color Code', { lightness: 101 })).toThrow(
      'Lightness must be between 0 and 100'
    );
  });
});
