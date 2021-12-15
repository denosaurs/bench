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
| deno_canary | 40598.55 | 446528 |
| deno | 36439.2 | 364398 |
| node | 35671.2 | 356710 |
| fastify | 32707.2 | 327072 |
| oak | 29020 | 319233 |
| reno | 22091.28 | 242999 |
| alosaur | 18409.6 | 184100 |
| aqua | 16381.2 | 163821 |
| express | 14330.37 | 157634 |
| abc | 14112 | 141114 |
| little_std | 12896.37 | 141863 |
| opine | 11080.37 | 121884 |
| little_native | 11052 | 121548 |
| dinatra | 9456.19 | 104018 |
| servest | 5371.91 | 59089 |
| tinyhttp | 3607.91 | 39680 |
| drash | 0 | 0 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10935   | 10935   | 14583   | 14663   | 14112   | 1097.53 | 10932   | 141114  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.36 MB | 1.36 MB | 1.31 MB | 102 kB  | 1.02 MB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.05 ms | 59 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9479   | 9479   | 21743   | 23359   | 18409.6 | 5172.91 | 9479   | 184100  |
| **Bytes/Sec** | 844 kB | 844 kB | 1.94 MB | 2.08 MB | 1.64 MB | 460 kB  | 844 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.8 ms | 1.45 ms | 42 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9847    | 9847    | 18559   | 19215   | 16381.2 | 3708.23 | 9843    | 163821  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.39 MB | 2.48 MB | 2.11 MB | 479 kB  | 1.27 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.91 ms | 1.29 ms | 33 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18031  | 18031  | 39295  | 42111   | 36439.2 | 7621.32 | 18023  | 364398  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 3.5 MB | 3.75 MB | 3.24 MB | 679 kB  | 1.6 MB | 32.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.78 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18079   | 18079   | 42303   | 47103   | 40598.55 | 8426.85 | 18071   | 446528  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 3.76 MB | 4.19 MB | 3.61 MB  | 750 kB  | 1.61 MB | 39.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.29 ms | 0.66 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7459   | 7459   | 9639   | 9799   | 9456.19 | 640.87  | 7458   | 104018  |
| **Bytes/Sec** | 388 kB | 388 kB | 501 kB | 509 kB | 492 kB  | 33.3 kB | 388 kB | 5.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.45 ms | 1.65 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 7311    | 7311    | 15887   | 17103   | 14330.37 | 3499.94 | 7311    | 157634 |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 3.43 MB | 3.69 MB | 3.1 MB   | 756 kB  | 1.58 MB | 34 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.39 ms | 1.27 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18383   | 18383   | 36415   | 39263   | 32707.2 | 7385.35 | 18372   | 327072  |
| **Bytes/Sec** | 2.83 MB | 2.83 MB | 5.61 MB | 6.05 MB | 5.04 MB | 1.14 MB | 2.83 MB | 50.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.65 ms | 0.98 ms | 23 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5815   | 5815   | 12615   | 13055   | 11052   | 2456.99 | 5812   | 121548  |
| **Bytes/Sec** | 750 kB | 750 kB | 1.63 MB | 1.68 MB | 1.43 MB | 317 kB  | 750 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.09 ms | 1.6 ms | 31 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8551   | 8551   | 13383   | 13743   | 12896.37 | 1414.32 | 8544   | 141863  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.73 MB | 1.77 MB | 1.66 MB  | 183 kB  | 1.1 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.12 ms | 28 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 19727   | 19727   | 41055  | 41567   | 35671.2 | 8684.61 | 19727   | 356710 |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 4.6 MB | 4.66 MB | 3.99 MB | 972 kB  | 2.21 MB | 40 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.33 ms | 0.82 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15047   | 15047   | 31983   | 32655   | 29020   | 5289.72 | 15045   | 319233  |
| **Bytes/Sec** | 1.96 MB | 1.96 MB | 4.16 MB | 4.25 MB | 3.77 MB | 688 kB  | 1.96 MB | 41.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.78 ms | 0.82 ms | 34 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 8399   | 8399   | 11415   | 11583   | 11080.37 | 873.42 | 8397   | 121884  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.18 MB | 2.21 MB | 2.12 MB  | 167 kB | 1.6 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 5 ms  | 3.03 ms | 1.12 ms | 60 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12879   | 12879   | 24399   | 29151   | 22091.28 | 6724.32 | 12875   | 242999  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.15 MB | 3.76 MB | 2.85 MB  | 868 kB  | 1.66 MB | 31.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.42 ms | 1 ms  | 40 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2329   | 2329   | 6187   | 7335   | 5371.91 | 1755.59 | 2329   | 59089  |
| **Bytes/Sec** | 268 kB | 268 kB | 712 kB | 844 kB | 618 kB  | 202 kB  | 268 kB | 6.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 6.96 ms | 14.84 ms | 64 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2985   | 2985   | 3681   | 3801   | 3607.91 | 212.81  | 2985   | 39680   |
| **Bytes/Sec** | 469 kB | 469 kB | 578 kB | 597 kB | 566 kB  | 33.4 kB | 469 kB | 6.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 18 ms | 10.69 ms | 2.28 ms | 50 ms |


---

<p align="center">Generated 2021-12-15T00:52:15.691Z</p>
