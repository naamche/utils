export type FormatDurationInUnitsOptions = {
  numberOfUnits?: number;
  throwIfEndDateLowerThanStartDate?: boolean;
  delimiter?: string;
  fallBackDuration?: string;
};

export type RawDate = Date | number | string;
