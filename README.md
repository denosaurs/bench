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
| **Average** | 6616.28 | 23174.19 | 21456.4 | 9390.21 | 21141.46 | 14160.19 | 36434.19 | 34813.6 | 18098.8 | 6489.6 | 2711.5 | 4046.37 | 23324.4 |
| **Total** | 72770 | 254914 | 214556 | 93906 | 232546 | 155742 | 400793 | 348126 | 180980 | 64885 | 27111 | 44504 | 233273 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3451   | 3451   | 6931   | 7203   | 6616.28 | 1018.01 | 3451   | 72770   |
| **Bytes/Sec** | 321 kB | 321 kB | 645 kB | 670 kB | 615 kB  | 94.6 kB | 321 kB | 6.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.61 ms | 2.47 ms | 65 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15735   | 15735   | 24079   | 24863   | 23174.19 | 2424.69 | 15735   | 254914  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.22 MB | 2.29 MB | 2.13 MB  | 223 kB  | 1.45 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.02 ms | 71 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14639  | 14639  | 21871   | 24079   | 21456.4 | 2461.64 | 14633  | 214556  |
| **Bytes/Sec** | 746 kB | 746 kB | 1.12 MB | 1.23 MB | 1.09 MB | 126 kB  | 746 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.18 ms | 54 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7155   | 7155   | 9671   | 9895   | 9390.21 | 782.18  | 7155   | 93906   |
| **Bytes/Sec** | 372 kB | 372 kB | 503 kB | 515 kB | 488 kB  | 40.6 kB | 372 kB | 4.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.68 ms | 2.32 ms | 75 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 14159   | 14159   | 21775   | 23487   | 21141.46 | 2365.28 | 14157   | 232546 |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.87 MB | 2.02 MB | 1.82 MB  | 204 kB  | 1.22 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.04 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5403    | 5403    | 15199   | 15559   | 14160.19 | 2829.38 | 5400    | 155742  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 3.28 MB | 3.36 MB | 3.06 MB  | 611 kB  | 1.17 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.5 ms | 50 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19759   | 19759   | 38143   | 38559  | 36434.19 | 5294.04 | 19759   | 400793  |
| **Bytes/Sec** | 3.02 MB | 3.02 MB | 5.83 MB | 5.9 MB | 5.57 MB  | 809 kB  | 3.02 MB | 61.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.86 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 17919   | 17919   | 36351   | 38431  | 34813.6 | 5703.53 | 17917   | 348126 |
| **Bytes/Sec** | 2.01 MB | 2.01 MB | 4.07 MB | 4.3 MB | 3.9 MB  | 639 kB  | 2.01 MB | 39 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.58 ms | 1.12 ms | 71 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11991   | 11991   | 18815   | 19487   | 18098.8 | 2087.14 | 11988   | 180980  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.75 MB | 1.81 MB | 1.68 MB | 194 kB  | 1.11 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.44 ms | 108 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4375   | 4375   | 6671   | 7039   | 6489.6 | 738.43  | 4372   | 64885   |
| **Bytes/Sec** | 402 kB | 402 kB | 614 kB | 648 kB | 597 kB | 67.9 kB | 402 kB | 5.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.73 ms | 2.5 ms | 118 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1458   | 1458   | 2879   | 3173   | 2711.5 | 458.33  | 1458   | 27111   |
| **Bytes/Sec** | 168 kB | 168 kB | 331 kB | 365 kB | 312 kB | 52.7 kB | 168 kB | 3.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 52 ms | 14.28 ms | 18.86 ms | 101 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1911   | 1911   | 4343    | 4571   | 4046.37 | 741.23 | 1911   | 44504   |
| **Bytes/Sec** | 543 kB | 543 kB | 1.23 MB | 1.3 MB | 1.15 MB | 210 kB | 543 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 18 ms | 9.4 ms | 5.17 ms | 263 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 15319  | 15319  | 24159   | 24591   | 23324.4 | 2680.1 | 15314  | 233273  |
| **Bytes/Sec** | 797 kB | 797 kB | 1.26 MB | 1.28 MB | 1.21 MB | 139 kB | 796 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 1.17 ms | 75 ms |


---

<p align="center">Generated 2020-11-20T00:17:41.207Z</p>