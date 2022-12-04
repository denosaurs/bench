import { join, markdownTable, prettyMilliseconds } from "./deps.ts";
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

function prettySeconds(seconds: number): string {
  return prettyMilliseconds(seconds * 1000, {
    formatSubMilliseconds: true,
    compact: true,
  });
}

async function getChartUrl(chart: unknown): Promise<string> {
  const repsonse = await fetch("https://quickchart.io/chart/create", {
    method: "POST",
    body: JSON.stringify({
      width: 800,
      height: 400,
      backgroundColor: "rgb(255, 255, 255)",
      format: "png",
      chart: chart,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return (await repsonse.json()).url;
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
          result.rps.mean ?? 0,
          result.rps.stddev ?? 0,
          result.rps.max ?? 0,
          "",
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

    // Generate chart
    try {
      const chart = {
        type: "bar",
        data: {
          labels: table.map((item) => item[0]),
          datasets: [
            {
              label: "Mean",
              backgroundColor: "rgb(255, 99, 132)",
              data: table.map((item) => item[1]),
            },
            {
              label: "Max",
              backgroundColor: "rgb(54, 162, 235)",
              data: table.map((item) => item[3]),
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      };
      const chartUrl = await getChartUrl(chart);

      if (typeof chartUrl === "string") {
        markdown += `![Chart](${chartUrl})\n`;
      }
    } catch (error) {
      console.error(error);
    }
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
              (result.rps.mean ?? 0).toFixed(2),
              (result.rps.stddev ?? 0).toFixed(2),
              (result.rps.max ?? 0).toFixed(2),
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
              (result.rps.percentiles.p10 ?? 0).toFixed(2),
              (result.rps.percentiles.p25 ?? 0).toFixed(2),
              (result.rps.percentiles.p50 ?? 0).toFixed(2),
              (result.rps.percentiles.p75 ?? 0).toFixed(2),
              (result.rps.percentiles.p90 ?? 0).toFixed(2),
              (result.rps.percentiles.p95 ?? 0).toFixed(2),
              (result.rps.percentiles.p99 ?? 0).toFixed(2),
            ],
            [
              "**Latency**",
              prettySeconds(result.latencyPercentiles.p10 ?? 0),
              prettySeconds(result.latencyPercentiles.p25 ?? 0),
              prettySeconds(result.latencyPercentiles.p50 ?? 0),
              prettySeconds(result.latencyPercentiles.p75 ?? 0),
              prettySeconds(result.latencyPercentiles.p90 ?? 0),
              prettySeconds(result.latencyPercentiles.p95 ?? 0),
              prettySeconds(result.latencyPercentiles.p99 ?? 0),
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
