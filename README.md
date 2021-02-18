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
| **Average** | 10155.4 | 18120.41 | 23239.6 | 8259.4 | 19080.37 | 9406 | 19933.2 | 10871.1 | 20913.82 | 2676.9 | 4922.7 | 20155.28 | 6674.1 |
| **Total** | 101554 | 181206 | 232414 | 82597 | 209894 | 103462 | 199345 | 108709 | 230038 | 26762 | 49217 | 221690 | 66740 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6503   | 6503   | 10463  | 10775 | 10155.4 | 1227.35 | 6500   | 101554  |
| **Bytes/Sec** | 605 kB | 605 kB | 973 kB | 1 MB  | 944 kB  | 114 kB  | 605 kB | 9.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.51 ms | 1.87 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11727   | 11727   | 18655   | 19407   | 18120.41 | 2151.86 | 11726   | 181206  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.72 MB | 1.79 MB | 1.67 MB  | 198 kB  | 1.08 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.6 ms | 1.25 ms | 79 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15511  | 15511  | 23759   | 25407  | 23239.6 | 2686.79 | 15506  | 232414  |
| **Bytes/Sec** | 791 kB | 791 kB | 1.21 MB | 1.3 MB | 1.19 MB | 137 kB  | 791 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.22 ms | 0.92 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6111   | 6111   | 8399   | 8871   | 8259.4 | 738.14  | 6108   | 82597  |
| **Bytes/Sec** | 318 kB | 318 kB | 436 kB | 461 kB | 429 kB | 38.4 kB | 318 kB | 4.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.39 ms | 1.5 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12015   | 12015   | 19679   | 20383   | 19080.37 | 2281.02 | 12010   | 209894  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.69 MB | 1.75 MB | 1.64 MB  | 196 kB  | 1.03 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.08 ms | 55 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4595   | 4595   | 10071   | 10303   | 9406    | 1585.28 | 4593   | 103462  |
| **Bytes/Sec** | 992 kB | 992 kB | 2.17 MB | 2.23 MB | 2.03 MB | 343 kB  | 992 kB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.7 ms | 1.81 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9887    | 9887    | 20879   | 22223  | 19933.2 | 3387.9 | 9882    | 199345  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.19 MB | 3.4 MB | 3.05 MB | 519 kB | 1.51 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.21 ms | 32 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2859   | 2859   | 12271   | 13103   | 10871.1 | 2990.71 | 2858   | 108709  |
| **Bytes/Sec** | 320 kB | 320 kB | 1.37 MB | 1.47 MB | 1.22 MB | 335 kB  | 320 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 10 ms | 3.19 ms | 3.02 ms | 81 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15207   | 15207   | 21503 | 22319   | 20913.82 | 1840.91 | 15204   | 230038  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2 MB  | 2.08 MB | 1.94 MB  | 171 kB  | 1.41 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.21 ms | 0.91 ms | 48 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1904   | 1904   | 2815   | 3101   | 2676.9 | 335.32  | 1904   | 26762   |
| **Bytes/Sec** | 219 kB | 219 kB | 324 kB | 357 kB | 308 kB | 38.6 kB | 219 kB | 3.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.43 ms | 18.7 ms | 92 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2521   | 2521   | 5247    | 5427    | 4922.7 | 851.79 | 2520   | 49217 |
| **Bytes/Sec** | 716 kB | 716 kB | 1.49 MB | 1.54 MB | 1.4 MB | 242 kB | 716 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.8 ms | 3.48 ms | 203 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13103   | 13103   | 20719   | 22639   | 20155.28 | 2326.48 | 13096  | 221690  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.91 MB | 2.08 MB | 1.85 MB  | 214 kB  | 1.2 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.17 ms | 60 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3911   | 3911   | 7051   | 7183   | 6674.1 | 954.62  | 3910   | 66740   |
| **Bytes/Sec** | 305 kB | 305 kB | 550 kB | 561 kB | 521 kB | 74.5 kB | 305 kB | 5.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.53 ms | 2.51 ms | 121 ms |


---

<p align="center">Generated 2021-02-18T00:22:23.242Z</p>