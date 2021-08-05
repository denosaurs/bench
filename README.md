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
| node | 42463.2 | 424636 |
| deno | 39520.73 | 434680 |
| fastify | 37895.2 | 378945 |
| deno_canary | 35328.73 | 388618 |
| oak | 17734 | 177325 |
| alosaur | 14611.2 | 146107 |
| express | 13947.1 | 153415 |
| aqua | 13927.2 | 139281 |
| http | 13069 | 130685 |
| drash | 12026 | 132290 |
| abc | 11686.4 | 116848 |
| dinatra | 10656.55 | 117207 |
| mandarinets | 10189.8 | 101904 |
| little_native | 9668.6 | 96680 |
| reno | 8155 | 81548 |
| opine | 6165.5 | 61656 |
| servest | 5359.37 | 58956 |
| little_std | 4765.91 | 52418 |
| tinyhttp | 3660.4 | 36595 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8327   | 8327   | 12039   | 12127   | 11686.4 | 1122.23 | 8321   | 116848  |
| **Bytes/Sec** | 774 kB | 774 kB | 1.12 MB | 1.13 MB | 1.09 MB | 104 kB  | 774 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.26 ms | 87 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10359  | 10359  | 15071   | 15135   | 14611.2 | 1418.83 | 10353  | 146107  |
| **Bytes/Sec** | 953 kB | 953 kB | 1.39 MB | 1.39 MB | 1.34 MB | 131 kB  | 952 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.24 ms | 87 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10063  | 10063  | 14351   | 14423   | 13927.2 | 1289.53 | 10061  | 139281  |
| **Bytes/Sec** | 926 kB | 926 kB | 1.32 MB | 1.33 MB | 1.28 MB | 119 kB  | 926 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.23 ms | 0.98 ms | 62 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 28111  | 28111  | 40607   | 42079   | 39520.73 | 3749.27 | 28103  | 434680  |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 3.61 MB | 3.75 MB | 3.52 MB  | 333 kB  | 2.5 MB | 38.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.78 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24303   | 24303   | 36639   | 37311   | 35328.73 | 3616.68 | 24295   | 388618  |
| **Bytes/Sec** | 2.16 MB | 2.16 MB | 3.26 MB | 3.32 MB | 3.14 MB  | 322 kB  | 2.16 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.63 ms | 0.85 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8007   | 8007   | 10551  | 11831  | 10656.55 | 999.62  | 8005   | 117207  |
| **Bytes/Sec** | 417 kB | 417 kB | 549 kB | 615 kB | 554 kB   | 51.9 kB | 416 kB | 6.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.3 ms | 1.39 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8031   | 8031   | 12479   | 12527   | 12026   | 1269.4 | 8030   | 132290  |
| **Bytes/Sec** | 691 kB | 691 kB | 1.07 MB | 1.08 MB | 1.03 MB | 109 kB | 691 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.26 ms | 98 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5811    | 5811    | 14943   | 15567   | 13947.1 | 2667.92 | 5808    | 153415  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.23 MB | 3.36 MB | 3.01 MB | 576 kB  | 1.25 MB | 33.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.34 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20927   | 20927   | 40415   | 40863  | 37895.2 | 5827.65 | 20916   | 378945  |
| **Bytes/Sec** | 3.22 MB | 3.22 MB | 6.22 MB | 6.3 MB | 5.84 MB | 898 kB  | 3.22 MB | 58.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.88 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 7671   | 7671   | 13663  | 14015  | 13069  | 1822.28 | 7671   | 130685 |
| **Bytes/Sec** | 399 kB | 399 kB | 711 kB | 729 kB | 680 kB | 94.7 kB | 399 kB | 6.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.42 ms | 1.49 ms | 30 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6371   | 6371   | 10055  | 10335   | 9668.6  | 1120.81 | 6371   | 96680   |
| **Bytes/Sec** | 822 kB | 822 kB | 1.3 MB | 1.33 MB | 1.25 MB | 145 kB  | 822 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.54 ms | 1.44 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2805   | 2805   | 4987   | 5155   | 4765.91 | 635.82  | 2805   | 52418   |
| **Bytes/Sec** | 258 kB | 258 kB | 459 kB | 474 kB | 438 kB  | 58.5 kB | 258 kB | 4.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.84 ms | 2.46 ms | 49 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6639   | 6639   | 10567  | 10751   | 10189.8 | 1194.38 | 6639   | 101904  |
| **Bytes/Sec** | 617 kB | 617 kB | 983 kB | 1000 kB | 948 kB  | 111 kB  | 617 kB | 9.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.3 ms | 1.6 ms | 116 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 25903  | 25903  | 44447   | 44799   | 42463.2 | 5565.77 | 25888  | 424636  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 4.98 MB | 5.02 MB | 4.76 MB | 624 kB  | 2.9 MB | 47.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.38 ms | 0.75 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10423   | 10423   | 18639   | 18863   | 17734   | 2450.12 | 10418   | 177325  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.42 MB | 2.45 MB | 2.31 MB | 319 kB  | 1.35 MB | 23.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.11 ms | 1.08 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3961   | 3961   | 6431   | 6527    | 6165.5 | 744.31 | 3960   | 61656  |
| **Bytes/Sec** | 610 kB | 610 kB | 991 kB | 1.01 MB | 950 kB | 115 kB | 610 kB | 9.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 10 ms | 5.8 ms | 2.13 ms | 58 ms |


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
| **Req/Sec**   | 5547   | 5547   | 8375   | 8623   | 8155   | 877.89  | 5547   | 81548   |
| **Bytes/Sec** | 433 kB | 433 kB | 653 kB | 673 kB | 636 kB | 68.4 kB | 433 kB | 6.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.45 ms | 1.9 ms | 96 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3399   | 3399   | 5859   | 6775   | 5359.37 | 1207.78 | 3398   | 58956   |
| **Bytes/Sec** | 391 kB | 391 kB | 674 kB | 779 kB | 616 kB  | 139 kB  | 391 kB | 6.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 6.96 ms | 14.83 ms | 68 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2977   | 2977   | 3721   | 3841   | 3660.4 | 232.43  | 2976   | 36595   |
| **Bytes/Sec** | 467 kB | 467 kB | 584 kB | 603 kB | 574 kB | 36.4 kB | 467 kB | 5.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 17 ms | 10.34 ms | 2.28 ms | 44 ms |


---

<p align="center">Generated 2021-08-05T00:47:25.739Z</p>
