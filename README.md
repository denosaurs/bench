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
| **Average** | 8469.4 | 22960.4 | 21668.73 | 7719.6 | 22174.8 | 16690.37 | 38936 | 44581.1 | 17804 | 2886.7 | 4783.9 | 23610.91 | 6137.5 |
| **Total** | 84691 | 229589 | 238351 | 77189 | 221733 | 183584 | 428274 | 490379 | 195828 | 28862 | 47835 | 259725 | 61367 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5171   | 5171   | 8799   | 9087   | 8469.4 | 1116.56 | 5170   | 84691   |
| **Bytes/Sec** | 481 kB | 481 kB | 818 kB | 845 kB | 788 kB | 104 kB  | 481 kB | 7.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.41 ms | 2.13 ms | 117 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15311   | 15311   | 23871  | 24383   | 22960.4 | 2576.01 | 15309   | 229589  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.2 MB | 2.24 MB | 2.11 MB | 237 kB  | 1.41 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.92 ms | 54 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15207  | 15207  | 22431   | 23263   | 21668.73 | 2148.88 | 15206  | 238351  |
| **Bytes/Sec** | 776 kB | 776 kB | 1.14 MB | 1.19 MB | 1.11 MB  | 110 kB  | 776 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.03 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5675   | 5675   | 7907   | 8223   | 7719.6 | 709.75  | 5675   | 77189   |
| **Bytes/Sec** | 295 kB | 295 kB | 411 kB | 428 kB | 401 kB | 36.9 kB | 295 kB | 4.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.67 ms | 1.76 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15919   | 15919   | 22799   | 23567   | 22174.8 | 2121.52 | 15913   | 221733  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 1.96 MB | 2.03 MB | 1.91 MB | 182 kB  | 1.37 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.85 ms | 51 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7323    | 7323    | 17711   | 18079   | 16690.37 | 2992.61 | 7323    | 183584  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 3.82 MB | 3.91 MB | 3.61 MB  | 646 kB  | 1.58 MB | 39.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 1.1 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24143   | 24143   | 40351   | 41119   | 38936   | 4706.56 | 24134   | 428274  |
| **Bytes/Sec** | 3.69 MB | 3.69 MB | 6.17 MB | 6.29 MB | 5.96 MB | 720 kB  | 3.69 MB | 65.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.7 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 29471  | 29471  | 45567  | 48191  | 44581.1 | 4938.31 | 29459  | 490379  |
| **Bytes/Sec** | 3.3 MB | 3.3 MB | 5.1 MB | 5.4 MB | 4.99 MB | 553 kB  | 3.3 MB | 54.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.64 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 18367   | 18991   | 17804   | 1972.32 | 11718   | 195828  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.71 MB | 1.77 MB | 1.66 MB | 183 kB  | 1.09 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.68 ms | 1.2 ms | 49 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1946   | 1946   | 3011   | 3361   | 2886.7 | 403.79  | 1946   | 28862   |
| **Bytes/Sec** | 224 kB | 224 kB | 346 kB | 387 kB | 332 kB | 46.4 kB | 224 kB | 3.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.38 ms | 18.48 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2325   | 2325   | 5075    | 5427    | 4783.9  | 863.64 | 2324   | 47835   |
| **Bytes/Sec** | 660 kB | 660 kB | 1.44 MB | 1.54 MB | 1.36 MB | 245 kB | 660 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.91 ms | 3.9 ms | 224 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17359  | 17359  | 24319   | 25215   | 23610.91 | 2078.08 | 17357  | 259725  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.24 MB | 2.32 MB | 2.17 MB  | 191 kB  | 1.6 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.89 ms | 26 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3725   | 3725   | 6395   | 6547   | 6137.5 | 814.54  | 3725   | 61367   |
| **Bytes/Sec** | 291 kB | 291 kB | 499 kB | 510 kB | 479 kB | 63.5 kB | 291 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 5.94 ms | 2.66 ms | 115 ms |


---

<p align="center">Generated 2020-12-24T00:28:25.149Z</p>