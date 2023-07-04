export type FormatStringOptions = {
  type?:
    | 'title'
    | 'capitalFirst'
    | 'camel'
    | 'kebab'
    | 'snake'
    | 'lower'
    | 'upper';
  fn?: (str: string) => string;
  fallback?: string;
};
