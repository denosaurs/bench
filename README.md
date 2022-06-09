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
| alosaur | 38164 | 381612 |
| fastify | 36054.55 | 396635 |
| deno | 31818 | 318165 |
| reno | 27740.8 | 277373 |
| drash | 26059.6 | 260608 |
| aqua | 24084.73 | 264941 |
| deno_canary | 22566 | 225656 |
| node | 20434.8 | 204359 |
| oak | 18574.8 | 185721 |
| abc | 17156 | 188711 |
| little_native | 15605.6 | 156037 |
| express | 15370.73 | 169089 |
| dinatra | 13837.6 | 138372 |
| little_std | 11880.55 | 130686 |
| opine | 9202.21 | 92008 |
| mandarinets | 6522.3 | 65212 |
| servest | 4407.11 | 44066 |
| tinyhttp | 3906.9 | 39065 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- |
| **Req/Sec**   | 12671   | 12671   | 17711   | 18079   | 17156  | 1462.92 | 12664   | 188711  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.65 MB | 1.68 MB | 1.6 MB | 136 kB  | 1.18 MB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.88 ms | 61 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 28639   | 28639   | 39423   | 39679   | 38164   | 3235.65 | 28631   | 381612  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 4.42 MB | 4.44 MB | 4.27 MB | 363 kB  | 3.21 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.22 ms | 0.65 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 14487  | 14487  | 26719   | 27167   | 24084.73 | 4039.2 | 14484  | 264941  |
| **Bytes/Sec** | 2.2 MB | 2.2 MB | 4.06 MB | 4.13 MB | 3.66 MB  | 614 kB | 2.2 MB | 40.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.18 ms | 0.62 ms | 22 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14799   | 14799   | 36799   | 37663   | 31818   | 7617.49 | 14792   | 318165  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 4.12 MB | 4.22 MB | 3.56 MB | 853 kB  | 1.66 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.51 ms | 0.92 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15015   | 15015   | 23599   | 24479   | 22566   | 2697.05 | 15010   | 225656  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.64 MB | 2.74 MB | 2.53 MB | 302 kB  | 1.68 MB | 25.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.91 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 10687  | 10687  | 14231  | 14455  | 13837.6 | 1076.53 | 10687  | 138372 |
| **Bytes/Sec** | 556 kB | 556 kB | 740 kB | 752 kB | 720 kB  | 55.9 kB | 556 kB | 7.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.28 ms | 1.3 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 14895   | 14895   | 28351   | 30975   | 26059.6 | 5345.49 | 14889   | 260608 |
| **Bytes/Sec** | 2.06 MB | 2.06 MB | 3.91 MB | 4.28 MB | 3.6 MB  | 738 kB  | 2.05 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.82 ms | 43 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6643    | 6643    | 16351   | 16671  | 15370.73 | 2796.13 | 6643    | 169089  |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 3.53 MB | 3.6 MB | 3.32 MB  | 604 kB  | 1.43 MB | 36.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.19 ms | 1.12 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20415   | 20415   | 37791   | 38271   | 36054.55 | 5003.81 | 20415   | 396635  |
| **Bytes/Sec** | 3.15 MB | 3.15 MB | 5.82 MB | 5.89 MB | 5.55 MB  | 770 kB  | 3.14 MB | 61.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 0.79 ms | 20 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11351   | 11351   | 16039   | 16327   | 15605.6 | 1425.15 | 11348   | 156037  |
| **Bytes/Sec** | 1.73 MB | 1.73 MB | 2.44 MB | 2.48 MB | 2.37 MB | 217 kB  | 1.72 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.75 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 8167    | 8167    | 12271   | 12487  | 11880.55 | 1181.6 | 8166    | 130686  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.86 MB | 1.9 MB | 1.81 MB  | 179 kB | 1.24 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.07 ms | 0.88 ms | 27 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3917   | 3917   | 7223   | 7751   | 6522.3 | 1412.32 | 3917   | 65212   |
| **Bytes/Sec** | 364 kB | 364 kB | 672 kB | 721 kB | 607 kB | 131 kB  | 364 kB | 6.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.63 ms | 3.01 ms | 139 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9847   | 9847   | 21775   | 22607   | 20434.8 | 3602.28 | 9845   | 204359  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.44 MB | 2.53 MB | 2.29 MB | 404 kB  | 1.1 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.45 ms | 1.16 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12223   | 12223   | 19567   | 19855   | 18574.8 | 2220.93 | 12222   | 185721  |
| **Bytes/Sec** | 1.87 MB | 1.87 MB | 2.99 MB | 3.04 MB | 2.84 MB | 339 kB  | 1.87 MB | 28.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.11 ms | 45 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6627    | 6627    | 9463    | 9679    | 9202.21 | 871.71 | 6625    | 92008   |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.03 MB | 2.07 MB | 1.97 MB | 187 kB | 1.42 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 6 ms  | 3.91 ms | 1.39 ms | 39 ms |


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
| **Req/Sec**   | 18815   | 18815   | 28735   | 29007   | 27740.8 | 2993.64 | 18807   | 277373  |
| **Bytes/Sec** | 2.86 MB | 2.86 MB | 4.37 MB | 4.41 MB | 4.22 MB | 455 kB  | 2.86 MB | 42.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.08 ms | 0.59 ms | 26 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3177   | 3177   | 3777   | 5811   | 4407.11 | 981.51 | 3176   | 44066   |
| **Bytes/Sec** | 365 kB | 365 kB | 434 kB | 669 kB | 507 kB  | 113 kB | 365 kB | 5.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.57 ms | 16.04 ms | 62 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2839   | 2839   | 4009   | 4151   | 3906.9 | 374.87  | 2839   | 39065   |
| **Bytes/Sec** | 446 kB | 446 kB | 630 kB | 652 kB | 613 kB | 58.8 kB | 446 kB | 6.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 20 ms | 9.73 ms | 3.42 ms | 121 ms |


---

<p align="center">Generated 2022-06-09T01:22:32.773Z</p>
