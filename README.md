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
| **Average** | 6607.2 | 19862.8 | 24438.4 | 15422.91 | 17746.8 | 14176.19 | 22128.4 | 35938.4 | 20263.6 | 2909.8 | 4133.61 | 12016 | 7144 |
| **Total** | 66070 | 198618 | 244390 | 169659 | 177446 | 155928 | 221283 | 359404 | 202619 | 29091 | 41330 | 120160 | 71438 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4647   | 4647   | 6847   | 7315   | 6607.2 | 720.8   | 4646   | 66070   |
| **Bytes/Sec** | 432 kB | 432 kB | 637 kB | 680 kB | 614 kB | 67.1 kB | 432 kB | 6.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.64 ms | 2 ms  | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12591   | 12591   | 20511   | 21119   | 19862.8 | 2436.07 | 12587   | 198618  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.89 MB | 1.94 MB | 1.83 MB | 224 kB  | 1.16 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.16 ms | 71 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16463  | 16463  | 25279   | 26559   | 24438.4 | 2912.87 | 16458  | 244390  |
| **Bytes/Sec** | 840 kB | 840 kB | 1.29 MB | 1.35 MB | 1.25 MB | 148 kB  | 839 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.19 ms | 0.9 ms | 58 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11703  | 11703  | 15807  | 16367  | 15422.91 | 1217.85 | 11698  | 169659  |
| **Bytes/Sec** | 609 kB | 609 kB | 822 kB | 851 kB | 802 kB   | 63.3 kB | 608 kB | 8.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.18 ms | 0.97 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9079   | 9079   | 18831   | 19599   | 17746.8 | 2953.91 | 9078   | 177446  |
| **Bytes/Sec** | 781 kB | 781 kB | 1.62 MB | 1.68 MB | 1.53 MB | 254 kB  | 781 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.62 ms | 1.44 ms | 94 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6059    | 6059    | 15151   | 15359   | 14176.19 | 2621.21 | 6057    | 155928  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.27 MB | 3.32 MB | 3.06 MB  | 566 kB  | 1.31 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.25 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9855    | 9855    | 23455   | 23871   | 22128.4 | 4100.56 | 9850    | 221283  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.59 MB | 3.65 MB | 3.39 MB | 628 kB  | 1.51 MB | 33.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.04 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21103   | 21103   | 37599   | 37951   | 35938.4 | 4953.62 | 21098   | 359404  |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 4.21 MB | 4.25 MB | 4.03 MB | 555 kB  | 2.36 MB | 40.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.77 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14871   | 14871   | 20575   | 22207   | 20263.6 | 1931.43 | 14865   | 202619  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.91 MB | 2.06 MB | 1.88 MB | 180 kB  | 1.38 MB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.24 ms | 0.98 ms | 67 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2143   | 2143   | 3023   | 3473   | 2909.8 | 404.99  | 2142   | 29091   |
| **Bytes/Sec** | 246 kB | 246 kB | 348 kB | 399 kB | 335 kB | 46.5 kB | 246 kB | 3.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.26 ms | 18.48 ms | 81 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2223   | 2223   | 4403    | 4627    | 4133.61 | 721.97 | 2222   | 41330   |
| **Bytes/Sec** | 631 kB | 631 kB | 1.25 MB | 1.31 MB | 1.17 MB | 205 kB | 631 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9.17 ms | 3.61 ms | 182 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8639   | 8639   | 12311   | 13103   | 12016   | 1186.49 | 8632   | 120160  |
| **Bytes/Sec** | 795 kB | 795 kB | 1.13 MB | 1.21 MB | 1.11 MB | 109 kB  | 794 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.98 ms | 1.16 ms | 78 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4979   | 4979   | 7399   | 7599   | 7144   | 737.87  | 4979   | 71438   |
| **Bytes/Sec** | 389 kB | 389 kB | 578 kB | 593 kB | 557 kB | 57.5 kB | 388 kB | 5.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5 ms  | 2.29 ms | 103 ms |


---

<p align="center">Generated 2021-03-19T00:18:01.145Z</p>