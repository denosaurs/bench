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
| deno_canary | 37773.6 | 377696 |
| node | 35787.2 | 357880 |
| deno | 34688.81 | 346924 |
| alosaur | 33647.2 | 336447 |
| fastify | 32233.1 | 354550 |
| reno | 28485.46 | 313328 |
| oak | 25476.4 | 254786 |
| aqua | 20354.8 | 203537 |
| abc | 12016.8 | 120169 |
| opine | 10333.64 | 113671 |
| express | 8529.3 | 85289 |
| dinatra | 8325.28 | 91579 |
| little_std | 7980.6 | 79809 |
| little_native | 7317.46 | 80490 |
| tinyhttp | 5237.3 | 52373 |
| servest | 3174 | 31733 |
| drash | 1046 | 10460 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8759   | 8759   | 12391   | 12607   | 12016.8 | 1100.65 | 8759   | 120169  |
| **Bytes/Sec** | 815 kB | 815 kB | 1.15 MB | 1.17 MB | 1.12 MB | 102 kB  | 815 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.1 ms | 1.29 ms | 75 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18751   | 18751   | 37599   | 38271   | 33647.2 | 6216.87 | 18739   | 336447  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 3.35 MB | 3.41 MB | 2.99 MB | 554 kB  | 1.67 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.72 ms | 0.73 ms | 26 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11879   | 11879   | 22671   | 23119   | 20354.8 | 3622.57 | 11878   | 203537  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.92 MB | 2.98 MB | 2.63 MB | 467 kB  | 1.53 MB | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.36 ms | 0.93 ms | 34 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 16671   | 16671   | 36767   | 40319   | 34688.81 | 7217.6 | 16670   | 346924  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.27 MB | 3.59 MB | 3.09 MB  | 642 kB | 1.48 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.76 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 18559   | 18559   | 42847   | 43391   | 37773.6 | 7970.9 | 18552   | 377696  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 3.81 MB | 3.86 MB | 3.36 MB | 709 kB | 1.65 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.74 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5875   | 5875   | 8575   | 8879   | 8325.28 | 797.47  | 5873   | 91579   |
| **Bytes/Sec** | 305 kB | 305 kB | 446 kB | 462 kB | 433 kB  | 41.5 kB | 305 kB | 4.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.39 ms | 1.99 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 868    | 868    | 1071   | 1079   | 1046   | 61.35   | 868    | 10460   |
| **Bytes/Sec** | 362 kB | 362 kB | 447 kB | 450 kB | 436 kB | 25.6 kB | 362 kB | 4.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max    |
| ----------- | ----- | ----- | ----- | -------- | ----- | ------ |
| **Latency** | 25 ms | 38 ms | 44 ms | 37.66 ms | 12 ms | 394 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4015   | 4015   | 9103    | 9599    | 8529.3  | 1588.44 | 4015   | 85289   |
| **Bytes/Sec** | 867 kB | 867 kB | 1.97 MB | 2.07 MB | 1.84 MB | 343 kB  | 867 kB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.21 ms | 2.15 ms | 49 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16023   | 16023   | 34079   | 34527   | 32233.1 | 5168.55 | 16022   | 354550  |
| **Bytes/Sec** | 2.47 MB | 2.47 MB | 5.25 MB | 5.32 MB | 4.96 MB | 796 kB  | 2.47 MB | 54.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.78 ms | 0.92 ms | 25 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4375   | 4375   | 7987    | 8511   | 7317.46 | 1403.16 | 4372   | 80490   |
| **Bytes/Sec** | 564 kB | 564 kB | 1.03 MB | 1.1 MB | 944 kB  | 181 kB  | 564 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.9 ms | 1.96 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4983   | 4983   | 8647    | 9215    | 7980.6  | 1427.58 | 4980   | 79809   |
| **Bytes/Sec** | 643 kB | 643 kB | 1.12 MB | 1.19 MB | 1.03 MB | 184 kB  | 642 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.56 ms | 1.82 ms | 29 ms |


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
| **Req/Sec**   | 19391   | 19391   | 39135   | 41343   | 35787.2 | 7166.52 | 19386   | 357880  |
| **Bytes/Sec** | 2.17 MB | 2.17 MB | 4.38 MB | 4.63 MB | 4.01 MB | 802 kB  | 2.17 MB | 40.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.8 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13815  | 13815  | 28559   | 29279   | 25476.4 | 5394.68 | 13812  | 254786  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 3.71 MB | 3.81 MB | 3.31 MB | 701 kB  | 1.8 MB | 33.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.71 ms | 35 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7591    | 7591    | 10543   | 11807   | 10333.64 | 956.53 | 7590    | 113671  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.01 MB | 2.25 MB | 1.97 MB  | 183 kB | 1.45 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.47 ms | 1.22 ms | 54 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13919  | 13919  | 31551   | 32399   | 28485.46 | 5559.23 | 13914   | 313328  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 4.07 MB | 4.18 MB | 3.67 MB  | 717 kB  | 1.79 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.11 ms | 0.56 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2589   | 2589   | 3057   | 3719   | 3174   | 319.79  | 2588   | 31733   |
| **Bytes/Sec** | 298 kB | 298 kB | 351 kB | 428 kB | 365 kB | 36.8 kB | 298 kB | 3.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max   |
| ----------- | ----- | ----- | ----- | -------- | ----- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.08 ms | 18 ms | 86 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3795   | 3795   | 5359   | 5655   | 5237.3 | 493.6   | 3795   | 52373   |
| **Bytes/Sec** | 596 kB | 596 kB | 842 kB | 888 kB | 822 kB | 77.5 kB | 596 kB | 8.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.25 ms | 2.72 ms | 83 ms |


---

<p align="center">Generated 2021-12-28T00:53:44.325Z</p>
