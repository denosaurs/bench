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
| deno | 46994.91 | 516932 |
| deno_canary | 41520.73 | 456734 |
| node | 22854.8 | 228535 |
| fastify | 19023.6 | 190229 |
| oak | 18503.64 | 203533 |
| http | 15742.4 | 157416 |
| drash | 12459.28 | 137054 |
| aqua | 11772.6 | 117722 |
| abc | 11587.2 | 115877 |
| alosaur | 9808.21 | 98071 |
| little_native | 8841.4 | 88412 |
| express | 8360.1 | 83601 |
| mandarinets | 7509.1 | 75090 |
| reno | 6473.6 | 64731 |
| dinatra | 5904.8 | 59045 |
| opine | 5381.3 | 53808 |
| little_std | 5341.9 | 53413 |
| servest | 3691.3 | 36911 |
| tinyhttp | 3609.2 | 36084 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8215   | 8215   | 12007   | 12111   | 11587.2 | 1136.45 | 8209   | 115877  |
| **Bytes/Sec** | 764 kB | 764 kB | 1.12 MB | 1.13 MB | 1.08 MB | 106 kB  | 763 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1.31 ms | 94 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6071   | 6071   | 10151  | 10631  | 9808.21 | 1276.58 | 6069   | 98071   |
| **Bytes/Sec** | 559 kB | 559 kB | 934 kB | 978 kB | 902 kB  | 117 kB  | 558 kB | 9.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.51 ms | 2.08 ms | 118 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7835   | 7835   | 12255   | 12351   | 11772.6 | 1324.07 | 7833   | 117722  |
| **Bytes/Sec** | 721 kB | 721 kB | 1.13 MB | 1.14 MB | 1.08 MB | 122 kB  | 721 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.14 ms | 1.26 ms | 86 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 35775   | 35775   | 48639   | 49151   | 46994.91 | 3792.89 | 35752   | 516932 |
| **Bytes/Sec** | 3.18 MB | 3.18 MB | 4.33 MB | 4.37 MB | 4.18 MB  | 338 kB  | 3.18 MB | 46 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.11 ms | 0.58 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 31455  | 31455  | 43199   | 43455   | 41520.73 | 3424.11 | 31449  | 456734  |
| **Bytes/Sec** | 2.8 MB | 2.8 MB | 3.84 MB | 3.87 MB | 3.7 MB   | 305 kB  | 2.8 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.22 ms | 0.67 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4219   | 4219   | 6123   | 6299   | 5904.8 | 575.98 | 4217   | 59045   |
| **Bytes/Sec** | 219 kB | 219 kB | 318 kB | 328 kB | 307 kB | 30 kB  | 219 kB | 3.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.35 ms | 2.05 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8631   | 8631   | 12855   | 12927   | 12459.28 | 1213.41 | 8630   | 137054  |
| **Bytes/Sec** | 742 kB | 742 kB | 1.11 MB | 1.11 MB | 1.07 MB  | 104 kB  | 742 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.75 ms | 1.27 ms | 98 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3735   | 3735   | 8943    | 9551    | 8360.1  | 1623.57 | 3735   | 83601   |
| **Bytes/Sec** | 807 kB | 807 kB | 1.93 MB | 2.06 MB | 1.81 MB | 351 kB  | 807 kB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.32 ms | 2.29 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9815    | 9815    | 19983   | 21295   | 19023.6 | 3195.39 | 9813    | 190229  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.08 MB | 3.28 MB | 2.93 MB | 492 kB  | 1.51 MB | 29.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.24 ms | 33 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12039  | 12039  | 16167  | 16303  | 15742.4 | 1239.78 | 12033  | 157416  |
| **Bytes/Sec** | 626 kB | 626 kB | 841 kB | 848 kB | 819 kB  | 64.4 kB | 626 kB | 8.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.95 ms | 57 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6291   | 6291   | 8839    | 10351   | 8841.4  | 999.16 | 6291   | 88412   |
| **Bytes/Sec** | 812 kB | 812 kB | 1.14 MB | 1.34 MB | 1.14 MB | 129 kB | 812 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.02 ms | 1.86 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3433   | 3433   | 5519   | 5707   | 5341.9 | 645.3   | 3432   | 53413   |
| **Bytes/Sec** | 316 kB | 316 kB | 508 kB | 525 kB | 491 kB | 59.4 kB | 316 kB | 4.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.9 ms | 2.2 ms | 41 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3805   | 3805   | 7995   | 8031   | 7509.1 | 1244.14 | 3804   | 75090   |
| **Bytes/Sec** | 354 kB | 354 kB | 743 kB | 747 kB | 698 kB | 116 kB  | 354 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.61 ms | 1.86 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11167   | 11167   | 24207   | 24943  | 22854.8 | 3933.4 | 11161   | 228535  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.71 MB | 2.8 MB | 2.56 MB | 441 kB | 1.25 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.05 ms | 33 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12935   | 12935   | 19135   | 19359   | 18503.64 | 1773.36 | 12931   | 203533  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.49 MB | 2.52 MB | 2.41 MB  | 231 kB  | 1.68 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.04 ms | 0.86 ms | 71 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3675   | 3675   | 5475   | 5835   | 5381.3 | 598.98  | 3674   | 53808   |
| **Bytes/Sec** | 566 kB | 566 kB | 843 kB | 899 kB | 829 kB | 92.2 kB | 566 kB | 8.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.85 ms | 2.41 ms | 117 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4371   | 4371   | 6683   | 6887   | 6473.6 | 708.81  | 4368   | 64731   |
| **Bytes/Sec** | 341 kB | 341 kB | 521 kB | 538 kB | 505 kB | 55.4 kB | 341 kB | 5.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.69 ms | 2.4 ms | 101 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2589   | 2589   | 3409   | 4899   | 3691.3 | 864.99  | 2588   | 36911   |
| **Bytes/Sec** | 298 kB | 298 kB | 392 kB | 564 kB | 424 kB | 99.5 kB | 298 kB | 4.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.36 ms | 17.1 ms | 77 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2797   | 2797   | 3681   | 3801   | 3609.2 | 283.7   | 2797   | 36084   |
| **Bytes/Sec** | 439 kB | 439 kB | 578 kB | 597 kB | 566 kB | 44.5 kB | 439 kB | 5.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 18 ms | 10.55 ms | 2.63 ms | 45 ms |


---

<p align="center">Generated 2021-08-04T00:46:40.135Z</p>
