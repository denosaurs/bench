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
| **Average** | 8126.8 | 17770 | 24586.91 | 13178.4 | 18156.73 | 9628.19 | 34882.4 | 41143.2 | 17812.41 | 2733.3 | 5225.7 | 25237.1 | 6529.3 |
| **Total** | 81267 | 177677 | 270429 | 131789 | 199740 | 105902 | 348811 | 411417 | 178112 | 27329 | 52250 | 277612 | 65290 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5107   | 5107   | 8351   | 9007   | 8126.8 | 1042.96 | 5107   | 81267   |
| **Bytes/Sec** | 475 kB | 475 kB | 777 kB | 838 kB | 756 kB | 97 kB   | 475 kB | 7.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.43 ms | 2.18 ms | 106 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11327   | 11327   | 18351   | 19407   | 17770   | 2213.33 | 11324   | 177677  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.69 MB | 1.78 MB | 1.63 MB | 204 kB  | 1.04 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.63 ms | 1.34 ms | 55 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17023  | 17023  | 25519  | 26031   | 24586.91 | 2452.88 | 17015  | 270429  |
| **Bytes/Sec** | 868 kB | 868 kB | 1.3 MB | 1.33 MB | 1.25 MB  | 125 kB  | 868 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.81 ms | 62 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8767   | 8767   | 13639  | 13943  | 13178.4 | 1484.15 | 8764   | 131789  |
| **Bytes/Sec** | 456 kB | 456 kB | 710 kB | 725 kB | 685 kB  | 77.2 kB | 456 kB | 6.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.23 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 11055  | 11055  | 18895   | 19279   | 18156.73 | 2263.3 | 11055  | 199740  |
| **Bytes/Sec** | 951 kB | 951 kB | 1.63 MB | 1.66 MB | 1.56 MB  | 195 kB | 951 kB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.17 ms | 55 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4815    | 4815    | 10087   | 10815   | 9628.19 | 1577.52 | 4815    | 105902  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 2.18 MB | 2.34 MB | 2.08 MB | 341 kB  | 1.04 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.6 ms | 1.66 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18959  | 18959  | 36479   | 37439   | 34882.4 | 5321.88 | 18952  | 348811  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 5.58 MB | 5.73 MB | 5.34 MB | 815 kB  | 2.9 MB | 53.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.82 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27039   | 27039   | 43295   | 43551   | 41143.2 | 4819.24 | 27032   | 411417  |
| **Bytes/Sec** | 3.03 MB | 3.03 MB | 4.85 MB | 4.88 MB | 4.61 MB | 540 kB  | 3.03 MB | 46.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.68 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 18223   | 18959   | 17812.41 | 2067.69 | 11718   | 178112  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.69 MB | 1.76 MB | 1.66 MB  | 192 kB  | 1.09 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.89 ms | 1.1 ms | 45 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1836   | 1836   | 2787   | 3171   | 2733.3 | 333.85  | 1836   | 27329   |
| **Bytes/Sec** | 211 kB | 211 kB | 321 kB | 365 kB | 314 kB | 38.4 kB | 211 kB | 3.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.12 ms | 18.71 ms | 95 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2699   | 2699   | 5499    | 5755    | 5225.7  | 904.13 | 2698   | 52250   |
| **Bytes/Sec** | 766 kB | 766 kB | 1.56 MB | 1.63 MB | 1.48 MB | 257 kB | 766 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 7.13 ms | 3.4 ms | 205 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18831   | 18831   | 25999   | 26783   | 25237.1 | 2112.31 | 18827   | 277612  |
| **Bytes/Sec** | 1.73 MB | 1.73 MB | 2.39 MB | 2.47 MB | 2.32 MB | 194 kB  | 1.73 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.71 ms | 43 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3851   | 3851   | 6815   | 7107   | 6529.3 | 930.24  | 3850   | 65290   |
| **Bytes/Sec** | 301 kB | 301 kB | 531 kB | 554 kB | 509 kB | 72.6 kB | 300 kB | 5.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.67 ms | 2.79 ms | 136 ms |


---

<p align="center">Generated 2021-02-17T00:24:32.282Z</p>