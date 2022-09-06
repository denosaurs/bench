import { delay, ensureDir, join } from "./deps.ts";
import {
  BenchmarkDefinition,
  BenchmarkResult,
  FrameworkDefinition,
} from "./types.ts";
import { decoder, getBenchmarks, getFrameworks, workdir } from "./misc.ts";

export async function oha(
  url: string,
  benchmark: BenchmarkDefinition,
): Promise<BenchmarkResult> {
  // deno-fmt-ignore
  const args = [
    // Enable JSON output
    "-j",
    // The number of connections
    "-c", (benchmark.connections ?? 40).toString(),
    // The duration of the benchmark
    "-d", (benchmark.duration ?? 10).toString(),
    // The method
    "-m", benchmark.method ?? "GET",
  ];

  const oha = await Deno.spawn("oha", {
    args: [...args, url],
    stdin: "null",
    stdout: "piped",
    stderr: "null",
  });

  return JSON.parse(decoder.decode(oha.stdout));
}

export async function runBenchmark(
  benchmark: BenchmarkDefinition,
  framework: FrameworkDefinition,
  benchmarkIdentifier: string,
  frameworkIdentifier: string,
): Promise<BenchmarkResult> {
  let cmds = framework.benchmarks[benchmarkIdentifier];
  cmds = typeof cmds === "string" ? [cmds] : cmds;

  if (!cmds || cmds.length === 0) {
    throw new TypeError(
      `No benchmark or command with the identifier ${benchmarkIdentifier} could be found in ${framework.name}`,
    );
  }

  // Run setup commands if there are any
  for (const cmd of cmds.slice(0, -1)) {
    await Deno.run({
      cmd: cmd.split(" "),
      cwd: join(workdir, "frameworks", frameworkIdentifier),
      stdin: "inherit",
      stdout: "inherit",
      stderr: "inherit",
    }).status();
  }

  // Run server
  const server = Deno.run({
    cmd: cmds.pop()!.split(" "),
    cwd: join(workdir, "frameworks", frameworkIdentifier),
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });

  // Warmup
  await delay(benchmark.warmup ?? 5000);

  // Run benchmark
  const result = await oha("localhost:8000", benchmark);

  // Close server process
  server.close();

  return result;
}

if (import.meta.main) {
  const benchmark = Deno.args[0];
  const selectFrameworks = Deno.args.slice(1);

  if (benchmark === undefined) {
    throw new TypeError(
      `No benchmark identifier provided as command line argument`,
    );
  }

  const { benchmarks } = await getBenchmarks();
  const frameworks = await getFrameworks();

  for (const [identifier, framework] of Object.entries(frameworks)) {
    if (
      (framework.ignore ?? false) ||
      (selectFrameworks.length !== 0 && !selectFrameworks.includes(identifier))
    ) {
      console.log(`Ignoring ${framework.name}`);
      continue;
    }

    console.log(`Running ${benchmark} on ${framework.name}`);
    const result = await runBenchmark(
      benchmarks[benchmark],
      framework,
      benchmark,
      identifier,
    );
    // Ensure results directory exists
    await ensureDir(join(
      workdir,
      "frameworks",
      identifier,
      "results",
    ));
    const resultPath = join(
      workdir,
      "frameworks",
      identifier,
      "results",
      `${benchmark}.json`,
    );
    console.log(`Writing results to ${resultPath}...`);
    await Deno.writeTextFile(resultPath, JSON.stringify(result, null, 2));
  }
}
