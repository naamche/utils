# Module: <internal\>

## Table of contents

### Type Aliases

- [FormatDurationInUnitsOptions](../wiki/%3Cinternal%3E#formatdurationinunitsoptions)
- [FormatStringOptions](../wiki/%3Cinternal%3E#formatstringoptions)
- [FormatType](../wiki/%3Cinternal%3E#formattype)
- [RawDate](../wiki/%3Cinternal%3E#rawdate)
- [StringToColorOptions](../wiki/%3Cinternal%3E#stringtocoloroptions)

## Type Aliases

### FormatDurationInUnitsOptions

Ƭ **FormatDurationInUnitsOptions**: `Object`

Defines the options for formatting a duration in units.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `delimiter?` | `string` | The delimiter to use between each unit. Defaults to a space. |
| `fallBackDuration?` | `string` | The fallback duration to use if the duration is zero. Defaults to "0 days". |
| `numberOfUnits?` | `number` | The number of units to format the duration in. Defaults to 6. |
| `throwIfEndDateLowerThanStartDate?` | `boolean` | If true, an error will be thrown if the end date is lower than the start date. Defaults to false. |

#### Defined in

[utils/dates/date.type.ts:4](https://github.com/naamche/utils/blob/6e94a3b/src/utils/dates/date.type.ts#L4)

___

### FormatStringOptions

Ƭ **FormatStringOptions**: `Object`

Defines the format options for a string.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallback?` | `string` | A fallback string to use if the input string is null or undefined. |
| `fn?` | (`str`: `string`) => `string` | A custom function to apply to the string. |
| `type?` | [`FormatType`](../wiki/%3Cinternal%3E#formattype) | The format type to apply to the string. |

#### Defined in

[utils/strings/string.type.ts:16](https://github.com/naamche/utils/blob/6e94a3b/src/utils/strings/string.type.ts#L16)

___

### FormatType

Ƭ **FormatType**: ``"title"`` \| ``"capitalFirst"`` \| ``"camel"`` \| ``"kebab"`` \| ``"snake"`` \| ``"lower"`` \| ``"upper"``

Represents the available format types for a string.

#### Defined in

[utils/strings/string.type.ts:4](https://github.com/naamche/utils/blob/6e94a3b/src/utils/strings/string.type.ts#L4)

___

### RawDate

Ƭ **RawDate**: `Date` \| `number` \| `string`

Represents a raw date value that can be used to create a `Date` object.
This can be a `Date` object, a number representing the number of milliseconds since January 1, 1970, or a string representing a date.

#### Defined in

[utils/dates/date.type.ts:27](https://github.com/naamche/utils/blob/6e94a3b/src/utils/dates/date.type.ts#L27)

___

### StringToColorOptions

Ƭ **StringToColorOptions**: `Object`

Options for converting a string to a color.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackColor?` | `string` | Fallback color to use if the generated color is invalid. Must be a valid CSS color string. **`Default`** ```ts 'hsl(0, 0%, 80%)'' ``` |
| `lightness?` | `number` | Lightness value for the generated color. Must be a number between 0 and 100. **`Default`** ```ts 30 ``` |
| `saturation?` | `number` | Saturation value for the generated color. Must be a number between 0 and 100. **`Default`** ```ts 70 ``` |

#### Defined in

[utils/colors/colors.type.ts:4](https://github.com/naamche/utils/blob/6e94a3b/src/utils/colors/colors.type.ts#L4)
