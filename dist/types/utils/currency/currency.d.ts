/**
 * Formats a given amount as US currency.
 * @param amount - The amount to format as currency.
 * @returns A string representing the formatted currency.
 *
 * @example
 * ```typescript
 * formatUSCurrency(10); // '$10.00'
 * formatUSCurrency(10.7454); // '$10.75'
 * formatUSCurrency(100000.7); // '$100,000.70'
 * ```
 */
export declare function formatUSCurrency(amount: number): string;
