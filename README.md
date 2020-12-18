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
| **Average** | 8066.2 | 23620.73 | 28048 | 13355.28 | 15754.8 | 16946.37 | 17046 | 18902 | 18534.8 | 2807.4 | 4473.28 | 22900.4 | 6447.1 |
| **Total** | 80658 | 259811 | 280483 | 146897 | 157535 | 186408 | 187505 | 189008 | 185358 | 28070 | 49200 | 228992 | 64470 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4691   | 4691   | 8439   | 8815   | 8066.2 | 1148.38 | 4691   | 80658  |
| **Bytes/Sec** | 436 kB | 436 kB | 784 kB | 819 kB | 750 kB | 107 kB  | 436 kB | 7.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.61 ms | 2.25 ms | 114 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16359   | 16359   | 24543   | 25103   | 23620.73 | 2375.29 | 16352  | 259811  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 2.26 MB | 2.31 MB | 2.17 MB  | 219 kB  | 1.5 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.8 ms | 69 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20367   | 20367   | 28783   | 29695   | 28048   | 2648.84 | 20354   | 280483  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.47 MB | 1.51 MB | 1.43 MB | 135 kB  | 1.04 MB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.1 ms | 0.62 ms | 37 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9599   | 9599   | 13679  | 14087  | 13355.28 | 1207.64 | 9599   | 146897  |
| **Bytes/Sec** | 499 kB | 499 kB | 711 kB | 733 kB | 694 kB   | 62.8 kB | 499 kB | 7.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.26 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8623   | 8623   | 16639   | 17039   | 15754.8 | 2430.61 | 8617   | 157535  |
| **Bytes/Sec** | 741 kB | 741 kB | 1.43 MB | 1.47 MB | 1.35 MB | 209 kB  | 741 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.54 ms | 98 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7915    | 7915    | 17855   | 18175   | 16946.37 | 2876.97 | 7912    | 186408  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 3.86 MB | 3.93 MB | 3.66 MB  | 622 kB  | 1.71 MB | 40.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.12 ms | 1 ms  | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8111    | 8111    | 17839   | 20015   | 17046   | 3111.71 | 8111    | 187505  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 2.73 MB | 3.06 MB | 2.61 MB | 476 kB  | 1.24 MB | 28.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.82 ms | 1.2 ms | 25 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10967   | 10967   | 18911   | 21007   | 18902   | 2799.89 | 10967   | 189008  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 2.12 MB | 2.35 MB | 2.12 MB | 313 kB  | 1.23 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.59 ms | 1.07 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12079   | 12079   | 18431   | 21855   | 18534.8 | 2434.41 | 12073   | 185358  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.71 MB | 2.03 MB | 1.72 MB | 227 kB  | 1.12 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.58 ms | 1.14 ms | 68 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1835   | 1835   | 2697   | 3427   | 2807.4 | 469.02  | 1835   | 28070   |
| **Bytes/Sec** | 211 kB | 211 kB | 310 kB | 394 kB | 323 kB | 53.9 kB | 211 kB | 3.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.7 ms | 18.53 ms | 97 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ----- |
| **Req/Sec**   | 2117   | 2117   | 4747    | 4911    | 4473.28 | 776.32 | 2117   | 49200 |
| **Bytes/Sec** | 602 kB | 602 kB | 1.35 MB | 1.39 MB | 1.27 MB | 220 kB | 601 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 17 ms | 8.42 ms | 4.22 ms | 230 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 16119   | 16119   | 23631   | 24799   | 22900.4 | 2421.5 | 16117   | 228992  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.17 MB | 2.28 MB | 2.11 MB | 223 kB | 1.48 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.17 ms | 57 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3853   | 3853   | 6619   | 7371   | 6447.1 | 922.94 | 3853   | 64470   |
| **Bytes/Sec** | 301 kB | 301 kB | 516 kB | 575 kB | 503 kB | 72 kB  | 301 kB | 5.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 5 ms  | 13 ms | 5.67 ms | 3.09 ms | 113 ms |


---

<p align="center">Generated 2020-12-18T19:35:31.992Z</p>