export interface Benchmark {
  name: string;
  dir: string;
  exe: string;
  info: {
    url: string;
    desc: string;
  };
}

export interface Group {
  name: string;
  benchmarks: Benchmark[];
}

export interface Config {
  groups: Group[];
}

export interface Step extends Record<string, unknown> {
  name: string;
  run?: string;
  "working-directory"?: string;
}

export interface Job extends Record<string, unknown> {
  "runs-on": string;
  needs: string[];
  steps: Step[];
}

export interface Action extends Record<string, unknown> {
  name: string;
  on: unknown;
  jobs: {
    [key: string]: Job;
  };
}

export interface Result {
  url: string;
  requests: {
    average: number;
    mean: number;
    stddev: number;
    min: number;
    max: number;
    total: number;
    p0_001: number;
    p0_01: number;
    p0_1: number;
    p1: number;
    p2_5: number;
    p10: number;
    p25: number;
    p50: number;
    p75: number;
    p90: number;
    p97_5: number;
    p99: number;
    p99_9: number;
    p99_99: number;
    p99_999: number;
    sent: number;
  };
  latency: {
    average: number;
    mean: number;
    stddev: number;
    min: number;
    max: number;
    p0_001: number;
    p0_01: number;
    p0_1: number;
    p1: number;
    p2_5: number;
    p10: number;
    p25: number;
    p50: number;
    p75: number;
    p90: number;
    p97_5: number;
    p99: number;
    p99_9: number;
    p99_99: number;
    p99_999: number;
    totalCount: number;
  };
  throughput: {
    average: number;
    mean: number;
    stddev: number;
    min: number;
    max: number;
    total: number;
    p0_001: number;
    p0_01: number;
    p0_1: number;
    p1: number;
    p2_5: number;
    p10: number;
    p25: number;
    p50: number;
    p75: number;
    p90: number;
    p97_5: number;
    p99: number;
    p99_9: number;
    p99_99: number;
    p99_999: number;
  };
  errors: number;
  timeouts: number;
  mismatches: number;
  duration: number;
  start: string;
  finish: string;
  connections: number;
  pipelining: number;
  non2xx: number;
  "1xx": number;
  "2xx": number;
  "3xx": number;
  "4xx": number;
  "5xx": number;
}
