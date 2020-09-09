<div align="center">
  <h1><code>bench</code></h1>
  <p>
    <strong>📊 Daily benchmarks of deno & node HTTP frameworks</strong>
  </p>
  <br>
  <p align="center">
    <a alt="Bench" href="https://github.com/denosaurs/bench/actions">
      <img src="https://img.shields.io/github/workflow/status/denosaurs/bench/bench" />
    </a>
  </p>
</div>

## bare

### ABC

| Stat      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| --------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| Req/Sec   | 3493   | 3493   | 6875   | 7107   | 6555.5 | 1030.93 | 3493   |
| Bytes/Sec | 273 kB | 273 kB | 537 kB | 554 kB | 511 kB | 80.4 kB | 272 kB |


| Stat    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| Latency | 4 ms  | 5 ms  | 12 ms | 5.75 ms | 2.38 ms | 49.280453 ms |


### DRASH

| Stat      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Req/Sec   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| Bytes/Sec | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| Stat    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ------- | ----- | ----- | ----- | ----- | ----- | ----- |
| Latency | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### OAK

| Stat      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| --------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| Req/Sec   | 11567   | 11567   | 18847   | 19663   | 18293.46 | 2169.76 | 11565   |
| Bytes/Sec | 1.08 MB | 1.08 MB | 1.75 MB | 1.83 MB | 1.7 MB   | 202 kB  | 1.08 MB |


| Stat    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max          |
| ------- | ----- | ----- | ----- | ------- | ------ | ------------ |
| Latency | 1 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.2 ms | 75.280604 ms |


### SERVEST

| Stat      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| --------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| Req/Sec   | 1938   | 1938   | 2709   | 3241   | 2752.7 | 358.13  | 1938   |
| Bytes/Sec | 223 kB | 223 kB | 312 kB | 373 kB | 317 kB | 41.2 kB | 223 kB |


| Stat    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| Latency | 0 ms  | 5 ms  | 50 ms | 14.03 ms | 18.59 ms | 110.133248 ms |
