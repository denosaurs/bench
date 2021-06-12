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
| deno | 43481.6 | 434835 |
| deno_canary | 37860 | 378626 |
| node | 36013.82 | 396109 |
| fastify | 21839.6 | 218390 |
| oak | 17286.19 | 190139 |
| express | 15543.46 | 170975 |
| http | 13624.37 | 149871 |
| little_native | 12948 | 129483 |
| drash | 12297 | 122967 |
| aqua | 11764 | 129406 |
| alosaur | 9864.55 | 108511 |
| abc | 7921.8 | 79209 |
| dinatra | 7544.19 | 82974 |
| mandarinets | 7484 | 74836 |
| reno | 7442 | 74411 |
| opine | 5620.5 | 56198 |
| servest | 3033.19 | 33360 |
| little_std | 2947.8 | 29474 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5211   | 5211   | 8311   | 8567   | 7921.8 | 976.03  | 5210   | 79209   |
| **Bytes/Sec** | 485 kB | 485 kB | 773 kB | 797 kB | 737 kB | 90.7 kB | 485 kB | 7.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.6 ms | 1.68 ms | 36 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6199   | 6199   | 10191  | 10959   | 9864.55 | 1235.76 | 6199   | 108511  |
| **Bytes/Sec** | 570 kB | 570 kB | 937 kB | 1.01 MB | 907 kB  | 114 kB  | 570 kB | 9.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.55 ms | 1.64 ms | 53 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9151   | 9151   | 11823   | 12975   | 11764   | 922.11  | 9145   | 129406  |
| **Bytes/Sec** | 842 kB | 842 kB | 1.09 MB | 1.19 MB | 1.08 MB | 84.8 kB | 841 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.99 ms | 1.08 ms | 66 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32895   | 32895   | 44671   | 45023   | 43481.6 | 3540.28 | 32875   | 434835  |
| **Bytes/Sec** | 2.93 MB | 2.93 MB | 3.98 MB | 4.01 MB | 3.87 MB | 315 kB  | 2.93 MB | 38.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.4 ms | 0.63 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27903   | 27903   | 39391   | 40831   | 37860   | 3676.45 | 27897   | 378626  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 3.51 MB | 3.63 MB | 3.37 MB | 327 kB  | 2.48 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.75 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4271   | 4271   | 7855   | 8535   | 7544.19 | 1174.67 | 4268   | 82974   |
| **Bytes/Sec** | 222 kB | 222 kB | 409 kB | 444 kB | 392 kB  | 61.1 kB | 222 kB | 4.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.8 ms | 2.05 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7631   | 7631   | 12823  | 12935   | 12297   | 1558.93 | 7631   | 122967  |
| **Bytes/Sec** | 656 kB | 656 kB | 1.1 MB | 1.11 MB | 1.06 MB | 134 kB  | 656 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.93 ms | 1.08 ms | 30 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7031    | 7031    | 16511   | 17247   | 15543.46 | 2766.63 | 7030    | 170975  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.57 MB | 3.73 MB | 3.36 MB  | 598 kB  | 1.52 MB | 36.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.13 ms | 1.15 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10359  | 10359  | 23103   | 23983   | 21839.6 | 3913.78 | 10359  | 218390  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 3.56 MB | 3.69 MB | 3.36 MB | 603 kB  | 1.6 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.36 ms | 1.12 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9583   | 9583   | 14087  | 14311  | 13624.37 | 1310.77 | 9583   | 149871  |
| **Bytes/Sec** | 498 kB | 498 kB | 733 kB | 744 kB | 709 kB   | 68.1 kB | 498 kB | 7.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.02 ms | 42 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8935    | 8935    | 13439   | 13543   | 12948   | 1345.25 | 8931    | 129483  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.73 MB | 1.75 MB | 1.67 MB | 173 kB  | 1.15 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.27 ms | 1 ms  | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1725   | 1725   | 3121   | 3253   | 2947.8 | 449.38  | 1725   | 29474   |
| **Bytes/Sec** | 159 kB | 159 kB | 287 kB | 299 kB | 271 kB | 41.3 kB | 159 kB | 2.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 11 ms | 12 ms | 24 ms | 13.07 ms | 3.46 ms | 61 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4607   | 4607   | 7787   | 7907   | 7484   | 964.27  | 4607   | 74836   |
| **Bytes/Sec** | 429 kB | 429 kB | 724 kB | 736 kB | 696 kB | 89.7 kB | 428 kB | 6.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.82 ms | 1.53 ms | 33 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 19199   | 19199   | 38271   | 38783   | 36013.82 | 5468.2 | 19189   | 396109  |
| **Bytes/Sec** | 2.15 MB | 2.15 MB | 4.28 MB | 4.34 MB | 4.03 MB  | 612 kB | 2.15 MB | 44.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.64 ms | 0.88 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 12311  | 12311  | 17855   | 17999   | 17286.19 | 1582.78 | 12308  | 190139  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.32 MB | 2.34 MB | 2.25 MB  | 206 kB  | 1.6 MB | 24.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.64 ms | 20 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3651   | 3651   | 5883   | 5919   | 5620.5 | 663.44 | 3650   | 56198   |
| **Bytes/Sec** | 562 kB | 562 kB | 906 kB | 911 kB | 865 kB | 102 kB | 562 kB | 8.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 11 ms | 6.54 ms | 2.04 ms | 103 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4683   | 4683   | 7819   | 7971   | 7442   | 944.54  | 4681   | 74411  |
| **Bytes/Sec** | 365 kB | 365 kB | 610 kB | 622 kB | 580 kB | 73.6 kB | 365 kB | 5.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.7 ms | 2.06 ms | 44 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2223   | 2223   | 3009   | 3559   | 3033.19 | 358.14  | 2222   | 33360   |
| **Bytes/Sec** | 256 kB | 256 kB | 346 kB | 409 kB | 349 kB  | 41.2 kB | 256 kB | 3.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.68 ms | 18.14 ms | 78 ms |


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

<p align="center">Generated 2021-06-12T00:40:56.755Z</p>
