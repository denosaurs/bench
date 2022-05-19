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
  - [aqua](#aqua)
  - [deno](#deno)
  - [deno_canary](#deno_canary)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [oak](#oak)
  - [opine](#opine)
  - [pogo](#pogo)
  - [reno](#reno)
  - [servest](#servest)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 45293.1 | 498228 |
| node | 35232.81 | 352318 |
| fastify | 34611.64 | 380725 |
| deno_canary | 31605.2 | 316057 |
| alosaur | 31221.1 | 343432 |
| reno | 29183.2 | 291790 |
| drash | 26922.8 | 269205 |
| aqua | 17277.2 | 172756 |
| little_std | 17265.1 | 189892 |
| oak | 17109.2 | 171075 |
| abc | 15964.8 | 159654 |
| little_native | 14902.91 | 163935 |
| express | 13103.1 | 144123 |
| mandarinets | 11325.4 | 113251 |
| opine | 9989.8 | 99893 |
| dinatra | 6597.64 | 72568 |
| tinyhttp | 4014.8 | 40141 |
| servest | 3034.4 | 30339 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12183   | 12183   | 16343   | 16607   | 15964.8 | 1272.28 | 12179   | 159654  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 1.52 MB | 1.54 MB | 1.48 MB | 118 kB  | 1.13 MB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.02 ms | 70 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17791   | 17791   | 38271   | 39071   | 31221.1 | 8719.87 | 17790   | 343432  |
| **Bytes/Sec** | 1.99 MB | 1.99 MB | 4.28 MB | 4.37 MB | 3.5 MB  | 976 kB  | 1.99 MB | 38.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.85 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11055   | 11055   | 17935   | 18239   | 17277.2 | 2083.51 | 11049   | 172756  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.73 MB | 2.77 MB | 2.63 MB | 317 kB  | 1.68 MB | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.97 ms | 1.1 ms | 49 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 35007   | 35007   | 46367   | 47455   | 45293.1 | 3409.62 | 34985   | 498228  |
| **Bytes/Sec** | 3.92 MB | 3.92 MB | 5.19 MB | 5.32 MB | 5.07 MB | 382 kB  | 3.92 MB | 55.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.6 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15151  | 15151  | 34559   | 37407   | 31605.2 | 7113.34 | 15150  | 316057  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 3.87 MB | 4.19 MB | 3.54 MB | 797 kB  | 1.7 MB | 35.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.54 ms | 0.89 ms | 20 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5063   | 5063   | 6727   | 6979   | 6597.64 | 513.38  | 5060   | 72568   |
| **Bytes/Sec** | 263 kB | 263 kB | 350 kB | 363 kB | 343 kB  | 26.7 kB | 263 kB | 3.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.56 ms | 1.95 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15127   | 15127   | 29535   | 32095   | 26922.8 | 5913.56 | 15126   | 269205  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 4.08 MB | 4.43 MB | 3.71 MB | 816 kB  | 2.09 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.82 ms | 44 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4783    | 4783    | 14279   | 14799  | 13103.1 | 2825.68 | 4782    | 144123  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 3.08 MB | 3.2 MB | 2.83 MB | 610 kB  | 1.03 MB | 31.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.46 ms | 1.55 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20847   | 20847   | 39583   | 39967   | 34611.64 | 7968.69 | 20846   | 380725  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 6.09 MB | 6.15 MB | 5.33 MB  | 1.23 MB | 3.21 MB | 58.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.88 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11767   | 11767   | 15255   | 15679   | 14902.91 | 1044.96 | 11762   | 163935  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 2.32 MB | 2.38 MB | 2.27 MB  | 159 kB  | 1.79 MB | 24.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 0.76 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12559   | 12559   | 17743  | 17967   | 17265.1 | 1492.94 | 12558   | 189892  |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 2.7 MB | 2.73 MB | 2.62 MB | 227 kB  | 1.91 MB | 28.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.04 ms | 0.63 ms | 23 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7483   | 7483   | 11711   | 12007   | 11325.4 | 1296.48 | 7480   | 113251  |
| **Bytes/Sec** | 696 kB | 696 kB | 1.09 MB | 1.12 MB | 1.05 MB | 121 kB  | 696 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.22 ms | 1.35 ms | 72 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18335   | 18335   | 40447   | 42719   | 35232.81 | 9427.39 | 18334   | 352318  |
| **Bytes/Sec** | 2.05 MB | 2.05 MB | 4.53 MB | 4.78 MB | 3.95 MB  | 1.06 MB | 2.05 MB | 39.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.42 ms | 0.94 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11183   | 11183   | 17791   | 18079   | 17109.2 | 1996.79 | 11178   | 171075  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 2.72 MB | 2.76 MB | 2.62 MB | 305 kB  | 1.71 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.9 ms | 1.33 ms | 63 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7543    | 7543    | 10231   | 10439   | 9989.8  | 819.24 | 7542    | 99893   |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.19 MB | 2.23 MB | 2.14 MB | 175 kB | 1.61 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.6 ms | 1.21 ms | 45 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15391   | 15391   | 32703   | 33183   | 29183.2 | 6758.19 | 15384   | 291790  |
| **Bytes/Sec** | 2.34 MB | 2.34 MB | 4.97 MB | 5.05 MB | 4.44 MB | 1.03 MB | 2.34 MB | 44.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.59 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2605   | 2605   | 3047   | 3351   | 3034.4 | 264.43  | 2604   | 30339   |
| **Bytes/Sec** | 300 kB | 300 kB | 350 kB | 386 kB | 349 kB | 30.4 kB | 299 kB | 3.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.69 ms | 18.25 ms | 95 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2915   | 2915   | 4119   | 4311   | 4014.8 | 381.21  | 2914   | 40141  |
| **Bytes/Sec** | 458 kB | 458 kB | 647 kB | 677 kB | 630 kB | 59.8 kB | 457 kB | 6.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 20 ms | 9.47 ms | 3.09 ms | 108 ms |


---

<p align="center">Generated 2022-05-19T01:40:36.934Z</p>
