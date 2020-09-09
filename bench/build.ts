import { join } from "https://deno.land/std@0.68.0/path/mod.ts";
import { walk } from "https://deno.land/std@0.68.0/fs/mod.ts";
import {
  parse,
  stringify,
} from "https://deno.land/std@0.68.0/encoding/yaml.ts";

interface Step extends Record<string, unknown> {
  name: string;
  run: string;
  "working-directory": string;
}

interface Action extends Record<string, unknown> {
  name: string;
  on: unknown;
  jobs: {
    bench: {
      "runs-on": string;
      steps: Step[];
    };
  };
}

const BENCH = `deno run -q -r -A bare.ts &
sleep 5 && 
autocannon -c 100 -d 10 -j http://localhost:8000 > bench.json &&
kill $!`;

if (import.meta.main) {
  const file = join(".github", "workflows", "bench.yml");
  const source = await Deno.readTextFile(file);
  let bench = parse(source) as Action;

  let steps = bench.jobs.bench.steps;
  let start = -1;
  let end = -1;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step.name === "START") {
      start = i;
    } else if (step.name === "END") {
      end = i;
    }
  }

  steps.splice(start + 1, end - start - 1);

  const tests = [];
  for await (const entry of walk(".", { maxDepth: 1 })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "bench") continue;
    if (entry.isDirectory) {
      tests.push(entry.name);
    }
  }

  for (const test of tests) {
    steps.splice(start + 1, 0, {
      name: test.toUpperCase(),
      run: BENCH,
      "working-directory": test,
    });
  }

  await Deno.writeTextFile(file, stringify(bench));
}
