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
| **Average** | 7244.91 | 16425.41 | 22195.28 | 12484 | 16060 | 9230.21 | 33222.55 | 38173.82 | 13534.2 | 2911 | 4172.4 | 11812 | 7711.6 |
| **Total** | 79692 | 164242 | 244140 | 137315 | 160600 | 92305 | 365446 | 419869 | 135342 | 29108 | 41718 | 118116 | 77108 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5163   | 5163   | 7431   | 7739   | 7244.91 | 680.84  | 5163   | 79692   |
| **Bytes/Sec** | 480 kB | 480 kB | 691 kB | 720 kB | 674 kB  | 63.3 kB | 480 kB | 7.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.04 ms | 1.96 ms | 118 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5483   | 5483   | 19167   | 20687  | 16425.41 | 5023.24 | 5480   | 164242  |
| **Bytes/Sec** | 504 kB | 504 kB | 1.76 MB | 1.9 MB | 1.51 MB  | 462 kB  | 504 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.84 ms | 1.93 ms | 65 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15895  | 15895  | 22767   | 23567  | 22195.28 | 2043.55 | 15890  | 244140  |
| **Bytes/Sec** | 810 kB | 810 kB | 1.16 MB | 1.2 MB | 1.13 MB  | 104 kB  | 810 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 0.92 ms | 38 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 8303   | 8303   | 12767  | 13503  | 12484  | 1366.87 | 8299   | 137315  |
| **Bytes/Sec** | 432 kB | 432 kB | 664 kB | 702 kB | 649 kB | 71.1 kB | 432 kB | 7.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.52 ms | 1.47 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8807   | 8807   | 16767   | 17279   | 16060   | 2431.55 | 8801   | 160600  |
| **Bytes/Sec** | 757 kB | 757 kB | 1.44 MB | 1.49 MB | 1.38 MB | 209 kB  | 757 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.35 ms | 67 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4419   | 4419   | 9871    | 10175  | 9230.21 | 1668.01 | 4417   | 92305   |
| **Bytes/Sec** | 954 kB | 954 kB | 2.13 MB | 2.2 MB | 1.99 MB | 360 kB  | 954 kB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.76 ms | 1.83 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 16975  | 16975  | 34879   | 35647   | 33222.55 | 5162.3 | 16968  | 365446  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 5.34 MB | 5.46 MB | 5.08 MB  | 790 kB | 2.6 MB | 55.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.88 ms | 22 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 21999   | 21999   | 39871   | 40607   | 38173.82 | 5156.29 | 21989   | 419869 |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 4.46 MB | 4.55 MB | 4.27 MB  | 577 kB  | 2.46 MB | 47 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.24 ms | 0.71 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6683   | 6683   | 14127   | 15159   | 13534.2 | 2327.93 | 6681   | 135342  |
| **Bytes/Sec** | 622 kB | 622 kB | 1.31 MB | 1.41 MB | 1.26 MB | 217 kB  | 621 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.48 ms | 1.62 ms | 67 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2217   | 2217   | 2897   | 3393   | 2911   | 354.21  | 2217   | 29108   |
| **Bytes/Sec** | 255 kB | 255 kB | 333 kB | 390 kB | 335 kB | 40.8 kB | 255 kB | 3.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.26 ms | 18.34 ms | 101 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2353   | 2353   | 4475    | 4639    | 4172.4  | 685.87 | 2353   | 41718   |
| **Bytes/Sec** | 669 kB | 669 kB | 1.27 MB | 1.32 MB | 1.18 MB | 195 kB | 668 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 9.1 ms | 4.01 ms | 217 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8791   | 8791   | 12207   | 12351   | 11812   | 1027.28 | 8789   | 118116  |
| **Bytes/Sec** | 809 kB | 809 kB | 1.12 MB | 1.14 MB | 1.09 MB | 94.4 kB | 809 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.04 ms | 75 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5383   | 5383   | 7927   | 8063   | 7711.6 | 779.25  | 5381   | 77108   |
| **Bytes/Sec** | 420 kB | 420 kB | 618 kB | 629 kB | 601 kB | 60.8 kB | 420 kB | 6.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.59 ms | 1.99 ms | 101 ms |


---

<p align="center">Generated 2021-03-17T00:18:27.591Z</p>