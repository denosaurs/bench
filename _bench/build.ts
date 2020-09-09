import { join, parse, stringify } from "./deps.ts";

import type { Config, Action, Job, Step } from "./types.ts";

function command(group: string, exe: string): string {
  return `${exe} &
sleep 15 && 
mkdir -p results &&
autocannon -c 40 -d 10 -j http://localhost:8000 > results/${group}.json &&
kill $!`;
}

function wrap(step: Step): Step[] {
  return [
    {
      name: "Checkout Repository",
      uses: "actions/checkout@master",
      with: { "persist-credentials": false, "fetch-depth": 0 },
    },
    { name: "Pull changes from other benchmarks", run: "git pull" },
    {
      name: "Setup nodejs 13",
      uses: "actions/setup-node@v1",
      with: { "node-version": "13" },
    },
    {
      name: "Setup deno 1.x",
      uses: "denolib/setup-deno@v2",
      with: { "deno-version": "v1.x" },
    },
    { name: "Install Autocannon", run: "npm install -g autocannon" },
    { name: "START", run: 'echo "Starting Benchmarks"' },
    step,
    { name: "END", run: 'echo "End Benchmarks"' },
    {
      name: "Commit & Push changes",
      uses: "actions-js/push@master",
      with: {
        github_token: "${{ secrets.GITHUB_TOKEN }}",
        coauthor_email: "qu4k@users.noreply.github.com",
        coauthor_name: "qu4k",
        branch: "main",
      },
    },
  ];
}

function generateResults(previous: string[]): Job {
  return {
    "runs-on": "ubuntu-latest",
    needs: [...previous],
    steps: [
      {
        name: "Checkout Repository",
        uses: "actions/checkout@master",
        with: { "persist-credentials": false, "fetch-depth": 0 },
      },
      { name: "Pull changes from other benchmarks", run: "git pull" },
      {
        name: "Setup deno 1.x",
        uses: "denolib/setup-deno@v2",
        with: { "deno-version": "v1.x" },
      },
      {
        name: "Generate README.md",
        run: "deno run -A --unstable _bench/readme.ts",
      },
      {
        name: "Commit & Push changes",
        uses: "actions-js/push@master",
        with: {
          github_token: "${{ secrets.GITHUB_TOKEN }}",
          coauthor_email: "qu4k@users.noreply.github.com",
          coauthor_name: "qu4k",
          branch: "main",
        },
      },
    ],
  };
}

if (import.meta.main) {
  const configPath = "benchmarks.yml";
  const actionPath = join(".github", "workflows", "bench.yml");

  const actionSource = await Deno.readTextFile(actionPath);
  let action = parse(actionSource) as Action;
  action.jobs = {};

  const configSource = await Deno.readTextFile(configPath);
  const config = parse(configSource) as Config;

  const previous = [];

  for (const group of config.groups) {
    for (const benchmark of group.benchmarks) {
      const test = {
        name: benchmark.name,
        run: command(group.name, benchmark.exe),
        "working-directory": benchmark.dir,
      };
      const name = `${group.name}_${benchmark.name}`;
      const steps = wrap(test);
      action.jobs[name] = {
        "runs-on": "ubuntu-latest",
        needs: [...previous],
        steps,
      };
      previous.push(name);
    }
  }

  action.jobs["_results"] = generateResults(previous);

  await Deno.writeTextFile(actionPath, stringify(action));
}
