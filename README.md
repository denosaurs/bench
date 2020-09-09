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

## Table of Contents

- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [drash](#drash)
  - [oak](#oak)
  - [servest](#servest)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 3611   | 3611   | 7323   | 7499   | 6907.7 | 1110.43 | 3610   |
| **Bytes/Sec** | 282 kB | 282 kB | 571 kB | 585 kB | 539 kB | 86.7 kB | 282 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.34 ms | 2.71 ms | 142.733917 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12239   | 12239   | 19167   | 19727   | 18478.8 | 2103.08 | 12232   |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.78 MB | 1.83 MB | 1.72 MB | 196 kB  | 1.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.1 ms | 27.747958 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 1784   | 1784   | 2875   | 3175   | 2772.5 | 403.24  | 1784   |
| **Bytes/Sec** | 205 kB | 205 kB | 331 kB | 365 kB | 319 kB | 46.4 kB | 205 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.92 ms | 18.64 ms | 107.274701 ms |


---

<p align="center">Generated 2020-09-09T22:58:12.548Z</p>