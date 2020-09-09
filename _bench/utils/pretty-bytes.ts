"use strict";

const BYTE_UNITS = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const BIBYTE_UNITS = [
  "B",
  "kiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB",
];

const BIT_UNITS = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit",
];

const BIBIT_UNITS = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit",
];

/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/
const toLocaleString = (number: number, locale?: string | boolean) => {
  let result = number.toString();
  if (typeof locale === "string") {
    result = number.toLocaleString(locale);
  } else if (locale === true) {
    result = number.toLocaleString();
  }

  return result;
};

interface Options {
  /**
  Include plus sign for positive numbers. If the difference is exactly zero a space character will be prepended instead for better alignment.
  @default false
  */
  readonly signed?: boolean;

  /**
  - If `false`: Output won't be localized.
  - If `true`: Localize the output using the system/browser locale.
  - If `string`: Expects a [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) (For example: `en`, `de`, …)
  __Note:__ Localization should generally work in browsers. Node.js needs to be [built](https://github.com/nodejs/node/wiki/Intl) with `full-icu` or `system-icu`. Alternatively, the [`full-icu`](https://github.com/unicode-org/full-icu-npm) module can be used to provide support at runtime.
  @default false
  */
  readonly locale?: boolean | string;

  /**
  Format the number as [bits](https://en.wikipedia.org/wiki/Bit) instead of [bytes](https://en.wikipedia.org/wiki/Byte). This can be useful when, for example, referring to [bit rate](https://en.wikipedia.org/wiki/Bit_rate).
  @default false
  ```
  import prettyBytes = require('pretty-bytes');
  prettyBytes(1337, {bits: true});
  //=> '1.34 kbit'
  ```
  */
  readonly bits?: boolean;

  /**
  Format the number using the [Binary Prefix](https://en.wikipedia.org/wiki/Binary_prefix) instead of the [SI Prefix](https://en.wikipedia.org/wiki/SI_Prefix). This can be useful for presenting memory amounts. However, this should not be used for presenting file sizes.
  @default false
  ```
  import prettyBytes = require('pretty-bytes');
  prettyBytes(1000, {binary: true});
  //=> '1000 bit'
  prettyBytes(1024, {binary: true});
  //=> '1 kiB'
  ```
  */
  readonly binary?: boolean;
}

export function prettyBytes(number: number, options?: Options) {
  if (!Number.isFinite(number)) {
    throw new TypeError(
      `Expected a finite number, got ${typeof number}: ${number}`
    );
  }

  options = Object.assign({ bits: false, binary: false }, options);
  const UNITS = options.bits
    ? options.binary
      ? BIBIT_UNITS
      : BIT_UNITS
    : options.binary
    ? BIBYTE_UNITS
    : BYTE_UNITS;

  if (options.signed && number === 0) {
    return " 0 " + UNITS[0];
  }

  const isNegative = number < 0;
  const prefix = isNegative ? "-" : options.signed ? "+" : "";

  if (isNegative) {
    number = -number;
  }

  if (number < 1) {
    const numberString = toLocaleString(number, options.locale);
    return prefix + numberString + " " + UNITS[0];
  }

  const exponent = Math.min(
    Math.floor(
      options.binary
        ? Math.log(number) / Math.log(1024)
        : Math.log10(number) / 3
    ),
    UNITS.length - 1
  );
  number = Number(
    (number / Math.pow(options.binary ? 1024 : 1000, exponent)).toPrecision(3)
  );
  const numberString = toLocaleString(number, options.locale);

  const unit = UNITS[exponent];

  return prefix + numberString + " " + unit;
}
