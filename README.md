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
| **Average** | 6742.4 | 22276 | 24996.8 | 8370.37 | 18333.2 | 14810 | 24013.2 | 22802 | 16858.41 | 2793.6 | 4691.8 | 16612.8 | 8253.8 |
| **Total** | 67418 | 245008 | 249994 | 92074 | 183329 | 162903 | 240127 | 227997 | 168587 | 27931 | 46905 | 166119 | 82531 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 6903   | 7447   | 6742.4 | 814.49  | 4388   | 67418   |
| **Bytes/Sec** | 408 kB | 408 kB | 642 kB | 693 kB | 627 kB | 75.8 kB | 408 kB | 6.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.52 ms | 2.35 ms | 129 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14719   | 14719   | 22943   | 23727   | 22276   | 2432.58 | 14713   | 245008  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.11 MB | 2.18 MB | 2.05 MB | 224 kB  | 1.35 MB | 22.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.92 ms | 72 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18287  | 18287  | 25887   | 26383   | 24996.8 | 2332.04 | 18273  | 249994  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.32 MB | 1.35 MB | 1.27 MB | 119 kB  | 932 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.77 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6399   | 6399   | 8671   | 8871   | 8370.37 | 667.82  | 6399   | 92074   |
| **Bytes/Sec** | 333 kB | 333 kB | 451 kB | 461 kB | 435 kB  | 34.7 kB | 333 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.35 ms | 1.51 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11327  | 11327  | 18991   | 19551   | 18333.2 | 2346.99 | 11324  | 183329  |
| **Bytes/Sec** | 974 kB | 974 kB | 1.63 MB | 1.68 MB | 1.58 MB | 202 kB  | 974 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.55 ms | 1.14 ms | 71 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- |
| **Req/Sec**   | 6847    | 6847    | 15639   | 16367   | 14810  | 2573.5 | 6846    | 162903  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.38 MB | 3.53 MB | 3.2 MB | 556 kB | 1.48 MB | 35.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.19 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10575   | 10575   | 25391   | 27087   | 24013.2 | 4710.19 | 10570   | 240127  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 3.89 MB | 4.15 MB | 3.67 MB | 721 kB  | 1.62 MB | 36.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.13 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13791   | 13791   | 23727   | 24847   | 22802   | 3079.19 | 13790   | 227997  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.66 MB | 2.78 MB | 2.55 MB | 345 kB  | 1.54 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.94 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 11423   | 11423   | 16799   | 19263   | 16858.41 | 2049.4 | 11423   | 168587  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.56 MB | 1.79 MB | 1.57 MB  | 190 kB | 1.06 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.91 ms | 1.27 ms | 77 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2223   | 2223   | 2553   | 3891   | 2793.6 | 460.87 | 2223   | 27931   |
| **Bytes/Sec** | 256 kB | 256 kB | 294 kB | 447 kB | 321 kB | 53 kB  | 256 kB | 3.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.82 ms | 18.47 ms | 97 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2427   | 2427   | 5079    | 5163    | 4691.8  | 837.86 | 2427   | 46905   |
| **Bytes/Sec** | 690 kB | 690 kB | 1.44 MB | 1.47 MB | 1.33 MB | 238 kB | 689 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.14 ms | 3.72 ms | 191 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10127  | 10127  | 17439  | 18399   | 16612.8 | 2308.48 | 10122  | 166119  |
| **Bytes/Sec** | 931 kB | 931 kB | 1.6 MB | 1.69 MB | 1.53 MB | 212 kB  | 931 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.02 ms | 1.28 ms | 72 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5335   | 5335   | 8671   | 8951   | 8253.8 | 1013.42 | 5333   | 82531   |
| **Bytes/Sec** | 416 kB | 416 kB | 676 kB | 698 kB | 644 kB | 79.1 kB | 416 kB | 6.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.3 ms | 2.46 ms | 105 ms |


---

<p align="center">Generated 2021-04-12T00:42:29.920Z</p>