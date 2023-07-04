import {
  formatDurationInUnits,
  formatDate,
  formatDateFull,
  formatDateShort,
  formatDateTimeFull,
  formatDateTimeShort,
  formatDateTimeUS,
  formatDateUS,
  formatTime12hr,
} from './dates';

describe('Format duration in custom number of units', () => {
  test('should receive two units with numberOfUnits = 2', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2019-10-02 23:00:59');
    expect(
      formatDurationInUnits(startDate, endDate, { numberOfUnits: 2 })
    ).toBe('5 years 9 months');
  });

  test('should receive 0 days if start and end dates are same', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2014-01-01 00:00:00');
    expect(formatDurationInUnits(startDate, endDate)).toBe('0 days');
  });

  test('should receive custom fallback text if start and end dates are same', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2014-01-01 00:00:00');
    expect(
      formatDurationInUnits(startDate, endDate, {
        fallBackDuration: 'instantly',
      })
    ).toBe('instantly');
  });

  test('should delimiter use comma', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2019-10-02 23:00:59');
    expect(formatDurationInUnits(startDate, endDate, { delimiter: ', ' })).toBe(
      '5 years, 9 months, 1 day, 23 hours, 59 seconds'
    );
  });

  test('should throw error if start date is after end date if not allowed', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2013-01-01 00:00:00');
    expect(() => formatDurationInUnits(startDate, endDate)).toThrowError(
      'Start date is after end date'
    );
  });

  test('should not throw error if start date is after end date if allowed', () => {
    const startDate = new Date('2014-05-31 10:20:30');
    const endDate = new Date('2013-01-01 00:00:00');
    expect(
      formatDurationInUnits(startDate, endDate, {
        canEndDateBeLessThanStartDate: true,
      })
    ).toBe('1 year 4 months 30 days 10 hours 20 minutes 30 seconds');
  });

  test('should throw error if number of units is less than 1', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2019-10-02 23:00:59');
    expect(() =>
      formatDurationInUnits(startDate, endDate, { numberOfUnits: 0 })
    ).toThrowError('Number of units must be between 1 and 6');
  });

  test('should throw error if number of units is greater than 6', () => {
    const startDate = new Date('2014-01-01 00:00:00');
    const endDate = new Date('2019-10-02 23:00:59');
    expect(() =>
      formatDurationInUnits(startDate, endDate, { numberOfUnits: 7 })
    ).toThrowError('Number of units must be between 1 and 6');
  });
});

describe('Format dates', () => {
  test('should format date with a format', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDate(date, 'yyyy-MM-dd')).toBe('2019-10-02');
  });

  test('should format full date', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateFull(date)).toBe('Oct 02, 2019');
  });

  test('should format short date', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateShort(date)).toBe('Oct 02');
  });

  test('should format date with US format', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateUS(date)).toBe('10/02/2019');
  });

  test('should format full date format', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateTimeFull(date)).toBe('Oct 02, 2019 11:00 PM');
  });

  test('should format short date format', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateTimeShort(date)).toBe('Oct 02 11:00 PM');
  });

  test('should format date time with US format', () => {
    const date = new Date('2019-10-02 23:00:59');
    expect(formatDateTimeUS(date)).toBe('10/02/2019 11:00 PM');
  });

  test('should format time with 12hr format', () => {
    expect(formatTime12hr('2019-10-02 23:45:59')).toBe('11:45 PM');
  });
});
