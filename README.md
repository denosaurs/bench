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
| **Average** | 8359 | 22002.55 | 25156.8 | 9381.4 | 18971.6 | 13304.19 | 34492.37 | 36260 | 19834.8 | 3046.46 | 3930.2 | 11501.4 | 7164.91 |
| **Total** | 83590 | 242021 | 251572 | 93811 | 189724 | 146345 | 379457 | 362592 | 198340 | 33504 | 39297 | 115003 | 78808 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6291   | 6291   | 8591   | 9191   | 8359   | 771.26  | 6291   | 83590   |
| **Bytes/Sec** | 585 kB | 585 kB | 799 kB | 855 kB | 777 kB | 71.8 kB | 585 kB | 7.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.34 ms | 1.44 ms | 36 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14911   | 14911   | 22607   | 23455   | 22002.55 | 2312.91 | 14904   | 242021  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.08 MB | 2.16 MB | 2.02 MB  | 213 kB  | 1.37 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.87 ms | 55 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18863  | 18863  | 25631   | 27375  | 25156.8 | 2322.37 | 18863  | 251572  |
| **Bytes/Sec** | 962 kB | 962 kB | 1.31 MB | 1.4 MB | 1.28 MB | 118 kB  | 962 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.76 ms | 48 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 7595   | 7595   | 9551   | 9903   | 9381.4 | 634.25 | 7595   | 93811   |
| **Bytes/Sec** | 395 kB | 395 kB | 497 kB | 515 kB | 488 kB | 33 kB  | 395 kB | 4.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.7 ms | 1.38 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13359   | 13359   | 19535   | 21231   | 18971.6 | 2046.02 | 13353   | 189724  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.68 MB | 1.83 MB | 1.63 MB | 176 kB  | 1.15 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.1 ms | 61 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5571   | 5571   | 14311   | 14415   | 13304.19 | 2506.96 | 5568   | 146345  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 3.09 MB | 3.12 MB | 2.87 MB  | 542 kB  | 1.2 MB | 31.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.4 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18079   | 18079   | 36063   | 36767   | 34492.37 | 5210.28 | 18078   | 379457  |
| **Bytes/Sec** | 2.77 MB | 2.77 MB | 5.52 MB | 5.62 MB | 5.28 MB  | 797 kB  | 2.77 MB | 58.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.77 ms | 0.81 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20959   | 20959   | 38047   | 38559   | 36260   | 5128.69 | 20951   | 362592  |
| **Bytes/Sec** | 2.35 MB | 2.35 MB | 4.26 MB | 4.32 MB | 4.06 MB | 574 kB  | 2.35 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.78 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15319   | 15319   | 19903   | 22351   | 19834.8 | 1718.67 | 15315   | 198340  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 1.85 MB | 2.08 MB | 1.84 MB | 160 kB  | 1.42 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.01 ms | 59 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2341   | 2341   | 3061   | 3533   | 3046.46 | 401.19  | 2340   | 33504   |
| **Bytes/Sec** | 269 kB | 269 kB | 352 kB | 406 kB | 350 kB  | 46.1 kB | 269 kB | 3.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.64 ms | 18.14 ms | 74 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2187   | 2187   | 4123    | 4359    | 3930.2  | 604.01 | 2186   | 39297   |
| **Bytes/Sec** | 621 kB | 621 kB | 1.17 MB | 1.24 MB | 1.12 MB | 172 kB | 621 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 9.67 ms | 4.46 ms | 234 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8155   | 8155   | 11871   | 12095   | 11501.4 | 1127.44 | 8153   | 115003  |
| **Bytes/Sec** | 750 kB | 750 kB | 1.09 MB | 1.11 MB | 1.06 MB | 104 kB  | 750 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.07 ms | 1.26 ms | 79 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4923   | 4923   | 7455   | 7651   | 7164.91 | 737.33  | 4920   | 78808   |
| **Bytes/Sec** | 384 kB | 384 kB | 582 kB | 597 kB | 559 kB  | 57.5 kB | 384 kB | 6.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.01 ms | 2.15 ms | 111 ms |


---

<p align="center">Generated 2021-03-14T00:18:50.890Z</p>