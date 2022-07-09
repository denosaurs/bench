/**
 * The format in which the `framework.json` definition files are written
 */
export interface FrameworkDefinition {
  /** The name of the framework, server or runtime */
  name: string;
  /** An optional property which if set to true makes us ignores the benchmark */
  ignore?: boolean;
  /** A short markdown description of the framework */
  description: string;
  /** A link to where more information can be found about the framework */
  website: string;
  /** A map of commands keyed by the associated benchmarks identifier as defined by the same key as in the `benchmarks.json` file */
  benchmarks: Record<string, string | string[]>;
}

/**
 * The format in which the entries in the `benchmarks.json` definition file are written
 */
export interface BenchmarkDefinition {
  /** The name of the benchmark */
  name: string;
  /** A short markdown description defining what the benchmark tests */
  description: string;
  /** The number of milliseconds before starting to bombard the target with requests, defaults to 5 seconds */
  warmup?: number;
  /** The number of connections, defaults to 40 */
  connections?: number;
  /** The request method of the benchmark, defaults to GET */
  method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH";
  /** The duration of the benchmark, defaults to 10 seconds */
  duration?: string;
}

/**
 * The format in the `benchmarks.json` definition file is written
 */
export interface BenchmarksDefinition {
  /** A map of {@link BenchmarkDefinition}s keyed by their identifier */
  benchmarks: Record<string, BenchmarkDefinition>;
}

export interface BenchmarkResult {
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
