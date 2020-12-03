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
| **Average** | 10303 | 22134.91 | 25552.73 | 10113.28 | 19660.73 | 13073.28 | 20056.41 | 39478.55 | 19094.8 | 5943.1 | 3045 | 5425.9 | 21810.8 |
| **Total** | 103026 | 243475 | 281087 | 111231 | 216266 | 143813 | 200570 | 434277 | 190978 | 59431 | 30448 | 54257 | 218094 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6731   | 6731   | 10623  | 10863   | 10303  | 1197.49 | 6730   | 103026  |
| **Bytes/Sec** | 626 kB | 626 kB | 988 kB | 1.01 MB | 958 kB | 111 kB  | 626 kB | 9.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.52 ms | 42 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13823   | 13823   | 22943   | 23615   | 22134.91 | 2648.54 | 13822   | 243475  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.11 MB | 2.17 MB | 2.04 MB  | 244 kB  | 1.27 MB | 22.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.08 ms | 52 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19311  | 19311  | 26335   | 26927   | 25552.73 | 2113.04 | 19301  | 281087  |
| **Bytes/Sec** | 985 kB | 985 kB | 1.34 MB | 1.37 MB | 1.3 MB   | 108 kB  | 984 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.78 ms | 51 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7855   | 7855   | 10583  | 10767  | 10113.28 | 967.81  | 7852   | 111231  |
| **Bytes/Sec** | 408 kB | 408 kB | 550 kB | 560 kB | 526 kB   | 50.4 kB | 408 kB | 5.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.47 ms | 1.52 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11951   | 11951   | 20607   | 21295   | 19660.73 | 2518.86 | 11949   | 216266  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.77 MB | 1.83 MB | 1.69 MB  | 216 kB  | 1.03 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 1.21 ms | 99 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 4991    | 4991    | 13975   | 14895   | 13073.28 | 2668.47 | 4990    | 143813  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 3.02 MB | 3.22 MB | 2.82 MB  | 576 kB  | 1.08 MB | 31.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.47 ms | 1.84 ms | 87 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 8687    | 8687    | 21183   | 22255   | 20056.41 | 3813.4 | 8687    | 200570  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 3.24 MB | 3.41 MB | 3.07 MB  | 583 kB | 1.33 MB | 30.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 1.34 ms | 73 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19359   | 19359   | 41279   | 42431   | 39478.55 | 6389.97 | 19344   | 434277  |
| **Bytes/Sec** | 2.17 MB | 2.17 MB | 4.62 MB | 4.75 MB | 4.42 MB  | 716 kB  | 2.17 MB | 48.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.23 ms | 0.8 ms | 38 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11631   | 11631   | 19775   | 20815   | 19094.8 | 2547.84 | 11631   | 190978  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.84 MB | 1.94 MB | 1.78 MB | 237 kB  | 1.08 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.2 ms | 45 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3721   | 3721   | 6231   | 6375   | 5943.1 | 757.86  | 3721   | 59431   |
| **Bytes/Sec** | 343 kB | 343 kB | 573 kB | 587 kB | 547 kB | 69.7 kB | 342 kB | 5.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.21 ms | 2.75 ms | 84 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1773   | 1773   | 3033   | 3511   | 3045   | 464.57  | 1773   | 30448  |
| **Bytes/Sec** | 204 kB | 204 kB | 349 kB | 404 kB | 350 kB | 53.4 kB | 204 kB | 3.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.65 ms | 18.26 ms | 84 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2637   | 2637   | 5823    | 5951    | 5425.9  | 997.41 | 2637   | 54257   |
| **Bytes/Sec** | 749 kB | 749 kB | 1.65 MB | 1.69 MB | 1.54 MB | 283 kB | 749 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 6.88 ms | 3.01 ms | 81 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14039  | 14039  | 22479   | 23535   | 21810.8 | 2628.79 | 14039  | 218094  |
| **Bytes/Sec** | 730 kB | 730 kB | 1.17 MB | 1.22 MB | 1.13 MB | 137 kB  | 730 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.25 ms | 59 ms |


---

<p align="center">Generated 2020-12-03T00:17:54.183Z</p>