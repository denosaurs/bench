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
| **Average** | 8007 | 24860.37 | 24310.55 | 9144.55 | 16224 | 14321.8 | 16434.6 | 22809.82 | 20560.37 | 2914.4 | 5369.1 | 17430 | 9523.8 |
| **Total** | 80055 | 273444 | 267434 | 100575 | 178430 | 143197 | 164335 | 250900 | 226164 | 29141 | 53686 | 174307 | 95237 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5579   | 5579   | 8303   | 8487   | 8007   | 825.22  | 5576   | 80055   |
| **Bytes/Sec** | 519 kB | 519 kB | 772 kB | 789 kB | 744 kB | 76.8 kB | 519 kB | 7.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.53 ms | 1.89 ms | 114 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17551   | 17551   | 25759   | 27087   | 24860.37 | 2471.51 | 17543   | 273444  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.37 MB | 2.49 MB | 2.29 MB  | 227 kB  | 1.61 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.75 ms | 42 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16751  | 16751  | 25023   | 25535  | 24310.55 | 2421.16 | 16751  | 267434  |
| **Bytes/Sec** | 855 kB | 855 kB | 1.28 MB | 1.3 MB | 1.24 MB  | 123 kB  | 854 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.8 ms | 53 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6519   | 6519   | 9471   | 9655   | 9144.55 | 872.06  | 6519   | 100575  |
| **Bytes/Sec** | 339 kB | 339 kB | 492 kB | 502 kB | 475 kB  | 45.3 kB | 339 kB | 5.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.76 ms | 1.51 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 10543  | 10543  | 16687   | 17455  | 16224  | 1830.83 | 10539  | 178430  |
| **Bytes/Sec** | 907 kB | 907 kB | 1.43 MB | 1.5 MB | 1.4 MB | 157 kB  | 906 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.1 ms | 1.12 ms | 86 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6063    | 6063    | 15407   | 16071   | 14321.8 | 2859.48 | 6063    | 143197  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.33 MB | 3.47 MB | 3.09 MB | 618 kB  | 1.31 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.4 ms | 45 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7315    | 7315    | 17391   | 17967   | 16434.6 | 3052.13 | 7312    | 164335  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.66 MB | 2.75 MB | 2.51 MB | 467 kB  | 1.12 MB | 25.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.04 ms | 1.37 ms | 41 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12879   | 12879   | 23951   | 24575   | 22809.82 | 3192.54 | 12874   | 250900  |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 2.68 MB | 2.75 MB | 2.55 MB  | 357 kB  | 1.44 MB | 28.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.31 ms | 0.96 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 14199   | 14199   | 21343   | 21663   | 20560.37 | 2065.18 | 14197   | 226164 |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 1.99 MB | 2.01 MB | 1.91 MB  | 192 kB  | 1.32 MB | 21 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.89 ms | 57 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2445   | 2445   | 2859   | 3647   | 2914.4 | 368.65  | 2445   | 29141   |
| **Bytes/Sec** | 281 kB | 281 kB | 329 kB | 420 kB | 335 kB | 42.4 kB | 281 kB | 3.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.21 ms | 18.36 ms | 86 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2993   | 2993   | 5743    | 5835    | 5369.1  | 815.53 | 2992   | 53686   |
| **Bytes/Sec** | 850 kB | 850 kB | 1.63 MB | 1.66 MB | 1.52 MB | 232 kB | 850 kB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.87 ms | 2.8 ms | 84 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10999   | 10999   | 17839   | 19055   | 17430  | 2247.15 | 10996   | 174307 |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.64 MB | 1.75 MB | 1.6 MB | 207 kB  | 1.01 MB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.71 ms | 1.2 ms | 56 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6411   | 6411   | 9839   | 10071  | 9523.8 | 1043.15 | 6411   | 95237   |
| **Bytes/Sec** | 500 kB | 500 kB | 767 kB | 785 kB | 743 kB | 81.3 kB | 500 kB | 7.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.55 ms | 1.8 ms | 68 ms |


---

<p align="center">Generated 2021-03-27T00:40:03.193Z</p>