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
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 7697.82 | 21454.19 | 32837.1 | 13259.2 | 18875.28 | 13934.2 | 34538.4 | 46218.91 | 19458.8 | 6506.5 | 2782.6 | 5229.3 | 25190.55 |
| **Total** | 84673 | 235986 | 361184 | 132571 | 207619 | 139326 | 345378 | 508406 | 194567 | 65065 | 27823 | 52287 | 277093 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4523   | 4523   | 7987   | 8295   | 7697.82 | 1027.26 | 4523   | 84673   |
| **Bytes/Sec** | 421 kB | 421 kB | 743 kB | 771 kB | 716 kB  | 95.5 kB | 421 kB | 7.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.73 ms | 2.35 ms | 80 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13023  | 13023  | 22463   | 23263   | 21454.19 | 2772.55 | 13016  | 235986  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 2.07 MB | 2.14 MB | 1.97 MB  | 255 kB  | 1.2 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.16 ms | 66 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 25423  | 25423  | 33567   | 34623   | 32837.1 | 2418.1 | 25409  | 361184  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.71 MB | 1.77 MB | 1.67 MB | 123 kB | 1.3 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.01 ms | 0.54 ms | 29 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9311   | 9311   | 13727  | 14071  | 13259.2 | 1348.23 | 9306   | 132571  |
| **Bytes/Sec** | 484 kB | 484 kB | 714 kB | 732 kB | 689 kB  | 70.1 kB | 484 kB | 6.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.81 ms | 65 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10175  | 10175  | 19663   | 20447   | 18875.28 | 2777.27 | 10174  | 207619  |
| **Bytes/Sec** | 875 kB | 875 kB | 1.69 MB | 1.76 MB | 1.62 MB  | 239 kB  | 875 kB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 1.36 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5643    | 5643    | 14871   | 15375   | 13934.2 | 2820.42 | 5643    | 139326  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.21 MB | 3.32 MB | 3.01 MB | 609 kB  | 1.22 MB | 30.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.51 ms | 44 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16479   | 16479   | 36351   | 37055   | 34538.4 | 6030.47 | 16471   | 345378  |
| **Bytes/Sec** | 2.52 MB | 2.52 MB | 5.56 MB | 5.67 MB | 5.28 MB | 923 kB  | 2.52 MB | 52.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.9 ms | 0.86 ms | 35 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 29119   | 29119   | 47743   | 50399   | 46218.91 | 5585.85 | 29108   | 508406  |
| **Bytes/Sec** | 3.26 MB | 3.26 MB | 5.35 MB | 5.65 MB | 5.18 MB  | 626 kB  | 3.26 MB | 56.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.63 ms | 38 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12135   | 12135   | 19919   | 21119   | 19458.8 | 2549.52 | 12128   | 194567  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.85 MB | 1.96 MB | 1.81 MB | 237 kB  | 1.13 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 1.16 ms | 51 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3963   | 3963   | 6739   | 7131   | 6506.5 | 863.84  | 3962   | 65065   |
| **Bytes/Sec** | 365 kB | 365 kB | 620 kB | 656 kB | 599 kB | 79.5 kB | 365 kB | 5.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.68 ms | 2.89 ms | 159 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1869   | 1869   | 2777   | 3341   | 2782.6 | 395.2   | 1869   | 27823  |
| **Bytes/Sec** | 215 kB | 215 kB | 319 kB | 384 kB | 320 kB | 45.4 kB | 215 kB | 3.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.86 ms | 18.87 ms | 153 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2259   | 2259   | 5647   | 5875    | 5229.3  | 1045.51 | 2258   | 52287   |
| **Bytes/Sec** | 642 kB | 642 kB | 1.6 MB | 1.67 MB | 1.48 MB | 297 kB  | 641 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 15 ms | 7.15 ms | 3.87 ms | 120 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18383  | 18383  | 26239   | 26623   | 25190.55 | 2250.56 | 18382  | 277093  |
| **Bytes/Sec** | 956 kB | 956 kB | 1.36 MB | 1.38 MB | 1.31 MB  | 117 kB  | 956 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.85 ms | 79 ms |


---

<p align="center">Generated 2020-11-25T00:17:45.872Z</p>