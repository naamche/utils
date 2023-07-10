import { formatUSCurrency } from '.';

describe('Format currency', () => {
  test('should format US currency', () => {
    expect(formatUSCurrency(10.7454)).toBe('$10.75');
  });
});
