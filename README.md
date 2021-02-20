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
| **Average** | 11968 | 20998 | 24409.6 | 12061.4 | 17330 | 17401.41 | 24940.73 | 35831.2 | 18132 | 3128 | 3163.8 | 24519.6 | 5180.5 |
| **Total** | 119656 | 209988 | 244086 | 120617 | 173284 | 173990 | 274354 | 358305 | 199433 | 31276 | 31629 | 245179 | 51804 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8519   | 8519   | 12455   | 12847  | 11968   | 1203.18 | 8512   | 119656  |
| **Bytes/Sec** | 792 kB | 792 kB | 1.16 MB | 1.2 MB | 1.11 MB | 112 kB  | 792 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.67 ms | 1.63 ms | 75 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14599   | 14599   | 21583   | 22927   | 20998   | 2230.06 | 14598   | 209988  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.99 MB | 2.11 MB | 1.93 MB | 205 kB  | 1.34 MB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.02 ms | 59 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17567  | 17567  | 24991   | 26015   | 24409.6 | 2323.93 | 17566  | 244086  |
| **Bytes/Sec** | 896 kB | 896 kB | 1.27 MB | 1.33 MB | 1.24 MB | 118 kB  | 896 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.83 ms | 58 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7963   | 7963   | 12239  | 13599  | 12061.4 | 1477.02 | 7962   | 120617  |
| **Bytes/Sec** | 414 kB | 414 kB | 637 kB | 708 kB | 627 kB  | 76.8 kB | 414 kB | 6.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.67 ms | 1.57 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10591  | 10591  | 17631   | 19087   | 17330   | 2337.68 | 10591  | 173284  |
| **Bytes/Sec** | 911 kB | 911 kB | 1.52 MB | 1.64 MB | 1.49 MB | 201 kB  | 911 kB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.68 ms | 1.53 ms | 91 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7351    | 7351    | 18511 | 19135   | 17401.41 | 3385.05 | 7349    | 173990  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 4 MB  | 4.13 MB | 3.76 MB  | 731 kB  | 1.59 MB | 37.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.88 ms | 1.14 ms | 22 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 13807   | 13807   | 26175   | 26991   | 24940.73 | 3583.75 | 13801   | 274354 |
| **Bytes/Sec** | 2.11 MB | 2.11 MB | 4.01 MB | 4.13 MB | 3.82 MB  | 548 kB  | 2.11 MB | 42 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.88 ms | 31 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21663   | 21663   | 37279   | 38399  | 35831.2 | 4838.59 | 21656   | 358305  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 4.17 MB | 4.3 MB | 4.01 MB | 542 kB  | 2.43 MB | 40.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.87 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11887  | 11887  | 18783   | 19343  | 18132   | 2025.01 | 11880  | 199433  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.75 MB | 1.8 MB | 1.69 MB | 189 kB  | 1.1 MB | 18.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.72 ms | 1.11 ms | 67 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2163   | 2163   | 3079   | 3835   | 3128   | 454.14  | 2162   | 31276  |
| **Bytes/Sec** | 249 kB | 249 kB | 354 kB | 441 kB | 360 kB | 52.2 kB | 249 kB | 3.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.32 ms | 17.91 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1449   | 1449   | 3429   | 3641    | 3163.8 | 653.84 | 1449   | 31629   |
| **Bytes/Sec** | 412 kB | 412 kB | 974 kB | 1.03 MB | 898 kB | 186 kB | 412 kB | 8.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 9 ms  | 11 ms | 23 ms | 12.13 ms | 6.76 ms | 335 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16343  | 16343  | 25151   | 26191   | 24519.6 | 2800.67 | 16338  | 245179  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 2.31 MB | 2.41 MB | 2.26 MB | 258 kB  | 1.5 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.75 ms | 30 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3335   | 3335   | 5375   | 5643   | 5180.5 | 644.55  | 3334   | 51804   |
| **Bytes/Sec** | 260 kB | 260 kB | 419 kB | 440 kB | 404 kB | 50.3 kB | 260 kB | 4.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 7.21 ms | 3.1 ms | 133 ms |


---

<p align="center">Generated 2021-02-20T00:17:36.556Z</p>