import {
  join,
  markdownTable,
  prettyBytes,
  prettyMilliseconds,
} from "./deps.ts";
import {
  getBenchmarkResults,
  getBenchmarks,
  getFrameworks,
  workdir,
} from "./misc.ts";

const template = await Deno.readTextFile(join(workdir, "TEMPLATE.md"));

function anchorLink(header: string): string {
  return "#" +
    header.replaceAll(/[^\w- ]/g, "").replaceAll(" ", "-").toLowerCase();
}

function link(altText: string, link: string): string {
  return `[${altText}](${link})`;
}

function prettyMicroseconds(microseconds: number): string {
  return prettyMilliseconds(microseconds / 1000, {
    formatSubMilliseconds: true,
    compact: true,
  });
}

if (import.meta.main) {
  const { benchmarks } = await getBenchmarks();
  const frameworks = await getFrameworks();
  const results = await getBenchmarkResults(benchmarks, frameworks);
  const tocAnchorCounter: Record<string, number> = {};
  let markdown = "";

  // Generate table of contents
  markdown += "# Table of Contents\n";
  markdown += `- ${link("Overview", anchorLink("overview"))}\n`;
  for (const benchmark of Object.values(benchmarks)) {
    markdown += `  - ${link(benchmark.name, anchorLink(benchmark.name))}\n`;
  }

  markdown += `- ${link("Frameworks", anchorLink("frameworks"))}\n`;
  for (const framework of Object.values(frameworks)) {
    markdown += `  - ${link(framework.name, anchorLink(framework.name))}\n`;
  }

  markdown += `- ${link("Benchmarks", anchorLink("Benchmarks"))}\n`;
  for (const [identifier, benchmark] of Object.entries(benchmarks)) {
    markdown += `  - ${
      link(benchmark.name, anchorLink(`${benchmark.name}-1`))
    }\n`;

    for (const framework of Object.values(frameworks)) {
      if (framework.benchmarks[identifier]) {
        tocAnchorCounter[framework.name] ??= 0;
        tocAnchorCounter[framework.name] += 1;
        markdown += `    - ${
          link(
            framework.name,
            anchorLink(`${framework.name}${
              tocAnchorCounter[framework.name]
                ? "-" + tocAnchorCounter[framework.name]
                : ""
            }`),
          )
        }\n`;
      }
    }
  }

  // Generate overview
  markdown += "# Overview\n";
  for (const [identifier, benchmark] of Object.entries(benchmarks)) {
    markdown += `## ${benchmark.name}\n`;
    let table: [string, number, number, number][] = [];

    for (const [name, framework] of Object.entries(frameworks)) {
      if (framework.benchmarks[identifier]) {
        const { result } = results[identifier][name];
        table.push([
          framework.name,
          result.rps.mean,
          result.rps.stddev,
          result.rps.max,
        ]);
      }
    }

    table = table.sort((a, b) => b[1] - a[1]);

    markdown += `\n${
      markdownTable([
        ["Framework", "Average", "Stddev", "Max"],
        ...table.map((row) =>
          row.map((value) =>
            typeof value === "number" ? value.toFixed(2) : value
          )
        ),
      ])
    }\n`;
  }

  // Generate frameworks section
  markdown += "# Frameworks\n";
  for (const framework of Object.values(frameworks)) {
    markdown += `## ${link(framework.name, framework.website)}\n`;
    markdown += framework.description;
    markdown += "\n";
  }

  // Generate benchmark results
  markdown += "# Benchmarks\n";
  for (const [identifier, benchmark] of Object.entries(benchmarks)) {
    markdown += `## ${benchmark.name}\n`;
    markdown += benchmark.description;
    markdown += "\n";
    for (const [name, framework] of Object.entries(frameworks)) {
      if (framework.benchmarks[identifier]) {
        const { result } = results[identifier][name];
        markdown += `### ${link(framework.name, anchorLink(framework.name))}\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "Average",
              "Stddev",
              "Max",
              "50%",
              "75%",
              "90%",
              "95%",
              "99%",
            ],
            [
              "**Req/Sec**",
              result.rps.mean.toFixed(2),
              result.rps.stddev.toFixed(2),
              result.rps.max.toFixed(2),
              result.rps.percentiles["50"].toFixed(2),
              result.rps.percentiles["75"].toFixed(2),
              result.rps.percentiles["90"].toFixed(2),
              result.rps.percentiles["95"].toFixed(2),
              result.rps.percentiles["99"].toFixed(2),
            ],
            [
              "**Latency**",
              prettyMicroseconds(result.latency.mean),
              prettyMicroseconds(result.latency.stddev),
              prettyMicroseconds(result.latency.max),
              prettyMicroseconds(result.latency.percentiles["50"]),
              prettyMicroseconds(result.latency.percentiles["75"]),
              prettyMicroseconds(result.latency.percentiles["90"]),
              prettyMicroseconds(result.latency.percentiles["95"]),
              prettyMicroseconds(result.latency.percentiles["99"]),
            ],
          ])
        }\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "Read",
              "Written",
              "Total",
            ],
            [
              "**Bytes/Sec**",
              prettyBytes(result.bytesRead / result.timeTakenSeconds),
              prettyBytes(result.bytesWritten / result.timeTakenSeconds),
              prettyBytes(
                (result.bytesRead + result.bytesWritten) /
                  result.timeTakenSeconds,
              ),
            ],
          ])
        }\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "1xx",
              "2xx",
              "3xx",
              "4xx",
              "5xx",
              "Others",
              "Total",
            ],
            [
              "**Requests**",
              result.req1xx.toFixed(0),
              result.req2xx.toFixed(0),
              result.req3xx.toFixed(0),
              result.req4xx.toFixed(0),
              result.req5xx.toFixed(0),
              result.others.toFixed(0),
              (result.req1xx + result.req2xx + result.req3xx + result.req4xx +
                result.req5xx + result.others).toFixed(0),
            ],
          ])
        }\n`;
      }
    }
  }

  markdown += "\n---\n";
  markdown += `<p align="center">Generated ${new Date().toISOString()}</p>`;

  await Deno.writeTextFile(
    join(workdir, "README.md"),
    template.replace("<!--RESULTS--->", markdown),
  );
}
