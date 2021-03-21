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
| **Average** | 7025.2 | 25795.64 | 24323.28 | 9120.91 | 16751.6 | 8917.46 | 32630.55 | 37263.2 | 19118.91 | 2919.8 | 5575.1 | 19229.2 | 9274.6 |
| **Total** | 70250 | 283745 | 267525 | 100318 | 167503 | 98077 | 359007 | 372670 | 210326 | 29190 | 55745 | 192287 | 92742 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5167   | 5167   | 7187   | 7515   | 7025.2 | 630.93  | 5167   | 70250   |
| **Bytes/Sec** | 481 kB | 481 kB | 669 kB | 699 kB | 653 kB | 58.6 kB | 481 kB | 6.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 8 ms  | 5.32 ms | 1.69 ms | 101 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17247   | 17247   | 26559   | 27327   | 25795.64 | 2739.14 | 17232   | 283745  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.44 MB | 2.51 MB | 2.37 MB  | 252 kB  | 1.59 MB | 26.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.75 ms | 59 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16103  | 16103  | 25135   | 25823   | 24323.28 | 2634.15 | 16097  | 267525  |
| **Bytes/Sec** | 821 kB | 821 kB | 1.28 MB | 1.32 MB | 1.24 MB  | 134 kB  | 821 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.17 ms | 0.84 ms | 43 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6867   | 6867   | 9383   | 9583   | 9120.91 | 733     | 6866   | 100318  |
| **Bytes/Sec** | 357 kB | 357 kB | 488 kB | 498 kB | 474 kB  | 38.1 kB | 357 kB | 5.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.88 ms | 1.47 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10783  | 10783  | 16847   | 19007   | 16751.6 | 2261.98 | 10776  | 167503  |
| **Bytes/Sec** | 927 kB | 927 kB | 1.45 MB | 1.63 MB | 1.44 MB | 195 kB  | 927 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.89 ms | 1.26 ms | 29 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4147   | 4147   | 9535    | 9879    | 8917.46 | 1588.79 | 4145   | 98077   |
| **Bytes/Sec** | 895 kB | 895 kB | 2.06 MB | 2.13 MB | 1.93 MB | 343 kB  | 895 kB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.99 ms | 1.88 ms | 46 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17519   | 17519   | 34527   | 35039   | 32630.55 | 4863.18 | 17514   | 359007  |
| **Bytes/Sec** | 2.68 MB | 2.68 MB | 5.28 MB | 5.36 MB | 4.99 MB  | 744 kB  | 2.68 MB | 54.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.93 ms | 0.82 ms | 20 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 21455  | 21455  | 38975   | 39263  | 37263.2 | 5272.83 | 21442  | 372670  |
| **Bytes/Sec** | 2.4 MB | 2.4 MB | 4.37 MB | 4.4 MB | 4.17 MB | 591 kB  | 2.4 MB | 41.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.77 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12151   | 12151   | 19807   | 21055   | 19118.91 | 2290.2 | 12149   | 210326  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.84 MB | 1.96 MB | 1.78 MB  | 213 kB | 1.13 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.08 ms | 51 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2297   | 2297   | 2881   | 3275   | 2919.8 | 269.96  | 2296   | 29190   |
| **Bytes/Sec** | 264 kB | 264 kB | 331 kB | 377 kB | 336 kB | 31.1 kB | 264 kB | 3.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 49 ms | 13.21 ms | 18.32 ms | 89 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3129   | 3129   | 5823    | 5991   | 5575.1  | 822.25 | 3129   | 55745   |
| **Bytes/Sec** | 889 kB | 889 kB | 1.65 MB | 1.7 MB | 1.58 MB | 233 kB | 889 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.69 ms | 2.95 ms | 178 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12495   | 12495   | 19951   | 20959   | 19229.2 | 2328.99 | 12488   | 192287  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.84 MB | 1.93 MB | 1.77 MB | 215 kB  | 1.15 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.18 ms | 58 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6543   | 6543   | 9519   | 9855   | 9274.6 | 926.14  | 6543   | 92742   |
| **Bytes/Sec** | 510 kB | 510 kB | 743 kB | 769 kB | 723 kB | 72.2 kB | 510 kB | 7.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.58 ms | 1.9 ms | 80 ms |


---

<p align="center">Generated 2021-03-21T00:19:20.412Z</p>