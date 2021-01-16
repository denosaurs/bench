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
| **Average** | 7178 | 17279.6 | 29187.2 | 14361.1 | 18225.2 | 14303.82 | 36332.37 | 42389.1 | 22481.2 | 3225.5 | 4863.9 | 23958.4 | 6315.3 |
| **Total** | 71781 | 172783 | 291856 | 157965 | 182259 | 157336 | 399671 | 466236 | 224804 | 32247 | 48632 | 239577 | 63146 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4335   | 4335   | 7483   | 7763   | 7178   | 974.27  | 4335   | 71781   |
| **Bytes/Sec** | 403 kB | 403 kB | 696 kB | 722 kB | 668 kB | 90.6 kB | 403 kB | 6.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.04 ms | 2.12 ms | 41 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9511   | 9511   | 17983   | 18975   | 17279.6 | 2640.08 | 9511   | 172783  |
| **Bytes/Sec** | 876 kB | 876 kB | 1.65 MB | 1.74 MB | 1.59 MB | 243 kB  | 875 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.87 ms | 1.25 ms | 63 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22991   | 22991   | 29775   | 30335   | 29187.2 | 2079.37 | 22977   | 291856  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.52 MB | 1.55 MB | 1.49 MB | 106 kB  | 1.17 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.07 ms | 0.59 ms | 51 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10935  | 10935  | 14503  | 15391  | 14361.1 | 1160.7  | 10930  | 157965  |
| **Bytes/Sec** | 569 kB | 569 kB | 754 kB | 800 kB | 747 kB  | 60.3 kB | 568 kB | 8.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.26 ms | 1.07 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10839  | 10839  | 19007   | 19327   | 18225.2 | 2470.29 | 10838  | 182259  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.63 MB | 1.66 MB | 1.57 MB | 212 kB  | 932 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.26 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 5847    | 5847    | 15327   | 15711   | 14303.82 | 2728.04 | 5845    | 157336 |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.31 MB | 3.39 MB | 3.09 MB  | 589 kB  | 1.26 MB | 34 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.36 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 18767   | 18767   | 38175   | 39327   | 36332.37 | 5608.3 | 18754   | 399671  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 5.84 MB | 6.01 MB | 5.56 MB  | 858 kB | 2.87 MB | 61.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.81 ms | 19 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 28111   | 28111   | 43775  | 44767   | 42389.1 | 4598.06 | 28099   | 466236  |
| **Bytes/Sec** | 3.15 MB | 3.15 MB | 4.9 MB | 5.01 MB | 4.75 MB | 515 kB  | 3.15 MB | 52.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.64 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16375   | 16375   | 23055   | 24495   | 22481.2 | 2248.42 | 16370   | 224804  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.14 MB | 2.28 MB | 2.09 MB | 209 kB  | 1.52 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.83 ms | 26 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2345   | 2345   | 3169   | 4475   | 3225.5 | 556.63 | 2344   | 32247   |
| **Bytes/Sec** | 270 kB | 270 kB | 365 kB | 514 kB | 371 kB | 64 kB  | 270 kB | 3.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 11.88 ms | 17.84 ms | 81 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2433   | 2433   | 5243    | 5351    | 4863.9  | 870.4  | 2433   | 48632   |
| **Bytes/Sec** | 691 kB | 691 kB | 1.49 MB | 1.52 MB | 1.38 MB | 247 kB | 691 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.82 ms | 3.56 ms | 202 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 18143   | 18143   | 24031   | 26335   | 23958.4 | 2141.43 | 18130   | 239577 |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.21 MB | 2.42 MB | 2.2 MB  | 197 kB  | 1.67 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.9 ms | 53 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3851   | 3851   | 6547   | 6903   | 6315.3 | 865.8   | 3850   | 63146   |
| **Bytes/Sec** | 301 kB | 301 kB | 511 kB | 539 kB | 493 kB | 67.5 kB | 300 kB | 4.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.88 ms | 2.61 ms | 126 ms |


---

<p align="center">Generated 2021-01-16T00:49:12.790Z</p>