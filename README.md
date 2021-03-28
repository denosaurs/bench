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
| **Average** | 7627.6 | 19610.8 | 24660.8 | 8605.28 | 22099.28 | 13342 | 19714 | 23258.8 | 17454.91 | 2884 | 5455.3 | 22516 | 9173.8 |
| **Total** | 76266 | 196106 | 246623 | 94640 | 243111 | 146756 | 197150 | 232580 | 192000 | 28835 | 54541 | 247674 | 91741 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5451   | 5451   | 7863   | 8127   | 7627.6 | 747.79  | 5448   | 76266   |
| **Bytes/Sec** | 507 kB | 507 kB | 731 kB | 756 kB | 709 kB | 69.5 kB | 507 kB | 7.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.7 ms | 1.96 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12551   | 12551   | 20223   | 21135   | 19610.8 | 2390.75 | 12546   | 196106 |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.86 MB | 1.94 MB | 1.8 MB  | 220 kB  | 1.15 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.09 ms | 51 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17823  | 17823  | 25311   | 26591   | 24660.8 | 2487.04 | 17820  | 246623  |
| **Bytes/Sec** | 909 kB | 909 kB | 1.29 MB | 1.36 MB | 1.26 MB | 127 kB  | 909 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.17 ms | 0.86 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6187   | 6187   | 8815   | 8991   | 8605.28 | 772.4   | 6184   | 94640   |
| **Bytes/Sec** | 322 kB | 322 kB | 458 kB | 467 kB | 447 kB  | 40.1 kB | 322 kB | 4.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.2 ms | 1.43 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16151   | 16151   | 22879   | 24063   | 22099.28 | 2028.39 | 16151   | 243111  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 1.97 MB | 2.07 MB | 1.9 MB   | 174 kB  | 1.39 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.88 ms | 46 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5203    | 5203    | 14423   | 14727   | 13342   | 2670.08 | 5200    | 146756  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 3.12 MB | 3.18 MB | 2.88 MB | 577 kB  | 1.12 MB | 31.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.56 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8863    | 8863    | 20399   | 22255  | 19714   | 3669.82 | 8861    | 197150  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 3.12 MB | 3.4 MB | 3.02 MB | 562 kB  | 1.36 MB | 30.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.22 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 13031   | 13031   | 24207   | 25551   | 23258.8 | 3443.07 | 13029   | 232580 |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.71 MB | 2.86 MB | 2.6 MB  | 385 kB  | 1.46 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.99 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 18239  | 18863   | 17454.91 | 1928.13 | 11718   | 192000  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.7 MB | 1.76 MB | 1.62 MB  | 179 kB  | 1.09 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.97 ms | 1.09 ms | 69 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2355   | 2355   | 2757   | 3567   | 2884   | 325.79  | 2354   | 28835   |
| **Bytes/Sec** | 271 kB | 271 kB | 317 kB | 410 kB | 332 kB | 37.5 kB | 271 kB | 3.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 49 ms | 13.33 ms | 18.31 ms | 91 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2999   | 2999   | 5703    | 5963    | 5455.3  | 845.26 | 2999   | 54541   |
| **Bytes/Sec** | 852 kB | 852 kB | 1.62 MB | 1.69 MB | 1.55 MB | 240 kB | 852 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.87 ms | 3.17 ms | 190 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16351  | 16351  | 22975   | 24527   | 22516   | 2032.93 | 16345  | 247674  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 2.11 MB | 2.26 MB | 2.07 MB | 187 kB  | 1.5 MB | 22.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.74 ms | 23 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6391   | 6391   | 9495   | 9711   | 9173.8 | 937.43  | 6390   | 91741   |
| **Bytes/Sec** | 498 kB | 498 kB | 741 kB | 758 kB | 716 kB | 73.2 kB | 498 kB | 7.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.67 ms | 2.04 ms | 100 ms |


---

<p align="center">Generated 2021-03-28T00:41:06.434Z</p>