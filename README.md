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
| **Average** | 10597.28 | 20648.41 | 23587.2 | 8195.8 | 21495.6 | 12755.8 | 34755.64 | 18610.8 | 17398.19 | 3415.55 | 4942.5 | 9679.82 | 4794.7 |
| **Total** | 116574 | 206476 | 235869 | 81943 | 214958 | 127561 | 382283 | 186094 | 191354 | 37565 | 49411 | 106467 | 47941 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 6827   | 6827   | 10927   | 11375   | 10597.28 | 1213.4 | 6827   | 116574  |
| **Bytes/Sec** | 635 kB | 635 kB | 1.02 MB | 1.06 MB | 986 kB   | 113 kB | 635 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.44 ms | 1.64 ms | 80 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 15007   | 15007   | 20143   | 23871  | 20648.41 | 2497.13 | 15003   | 206476 |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.85 MB | 2.2 MB | 1.9 MB   | 230 kB  | 1.38 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.06 ms | 51 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 16751  | 16751  | 24159   | 24911   | 23587.2 | 2323.94 | 16747  | 235869 |
| **Bytes/Sec** | 855 kB | 855 kB | 1.23 MB | 1.27 MB | 1.2 MB  | 118 kB  | 854 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.92 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6419   | 6419   | 8287   | 8871   | 8195.8 | 675.3   | 6417   | 81943   |
| **Bytes/Sec** | 334 kB | 334 kB | 431 kB | 461 kB | 426 kB | 35.1 kB | 334 kB | 4.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.4 ms | 1.56 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13207   | 13207   | 22271   | 23135   | 21495.6 | 2788.46 | 13200   | 214958  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.92 MB | 1.99 MB | 1.85 MB | 240 kB  | 1.14 MB | 18.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.89 ms | 33 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5131    | 5131    | 13591   | 14319   | 12755.8 | 2634.03 | 5131    | 127561  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.94 MB | 3.09 MB | 2.76 MB | 569 kB  | 1.11 MB | 27.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.54 ms | 1.68 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18767   | 18767   | 36287   | 36895   | 34755.64 | 5069.84 | 18755   | 382283  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 5.55 MB | 5.64 MB | 5.32 MB  | 776 kB  | 2.87 MB | 58.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.84 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9879    | 9879    | 19247   | 21055   | 18610.8 | 3031.9 | 9879    | 186094  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.16 MB | 2.36 MB | 2.08 MB | 340 kB | 1.11 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.64 ms | 1.32 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11479   | 11479   | 17759   | 19039   | 17398.19 | 1952.87 | 11476   | 191354  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.65 MB | 1.77 MB | 1.62 MB  | 182 kB  | 1.07 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.02 ms | 1.19 ms | 63 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ----- | ------ | ------- |
| **Req/Sec**   | 2421   | 2421   | 3727   | 4049   | 3415.55 | 487.2 | 2420   | 37565   |
| **Bytes/Sec** | 279 kB | 279 kB | 429 kB | 466 kB | 393 kB  | 56 kB | 278 kB | 4.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.22 ms | 17.57 ms | 83 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2435   | 2435   | 5323    | 5459    | 4942.5 | 890.29 | 2434   | 49411 |
| **Bytes/Sec** | 692 kB | 692 kB | 1.51 MB | 1.55 MB | 1.4 MB | 253 kB | 691 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.73 ms | 3.67 ms | 212 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6775   | 6775   | 9967   | 10655  | 9679.82 | 972.71  | 6773   | 106467  |
| **Bytes/Sec** | 624 kB | 624 kB | 917 kB | 980 kB | 891 kB  | 89.4 kB | 623 kB | 9.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.6 ms | 1.59 ms | 80 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3001   | 3001   | 5051   | 5203   | 4794.7 | 631.99  | 3001   | 47941   |
| **Bytes/Sec** | 234 kB | 234 kB | 394 kB | 406 kB | 374 kB | 49.3 kB | 234 kB | 3.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.88 ms | 3.42 ms | 202 ms |


---

<p align="center">Generated 2021-02-22T00:18:52.248Z</p>