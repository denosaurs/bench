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
  /** The number of request to run */
  requests?: number;
  /** The number of connections */
  connections?: number;
  /** The request method of the benchmark */
  method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH";
  /** The duration of the benchmark */
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
  summary: {
    successRate: number;
    total: number;
    slowest: number;
    fastest: number;
    average: number;
    requestsPerSec: number;
    totalData: number;
    sizePerRequest: number;
    sizePerSec: number;
  };
  responseTimeHistogram: Record<`${number}`, number>;
  latencyPercentiles: {
    p10: number;
    p25: number;
    p50: number;
    p75: number;
    p90: number;
    p95: number;
    p99: number;
  };
  rps: {
    mean: number;
    stddev: number;
    max: number;
    percentiles: {
      p10: number;
      p25: number;
      p50: number;
      p75: number;
      p90: number;
      p95: number;
      p99: number;
    };
  };
  details: {
    DNSDialup: {
      average: number;
      fastest: number;
      slowest: number;
    };
    DNSLookup: {
      average: number;
      fastest: number;
      slowest: number;
    };
  };
  statusCodeDistribution: Record<`${number}`, number>;
  errorDistribution: Record<string, number>;
}
