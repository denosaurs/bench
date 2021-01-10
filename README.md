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
| **Average** | 8477.4 | 20510.8 | 27983.28 | 13657.6 | 15244.4 | 18682.55 | 39091.64 | 34712.81 | 19674 | 3042.6 | 4762.2 | 22909.2 | 8184.2 |
| **Total** | 84767 | 205101 | 307812 | 136579 | 152432 | 205520 | 429965 | 347123 | 196720 | 30423 | 47617 | 229081 | 81840 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5771   | 5771   | 8807   | 9079   | 8477.4 | 933.04  | 5771   | 84767   |
| **Bytes/Sec** | 537 kB | 537 kB | 819 kB | 844 kB | 788 kB | 86.6 kB | 537 kB | 7.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.28 ms | 2.05 ms | 33 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12911   | 12911   | 21311   | 22399   | 20510.8 | 2593.04 | 12907   | 205101  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.96 MB | 2.06 MB | 1.89 MB | 239 kB  | 1.19 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.33 ms | 1.19 ms | 72 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 20527   | 20527   | 28815   | 29199   | 27983.28 | 2396.4 | 20523   | 307812  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.47 MB | 1.49 MB | 1.43 MB  | 122 kB | 1.05 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.7 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10287  | 10287  | 14063  | 14295  | 13657.6 | 1138.78 | 10283  | 136579 |
| **Bytes/Sec** | 535 kB | 535 kB | 731 kB | 743 kB | 710 kB  | 59.2 kB | 535 kB | 7.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.14 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8599   | 8599   | 15847   | 16607   | 15244.4 | 2234.55 | 8592   | 152432  |
| **Bytes/Sec** | 739 kB | 739 kB | 1.36 MB | 1.43 MB | 1.31 MB | 192 kB  | 739 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.23 ms | 1.42 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8695    | 8695    | 19967   | 20495   | 18682.55 | 3290.89 | 8693    | 205520  |
| **Bytes/Sec** | 1.88 MB | 1.88 MB | 4.31 MB | 4.43 MB | 4.04 MB  | 711 kB  | 1.88 MB | 44.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.58 ms | 1.03 ms | 21 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22847  | 22847  | 40671   | 41279   | 39091.64 | 5164.02 | 22846  | 429965  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 6.22 MB | 6.32 MB | 5.98 MB  | 790 kB  | 3.5 MB | 65.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.73 ms | 18 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev  | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------ | ----- | ------- |
| **Req/Sec**   | 17871 | 17871 | 36511   | 37023   | 34712.81 | 5623.1 | 17862 | 347123  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 4.09 MB | 4.15 MB | 3.89 MB  | 630 kB | 2 MB  | 38.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.61 ms | 0.88 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13663   | 13663   | 20319   | 20991   | 19674   | 2035.47 | 13659   | 196720  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.89 MB | 1.95 MB | 1.83 MB | 189 kB  | 1.27 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.3 ms | 1.02 ms | 67 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2177   | 2177   | 3047   | 3819   | 3042.6 | 422.63  | 2177   | 30423  |
| **Bytes/Sec** | 250 kB | 250 kB | 350 kB | 439 kB | 350 kB | 48.6 kB | 250 kB | 3.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.64 ms | 18.27 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2345   | 2345   | 5083    | 5283   | 4762.2  | 890.61 | 2345   | 47617   |
| **Bytes/Sec** | 666 kB | 666 kB | 1.44 MB | 1.5 MB | 1.35 MB | 253 kB | 666 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.99 ms | 3.82 ms | 212 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15087   | 15087   | 23759   | 24367   | 22909.2 | 2636.41 | 15082   | 229081  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.19 MB | 2.24 MB | 2.11 MB | 243 kB  | 1.39 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.9 ms | 55 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5151   | 5151   | 8447   | 8767   | 8184.2 | 1021.91 | 5151   | 81840   |
| **Bytes/Sec** | 402 kB | 402 kB | 659 kB | 684 kB | 638 kB | 79.7 kB | 402 kB | 6.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.53 ms | 1.97 ms | 93 ms |


---

<p align="center">Generated 2021-01-10T00:34:05.181Z</p>