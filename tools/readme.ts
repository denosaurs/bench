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
    let table: [string, number, number, number, string][] = [];

    for (const [name, framework] of Object.entries(frameworks)) {
      if (framework.benchmarks[identifier]) {
        const result = results[identifier][name];
        table.push([
          framework.name,
          result.rps.mean,
          result.rps.stddev,
          result.rps.max,
          ""
        ]);
      }
    }

    table = table.sort((a, b) => b[1] - a[1]);
    const max = table[0][1];
    table = table.map((row) => {
      row[4] = `${((row[1] / max) * 100).toFixed(0)}%`;
      return row;
    });

    markdown += `\n${
      markdownTable([
        ["Framework", "Mean", "Stddev", "Max", "Relative"],
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
              "Mean",
              "Stddev",
              "Max",
            ],
            [
              result.rps.mean.toFixed(2),
              result.rps.stddev.toFixed(2),
              result.rps.max.toFixed(2),
            ],
          ])
        }\n`;
        markdown += `\n${
          markdownTable([
            [
              "**Stat**",
              "10",
              "25",
              "50",
              "75",
              "90",
              "95",
              "99",
            ],
            [
              "**Req/Sec**",
              result.rps.percentiles.p10.toFixed(2),
              result.rps.percentiles.p25.toFixed(2),
              result.rps.percentiles.p50.toFixed(2),
              result.rps.percentiles.p75.toFixed(2),
              result.rps.percentiles.p90.toFixed(2),
              result.rps.percentiles.p95.toFixed(2),
              result.rps.percentiles.p99.toFixed(2),
            ],
            [
              "**Latency**",
              prettyMilliseconds(result.latencyPercentiles.p10),
              prettyMilliseconds(result.latencyPercentiles.p25),
              prettyMilliseconds(result.latencyPercentiles.p50),
              prettyMilliseconds(result.latencyPercentiles.p75),
              prettyMilliseconds(result.latencyPercentiles.p90),
              prettyMilliseconds(result.latencyPercentiles.p95),
              prettyMilliseconds(result.latencyPercentiles.p99),
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
