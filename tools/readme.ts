import {
  join,
  markdownTable,
  prettyBytes,
  prettyMilliseconds as originalPrettyMilliseconds,
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

function prettyMilliseconds(microseconds: number): string {
  return originalPrettyMilliseconds(microseconds, {
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
    let table: [string, number, number, number, number, number, number][] = [];

    for (const [name, framework] of Object.entries(frameworks)) {
      if (framework.benchmarks[identifier]) {
        const result = results[identifier][name];
        table.push([
          framework.name,
          result.requests.average,
          result.requests.mean,
          result.requests.stddev,
          result.requests.min,
          result.requests.max,
          result.requests.total,
        ]);
      }
    }

    table = table.sort((a, b) => b[1] - a[1]);

    markdown += `\n${
      markdownTable([
        ["Framework", "Average", "Mean", "Stddev", "Min", "Max", "Total"],
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
        const result = results[identifier][name];
        markdown += `### ${link(framework.name, anchorLink(framework.name))}\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "Average",
              "Mean",
              "Stddev",
              "Min",
              "Max",
              "Total",
            ],
            [
              "**Req/Sec**",
              result.requests.average.toFixed(2),
              result.requests.mean.toFixed(2),
              result.requests.stddev.toFixed(2),
              result.requests.min.toFixed(2),
              result.requests.max.toFixed(2),
              result.requests.total.toFixed(2),
            ],
            [
              "**Bytes/Sec**",
              prettyBytes(result.throughput.average),
              prettyBytes(result.throughput.mean),
              prettyBytes(result.throughput.stddev),
              prettyBytes(result.throughput.min),
              prettyBytes(result.throughput.max),
              prettyBytes(result.throughput.total),
            ],
            [
              "**Latency**",
              prettyMilliseconds(result.latency.average),
              prettyMilliseconds(result.latency.mean),
              prettyMilliseconds(result.latency.stddev),
              prettyMilliseconds(result.latency.min),
              prettyMilliseconds(result.latency.max),
              "N/A",
            ],
          ])
        }\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "1",
              "2.5",
              "50",
              "90",
              "97.5",
              "99",
            ],
            [
              "**Req/Sec**",
              result.requests.p1.toFixed(2),
              result.requests.p2_5.toFixed(2),
              result.requests.p50.toFixed(2),
              result.requests.p90.toFixed(2),
              result.requests.p97_5.toFixed(2),
              result.requests.p99.toFixed(2),
            ],
            [
              "**Bytes/Sec**",
              prettyBytes(result.throughput.p1),
              prettyBytes(result.throughput.p2_5),
              prettyBytes(result.throughput.p50),
              prettyBytes(result.throughput.p90),
              prettyBytes(result.throughput.p97_5),
              prettyBytes(result.throughput.p99),
            ],
            [
              "**Latency**",
              prettyMilliseconds(result.latency.p1),
              prettyMilliseconds(result.latency.p2_5),
              prettyMilliseconds(result.latency.p50),
              prettyMilliseconds(result.latency.p90),
              prettyMilliseconds(result.latency.p97_5),
              prettyMilliseconds(result.latency.p99),
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
