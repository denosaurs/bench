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
  - [mandarinets](#mandarinets)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 5155   | 5155   | 8735   | 8967   | 8398   | 1046.55 | 5152   |
| **Bytes/Sec** | 402 kB | 402 kB | 681 kB | 699 kB | 655 kB | 81.7 kB | 402 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.49 ms | 2.05 ms | 106.640847 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.
⚠️ Drash seems to have problems running in GH action...


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8295   | 8295   | 15767   | 16623   | 15182   | 2323.92 | 8290   |
| **Bytes/Sec** | 771 kB | 771 kB | 1.47 MB | 1.55 MB | 1.41 MB | 216 kB  | 771 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.39 ms | 94.450621 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 1658   | 1658   | 2753   | 3333   | 2775.1 | 424.96  | 1658   |
| **Bytes/Sec** | 191 kB | 191 kB | 317 kB | 383 kB | 319 kB | 48.9 kB | 191 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.87 ms | 18.54 ms | 107.156868 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2020-09-09T23:19:04.926Z</p>