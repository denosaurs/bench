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
| **Average** | 7599.6 | 22986 | 24338.19 | 8548.21 | 17831.64 | 8287.91 | 32566.8 | 24134.8 | 18191.64 | 2921.4 | 4765.7 | 19294.91 | 9446.6 |
| **Total** | 75987 | 229851 | 267713 | 85488 | 196151 | 91161 | 325648 | 241364 | 200147 | 29208 | 47647 | 212229 | 94469 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5315   | 5315   | 7783   | 8187   | 7599.6 | 792.75  | 5313   | 75987   |
| **Bytes/Sec** | 494 kB | 494 kB | 724 kB | 761 kB | 707 kB | 73.7 kB | 494 kB | 7.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.71 ms | 1.77 ms | 99 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14671   | 14671   | 23775   | 24351   | 22986   | 2785.63 | 14669   | 229851  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.19 MB | 2.24 MB | 2.11 MB | 256 kB  | 1.35 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.95 ms | 78 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16863  | 16863  | 25167   | 25455  | 24338.19 | 2384.58 | 16859  | 267713  |
| **Bytes/Sec** | 860 kB | 860 kB | 1.28 MB | 1.3 MB | 1.24 MB  | 122 kB  | 860 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.16 ms | 0.83 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6215   | 6215   | 8839   | 9167   | 8548.21 | 821.96  | 6213   | 85488   |
| **Bytes/Sec** | 323 kB | 323 kB | 460 kB | 477 kB | 445 kB  | 42.7 kB | 323 kB | 4.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.27 ms | 1.54 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10727  | 10727  | 18335   | 19711   | 17831.64 | 2318.88 | 10727  | 196151  |
| **Bytes/Sec** | 923 kB | 923 kB | 1.58 MB | 1.69 MB | 1.53 MB  | 199 kB  | 923 kB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.67 ms | 1.08 ms | 31 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3529   | 3529   | 8879    | 9455    | 8287.91 | 1617.05 | 3529   | 91161   |
| **Bytes/Sec** | 762 kB | 762 kB | 1.92 MB | 2.04 MB | 1.79 MB | 349 kB  | 762 kB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.35 ms | 2.33 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14735   | 14735   | 34495   | 35647   | 32566.8 | 6016.09 | 14729   | 325648  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 5.28 MB | 5.46 MB | 4.98 MB | 920 kB  | 2.25 MB | 49.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.69 ms | 0.94 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 12511  | 12511  | 25439   | 26399   | 24134.8 | 3961.54 | 12509  | 241364 |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.85 MB | 2.96 MB | 2.7 MB  | 443 kB  | 1.4 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.93 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11935   | 11935   | 18623   | 19551   | 18191.64 | 2034.09 | 11935   | 200147  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.73 MB | 1.82 MB | 1.69 MB  | 189 kB  | 1.11 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.19 ms | 67 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2149   | 2149   | 2953   | 3327   | 2921.4 | 347.05  | 2149   | 29208   |
| **Bytes/Sec** | 247 kB | 247 kB | 340 kB | 383 kB | 336 kB | 39.9 kB | 247 kB | 3.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.2 ms | 18.29 ms | 75 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2887   | 2887   | 5015    | 5227    | 4765.7  | 669.33 | 2886   | 47647   |
| **Bytes/Sec** | 820 kB | 820 kB | 1.42 MB | 1.48 MB | 1.35 MB | 190 kB | 820 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.9 ms | 3.01 ms | 160 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 13639   | 13639   | 19823   | 21167   | 19294.91 | 1978   | 13637   | 212229  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 1.82 MB | 1.95 MB | 1.78 MB  | 182 kB | 1.25 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.04 ms | 54 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6567   | 6567   | 9719   | 9927   | 9446.6 | 967.61  | 6566   | 94469   |
| **Bytes/Sec** | 512 kB | 512 kB | 758 kB | 774 kB | 737 kB | 75.5 kB | 512 kB | 7.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.59 ms | 1.97 ms | 56 ms |


---

<p align="center">Generated 2021-03-23T00:18:29.600Z</p>