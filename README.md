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
| **Average** | 9992.6 | 23415.64 | 26052.8 | 8677.4 | 24312 | 13679.8 | 39101.6 | 23147.6 | 16995.6 | 3402.4 | 5559.1 | 26208 | 5899.7 |
| **Total** | 99925 | 257576 | 260528 | 86767 | 267414 | 136798 | 391044 | 231461 | 169961 | 34018 | 55581 | 262066 | 58995 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6403   | 6403   | 10407  | 10687  | 9992.6 | 1220.94 | 6402   | 99925   |
| **Bytes/Sec** | 595 kB | 595 kB | 968 kB | 994 kB | 929 kB | 114 kB  | 595 kB | 9.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.49 ms | 1.87 ms | 92 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15431   | 15431   | 24175   | 24671   | 23415.64 | 2544.03 | 15424   | 257576  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.22 MB | 2.27 MB | 2.15 MB  | 234 kB  | 1.42 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.81 ms | 62 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18815  | 18815  | 26703   | 27631   | 26052.8 | 2461.54 | 18811  | 260528  |
| **Bytes/Sec** | 959 kB | 959 kB | 1.36 MB | 1.41 MB | 1.33 MB | 126 kB  | 959 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.72 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6403   | 6403   | 8847   | 9311   | 8677.4 | 784.03  | 6400   | 86767   |
| **Bytes/Sec** | 333 kB | 333 kB | 460 kB | 484 kB | 451 kB | 40.8 kB | 333 kB | 4.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4.2 ms | 1.6 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 16655   | 16655   | 25071   | 25599  | 24312   | 2431.41 | 16648   | 267414 |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.16 MB | 2.2 MB | 2.09 MB | 209 kB  | 1.43 MB | 23 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.72 ms | 62 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5851    | 5851    | 14663   | 15223   | 13679.8 | 2680.89 | 5851    | 136798  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.17 MB | 3.29 MB | 2.95 MB | 579 kB  | 1.26 MB | 29.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.44 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22335   | 22335   | 41023   | 41407   | 39101.6 | 5598.38 | 22323   | 391044  |
| **Bytes/Sec** | 3.42 MB | 3.42 MB | 6.28 MB | 6.34 MB | 5.98 MB | 857 kB  | 3.42 MB | 59.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.25 ms | 0.73 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14143   | 14143   | 23759   | 26399   | 23147.6 | 3183.39 | 14137   | 231461  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 2.66 MB | 2.96 MB | 2.59 MB | 357 kB  | 1.58 MB | 25.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.99 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10335  | 10335  | 17391   | 18559   | 16995.6 | 2277.62 | 10333  | 169961  |
| **Bytes/Sec** | 961 kB | 961 kB | 1.62 MB | 1.73 MB | 1.58 MB | 212 kB  | 961 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.75 ms | 1.37 ms | 60 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2047   | 2047   | 3079   | 4863   | 3402.4 | 800.98  | 2047   | 34018   |
| **Bytes/Sec** | 236 kB | 236 kB | 354 kB | 560 kB | 391 kB | 92.1 kB | 235 kB | 3.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.27 ms | 17.53 ms | 74 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2969   | 2969   | 5891    | 6063    | 5559.1  | 894.41 | 2969   | 55581   |
| **Bytes/Sec** | 843 kB | 843 kB | 1.67 MB | 1.72 MB | 1.58 MB | 254 kB | 843 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.77 ms | 3.13 ms | 191 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19055   | 19055   | 26959   | 27295   | 26208   | 2393.16 | 19046   | 262066  |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 2.48 MB | 2.51 MB | 2.41 MB | 220 kB  | 1.75 MB | 24.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.67 ms | 32 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3463   | 3463   | 6031   | 6647   | 5899.7 | 852.42  | 3462   | 58995  |
| **Bytes/Sec** | 270 kB | 270 kB | 471 kB | 519 kB | 460 kB | 66.6 kB | 270 kB | 4.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.22 ms | 2.8 ms | 147 ms |


---

<p align="center">Generated 2021-01-20T00:56:03.686Z</p>