import { fromFileUrl, join, resolve } from "./deps.ts";
import {
  BenchmarkDefinition,
  BenchmarkResult,
  BenchmarksDefinition,
  FrameworkDefinition,
} from "./types.ts";

export const decoder = new TextDecoder();
export const workdir = resolve(fromFileUrl(import.meta.url), "..", "..");

export async function getFrameworks(): Promise<
  Record<string, FrameworkDefinition>
> {
  const directory = join(workdir, "frameworks");
  const frameworks: Record<string, FrameworkDefinition> = {};

  for await (const entry of Deno.readDir(directory)) {
    const framework = await getFramework(entry.name);
    if (framework !== undefined && !(framework.ignore ?? false)) {
      frameworks[entry.name] = framework;
    }
  }

  return Object.fromEntries(Object.entries(frameworks).sort());
}

export async function getFramework(
  name: string,
): Promise<FrameworkDefinition | undefined> {
  const directory = join(workdir, "frameworks", name);
  const definition = join(directory, "framework.json");

  try {
    return JSON.parse(await Deno.readTextFile(definition));
  } catch {
    return undefined;
  }
}

export async function getBenchmarks(): Promise<BenchmarksDefinition> {
  const definition = join(workdir, "benchmarks.json");

  return JSON.parse(await Deno.readTextFile(definition));
}

export async function getBenchmarkResult(
  framework: string,
  benchmark: string,
): Promise<BenchmarkResult> {
  const resultPath = join(
    workdir,
    "frameworks",
    framework,
    "results",
    `${benchmark}.json`,
  );
  return JSON.parse(await Deno.readTextFile(resultPath));
}

export async function getBenchmarkResults(
  benchmarks: Record<string, BenchmarkDefinition>,
  frameworks: Record<string, FrameworkDefinition>,
): Promise<Record<string, Record<string, BenchmarkResult>>> {
  const results: Record<string, Record<string, BenchmarkResult>> = {};
  for (const benchmark of Object.keys(benchmarks)) {
    results[benchmark] = {};
    for (const [name, framework] of Object.entries(frameworks)) {
      if (framework.benchmarks[benchmark]) {
        results[benchmark][name] = await getBenchmarkResult(name, benchmark);
      }
    }
  }
  return results;
}
