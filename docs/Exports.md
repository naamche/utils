# @naamche/utils

## Table of contents

### Modules

- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)

### Functions

- [formatDate](../wiki/Exports#formatdate)
- [formatDateFull](../wiki/Exports#formatdatefull)
- [formatDateShort](../wiki/Exports#formatdateshort)
- [formatDateTimeFull](../wiki/Exports#formatdatetimefull)
- [formatDateTimeShort](../wiki/Exports#formatdatetimeshort)
- [formatDateTimeUS](../wiki/Exports#formatdatetimeus)
- [formatDateUS](../wiki/Exports#formatdateus)
- [formatDurationInUnits](../wiki/Exports#formatdurationinunits)
- [formatFullName](../wiki/Exports#formatfullname)
- [formatString](../wiki/Exports#formatstring)
- [formatTime12hr](../wiki/Exports#formattime12hr)
- [formatTimestampDynamic](../wiki/Exports#formattimestampdynamic)
- [formatUSCurrency](../wiki/Exports#formatuscurrency)
- [getInitials](../wiki/Exports#getinitials)
- [sanitizeAndCall](../wiki/Exports#sanitizeandcall)
- [stringToColor](../wiki/Exports#stringtocolor)

## Functions

### formatDate

▸ **formatDate**(`date`, `dateFnsFormat`): `string`

Formats a date to a string using the specified format string.

**`Example`**

```typescript
formatDate(new Date(), 'MMM dd, yyyy');
// => 'Jan 01, 2022'

formatDate('2022-01-01T12:00:00Z', 'MMM dd');
// => 'Jan 01'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |
| `dateFnsFormat` | `string` | The format string to use for formatting the date |

#### Returns

`string`

A string representing the formatted date using the specified format string

#### Defined in

[utils/dates/dates.ts:250](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L250)

___

### formatDateFull

▸ **formatDateFull**(`date`): `string`

Formats a date to the full format string 'MMM dd, yyyy'

**`Example`**

```typescript
formatDateFull(new Date());
// => 'Jan 01, 2022'

formatDateFull('2022-01-01');
// => 'Jan 01, 2022'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the full format string 'MMM dd, yyyy'

#### Defined in

[utils/dates/dates.ts:123](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L123)

___

### formatDateShort

▸ **formatDateShort**(`date`): `string`

Formats a date to the short format string 'MMM dd'

**`Example`**

```typescript
formatDateShort(new Date());
// => 'Jan 01'

formatDateShort('2022-01-01');
// => 'Jan 01'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the short format string 'MMM dd'

#### Defined in

[utils/dates/dates.ts:141](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L141)

___

### formatDateTimeFull

▸ **formatDateTimeFull**(`date`): `string`

Formats a date to the full date and time format string 'MMM dd, yyyy hh:mm a'

**`Example`**

```typescript
formatDateTimeFull(new Date());
// => 'Jan 01, 2022 12:00 AM'

formatDateTimeFull('2022-01-01T12:00:00Z');
// => 'Jan 01, 2022 12:00 AM'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the full date and time format string 'MMM dd, yyyy hh:mm a'

#### Defined in

[utils/dates/dates.ts:177](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L177)

___

### formatDateTimeShort

▸ **formatDateTimeShort**(`date`): `string`

Formats a date to the short date and time format string 'MMM dd hh:mm a'

**`Example`**

```typescript
formatDateTimeShort(new Date());
// => 'Jan 01 12:00 AM'

formatDateTimeShort('2022-01-01T12:00:00Z');
// => 'Jan 01 12:00 AM'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the short date and time format string 'MMM dd hh:mm a'

#### Defined in

[utils/dates/dates.ts:195](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L195)

___

### formatDateTimeUS

▸ **formatDateTimeUS**(`date`): `string`

Formats a date to the US date and time format string 'MM/dd hh:mm a'

**`Example`**

```typescript
formatDateTimeUS(new Date());
// => '01/01 12:00 AM'

formatDateTimeUS('2022-01-01T12:00:00Z');
// => '01/01 12:00 AM'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the US date and time format string 'MM/dd hh:mm a'

#### Defined in

[utils/dates/dates.ts:213](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L213)

___

### formatDateUS

▸ **formatDateUS**(`date`): `string`

Formats a date to the US date format 'MM/dd/yyyy'

**`Example`**

```typescript
formatDateUS(new Date());
// => '01/01/2022'

formatDateUS('2022-01-01');
// => '01/01/2022'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted date in the US date format 'MM/dd/yyyy'

#### Defined in

[utils/dates/dates.ts:159](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L159)

___

### formatDurationInUnits

▸ **formatDurationInUnits**(`startDate`, `endDate`, `options?`): `string`

Formats the duration between two dates in the specified number of units

**`Example`**

```typescript
formatDurationInUnits('2021-01-01', '2021-01-02', { numberOfUnits: 2 });
// => '1 day'

formatDurationInUnits('2021-01-01', '2021-02-02', { numberOfUnits: 2, delimiter: ', ' });
// => '1 month, 1 day'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startDate` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The start of the interval |
| `endDate` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The end of the interval |
| `options?` | [`FormatDurationInUnitsOptions`](../wiki/%3Cinternal%3E#formatdurationinunitsoptions) | Options to pass for calculation duration in units |

#### Returns

`string`

A string representing the duration between the start and end date in the specified number of units

#### Defined in

[utils/dates/dates.ts:48](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L48)

___

### formatFullName

▸ **formatFullName**(`firstName?`, `lastName?`, `options?`): `string`

Formats a full name based on the specified options.
Use a custom callback if necessary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstName?` | `string` | The first name to format. |
| `lastName?` | `string` | The last name to format. |
| `options?` | [`FormatStringOptions`](../wiki/%3Cinternal%3E#formatstringoptions) | The options to use when formatting the full name. |

#### Returns

`string`

The formatted full name.

#### Defined in

[utils/strings/name.ts:14](https://github.com/naamche/utils/blob/07c6f6c/src/utils/strings/name.ts#L14)

___

### formatString

▸ **formatString**(`str?`, `options?`): `string`

Formats a string based on the specified options.
Use a custom callback if necessary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str?` | `string` | The string to format. |
| `options?` | [`FormatStringOptions`](../wiki/%3Cinternal%3E#formatstringoptions) | The options to use when formatting the string. |

#### Returns

`string`

The formatted string.

#### Defined in

[utils/strings/string.ts:10](https://github.com/naamche/utils/blob/07c6f6c/src/utils/strings/string.ts#L10)

___

### formatTime12hr

▸ **formatTime12hr**(`date`): `string`

Formats a date to the 12-hour time format string 'hh:mm a'

**`Example`**

```typescript
formatTime12hr(new Date());
// => '12:00 am'

formatTime12hr('2022-01-01T12:00:00Z');
// => '12:00 am'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The date to format |

#### Returns

`string`

A string representing the formatted time in the 12-hour time format string 'hh:mm a'

#### Defined in

[utils/dates/dates.ts:231](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L231)

___

### formatTimestampDynamic

▸ **formatTimestampDynamic**(`timestamp`): `string`

Formats a timestamp to a dynamic string based on its proximity to the current date.

**`Example`**

```typescript
formatTimestampDynamic(new Date());
// => '12:00 am'

formatTimestampDynamic('2022-01-01T12:00:00Z');
// => '01/01/2022'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) | The timestamp to format |

#### Returns

`string`

A string representing the formatted timestamp based on its proximity to the current date

#### Defined in

[utils/dates/dates.ts:270](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L270)

___

### formatUSCurrency

▸ **formatUSCurrency**(`amount`): `string`

Formats a given amount as US currency.

**`Example`**

```typescript
formatUSCurrency(10); // '$10.00'
formatUSCurrency(10.7454); // '$10.75'
formatUSCurrency(100000.7); // '$100,000.70'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to format as currency. |

#### Returns

`string`

A string representing the formatted currency.

#### Defined in

[utils/currency/currency.ts:13](https://github.com/naamche/utils/blob/07c6f6c/src/utils/currency/currency.ts#L13)

___

### getInitials

▸ **getInitials**(`fullName`, `maxLength?`): `string`

Returns the initials of a full name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fullName` | `string` | `undefined` | The full name to get the initials from. |
| `maxLength` | `number` | `2` | The maximum number of initials to return. |

#### Returns

`string`

The initials of the full name.

#### Defined in

[utils/strings/name.ts:39](https://github.com/naamche/utils/blob/07c6f6c/src/utils/strings/name.ts#L39)

___

### sanitizeAndCall

▸ **sanitizeAndCall**<`T`\>(`func`): (`date`: [`RawDate`](../wiki/%3Cinternal%3E#rawdate)) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`date`: [`RawDate`](../wiki/%3Cinternal%3E#rawdate)) => `T` |

#### Returns

`fn`

▸ (`date`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`RawDate`](../wiki/%3Cinternal%3E#rawdate) |

##### Returns

`T`

#### Defined in

[utils/dates/dates.ts:18](https://github.com/naamche/utils/blob/07c6f6c/src/utils/dates/dates.ts#L18)

___

### stringToColor

▸ **stringToColor**(`str?`, `options?`): `string`

Converts a string to a unique HSL color code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str?` | `string` | The string to convert to a color code. |
| `options?` | [`StringToColorOptions`](../wiki/%3Cinternal%3E#stringtocoloroptions) | The options to use when converting the string to a color code. |

#### Returns

`string`

A unique HSL color code generated from the given string.

#### Defined in

[utils/colors/colors.ts:9](https://github.com/naamche/utils/blob/07c6f6c/src/utils/colors/colors.ts#L9)
