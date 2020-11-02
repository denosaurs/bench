"use strict";

import { EOL, sentenceCase } from "../deps.ts";

import { split, width } from "./text_to_chunks.ts";

const columnsWidthMin = 5;
const alignmentOptions = new Set(["LEFT", "CENTER", "RIGHT"]);
const pipeRegex = /\|/g;

const pad = (alignment: string | undefined, width: number, what: string) => {
  if (!alignment || alignment === "LEFT") {
    return what.padEnd(width);
  }

  if (alignment === "RIGHT") {
    return what.padStart(width);
  }

  // center alignment
  const remainder = (width - what.length) % 2;
  const sides = (width - what.length - remainder) / 2;

  return " ".repeat(sides) + what + " ".repeat(sides + remainder);
};

const toString = (v: string | undefined) => {
  if (typeof v === "undefined") return "";
  return String(v).replace(pipeRegex, "\\|");
};

const line = (columns: string[], gutters: boolean) =>
  (gutters ? "| " : "  ") +
  columns.join(gutters ? " | " : "   ") +
  (gutters ? " |" : "  ") +
  EOL;

const row = (
  alignments: (string | undefined)[],
  widths: number[],
  columns: string[],
  gutters: boolean,
) => {
  const width = columns.length;
  const values = new Array(width);
  const first = new Array(width);
  let height = 1;

  for (let h = 0; h < width; h++) {
    const cells = (values[h] = split(columns[h], widths[h]));
    if (cells.length > height) height = cells.length;
    first[h] = pad(alignments[h], widths[h], cells[0]);
  }

  if (height === 1) return line(first, true);

  const lines = new Array(height);
  lines[0] = line(first, true);

  for (let v = 1; v < height; v++) {
    lines[v] = new Array(width);
  }

  for (let h = 0; h < width; h++) {
    const cells = values[h];
    let v = 1;

    for (; v < cells.length; v++) {
      lines[v][h] = pad(alignments[h], widths[h], cells[v]);
    }

    for (; v < height; v++) {
      lines[v][h] = " ".repeat(widths[h]);
    }
  }

  for (let h = 1; h < height; h++) {
    lines[h] = line(lines[h], gutters);
  }

  return lines.join("");
};

export interface ColumnDetal {
  name: string;
  align: "left" | "center" | "right";
}

type Column = ColumnDetal | string;

export interface Options {
  columns: Column[];
  caseHeaders?: boolean;
  stringify?: (str: unknown) => string;
  wrap?: {
    width?: number;
    gutters?: boolean;
  };
}

export function tablemark(
  input: Record<string, unknown>[],
  opts?: Options,
): string {
  if (!Array.isArray(input)) {
    throw new TypeError(`Expected an Array, got ${typeof input}`);
  }

  const options = Object.assign(
    {
      stringify: toString,
    },
    opts,
    {
      wrap: Object.assign(
        {
          width: Infinity,
          gutters: false,
        },
        opts && opts.wrap,
      ),
    },
  );

  const { stringify } = options;
  const { gutters, width: columnsMaxWidth } = options.wrap;

  const keys = Object.keys(input[0]);

  const titles = keys.map((key, i) => {
    if (Array.isArray(options.columns) && options.columns[i]) {
      const col = options.columns[i];
      if (typeof col === "string") {
        return col;
      } else if (col.name) {
        return col.name;
      }
    }

    if (options.caseHeaders === false) return key;

    return sentenceCase(key);
  });

  const widths = input.reduce(
    (sizes, item) =>
      keys.map((key, i) =>
        Math.max(width(stringify(item[key]), columnsMaxWidth), sizes[i])
      ),
    titles.map((t) => Math.max(columnsWidthMin, width(t, columnsMaxWidth))),
  );

  const alignments = keys.map((_, i) => {
    if (Array.isArray(options.columns)) {
      const col = options.columns[i];
      if (col && typeof col !== "string" && col.align) {
        const align = String(col.align).toUpperCase();

        if (!alignmentOptions.has(align)) {
          throw new TypeError(`Unknown alignment, got ${col.align}`);
        }

        return align;
      }
    }
  });

  let table = "";

  // header line
  table += row(alignments, widths, titles, gutters);

  // header separator
  table += line(
    alignments.map(
      (align, i) =>
        (align === "LEFT" || align === "CENTER" ? ":" : "-") +
        "-".repeat(widths[i] - 2) +
        (align === "RIGHT" || align === "CENTER" ? ":" : "-"),
    ),
    true,
  );

  // table body
  table += input
    .map((item, i) =>
      row(
        alignments,
        widths,
        keys.map((key) => stringify(item[key])),
        gutters,
      )
    )
    .join("");

  return table;
}
