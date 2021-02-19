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
| **Average** | 6778.4 | 20121.82 | 20277.2 | 10343.64 | 16743.6 | 13305.28 | 34659.64 | 36378.4 | 17109.1 | 2617.4 | 4788.7 | 23093.2 | 8526.6 |
| **Total** | 67779 | 221346 | 202789 | 113777 | 167425 | 146356 | 381278 | 363848 | 188187 | 26171 | 47883 | 230939 | 85274 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4127   | 4127   | 7179   | 7367   | 6778.4 | 941.48  | 4126   | 67779  |
| **Bytes/Sec** | 384 kB | 384 kB | 668 kB | 685 kB | 630 kB | 87.6 kB | 384 kB | 6.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.31 ms | 2.61 ms | 117 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11983  | 11983  | 20735   | 21935   | 20121.82 | 2629.28 | 11982  | 221346  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.91 MB | 2.02 MB | 1.85 MB  | 242 kB  | 1.1 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.09 ms | 54 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13919  | 13919  | 20751   | 21935   | 20277.2 | 2194.74 | 13915  | 202789  |
| **Bytes/Sec** | 710 kB | 710 kB | 1.06 MB | 1.12 MB | 1.03 MB | 112 kB  | 710 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.04 ms | 55 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8255   | 8255   | 10551  | 11383  | 10343.64 | 917.39  | 8248   | 113777  |
| **Bytes/Sec** | 429 kB | 429 kB | 549 kB | 592 kB | 538 kB   | 47.7 kB | 429 kB | 5.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.39 ms | 1.22 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10471  | 10471  | 17407  | 17951   | 16743.6 | 2107.03 | 10467  | 167425  |
| **Bytes/Sec** | 901 kB | 901 kB | 1.5 MB | 1.54 MB | 1.44 MB | 181 kB  | 900 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.97 ms | 1.11 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5399    | 5399    | 14199   | 14575   | 13305.28 | 2547.98 | 5397    | 146356  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 3.07 MB | 3.15 MB | 2.87 MB  | 550 kB  | 1.17 MB | 31.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.51 ms | 41 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18575   | 18575   | 36351   | 37311   | 34659.64 | 5151.31 | 18566   | 381278  |
| **Bytes/Sec** | 2.84 MB | 2.84 MB | 5.56 MB | 5.71 MB | 5.3 MB   | 788 kB  | 2.84 MB | 58.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.84 ms | 21 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 20767   | 20767   | 38047   | 38399  | 36378.4 | 5209.9 | 20760   | 363848  |
| **Bytes/Sec** | 2.33 MB | 2.33 MB | 4.26 MB | 4.3 MB | 4.08 MB | 584 kB | 2.33 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.82 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11839  | 11839  | 17599   | 18847   | 17109.1 | 1796.99 | 11837  | 188187  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.64 MB | 1.75 MB | 1.59 MB | 167 kB  | 1.1 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.85 ms | 1.26 ms | 52 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1715   | 1715   | 2607   | 3093   | 2617.4 | 369.83  | 1715   | 26171   |
| **Bytes/Sec** | 197 kB | 197 kB | 300 kB | 356 kB | 301 kB | 42.5 kB | 197 kB | 3.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 52 ms | 14.79 ms | 18.95 ms | 100 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2369   | 2369   | 5127    | 5271   | 4788.7  | 846.91 | 2369   | 47883   |
| **Bytes/Sec** | 673 kB | 673 kB | 1.46 MB | 1.5 MB | 1.36 MB | 240 kB | 673 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.99 ms | 3.74 ms | 216 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14943   | 14943   | 23967   | 24367   | 23093.2 | 2726.83 | 14937   | 230939  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.21 MB | 2.24 MB | 2.12 MB | 251 kB  | 1.37 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.84 ms | 53 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5199   | 5199   | 8895   | 9031   | 8526.6 | 1116.4 | 5199   | 85274   |
| **Bytes/Sec** | 406 kB | 406 kB | 694 kB | 705 kB | 665 kB | 87 kB  | 406 kB | 6.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.43 ms | 1.98 ms | 99 ms |


---

<p align="center">Generated 2021-02-19T00:18:21.693Z</p>