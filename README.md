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
| **Average** | 9075.1 | 22705.2 | 30624.8 | 13227.28 | 23887.28 | 14458 | 21418.8 | 37407.28 | 17527.64 | 2993 | 5500.3 | 26035.2 | 8391.8 |
| **Total** | 99826 | 227049 | 306237 | 145491 | 262742 | 159028 | 214185 | 411423 | 192813 | 29926 | 54995 | 260350 | 83907 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5691   | 5691   | 9431   | 9711   | 9075.1 | 1091.6 | 5688   | 99826   |
| **Bytes/Sec** | 529 kB | 529 kB | 877 kB | 903 kB | 844 kB | 102 kB | 529 kB | 9.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.87 ms | 1.9 ms | 91 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 15831   | 15831   | 23407   | 23823   | 22705.2 | 2302.3 | 15829   | 227049  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.15 MB | 2.19 MB | 2.09 MB | 212 kB | 1.46 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.89 ms | 51 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23903   | 23903   | 31183   | 32959   | 30624.8 | 2434.91 | 23895   | 306237  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 1.59 MB | 1.68 MB | 1.56 MB | 124 kB  | 1.22 MB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.06 ms | 0.57 ms | 34 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9471   | 9471   | 13607  | 14199  | 13227.28 | 1240.02 | 9467   | 145491  |
| **Bytes/Sec** | 492 kB | 492 kB | 708 kB | 738 kB | 688 kB   | 64.5 kB | 492 kB | 7.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.35 ms | 1.34 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17967   | 17967   | 24655   | 25663   | 23887.28 | 2048.67 | 17957   | 262742  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.12 MB | 2.21 MB | 2.05 MB  | 176 kB  | 1.54 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.7 ms | 59 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6567    | 6567    | 15407   | 15711   | 14458   | 2532.74 | 6565    | 159028  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 3.33 MB | 3.39 MB | 3.12 MB | 547 kB  | 1.42 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.22 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9671    | 9671    | 22831   | 23583   | 21418.8 | 3967.2 | 9670    | 214185  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.49 MB | 3.61 MB | 3.28 MB | 607 kB | 1.48 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.17 ms | 30 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21695   | 21695   | 39103   | 39775   | 37407.28 | 5005.44 | 21690   | 411423  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 4.38 MB | 4.45 MB | 4.19 MB  | 560 kB  | 2.43 MB | 46.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.6 ms | 0.77 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11031   | 11031   | 17839   | 19199   | 17527.64 | 2171.28 | 11027   | 192813  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.66 MB | 1.79 MB | 1.63 MB  | 202 kB  | 1.03 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.59 ms | 1.26 ms | 41 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1859   | 1859   | 3075   | 3899   | 2993   | 609.26 | 1859   | 29926   |
| **Bytes/Sec** | 214 kB | 214 kB | 354 kB | 449 kB | 344 kB | 70 kB  | 214 kB | 3.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.87 ms | 18.29 ms | 92 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2721   | 2721   | 5891    | 6003   | 5500.3  | 979.21 | 2720   | 54995   |
| **Bytes/Sec** | 773 kB | 773 kB | 1.67 MB | 1.7 MB | 1.56 MB | 278 kB | 772 kB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.77 ms | 2.92 ms | 166 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 19679   | 19679   | 26671   | 27199  | 26035.2 | 2132.1 | 19675   | 260350 |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 2.45 MB | 2.5 MB | 2.4 MB  | 196 kB | 1.81 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.65 ms | 35 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5195   | 5195   | 8719   | 9007   | 8391.8 | 1073.57 | 5192   | 83907   |
| **Bytes/Sec** | 405 kB | 405 kB | 680 kB | 703 kB | 655 kB | 83.8 kB | 405 kB | 6.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.44 ms | 1.95 ms | 94 ms |


---

<p align="center">Generated 2021-01-26T00:23:06.859Z</p>