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

- [Overview](#overview)
- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [alosaur](#alosaur)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 10392.6 | 25502.4 | 24768 | 10492 | 17260 | 13423.4 | 30644 | 36620.37 | 18950.91 | 2929.2 | 3715.2 | 23359.28 | 7854.2 |
| **Total** | 103931 | 255020 | 247673 | 115403 | 189851 | 134233 | 306411 | 402783 | 208443 | 29287 | 37146 | 256929 | 78538 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6715   | 6715   | 10863   | 11199   | 10392.6 | 1273.72 | 6714   | 103931  |
| **Bytes/Sec** | 625 kB | 625 kB | 1.01 MB | 1.04 MB | 967 kB  | 119 kB  | 624 kB | 9.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.47 ms | 1.62 ms | 33 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18671   | 18671   | 26287   | 26687   | 25502.4 | 2305.01 | 18665   | 255020  |
| **Bytes/Sec** | 1.72 MB | 1.72 MB | 2.42 MB | 2.46 MB | 2.35 MB | 212 kB  | 1.72 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.7 ms | 27 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16783  | 16783  | 25535  | 26079   | 24768   | 2670.81 | 16776  | 247673  |
| **Bytes/Sec** | 856 kB | 856 kB | 1.3 MB | 1.33 MB | 1.26 MB | 136 kB  | 856 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.79 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 8631   | 8631   | 10591  | 11143  | 10492  | 643.57  | 8631   | 115403 |
| **Bytes/Sec** | 449 kB | 449 kB | 551 kB | 580 kB | 546 kB | 33.4 kB | 449 kB | 6 MB   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.34 ms | 1.11 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10631  | 10631  | 17871   | 19119   | 17260   | 2230.12 | 10626  | 189851  |
| **Bytes/Sec** | 914 kB | 914 kB | 1.54 MB | 1.64 MB | 1.48 MB | 192 kB  | 914 kB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.76 ms | 1.12 ms | 61 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5303    | 5303    | 14527   | 14647   | 13423.4 | 2765.33 | 5301    | 134233 |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 3.14 MB | 3.16 MB | 2.9 MB  | 597 kB  | 1.15 MB | 29 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.49 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16431   | 16431   | 32047   | 33471   | 30644   | 4782.19 | 16420   | 306411  |
| **Bytes/Sec** | 2.51 MB | 2.51 MB | 4.91 MB | 5.12 MB | 4.69 MB | 732 kB  | 2.51 MB | 46.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.86 ms | 0.96 ms | 26 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21007   | 21007   | 38431  | 38911   | 36620.37 | 4999.09 | 20993   | 402783  |
| **Bytes/Sec** | 2.35 MB | 2.35 MB | 4.3 MB | 4.36 MB | 4.1 MB   | 560 kB  | 2.35 MB | 45.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.77 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12319   | 12319   | 19583   | 20367   | 18950.91 | 2140.16 | 12318   | 208443  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.82 MB | 1.89 MB | 1.76 MB  | 199 kB  | 1.15 MB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.28 ms | 1.09 ms | 79 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1965   | 1965   | 2937   | 3569   | 2929.2 | 433.81  | 1965   | 29287   |
| **Bytes/Sec** | 226 kB | 226 kB | 338 kB | 411 kB | 337 kB | 49.9 kB | 226 kB | 3.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.14 ms | 18.33 ms | 85 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1970   | 1970   | 4029    | 4163    | 3715.2  | 672.77 | 1970   | 37146   |
| **Bytes/Sec** | 560 kB | 560 kB | 1.14 MB | 1.18 MB | 1.05 MB | 191 kB | 559 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 19 ms | 10.27 ms | 5.27 ms | 272 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 17007   | 17007   | 24079   | 24479   | 23359.28 | 2030.2 | 16996   | 256929  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.22 MB | 2.25 MB | 2.15 MB  | 187 kB | 1.56 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.78 ms | 52 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4411   | 4411   | 8287   | 8439   | 7854.2 | 1171.78 | 4410   | 78538   |
| **Bytes/Sec** | 344 kB | 344 kB | 646 kB | 658 kB | 613 kB | 91.4 kB | 344 kB | 6.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.62 ms | 2.31 ms | 100 ms |


---

<p align="center">Generated 2021-01-27T00:27:22.283Z</p>