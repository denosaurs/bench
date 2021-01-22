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
| **Average** | 7044 | 24088 | 27411.2 | 14914.91 | 19466.8 | 13892.6 | 21209.2 | 42773.6 | 21841.82 | 2966.8 | 5447.1 | 20290.8 | 9377.4 |
| **Total** | 70433 | 264945 | 274102 | 164050 | 194689 | 138917 | 212085 | 427756 | 240230 | 29662 | 54469 | 202921 | 93767 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4215   | 4215   | 7399   | 7747   | 7044   | 995.9   | 4214   | 70433   |
| **Bytes/Sec** | 392 kB | 392 kB | 688 kB | 720 kB | 655 kB | 92.6 kB | 392 kB | 6.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.15 ms | 2.52 ms | 125 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16591   | 16591   | 24847   | 25439   | 24088   | 2416.54 | 16578   | 264945  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.29 MB | 2.34 MB | 2.22 MB | 222 kB  | 1.53 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.91 ms | 65 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 20239   | 20239   | 28143   | 29023   | 27411.2 | 2453.55 | 20235   | 274102 |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.43 MB | 1.48 MB | 1.4 MB  | 125 kB  | 1.03 MB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.74 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11983  | 11983  | 14959  | 16735  | 14914.91 | 1211.82 | 11977  | 164050  |
| **Bytes/Sec** | 623 kB | 623 kB | 778 kB | 870 kB | 775 kB   | 63 kB   | 623 kB | 8.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.19 ms | 1.12 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12567   | 12567   | 19919   | 21071   | 19466.8 | 2375.31 | 12563   | 194689  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.71 MB | 1.81 MB | 1.67 MB | 204 kB  | 1.08 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.12 ms | 61 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5915    | 5915    | 14759   | 15503   | 13892.6 | 2762.47 | 5914    | 138917 |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 3.19 MB | 3.35 MB | 3 MB    | 597 kB  | 1.28 MB | 30 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.34 ms | 1.44 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11175   | 11175   | 21967   | 24719   | 21209.2 | 3691.86 | 11170   | 212085  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 3.36 MB | 3.78 MB | 3.24 MB | 565 kB  | 1.71 MB | 32.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.38 ms | 1.05 ms | 34 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26191   | 26191   | 44703   | 44991   | 42773.6 | 5537.42 | 26183   | 427756  |
| **Bytes/Sec** | 2.93 MB | 2.93 MB | 5.01 MB | 5.04 MB | 4.79 MB | 621 kB  | 2.93 MB | 47.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.67 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15623   | 15623   | 22399   | 23199   | 21841.82 | 1995.13 | 15621   | 240230  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.08 MB | 2.16 MB | 2.03 MB  | 185 kB  | 1.45 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.19 ms | 0.84 ms | 43 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2199   | 2199   | 3031   | 3433   | 2966.8 | 419.88  | 2198   | 29662   |
| **Bytes/Sec** | 253 kB | 253 kB | 349 kB | 395 kB | 341 kB | 48.3 kB | 253 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.97 ms | 18.41 ms | 76 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2753   | 2753   | 5799    | 6175    | 5447.1  | 955.36 | 2753   | 54469   |
| **Bytes/Sec** | 782 kB | 782 kB | 1.65 MB | 1.75 MB | 1.55 MB | 271 kB | 782 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.84 ms | 3.28 ms | 187 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14167  | 14167  | 21087   | 21375   | 20290.8 | 2080.08 | 14164  | 202921  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.94 MB | 1.97 MB | 1.87 MB | 191 kB  | 1.3 MB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1 ms  | 49 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6187   | 6187   | 9759   | 10079  | 9377.4 | 1094.65 | 6185   | 93767   |
| **Bytes/Sec** | 483 kB | 483 kB | 761 kB | 786 kB | 731 kB | 85.4 kB | 482 kB | 7.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.75 ms | 1.79 ms | 95 ms |


---

<p align="center">Generated 2021-01-22T00:47:11.234Z</p>