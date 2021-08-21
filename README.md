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
| deno | 28212.8 | 282138 |
| fastify | 27252.4 | 272533 |
| alosaur | 21653.46 | 238182 |
| node | 21372.8 | 213719 |
| deno_canary | 20006 | 200039 |
| aqua | 12206.6 | 122065 |
| http | 12028.55 | 132297 |
| drash | 11882.2 | 118817 |
| little_std | 11360.91 | 124960 |
| abc | 10572.55 | 116293 |
| oak | 7160.3 | 71596 |
| mandarinets | 6908.28 | 75982 |
| little_native | 6514.4 | 65138 |
| express | 6126.9 | 61267 |
| dinatra | 4666.8 | 46666 |
| reno | 4180.3 | 41792 |
| opine | 3160.5 | 31599 |
| servest | 1827.9 | 18279 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5115   | 5115   | 11103   | 11559   | 10572.55 | 1765.98 | 5115   | 116293  |
| **Bytes/Sec** | 476 kB | 476 kB | 1.03 MB | 1.08 MB | 983 kB   | 164 kB  | 476 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.37 ms | 1.88 ms | 145 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13647   | 13647   | 21167   | 30383   | 21653.46 | 7183.01 | 13640   | 238182  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.88 MB | 2.71 MB | 1.93 MB  | 640 kB  | 1.21 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.41 ms | 1 ms  | 43 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5567   | 5567   | 13343   | 13655   | 12206.6 | 2497.34 | 5566   | 122065  |
| **Bytes/Sec** | 512 kB | 512 kB | 1.23 MB | 1.26 MB | 1.12 MB | 230 kB  | 512 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.73 ms | 1.5 ms | 39 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17903   | 17903   | 26127   | 38975   | 28212.8 | 8747.93 | 17900   | 282138  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.33 MB | 3.47 MB | 2.51 MB | 779 kB  | 1.59 MB | 25.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.96 ms | 1 ms  | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13015   | 13015   | 20671   | 21775   | 20006   | 2468.75 | 13015   | 200039  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.84 MB | 1.94 MB | 1.78 MB | 219 kB  | 1.16 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.48 ms | 1.19 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2311   | 2311   | 5683   | 5779   | 4666.8 | 1322.14 | 2311   | 46666   |
| **Bytes/Sec** | 120 kB | 120 kB | 295 kB | 301 kB | 243 kB | 68.7 kB | 120 kB | 2.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 19 ms | 8.05 ms | 4.05 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7955   | 7955   | 12335   | 12527   | 11882.2 | 1328.72 | 7953   | 118817  |
| **Bytes/Sec** | 684 kB | 684 kB | 1.06 MB | 1.08 MB | 1.02 MB | 114 kB  | 684 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.82 ms | 1.66 ms | 103 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3897   | 3897   | 5839    | 8783   | 6126.9  | 1313.02 | 3896   | 61267   |
| **Bytes/Sec** | 842 kB | 842 kB | 1.26 MB | 1.9 MB | 1.32 MB | 284 kB  | 842 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 6 ms  | 12 ms | 6.05 ms | 2.63 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10919   | 10919   | 28783   | 31871   | 27252.4 | 5645.15 | 10919   | 272533 |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 4.43 MB | 4.91 MB | 4.2 MB  | 869 kB  | 1.68 MB | 42 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 1.15 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4243   | 4243   | 13055  | 13599  | 12028.55 | 2701.14 | 4242   | 132297  |
| **Bytes/Sec** | 221 kB | 221 kB | 679 kB | 708 kB | 625 kB   | 140 kB  | 221 kB | 6.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 8 ms  | 2.73 ms | 1.82 ms | 41 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4391   | 4391   | 6727   | 6955   | 6514.4 | 717.05  | 4388   | 65138  |
| **Bytes/Sec** | 566 kB | 566 kB | 868 kB | 898 kB | 840 kB | 92.6 kB | 566 kB | 8.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.61 ms | 1.71 ms | 32 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 7763  | 7763  | 11727   | 11943   | 11360.91 | 1145.49 | 7763  | 124960  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.51 MB | 1.54 MB | 1.47 MB  | 148 kB  | 1 MB  | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.21 ms | 1.04 ms | 21 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3959   | 3959   | 7155   | 7987   | 6908.28 | 970.74  | 3958   | 75982   |
| **Bytes/Sec** | 368 kB | 368 kB | 666 kB | 743 kB | 642 kB  | 90.3 kB | 368 kB | 7.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.38 ms | 1.7 ms | 36 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16191   | 16191   | 17183   | 35519   | 21372.8 | 7336.49 | 16188   | 213719  |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 1.93 MB | 3.98 MB | 2.39 MB | 822 kB  | 1.81 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.45 ms | 1.48 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3241   | 3241   | 6583   | 11535  | 7160.3 | 2181.7 | 3240   | 71596   |
| **Bytes/Sec** | 421 kB | 421 kB | 856 kB | 1.5 MB | 931 kB | 284 kB | 421 kB | 9.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 5 ms  | 12 ms | 5.04 ms | 3.34 ms | 176 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1860   | 1860   | 3419   | 3551   | 3160.5 | 565.46  | 1860   | 31599   |
| **Bytes/Sec** | 286 kB | 286 kB | 527 kB | 547 kB | 487 kB | 87.1 kB | 286 kB | 4.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 9 ms  | 11 ms | 24 ms | 12.18 ms | 5.96 ms | 263 ms |


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
| **Req/Sec**   | 2241   | 2241   | 4085   | 6079   | 4180.3 | 1111.92 | 2240   | 41792   |
| **Bytes/Sec** | 175 kB | 175 kB | 319 kB | 474 kB | 326 kB | 86.7 kB | 175 kB | 3.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 8 ms  | 21 ms | 9.04 ms | 4.24 ms | 57 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1291   | 1291   | 1895   | 2117   | 1827.9 | 224.76  | 1291   | 18279  |
| **Bytes/Sec** | 148 kB | 148 kB | 218 kB | 243 kB | 210 kB | 25.8 kB | 148 kB | 2.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 9 ms  | 55 ms | 21.37 ms | 19.75 ms | 75 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2021-08-21T00:45:13.617Z</p>
