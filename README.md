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
| **Average** | 8009.2 | 20334.8 | 21998 | 7483.2 | 19809.2 | 13768.6 | 33356 | 22829.2 | 15265.2 | 3514.8 | 5771.9 | 17464 | 10685 |
| **Total** | 80080 | 203363 | 219998 | 74823 | 198082 | 137685 | 333545 | 228283 | 152649 | 35143 | 57710 | 174635 | 106844 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5935   | 5935   | 8231   | 8591   | 8009.2 | 722.19  | 5933   | 80080   |
| **Bytes/Sec** | 552 kB | 552 kB | 765 kB | 799 kB | 745 kB | 67.1 kB | 552 kB | 7.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.48 ms | 1.46 ms | 35 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14031   | 14031   | 21023   | 22159   | 20334.8 | 2202   | 14030   | 203363  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 1.93 MB | 2.04 MB | 1.87 MB | 203 kB | 1.29 MB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.04 ms | 52 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14599  | 14599  | 22863   | 23471  | 21998   | 2588.12 | 14599  | 219998  |
| **Bytes/Sec** | 745 kB | 745 kB | 1.17 MB | 1.2 MB | 1.12 MB | 132 kB  | 745 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 1.01 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5139   | 5139   | 7671   | 8071   | 7483.2 | 798.7   | 5136   | 74823   |
| **Bytes/Sec** | 267 kB | 267 kB | 399 kB | 420 kB | 389 kB | 41.5 kB | 267 kB | 3.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.78 ms | 2.15 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 11383  | 11383  | 20383   | 22127  | 19809.2 | 2880.14 | 11381  | 198082 |
| **Bytes/Sec** | 979 kB | 979 kB | 1.75 MB | 1.9 MB | 1.7 MB  | 248 kB  | 979 kB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 1.13 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6075    | 6075    | 14735   | 15247   | 13768.6 | 2650.77 | 6075    | 137685  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.18 MB | 3.29 MB | 2.97 MB | 573 kB  | 1.31 MB | 29.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.38 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 18255   | 18255   | 35007   | 35263  | 33356  | 5038.44 | 18254   | 333545 |
| **Bytes/Sec** | 2.79 MB | 2.79 MB | 5.35 MB | 5.4 MB | 5.1 MB | 771 kB  | 2.79 MB | 51 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.86 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12063   | 12063   | 24175   | 24735   | 22829.2 | 3652.53 | 12063   | 228283  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.71 MB | 2.77 MB | 2.56 MB | 409 kB  | 1.35 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.01 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10479  | 10479  | 15663   | 16447   | 15265.2 | 1670.65 | 10479  | 152649  |
| **Bytes/Sec** | 975 kB | 975 kB | 1.46 MB | 1.53 MB | 1.42 MB | 155 kB  | 975 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.22 ms | 60 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2511   | 2511   | 3495   | 4611   | 3514.8 | 612.55  | 2510   | 35143   |
| **Bytes/Sec** | 289 kB | 289 kB | 402 kB | 530 kB | 404 kB | 70.5 kB | 289 kB | 4.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 10.87 ms | 17.32 ms | 65 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3241   | 3241   | 6123    | 6203    | 5771.9  | 876.12 | 3240   | 57710   |
| **Bytes/Sec** | 921 kB | 921 kB | 1.74 MB | 1.76 MB | 1.64 MB | 249 kB | 920 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.48 ms | 2.64 ms | 154 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11463   | 11463   | 18031   | 18943   | 17464   | 2122   | 11463   | 174635  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.66 MB | 1.74 MB | 1.61 MB | 195 kB | 1.05 MB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.82 ms | 1.15 ms | 53 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7239   | 7239   | 11063  | 11151  | 10685  | 1151.65 | 7238   | 106844  |
| **Bytes/Sec** | 565 kB | 565 kB | 863 kB | 870 kB | 833 kB | 89.9 kB | 565 kB | 8.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.42 ms | 1.59 ms | 34 ms |


---

<p align="center">Generated 2021-04-09T00:39:38.465Z</p>