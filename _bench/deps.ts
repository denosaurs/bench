import { EOL as eol } from "https://deno.land/std@0.76.0/fs/eol.ts";
export { SEP } from "https://deno.land/std@0.76.0/path/separator.ts";
export { encode } from "https://deno.land/std@0.76.0/encoding/utf8.ts";

export { join } from "https://deno.land/std@0.76.0/path/mod.ts";
export {
  parse,
  stringify,
} from "https://deno.land/std@0.76.0/encoding/yaml.ts";
export {
  sentenceCase,
} from "https://deno.land/x/gutenberg@0.1.5/case/sentence_case/mod.ts";

export const EOL = Deno.build.os === "windows" ? eol.CRLF : eol.LF;
