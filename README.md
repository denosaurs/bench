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
| **Average** | 10455.4 | 22625.82 | 21795.28 | 12838.4 | 19192.41 | 15224.91 | 34754.19 | 33824.81 | 13908 | 2990.7 | 4861.8 | 18861.2 | 9450.21 |
| **Total** | 104552 | 248899 | 239741 | 128390 | 191895 | 167458 | 382248 | 338242 | 139069 | 29903 | 48616 | 188644 | 94486 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6895   | 6895   | 10751   | 11191   | 10455.4 | 1200.56 | 6895   | 104552  |
| **Bytes/Sec** | 642 kB | 642 kB | 1000 kB | 1.04 MB | 972 kB  | 112 kB  | 641 kB | 9.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.36 ms | 1.68 ms | 88 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15303   | 15303   | 23343   | 23583   | 22625.82 | 2323.53 | 15301   | 248899  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.15 MB | 2.17 MB | 2.08 MB  | 214 kB  | 1.41 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.84 ms | 54 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15575  | 15575  | 22383   | 24351   | 21795.28 | 2185.19 | 15573  | 239741  |
| **Bytes/Sec** | 795 kB | 795 kB | 1.14 MB | 1.24 MB | 1.11 MB  | 111 kB  | 794 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1.04 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8671   | 8671   | 13343  | 13471  | 12838.4 | 1400.74 | 8670   | 128390  |
| **Bytes/Sec** | 451 kB | 451 kB | 694 kB | 701 kB | 668 kB  | 72.8 kB | 451 kB | 6.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.36 ms | 46 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12207   | 12207   | 19983   | 20575   | 19192.41 | 2406.21 | 12202   | 191895  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.72 MB | 1.77 MB | 1.65 MB  | 207 kB  | 1.05 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.33 ms | 89 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6387    | 6387    | 16311   | 16847   | 15224.91 | 2903.63 | 6384    | 167458  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 3.52 MB | 3.64 MB | 3.29 MB  | 627 kB  | 1.38 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.23 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19455   | 19455   | 36639   | 37087   | 34754.19 | 4907.86 | 19449   | 382248  |
| **Bytes/Sec** | 2.98 MB | 2.98 MB | 5.61 MB | 5.67 MB | 5.32 MB  | 751 kB  | 2.98 MB | 58.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.5 ms | 0.97 ms | 57 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18943   | 18943   | 35391   | 36383   | 33824.81 | 4995.88 | 18938   | 338242  |
| **Bytes/Sec** | 2.12 MB | 2.12 MB | 3.96 MB | 4.07 MB | 3.79 MB  | 560 kB  | 2.12 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.63 ms | 0.89 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8511   | 8511   | 14519   | 15367   | 13908   | 1955.76 | 8507   | 139069  |
| **Bytes/Sec** | 792 kB | 792 kB | 1.35 MB | 1.43 MB | 1.29 MB | 182 kB  | 791 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.66 ms | 46 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1943   | 1943   | 2941   | 4183   | 2990.7 | 526.13  | 1943   | 29903   |
| **Bytes/Sec** | 223 kB | 223 kB | 338 kB | 481 kB | 344 kB | 60.5 kB | 223 kB | 3.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 51 ms | 12.87 ms | 18.3 ms | 92 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2397   | 2397   | 5223    | 5467    | 4861.8  | 913.67 | 2397   | 48616   |
| **Bytes/Sec** | 681 kB | 681 kB | 1.48 MB | 1.55 MB | 1.38 MB | 259 kB | 681 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.74 ms | 3.82 ms | 199 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13087  | 13087  | 19487   | 20287   | 18861.2 | 2010.57 | 13081  | 188644  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.79 MB | 1.87 MB | 1.74 MB | 185 kB  | 1.2 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.35 ms | 62 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ----- | ------ | ------- |
| **Req/Sec**   | 5923   | 5923   | 9879   | 9951   | 9450.21 | 1180  | 5922   | 94486   |
| **Bytes/Sec** | 462 kB | 462 kB | 771 kB | 776 kB | 737 kB  | 92 kB | 462 kB | 7.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.52 ms | 1.79 ms | 85 ms |


---

<p align="center">Generated 2020-12-29T00:26:52.503Z</p>