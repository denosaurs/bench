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
| **Average** | 6603.9 | 17154.8 | 30948.37 | 8808.6 | 17266.55 | 13809.64 | 23271.6 | 18670 | 14748 | 3250.9 | 3351.8 | 22065.82 | 8102.19 |
| **Total** | 66026 | 171558 | 340422 | 88088 | 189912 | 151919 | 232688 | 186684 | 147479 | 32503 | 33514 | 242731 | 89116 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3725   | 3725   | 6979   | 7179   | 6603.9 | 978.28 | 3724   | 66026   |
| **Bytes/Sec** | 346 kB | 346 kB | 649 kB | 668 kB | 614 kB | 91 kB  | 346 kB | 6.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.68 ms | 2.22 ms | 47 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10263  | 10263  | 18047   | 18239   | 17154.8 | 2319.46 | 10259  | 171558  |
| **Bytes/Sec** | 944 kB | 944 kB | 1.66 MB | 1.68 MB | 1.58 MB | 214 kB  | 944 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.73 ms | 1.4 ms | 86 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22575   | 22575   | 32015   | 33215   | 30948.37 | 2783.53 | 22564   | 340422  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.63 MB | 1.69 MB | 1.58 MB  | 142 kB  | 1.15 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.05 ms | 0.58 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------- |
| **Req/Sec**   | 6747   | 6747   | 8927   | 9423   | 8808.6 | 712.3 | 6747   | 88088   |
| **Bytes/Sec** | 351 kB | 351 kB | 464 kB | 490 kB | 458 kB | 37 kB | 351 kB | 4.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.03 ms | 1.65 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10079  | 10079  | 17951   | 18735   | 17266.55 | 2324.45 | 10077  | 189912  |
| **Bytes/Sec** | 867 kB | 867 kB | 1.54 MB | 1.61 MB | 1.48 MB  | 200 kB  | 867 kB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.83 ms | 1.21 ms | 58 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5811    | 5811    | 14639   | 15447   | 13809.64 | 2630.29 | 5811    | 151919  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.16 MB | 3.34 MB | 2.98 MB  | 568 kB  | 1.26 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.46 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12087   | 12087   | 24431   | 25439   | 23271.6 | 3775.64 | 12080   | 232688  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 3.74 MB | 3.89 MB | 3.56 MB | 578 kB  | 1.85 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.98 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9815   | 9815   | 19663  | 20207   | 18670   | 2973.09 | 9810   | 186684  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.2 MB | 2.26 MB | 2.09 MB | 333 kB  | 1.1 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.28 ms | 45 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9447   | 9447   | 15343   | 16255   | 14748   | 1816.22 | 9441   | 147479  |
| **Bytes/Sec** | 878 kB | 878 kB | 1.43 MB | 1.51 MB | 1.37 MB | 169 kB  | 878 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.3 ms | 62 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2543   | 2543   | 3241   | 4763   | 3250.9 | 607.35  | 2543   | 32503   |
| **Bytes/Sec** | 293 kB | 293 kB | 373 kB | 548 kB | 374 kB | 69.8 kB | 292 kB | 3.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.79 ms | 17.77 ms | 70 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1695   | 1695   | 3639    | 3761    | 3351.8 | 634.58 | 1695   | 33514   |
| **Bytes/Sec** | 482 kB | 482 kB | 1.03 MB | 1.07 MB | 952 kB | 180 kB | 481 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------ | ------ |
| **Latency** | 9 ms  | 10 ms | 23 ms | 11.44 ms | 5.6 ms | 274 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15271  | 15271  | 22815  | 23087   | 22065.82 | 2162.52 | 15270  | 242731  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.1 MB | 2.12 MB | 2.03 MB  | 199 kB  | 1.4 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.87 ms | 51 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5095   | 5095   | 8455   | 8575   | 8102.19 | 959.84  | 5092   | 89116   |
| **Bytes/Sec** | 397 kB | 397 kB | 659 kB | 669 kB | 632 kB  | 74.9 kB | 397 kB | 6.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.51 ms | 1.92 ms | 101 ms |


---

<p align="center">Generated 2020-12-25T00:25:30.643Z</p>