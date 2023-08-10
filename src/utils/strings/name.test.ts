import { formatFullName, getInitials } from '.';

describe('Full name util', () => {
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
    expect(formatFullName(null, 'doe morgan', { type: 'capitalFirst' })).toBe(
      'Doe morgan'
    );
  });

  test('should format a full name with no options', () => {
    expect(formatFullName(undefined, undefined, { type: 'snake' })).toBe('');
  });
});

describe('Name initial util', () => {
  test('should return initials in 2 letters', () => {
    expect(getInitials('john doe')).toBe('JD');
  });

  test('should return initials in custom length', () => {
    expect(getInitials('Harry Hermione Ron', 3)).toBe('HHR');
  });

  test('should return the maximum possible initials', () => {
    expect(getInitials('John Does', 6)).toBe('JD');
  });

  test('should return empty string if no name is provided', () => {
    expect(getInitials('')).toBe('');
  });

  test('should return empty if the max number is 0', () => {
    expect(getInitials('John Doe', 0)).toBe('');
  });

  test('should raise error if the max number is less than 0', () => {
    expect(() => getInitials('', -1)).toThrow(
      'Max length cannot be less than 0'
    );
  });
});
