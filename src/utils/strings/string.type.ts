export type FormatType =
  | 'title'
  | 'capitalFirst'
  | 'camel'
  | 'kebab'
  | 'snake'
  | 'lower'
  | 'upper';

export type FormatStringOptions = {
  type?: FormatType;
  fn?: (str: string) => string;
  fallback?: string;
};

export type FormatFullNameOptions = FormatStringOptions;
