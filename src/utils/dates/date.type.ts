export type FormatDurationInUnitsOptions = {
  numberOfUnits?: number;
  canEndDateBeLessThanStartDate?: boolean;
  delimiter?: string;
  fallBackDuration?: string;
};

export type RawDate = Date | number | string;
