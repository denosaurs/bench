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
| **Average** | 7893.82 | 17150 | 22118.19 | 9391.4 | 22264.4 | 14056.55 | 34394.81 | 37223.2 | 17907.6 | 4261 | 4392.4 | 22135.6 | 8591 |
| **Total** | 86824 | 171519 | 243279 | 93904 | 222624 | 154618 | 343936 | 372216 | 179065 | 42602 | 43916 | 221343 | 85908 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4799   | 4799   | 8143   | 8791   | 7893.82 | 1081.06 | 4799   | 86824   |
| **Bytes/Sec** | 446 kB | 446 kB | 757 kB | 818 kB | 734 kB  | 101 kB  | 446 kB | 8.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.69 ms | 2.27 ms | 137 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9671   | 9671   | 18095   | 18655   | 17150   | 2530.62 | 9667   | 171519  |
| **Bytes/Sec** | 890 kB | 890 kB | 1.67 MB | 1.72 MB | 1.58 MB | 233 kB  | 889 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.75 ms | 1.37 ms | 54 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15687  | 15687  | 22879   | 23583  | 22118.19 | 2130.44 | 15680  | 243279  |
| **Bytes/Sec** | 800 kB | 800 kB | 1.17 MB | 1.2 MB | 1.13 MB  | 109 kB  | 800 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.08 ms | 48 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7015   | 7015   | 9623   | 10031  | 9391.4 | 823.41  | 7012   | 93904   |
| **Bytes/Sec** | 365 kB | 365 kB | 500 kB | 521 kB | 488 kB | 42.8 kB | 365 kB | 4.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.7 ms | 1.49 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16159   | 16159   | 23055   | 23967   | 22264.4 | 2104.42 | 16153   | 222624  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 1.98 MB | 2.06 MB | 1.91 MB | 181 kB  | 1.39 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.88 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5903    | 5903    | 15087   | 15439   | 14056.55 | 2675.87 | 5903    | 154618  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 3.26 MB | 3.33 MB | 3.04 MB  | 578 kB  | 1.28 MB | 33.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.36 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16223   | 16223   | 36511   | 37087   | 34394.81 | 6077.87 | 16219   | 343936  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 5.58 MB | 5.67 MB | 5.26 MB  | 930 kB  | 2.48 MB | 52.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.5 ms | 0.92 ms | 23 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22815   | 22815   | 38911   | 39839   | 37223.2 | 4860.41 | 22811   | 372216  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 4.36 MB | 4.46 MB | 4.17 MB | 544 kB  | 2.55 MB | 41.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 0.76 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10367  | 10367  | 18799   | 19935   | 17907.6 | 2580.64 | 10366  | 179065  |
| **Bytes/Sec** | 964 kB | 964 kB | 1.75 MB | 1.85 MB | 1.67 MB | 240 kB  | 964 kB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.33 ms | 59 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2675   | 2675   | 4175   | 5383   | 4261   | 780.14  | 2675   | 42602  |
| **Bytes/Sec** | 308 kB | 308 kB | 480 kB | 619 kB | 490 kB | 89.7 kB | 308 kB | 4.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.92 ms | 16.12 ms | 67 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2129   | 2129   | 4579   | 5043    | 4392.4  | 814.38 | 2129   | 43916   |
| **Bytes/Sec** | 605 kB | 605 kB | 1.3 MB | 1.43 MB | 1.25 MB | 231 kB | 605 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 8.63 ms | 3.92 ms | 202 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15127   | 15127   | 22687   | 23535   | 22135.6 | 2363.93 | 15127   | 221343  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.09 MB | 2.16 MB | 2.04 MB | 217 kB  | 1.39 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.97 ms | 57 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 5091   | 5091   | 8935   | 9183   | 8591   | 1181.91 | 5089   | 85908  |
| **Bytes/Sec** | 397 kB | 397 kB | 697 kB | 716 kB | 670 kB | 92.2 kB | 397 kB | 6.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.36 ms | 1.97 ms | 104 ms |


---

<p align="center">Generated 2020-12-22T00:24:03.698Z</p>