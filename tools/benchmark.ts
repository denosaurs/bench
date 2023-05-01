import { delay, ensureDir, join } from "./deps.ts";
import {
  BenchmarkDefinition,
  BenchmarkResult,
  FrameworkDefinition,
} from "./types.ts";
import { decoder, getBenchmarks, getFrameworks, workdir } from "./misc.ts";

export async function oha(
  url: string,
  benchmark: BenchmarkDefinition
): Promise<BenchmarkResult> {
  // deno-fmt-ignore
  const args = [
    // Enable JSON output
    "-j",
    // Disable tui
    "--no-tui",
  ];

  // The number of request to run
  if (benchmark.requests) {
    args.push("-n", benchmark.requests.toString());
  }

  // The number of connections
  if (benchmark.connections) {
    args.push("-c", benchmark.connections.toString());
  }

  // The duration of the benchmark
  if (benchmark.duration) {
    args.push("-z", `${benchmark.duration}sec`);
  }

  // The method
  if (benchmark.method) {
    args.push("-m", benchmark.method.toString());
  }

  console.log(`Running: oha ${[...args, url].join(" ")}`);

  const oha = new Deno.Command("oha", {
    args: [...args, url],
    stdin: "null",
    stdout: "piped",
    stderr: "null",
  });

  const output = decoder.decode((await oha.output()).stdout);
  return JSON.parse(output);
}

export async function runBenchmark(
  benchmark: BenchmarkDefinition,
  framework: FrameworkDefinition,
  benchmarkIdentifier: string,
  frameworkIdentifier: string
): Promise<BenchmarkResult> {
  let cmds = framework.benchmarks[benchmarkIdentifier];
  cmds = typeof cmds === "string" ? [cmds] : cmds;

  if (!cmds || cmds.length === 0) {
    throw new TypeError(
      `No benchmark or command with the identifier ${benchmarkIdentifier} could be found in ${framework.name}`
    );
  }

  // Run setup commands if there are any
  for (const cmd of cmds.slice(0, -1)) {
    const [cliCmd, ...args] = cmd.split(" ");
    const setupCommand = new Deno.Command(cliCmd, {
      args,
      cwd: join(workdir, "frameworks", frameworkIdentifier),
      stdin: "inherit",
      stdout: "inherit",
      stderr: "inherit",
    });
    await setupCommand.output();
  }

  // Run server
  const [cliCmd, ...args] = cmds.pop()!.split(" ");
  const serverAbortController = new AbortController();
  const server = new Deno.Command(cliCmd, {
    args,
    cwd: join(workdir, "frameworks", frameworkIdentifier),
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    signal: serverAbortController.signal,
  });
  server.spawn();
  // Warmup
  benchmark.warmup ??= 5000;
  console.log(`Warming up for ${benchmark.warmup}ms`);
  await delay(benchmark.warmup);

  // Run benchmark
  const result = await oha("http://localhost:8000", benchmark);

  // Close server process
  serverAbortController.abort();

  return result;
}

if (import.meta.main) {
  const benchmark = Deno.args[0];
  const selectFrameworks = Deno.args.slice(1);

  if (benchmark === undefined) {
    throw new TypeError(
      `No benchmark identifier provided as command line argument`
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

    console.log(`Benchmarking ${benchmark} on ${framework.name}`);
    const result = await runBenchmark(
      benchmarks[benchmark],
      framework,
      benchmark,
      identifier
    );
    // Ensure results directory exists
    await ensureDir(join(workdir, "frameworks", identifier, "results"));
    const resultPath = join(
      workdir,
      "frameworks",
      identifier,
      "results",
      `${benchmark}.json`
    );
    console.log(`Writing results to ${resultPath}...`);
    await Deno.writeTextFile(resultPath, JSON.stringify(result, null, 2));
  }
}
