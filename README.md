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
| deno | 42918.4 | 429167 |
| alosaur | 30431.2 | 304271 |
| deno_canary | 25880 | 258803 |
| oak | 25622.55 | 281835 |
| aqua | 22973.2 | 229763 |
| reno | 20653.6 | 206548 |
| fastify | 16636.6 | 166359 |
| little_std | 15531.2 | 155302 |
| node | 15525.6 | 155246 |
| abc | 15281.6 | 152815 |
| little_native | 11154.19 | 122692 |
| opine | 7518.5 | 75188 |
| express | 7418.5 | 74182 |
| dinatra | 5366.37 | 59026 |
| tinyhttp | 5312.5 | 53116 |
| servest | 3474.7 | 34742 |
| drash | 1269.8 | 12698 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11327   | 11327   | 15783   | 15887   | 15281.6 | 1330.86 | 11323   | 152815  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.47 MB | 1.48 MB | 1.42 MB | 124 kB  | 1.05 MB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.16 ms | 0.99 ms | 62 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20687   | 20687   | 32543  | 33247   | 30431.2 | 4449.23 | 20683   | 304271  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 2.9 MB | 2.96 MB | 2.71 MB | 396 kB  | 1.84 MB | 27.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.65 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13455   | 13455   | 24127   | 26911   | 22973.2 | 3637.95 | 13451   | 229763  |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 3.11 MB | 3.47 MB | 2.96 MB | 469 kB  | 1.74 MB | 29.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.7 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21871   | 21871   | 48447   | 49055   | 42918.4 | 9173.12 | 21870   | 429167  |
| **Bytes/Sec** | 1.95 MB | 1.95 MB | 4.31 MB | 4.37 MB | 3.82 MB | 816 kB  | 1.95 MB | 38.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.44 ms | 0.61 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 14295   | 14295   | 29327   | 30271  | 25880  | 6165.91 | 14289   | 258803 |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.61 MB | 2.7 MB | 2.3 MB | 549 kB  | 1.27 MB | 23 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 0.82 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ----- | ------ | ------- |
| **Req/Sec**   | 3781   | 3781   | 5975   | 6203   | 5366.37 | 942.4 | 3781   | 59026   |
| **Bytes/Sec** | 197 kB | 197 kB | 311 kB | 323 kB | 279 kB  | 49 kB | 197 kB | 3.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 13 ms | 6.97 ms | 2.94 ms | 52 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------ |
| **Req/Sec**   | 1152   | 1152   | 1277   | 1304   | 1269.8 | 40.78 | 1152   | 12698  |
| **Bytes/Sec** | 481 kB | 481 kB | 533 kB | 544 kB | 530 kB | 17 kB | 480 kB | 5.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 20 ms | 31 ms | 35 ms | 30.94 ms | 4.21 ms | 77 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 3841   | 3841   | 8063    | 9879    | 7418.5 | 2143.4 | 3841   | 74182 |
| **Bytes/Sec** | 830 kB | 830 kB | 1.74 MB | 2.13 MB | 1.6 MB | 463 kB | 830 kB | 16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 12 ms | 4.88 ms | 2.94 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7431    | 7431    | 17679   | 18175  | 16636.6 | 3090.27 | 7428    | 166359  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.72 MB | 2.8 MB | 2.56 MB | 476 kB  | 1.14 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.1 ms | 1.23 ms | 34 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 5303   | 5303   | 12711   | 12983   | 11154.19 | 2766.8 | 5301   | 122692  |
| **Bytes/Sec** | 684 kB | 684 kB | 1.64 MB | 1.67 MB | 1.44 MB  | 357 kB | 684 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.33 ms | 1.6 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8615    | 8615    | 16847   | 17727   | 15531.2 | 2878.42 | 8612    | 155302 |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.17 MB | 2.29 MB | 2 MB    | 371 kB  | 1.11 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.25 ms | 0.94 ms | 28 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9943    | 9943    | 16167   | 21503   | 15525.6 | 3595.71 | 9943    | 155246  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.81 MB | 2.41 MB | 1.74 MB | 402 kB  | 1.11 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.12 ms | 1.44 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16527   | 16527   | 28415   | 28831   | 25622.55 | 4871.51 | 16512   | 281835  |
| **Bytes/Sec** | 2.15 MB | 2.15 MB | 3.69 MB | 3.75 MB | 3.33 MB  | 633 kB  | 2.15 MB | 36.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.16 ms | 0.68 ms | 41 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3281   | 3281   | 8367   | 8551    | 7518.5  | 1670.48 | 3281   | 75188   |
| **Bytes/Sec** | 627 kB | 627 kB | 1.6 MB | 1.63 MB | 1.44 MB | 319 kB  | 627 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.77 ms | 2.36 ms | 67 ms |


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
| **Req/Sec**   | 11767   | 11767   | 23375   | 24255   | 20653.6 | 4407.35 | 11766   | 206548  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.01 MB | 3.13 MB | 2.66 MB | 569 kB  | 1.52 MB | 26.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.03 ms | 28 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 2799   | 2799   | 3295   | 4919   | 3474.7 | 595.88  | 2799   | 34742 |
| **Bytes/Sec** | 322 kB | 322 kB | 379 kB | 566 kB | 400 kB | 68.5 kB | 322 kB | 4 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 11.02 ms | 17.38 ms | 62 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3747   | 3747   | 5463   | 5767   | 5312.5 | 536.37  | 3747   | 53116   |
| **Bytes/Sec** | 588 kB | 588 kB | 858 kB | 906 kB | 834 kB | 84.3 kB | 588 kB | 8.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7.17 ms | 2.84 ms | 118 ms |


---

<p align="center">Generated 2022-02-09T00:58:02.927Z</p>
