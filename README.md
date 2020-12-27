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
| **Average** | 10489 | 21590.19 | 21238.8 | 9023.1 | 20458.55 | 9585.64 | 38831.2 | 36332.37 | 15651.6 | 3249.5 | 5597.1 | 24184 | 8519 |
| **Total** | 104879 | 237468 | 212383 | 99237 | 225068 | 105443 | 388317 | 399641 | 156500 | 32489 | 55968 | 241842 | 85179 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6927   | 6927   | 10911   | 11519   | 10489  | 1229.65 | 6925   | 104879  |
| **Bytes/Sec** | 644 kB | 644 kB | 1.01 MB | 1.07 MB | 975 kB | 114 kB  | 644 kB | 9.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.34 ms | 1.76 ms | 61 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14167  | 14167  | 22383   | 22783  | 21590.19 | 2364.92 | 14160  | 237468  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.06 MB | 2.1 MB | 1.99 MB  | 218 kB  | 1.3 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.21 ms | 0.92 ms | 67 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13679  | 13679  | 21983   | 23167   | 21238.8 | 2575.66 | 13675  | 212383  |
| **Bytes/Sec** | 698 kB | 698 kB | 1.12 MB | 1.18 MB | 1.08 MB | 131 kB  | 697 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.12 ms | 62 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6775   | 6775   | 9191   | 9503   | 9023.1 | 723.83  | 6773   | 99237   |
| **Bytes/Sec** | 352 kB | 352 kB | 478 kB | 494 kB | 469 kB | 37.7 kB | 352 kB | 5.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 3.86 ms | 1.56 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11271  | 11271  | 21311   | 22623   | 20458.55 | 2952.71 | 11270  | 225068  |
| **Bytes/Sec** | 970 kB | 970 kB | 1.83 MB | 1.95 MB | 1.76 MB  | 254 kB  | 969 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.93 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4539   | 4539   | 10055   | 10623  | 9585.64 | 1636.53 | 4539   | 105443  |
| **Bytes/Sec** | 980 kB | 980 kB | 2.17 MB | 2.3 MB | 2.07 MB | 354 kB  | 980 kB | 22.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.59 ms | 1.7 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 22895  | 22895  | 40799   | 41279   | 38831.2 | 5362.57 | 22893  | 388317  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 6.24 MB | 6.32 MB | 5.94 MB | 820 kB  | 3.5 MB | 59.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.33 ms | 0.77 ms | 41 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20879   | 20879   | 37919   | 38911   | 36332.37 | 4958.57 | 20872   | 399641  |
| **Bytes/Sec** | 2.34 MB | 2.34 MB | 4.25 MB | 4.36 MB | 4.07 MB  | 555 kB  | 2.34 MB | 44.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.8 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11191   | 11191   | 15287   | 18639   | 15651.6 | 1991.27 | 11188   | 156500  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.42 MB | 1.73 MB | 1.46 MB | 185 kB  | 1.04 MB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.13 ms | 1.36 ms | 51 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2315   | 2315   | 3311   | 4115   | 3249.5 | 527.09  | 2315   | 32489   |
| **Bytes/Sec** | 266 kB | 266 kB | 381 kB | 473 kB | 374 kB | 60.6 kB | 266 kB | 3.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.83 ms | 17.88 ms | 67 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2985   | 2985   | 5895    | 6107    | 5597.1  | 896.68 | 2985   | 55968   |
| **Bytes/Sec** | 848 kB | 848 kB | 1.67 MB | 1.73 MB | 1.59 MB | 255 kB | 848 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.78 ms | 3.04 ms | 178 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17471   | 17471   | 24895   | 25407   | 24184   | 2258.26 | 17462   | 241842  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.29 MB | 2.34 MB | 2.23 MB | 208 kB  | 1.61 MB | 22.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.81 ms | 47 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5171   | 5171   | 8919   | 9159   | 8519   | 1136.3  | 5168   | 85179   |
| **Bytes/Sec** | 403 kB | 403 kB | 695 kB | 714 kB | 664 kB | 88.6 kB | 403 kB | 6.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.33 ms | 1.95 ms | 98 ms |


---

<p align="center">Generated 2020-12-27T00:24:01.045Z</p>