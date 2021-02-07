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
| **Average** | 7008 | 27793.6 | 29488.73 | 15541.1 | 19779.6 | 9188.19 | 29813.2 | 37503.28 | 14487.2 | 2770.2 | 3316.2 | 19989.2 | 6078.1 |
| **Total** | 70078 | 277916 | 324336 | 170934 | 197772 | 101059 | 298130 | 412590 | 144858 | 27697 | 33157 | 199885 | 60768 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4175   | 4175   | 7267   | 7575   | 7008   | 959.59  | 4174   | 70078   |
| **Bytes/Sec** | 388 kB | 388 kB | 676 kB | 705 kB | 652 kB | 89.2 kB | 388 kB | 6.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.2 ms | 2.75 ms | 183 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21487   | 21487   | 28351   | 29215   | 27793.6 | 2170.52 | 21473   | 277916  |
| **Bytes/Sec** | 1.98 MB | 1.98 MB | 2.61 MB | 2.69 MB | 2.56 MB | 200 kB  | 1.98 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.09 ms | 0.59 ms | 41 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22335   | 22335   | 30271   | 31263   | 29488.73 | 2373.16 | 22320   | 324336  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.54 MB | 1.59 MB | 1.5 MB   | 121 kB  | 1.14 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.07 ms | 0.59 ms | 30 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11167  | 11167  | 15903  | 16431  | 15541.1 | 1395.32 | 11167  | 170934  |
| **Bytes/Sec** | 581 kB | 581 kB | 827 kB | 854 kB | 808 kB  | 72.4 kB | 581 kB | 8.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.16 ms | 0.91 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 12991   | 12991   | 20511   | 21423   | 19779.6 | 2296.8 | 12986   | 197772 |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.76 MB | 1.84 MB | 1.7 MB  | 198 kB | 1.12 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.03 ms | 77 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4135   | 4135   | 9863    | 10143   | 9188.19 | 1653.09 | 4132   | 101059  |
| **Bytes/Sec** | 893 kB | 893 kB | 2.13 MB | 2.19 MB | 1.98 MB | 357 kB  | 893 kB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.79 ms | 1.85 ms | 48 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15023  | 15023  | 30783   | 34271   | 29813.2 | 5097.76 | 15023  | 298130  |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 4.71 MB | 5.24 MB | 4.56 MB | 780 kB  | 2.3 MB | 45.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.89 ms | 0.99 ms | 31 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22335  | 22335  | 38879   | 39935   | 37503.28 | 4814.79 | 22332  | 412590  |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 4.36 MB | 4.47 MB | 4.2 MB   | 539 kB  | 2.5 MB | 46.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.75 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8479   | 8479   | 15159   | 15719   | 14487.2 | 2042.83 | 8476   | 144858  |
| **Bytes/Sec** | 788 kB | 788 kB | 1.41 MB | 1.46 MB | 1.35 MB | 190 kB  | 788 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.52 ms | 83 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1715   | 1715   | 2849   | 3493   | 2770.2 | 448.67  | 1715   | 27697   |
| **Bytes/Sec** | 197 kB | 197 kB | 328 kB | 402 kB | 319 kB | 51.6 kB | 197 kB | 3.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.96 ms | 18.64 ms | 118 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1649   | 1649   | 3657    | 3761    | 3316.2 | 658.03 | 1649   | 33157   |
| **Bytes/Sec** | 468 kB | 468 kB | 1.04 MB | 1.07 MB | 942 kB | 187 kB | 468 kB | 9.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 9 ms  | 10 ms | 23 ms | 11.55 ms | 5.34 ms | 250 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12895   | 12895   | 20639  | 21935   | 19989.2 | 2454.47 | 12889   | 199885  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.9 MB | 2.02 MB | 1.84 MB | 226 kB  | 1.19 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.1 ms | 50 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3607   | 3607   | 6419   | 6619   | 6078.1 | 860.06  | 3606   | 60768   |
| **Bytes/Sec** | 281 kB | 281 kB | 500 kB | 516 kB | 474 kB | 67.1 kB | 281 kB | 4.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 13 ms | 6.09 ms | 2.45 ms | 114 ms |


---

<p align="center">Generated 2021-02-07T00:19:30.499Z</p>