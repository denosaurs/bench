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
| deno | 44656 | 446524 |
| node | 41650.4 | 416505 |
| deno_canary | 39237.6 | 392308 |
| http | 23104.73 | 254158 |
| fastify | 23058.8 | 230566 |
| aqua | 17314.8 | 173140 |
| alosaur | 16644.41 | 166459 |
| drash | 12804 | 128039 |
| oak | 12168.19 | 133841 |
| little_native | 11963.1 | 131596 |
| dinatra | 11601.82 | 127624 |
| abc | 9423.8 | 94234 |
| reno | 7500.8 | 75005 |
| express | 7486.7 | 74863 |
| opine | 6724.4 | 67232 |
| mandarinets | 6498.7 | 64978 |
| tinyhttp | 5341.7 | 53413 |
| little_std | 4632.9 | 46329 |
| servest | 3700.1 | 36995 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5747   | 5747   | 9767   | 10143  | 9423.8 | 1240.17 | 5745   | 94234   |
| **Bytes/Sec** | 535 kB | 535 kB | 908 kB | 943 kB | 876 kB | 115 kB  | 534 kB | 8.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.72 ms | 1.94 ms | 80 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11639   | 11639   | 17199   | 17391  | 16644.41 | 1674.42 | 11639   | 166459  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.58 MB | 1.6 MB | 1.53 MB  | 154 kB  | 1.07 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.9 ms | 51 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12919   | 12919   | 17727   | 18111   | 17314.8 | 1477.09 | 12914   | 173140  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.63 MB | 1.67 MB | 1.59 MB | 136 kB  | 1.19 MB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.06 ms | 0.66 ms | 22 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 36319   | 36319   | 46111  | 46495   | 44656   | 2963.21 | 36311   | 446524  |
| **Bytes/Sec** | 3.23 MB | 3.23 MB | 4.1 MB | 4.14 MB | 3.97 MB | 264 kB  | 3.23 MB | 39.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.31 ms | 0.57 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30095   | 30095   | 40223   | 41439   | 39237.6 | 3212.92 | 30082   | 392308  |
| **Bytes/Sec** | 2.68 MB | 2.68 MB | 3.58 MB | 3.69 MB | 3.49 MB | 286 kB  | 2.68 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.65 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8343   | 8343   | 11999  | 12567  | 11601.82 | 1180.33 | 8341   | 127624  |
| **Bytes/Sec** | 434 kB | 434 kB | 624 kB | 654 kB | 603 kB   | 61.4 kB | 434 kB | 6.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.19 ms | 1.17 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 8639   | 8639   | 13295   | 13631   | 12804  | 1410   | 8638   | 128039 |
| **Bytes/Sec** | 743 kB | 743 kB | 1.14 MB | 1.17 MB | 1.1 MB | 121 kB | 743 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.5 ms | 1.12 ms | 64 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3661   | 3661   | 8015    | 8303    | 7486.7  | 1364.42 | 3661   | 74863   |
| **Bytes/Sec** | 791 kB | 791 kB | 1.73 MB | 1.79 MB | 1.62 MB | 295 kB  | 791 kB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.79 ms | 2.13 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12567   | 12567   | 24303   | 24623   | 23058.8 | 3519.06 | 12562   | 230566  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 3.74 MB | 3.79 MB | 3.55 MB | 542 kB  | 1.93 MB | 35.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.92 ms | 22 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17727  | 17727  | 23599   | 24223   | 23104.73 | 1725.37 | 17724  | 254158  |
| **Bytes/Sec** | 922 kB | 922 kB | 1.23 MB | 1.26 MB | 1.2 MB   | 89.6 kB | 922 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.64 ms | 44 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8139    | 8139    | 12303   | 12743   | 11963.1 | 1248.27 | 8136    | 131596 |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.59 MB | 1.64 MB | 1.54 MB | 161 kB  | 1.05 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.02 ms | 0.99 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2667   | 2667   | 4895   | 5011   | 4632.9 | 696.97  | 2666   | 46329   |
| **Bytes/Sec** | 245 kB | 245 kB | 451 kB | 461 kB | 426 kB | 64.1 kB | 245 kB | 4.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 7.95 ms | 2.42 ms | 44 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3893   | 3893   | 6731   | 6971   | 6498.7 | 877.8   | 3892   | 64978   |
| **Bytes/Sec** | 362 kB | 362 kB | 626 kB | 648 kB | 604 kB | 81.7 kB | 362 kB | 6.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.59 ms | 1.89 ms | 102 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26063   | 26063   | 43519   | 44223   | 41650.4 | 5338.95 | 26061   | 416505  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 4.87 MB | 4.95 MB | 4.67 MB | 598 kB  | 2.92 MB | 46.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.66 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7939    | 7939    | 12447   | 13487   | 12168.19 | 1417.37 | 7936    | 133841  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.62 MB | 1.75 MB | 1.58 MB  | 184 kB  | 1.03 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.76 ms | 1.13 ms | 24 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4759   | 4759   | 6951    | 6995    | 6724.4  | 657.42 | 4756   | 67232   |
| **Bytes/Sec** | 733 kB | 733 kB | 1.07 MB | 1.08 MB | 1.04 MB | 101 kB | 732 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.38 ms | 1.5 ms | 94 ms |


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
| **Req/Sec**   | 4599   | 4599   | 7847   | 7971   | 7500.8 | 975.72  | 4596   | 75005   |
| **Bytes/Sec** | 359 kB | 359 kB | 612 kB | 622 kB | 585 kB | 76.2 kB | 358 kB | 5.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.72 ms | 2.15 ms | 88 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2213   | 2213   | 3209   | 5551   | 3700.1 | 1036.39 | 2212   | 36995   |
| **Bytes/Sec** | 254 kB | 254 kB | 369 kB | 638 kB | 425 kB | 119 kB  | 254 kB | 4.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 10.32 ms | 17.1 ms | 73 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3655   | 3655   | 5515   | 5847   | 5341.7 | 588.55  | 3654   | 53413  |
| **Bytes/Sec** | 486 kB | 486 kB | 734 kB | 778 kB | 710 kB | 78.3 kB | 486 kB | 7.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 13 ms | 6.99 ms | 2.36 ms | 40 ms |


---

<p align="center">Generated 2021-05-29T01:39:02.510Z</p>
