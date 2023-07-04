import { formatFullName, formatString } from './string';

describe('String utils', () => {
  test('should title case a string', () => {
    expect(formatString('title case is these', { type: 'title' })).toBe(
      'Title Case Is These'
    );
  });

  test('should capitalize a string', () => {
    expect(
      formatString('capitalize this string', { type: 'capitalFirst' })
    ).toBe('Capitalize this string');
  });

  test('should camel case a string', () => {
    expect(formatString('camel case this string', { type: 'camel' })).toBe(
      'camelCaseThisString'
    );
  });

  test('should kebab case a string', () => {
    expect(formatString('Kebab case This stRing', { type: 'kebab' })).toBe(
      'kebab-case-this-string'
    );
  });

  test('should snake case a string', () => {
    expect(formatString('snake caSe This string', { type: 'snake' })).toBe(
      'snake_case_this_string'
    );
  });

  test('should lowercase a string', () => {
    expect(formatString('LowerCAse THis sTring', { type: 'lower' })).toBe(
      'lowercase this string'
    );
  });

  test('should uppercase a string', () => {
    expect(formatString('UPPerCASE ThIS STRiNG', { type: 'upper' })).toBe(
      'UPPERCASE THIS STRING'
    );
  });

  test('should throw an error when str is undefined and fallback is not specified', () => {
    expect(() => formatString()).toThrowError(
      'Fallback is required when string is undefined'
    );
  });

  test('should return the fallback when str is undefined', () => {
    expect(formatString(undefined, { fallback: 'fallbackValue' })).toBe(
      'fallbackValue'
    );
  });

  test('should throw an error when both type and fn are specified', () => {
    expect(() =>
      formatString('string', {
        type: 'title',
        fn: (str) => str,
      })
    ).toThrowError('Cannot specify both type and string manipulation fn');
  });

  test('should return the result of the fn when fn is specified', () => {
    expect(
      formatString('string', {
        fn: (str) => str.toUpperCase(),
      })
    ).toBe('STRING');
  });

  test('should throw an error when type is invalid', () => {
    expect(() =>
      formatString('string', {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        type: 'invalidType',
      })
    ).toThrowError('Invalid type');
  });

  test('should return the string when no options are specified', () => {
    expect(formatString('string')).toBe('string');
  });
});

describe('Full name utils', () => {
  test('should format a full name', () => {
    expect(formatFullName('jane', 'doe')).toBe('jane doe');
  });

  test('should format a full name with options', () => {
    expect(
      formatFullName('john', 'doe morgan', {
        type: 'title',
      })
    ).toBe('John Doe Morgan');
  });

  test('should format a full name with a custom callback', () => {
    expect(
      formatFullName('john', 'doe morgan', {
        fn: (str) => str.toUpperCase(),
      })
    ).toBe('JOHN DOE MORGAN');
  });

  test('should format a full name with firstName only', () => {
    expect(formatFullName('john', undefined, { type: 'capitalFirst' })).toBe(
      'John'
    );
  });

  test('should format a full name with lastName only', () => {
    expect(
      formatFullName(undefined, 'doe morgan', { type: 'capitalFirst' })
    ).toBe('Doe morgan');
  });

  test('should format a full name with no options', () => {
    expect(formatFullName(undefined, undefined, { type: 'snake' })).toBe('');
  });
});
