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
| **Average** | 7457.6 | 13903.6 | 24326.55 | 13017.6 | 18737.2 | 9913.64 | 33525.1 | 18874.55 | 17613.46 | 2815.2 | 4880.11 | 11289.8 | 6625.2 |
| **Total** | 74566 | 139045 | 267611 | 130173 | 187395 | 109035 | 368747 | 207633 | 193724 | 28147 | 48795 | 112897 | 66237 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5039   | 5039   | 7739   | 7951   | 7457.6 | 826.24  | 5036   | 74566   |
| **Bytes/Sec** | 468 kB | 468 kB | 720 kB | 740 kB | 693 kB | 76.9 kB | 468 kB | 6.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.75 ms | 1.79 ms | 42 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9559   | 9559   | 11567   | 21807   | 13903.6 | 4146.12 | 9555   | 139045  |
| **Bytes/Sec** | 879 kB | 879 kB | 1.06 MB | 2.01 MB | 1.28 MB | 382 kB  | 879 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.37 ms | 2 ms  | 47 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17583  | 17583  | 25087   | 25663   | 24326.55 | 2179.71 | 17582  | 267611  |
| **Bytes/Sec** | 897 kB | 897 kB | 1.28 MB | 1.31 MB | 1.24 MB  | 111 kB  | 897 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.16 ms | 0.8 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9095   | 9095   | 13303  | 13839  | 13017.6 | 1340.19 | 9093   | 130173  |
| **Bytes/Sec** | 473 kB | 473 kB | 692 kB | 720 kB | 677 kB  | 69.6 kB | 473 kB | 6.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.26 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10439  | 10439  | 19903   | 20207   | 18737.2 | 2826.2 | 10436  | 187395  |
| **Bytes/Sec** | 898 kB | 898 kB | 1.71 MB | 1.74 MB | 1.61 MB | 243 kB | 897 kB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.16 ms | 39 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 4643  | 4643  | 10591   | 11175   | 9913.64 | 1761.44 | 4640  | 109035  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 2.29 MB | 2.41 MB | 2.14 MB | 380 kB  | 1 MB  | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.54 ms | 1.69 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17135   | 17135   | 35071   | 36191   | 33525.1 | 5225.71 | 17132   | 368747  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 5.37 MB | 5.53 MB | 5.13 MB | 799 kB  | 2.62 MB | 56.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.69 ms | 0.88 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 10167   | 10167   | 19727   | 20207   | 18874.55 | 2764.8 | 10162   | 207633  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.21 MB | 2.27 MB | 2.11 MB  | 310 kB | 1.14 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.54 ms | 1.19 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11127   | 11127   | 18143   | 19695   | 17613.46 | 2181.92 | 11125   | 193724 |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.69 MB | 1.83 MB | 1.64 MB  | 203 kB  | 1.03 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.73 ms | 1.18 ms | 60 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2267   | 2267   | 2749   | 3149   | 2815.2 | 261.53  | 2267   | 28147   |
| **Bytes/Sec** | 261 kB | 261 kB | 316 kB | 362 kB | 324 kB | 30.1 kB | 261 kB | 3.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.68 ms | 18.5 ms | 102 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2667   | 2667   | 5123    | 5383    | 4880.11 | 789.18 | 2666   | 48795   |
| **Bytes/Sec** | 757 kB | 757 kB | 1.46 MB | 1.53 MB | 1.39 MB | 224 kB | 757 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.89 ms | 3.6 ms | 212 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7503   | 7503   | 11383   | 12303   | 11289.8 | 1326.84 | 7502   | 112897  |
| **Bytes/Sec** | 691 kB | 691 kB | 1.05 MB | 1.13 MB | 1.04 MB | 122 kB  | 690 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.22 ms | 1.23 ms | 81 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4491   | 4491   | 6791   | 7071   | 6625.2 | 729.83  | 4489   | 66237   |
| **Bytes/Sec** | 350 kB | 350 kB | 530 kB | 551 kB | 517 kB | 56.9 kB | 350 kB | 5.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.59 ms | 2.56 ms | 114 ms |


---

<p align="center">Generated 2021-03-13T00:18:29.911Z</p>