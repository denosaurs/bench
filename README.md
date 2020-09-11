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
| **Req/Sec**   | 4107   | 4107   | 6923   | 7107   | 6644.8 | 851.78  | 4106   |
| **Bytes/Sec** | 321 kB | 321 kB | 540 kB | 554 kB | 518 kB | 66.4 kB | 320 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.57 ms | 2.55 ms | 124.472117 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 12287   | 12287   | 18111   | 20079   | 17856.41 | 2011.07 | 12284   |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.68 MB | 1.87 MB | 1.66 MB  | 187 kB  | 1.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.68 ms | 1.21 ms | 82.035763 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 2008   | 2008   | 2963   | 3603   | 2994.1 | 423.15  | 2008   |
| **Bytes/Sec** | 231 kB | 231 kB | 341 kB | 414 kB | 344 kB | 48.6 kB | 231 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max          |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.87 ms | 18.28 ms | 82.840388 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2991   | 2991   | 5683    | 5859    | 5393.7  | 828.13 | 2990   |
| **Bytes/Sec** | 849 kB | 849 kB | 1.61 MB | 1.66 MB | 1.53 MB | 235 kB | 849 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.92 ms | 2.98 ms | 173.313135 ms |


---

<p align="center">Generated 2020-09-11T00:10:09.936Z</p>