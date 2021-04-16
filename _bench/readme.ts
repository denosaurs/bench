import { join, parse } from "./deps.ts";

import type { Config, Result } from "./types.ts";
import { Options, tablemark } from "./utils/tablemark.ts";
import { prettyBytes } from "./utils/pretty_bytes.ts";

function latency(result: Result): [Record<string, unknown>[], Options] {
  const { latency } = result;
  const obj = {
    name: "**Latency**",
    p2_5: `${latency.p2_5} ms`,
    p50: `${latency.p50} ms`,
    p97_5: `${latency.p97_5} ms`,
    avg: `${latency.average} ms`,
    stdev: `${latency.stddev} ms`,
    max: `${latency.max} ms`,
  };
  const opts: Options = {
    columns: ["**Stat**", "2.5%", "50%", "95.5%", "Avg", "Stdev", "Max"],
  };
  return [[obj], opts];
}

function performance(result: Result): [Record<string, unknown>[], Options] {
  const { requests } = result;
  const { throughput } = result;
  const req = {
    name: "**Req/Sec**",
    p1: requests.p1,
    p2_5: requests.p2_5,
    p50: requests.p50,
    p97_5: requests.p97_5,
    avg: requests.average,
    stdev: requests.stddev,
    min: requests.min,
    total: requests.total,
  };
  const bytes = {
    name: "**Bytes/Sec**",
    p1: prettyBytes(throughput.p1),
    p2_5: prettyBytes(throughput.p2_5),
    p50: prettyBytes(throughput.p50),
    p97_5: prettyBytes(throughput.p97_5),
    avg: prettyBytes(throughput.average),
    stdev: prettyBytes(throughput.stddev),
    min: prettyBytes(throughput.min),
    total: prettyBytes(throughput.total),
  };
  const opts: Options = {
    columns: ["**Stat**", "1%", "2.5%", "50%", "95.5%", "Avg", "Stdev", "Min"],
  };
  return [[req, bytes], opts];
}

if (import.meta.main) {
  const templatePath = "TEMPLATE.md";
  const readmePath = "README.md";
  const configPath = "benchmarks.yml";

  const template = await Deno.readTextFile(templatePath);

  const configSource = await Deno.readTextFile(configPath);
  const config = parse(configSource) as Config;

  const markdown: string[] = [];
  const toc: string[] = [];

  toc.push("## Table of Contents\n");

  // Do overview section
  toc.push("- [Overview](#overview)");
  markdown.push(`## Overview`);
  for (const group of config.groups) {
    let results: {
      [key: string]: {
        average: number;
        total: number;
      };
    } = {};
    for (const benchmark of group.benchmarks) {
      const resultPath = join(benchmark.dir, "results", `${group.name}.json`);
      const resultSource = await Deno.readTextFile(resultPath);
      const result = JSON.parse(resultSource) as Result;
      results[benchmark.name] = {
        average: result.requests.average,
        total: result.requests.total,
      };
    }
    let table =
      "| **Framework** | **Average** | **Total** |\n| --- | --- | --- |\n";

    for (
      const [key, { average, total }] of Object.entries(results).sort(
        ([, { average: a }], [, { average: b }]) => a - b,
      )
    ) {
      table += `| ${key} | ${average} | ${total} |\n`;
    }

    markdown.push(table);
  }

  for (const group of config.groups) {
    markdown.push(`## benchmark \`${group.name}\``);
    toc.push(`- [benchmark ${group.name}](#benchmark-${group.name})`);
    for (const benchmark of group.benchmarks) {
      const resultPath = join(benchmark.dir, "results", `${group.name}.json`);
      const resultSource = await Deno.readTextFile(resultPath);
      const result = JSON.parse(resultSource) as Result;
      const [lat, latOps] = latency(result);
      const latTable = tablemark(lat, latOps);
      const [perf, perfOpts] = performance(result);
      const perfTable = tablemark(perf, perfOpts);

      markdown.push(`### [${benchmark.name}](${benchmark.info.url})`);
      toc.push(`  - [${benchmark.name}](#${benchmark.name})`);

      markdown.push(`> ${benchmark.info.desc}`);
      markdown.push();
      markdown.push(perfTable);
      markdown.push(latTable);
    }
  }

  markdown.unshift(toc.join("\n"));
  markdown.push("---");
  markdown.push(`<p align="center">Generated ${new Date().toISOString()}</p>`);

  const results = markdown.join("\n\n");
  const readme = template.replace("<!--RESULTS--->", results);
  await Deno.writeTextFile(readmePath, readme);
}
