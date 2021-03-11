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
| **Average** | 9065.4 | 20222.8 | 24901.1 | 9868.19 | 16932.41 | 8874.21 | 32196 | 35509.6 | 15627.6 | 2713.5 | 4017.5 | 11282.6 | 9734.37 |
| **Total** | 90648 | 202220 | 273902 | 108531 | 169332 | 88727 | 354149 | 355085 | 156269 | 27132 | 40171 | 112814 | 107066 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6931   | 6931   | 9255   | 9607   | 9065.4 | 724.84  | 6928   | 90648   |
| **Bytes/Sec** | 645 kB | 645 kB | 860 kB | 893 kB | 843 kB | 67.4 kB | 644 kB | 8.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.97 ms | 1.18 ms | 24 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14703   | 14703   | 20527   | 22831  | 20222.8 | 2032.89 | 14700   | 202220  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 1.89 MB | 2.1 MB | 1.86 MB | 187 kB  | 1.35 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.04 ms | 56 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 17711  | 17711  | 25599   | 25967   | 24901.1 | 2286.7 | 17705  | 273902 |
| **Bytes/Sec** | 903 kB | 903 kB | 1.31 MB | 1.32 MB | 1.27 MB | 117 kB | 903 kB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.75 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8071   | 8071   | 10223  | 10519  | 9868.19 | 727.15  | 8068   | 108531  |
| **Bytes/Sec** | 420 kB | 420 kB | 531 kB | 547 kB | 513 kB  | 37.8 kB | 420 kB | 5.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.49 ms | 1.34 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10167  | 10167  | 17631   | 18175   | 16932.41 | 2276.76 | 10166  | 169332  |
| **Bytes/Sec** | 874 kB | 874 kB | 1.52 MB | 1.56 MB | 1.46 MB  | 196 kB  | 874 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.1 ms | 1.2 ms | 84 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4243   | 4243   | 9479    | 9751    | 8874.21 | 1595.55 | 4240   | 88727   |
| **Bytes/Sec** | 916 kB | 916 kB | 2.05 MB | 2.11 MB | 1.92 MB | 345 kB  | 916 kB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.04 ms | 1.96 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16335  | 16335  | 33887   | 34271   | 32196   | 5037.14 | 16333  | 354149  |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 5.19 MB | 5.24 MB | 4.93 MB | 770 kB  | 2.5 MB | 54.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.8 ms | 23 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20623   | 20623   | 37375   | 39231  | 35509.6 | 5254.81 | 20608   | 355085  |
| **Bytes/Sec** | 2.31 MB | 2.31 MB | 4.18 MB | 4.4 MB | 3.98 MB | 588 kB  | 2.31 MB | 39.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.59 ms | 0.84 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9583   | 9583   | 16375   | 17103   | 15627.6 | 2087.2 | 9582   | 156269  |
| **Bytes/Sec** | 891 kB | 891 kB | 1.52 MB | 1.59 MB | 1.45 MB | 194 kB | 891 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.39 ms | 79 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2028   | 2028   | 2765   | 3353   | 2713.5 | 380.14  | 2028   | 27132   |
| **Bytes/Sec** | 233 kB | 233 kB | 318 kB | 386 kB | 312 kB | 43.6 kB | 233 kB | 3.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.22 ms | 18.6 ms | 85 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2189   | 2189   | 4187    | 4611    | 4017.5  | 629.95 | 2189   | 40171   |
| **Bytes/Sec** | 622 kB | 622 kB | 1.19 MB | 1.31 MB | 1.14 MB | 179 kB | 622 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 17 ms | 9.47 ms | 3.71 ms | 137 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7319   | 7319   | 11663   | 12063   | 11282.6 | 1352.96 | 7319   | 112814  |
| **Bytes/Sec** | 674 kB | 674 kB | 1.07 MB | 1.11 MB | 1.04 MB | 124 kB  | 673 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.21 ms | 1.21 ms | 44 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7039   | 7039   | 10111  | 10391  | 9734.37 | 891.26  | 7036   | 107066  |
| **Bytes/Sec** | 549 kB | 549 kB | 789 kB | 810 kB | 759 kB  | 69.6 kB | 549 kB | 8.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.48 ms | 1.78 ms | 89 ms |


---

<p align="center">Generated 2021-03-11T00:18:22.409Z</p>