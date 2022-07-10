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
  spec: {
    numberOfConnections: number;
    testType: string;
    testDurationSeconds: number;
    method: string;
    url: string;
    body: string;
    stream: boolean;
    timeoutSeconds: number;
    client: string;
  };
  result: {
    bytesRead: number;
    bytesWritten: number;
    timeTakenSeconds: number;
    req1xx: number;
    req2xx: number;
    req3xx: number;
    req4xx: number;
    req5xx: number;
    others: number;
    latency: {
      mean: number;
      stddev: number;
      max: number;
      percentiles: {
        "50": number;
        "75": number;
        "90": number;
        "95": number;
        "99": number;
      };
    };
    rps: {
      mean: number;
      stddev: number;
      max: number;
      percentiles: {
        "50": number;
        "75": number;
        "90": number;
        "95": number;
        "99": number;
      };
    };
  };
}
