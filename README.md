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
| **Average** | 6267.1 | 22409.2 | 23342.19 | 14540.73 | 19149.2 | 14059.82 | 34899.2 | 42957.82 | 14284.8 | 3430.9 | 4853.2 | 25929.46 | 9540.6 |
| **Total** | 62666 | 224093 | 256762 | 159926 | 191471 | 154647 | 348979 | 472528 | 142835 | 34303 | 48524 | 285204 | 95411 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3641   | 3641   | 6447   | 6855   | 6267.1 | 897.88  | 3640   | 62666   |
| **Bytes/Sec** | 339 kB | 339 kB | 600 kB | 637 kB | 583 kB | 83.5 kB | 339 kB | 5.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max    |
| ----------- | ----- | ----- | ----- | ------- | ----- | ------ |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 5.96 ms | 3 ms  | 156 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14471   | 14471   | 22847  | 24751   | 22409.2 | 2845.72 | 14467   | 224093  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.1 MB | 2.28 MB | 2.06 MB | 262 kB  | 1.33 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.95 ms | 53 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16159  | 16159  | 23983   | 25007   | 23342.19 | 2358.37 | 16157  | 256762  |
| **Bytes/Sec** | 824 kB | 824 kB | 1.22 MB | 1.28 MB | 1.19 MB  | 120 kB  | 824 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.92 ms | 64 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10807  | 10807  | 14959  | 15367  | 14540.73 | 1223.24 | 10800  | 159926  |
| **Bytes/Sec** | 562 kB | 562 kB | 778 kB | 799 kB | 756 kB   | 63.7 kB | 562 kB | 8.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.22 ms | 0.99 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11231  | 11231  | 19759  | 20911  | 19149.2 | 2703.92 | 11226  | 191471  |
| **Bytes/Sec** | 966 kB | 966 kB | 1.7 MB | 1.8 MB | 1.65 MB | 233 kB  | 965 kB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.15 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 6227    | 6227    | 14951   | 15335   | 14059.82 | 2532.5 | 6227    | 154647  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 3.23 MB | 3.31 MB | 3.04 MB  | 547 kB | 1.35 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.28 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20959   | 20959   | 37855   | 38719   | 34899.2 | 6520.02 | 20951   | 348979  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 5.79 MB | 5.92 MB | 5.34 MB | 997 kB  | 3.21 MB | 53.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.63 ms | 0.85 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 26975   | 26975   | 44831   | 45311   | 42957.82 | 5127.59 | 26968   | 472528  |
| **Bytes/Sec** | 3.02 MB | 3.02 MB | 5.02 MB | 5.07 MB | 4.81 MB  | 574 kB  | 3.02 MB | 52.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.71 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9543   | 9543   | 14791   | 15735   | 14284.8 | 1655.74 | 9541   | 142835  |
| **Bytes/Sec** | 888 kB | 888 kB | 1.38 MB | 1.46 MB | 1.33 MB | 154 kB  | 887 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.25 ms | 52 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2333   | 2333   | 3271   | 4659   | 3430.9 | 653.3   | 2332   | 34303   |
| **Bytes/Sec** | 268 kB | 268 kB | 376 kB | 536 kB | 394 kB | 75.1 kB | 268 kB | 3.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.18 ms | 17.42 ms | 73 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2301   | 2301   | 5255    | 5383    | 4853.2  | 936.87 | 2300   | 48524   |
| **Bytes/Sec** | 653 kB | 653 kB | 1.49 MB | 1.53 MB | 1.38 MB | 266 kB | 653 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.81 ms | 4.19 ms | 242 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 19807   | 19807   | 26863   | 27119   | 25929.46 | 2079.2 | 19800   | 285204  |
| **Bytes/Sec** | 1.82 MB | 1.82 MB | 2.47 MB | 2.49 MB | 2.39 MB  | 191 kB | 1.82 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.7 ms | 51 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6571   | 6571   | 9895   | 9999   | 9540.6 | 997.91  | 6570   | 95411   |
| **Bytes/Sec** | 513 kB | 513 kB | 772 kB | 780 kB | 744 kB | 77.9 kB | 512 kB | 7.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.49 ms | 1.72 ms | 86 ms |


---

<p align="center">Generated 2021-01-18T00:45:28.809Z</p>