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
| deno | 37365.6 | 373616 |
| drash | 35525.1 | 390763 |
| fastify | 33068 | 330663 |
| alosaur | 32624 | 326261 |
| reno | 31958.4 | 319576 |
| node | 28694.8 | 286960 |
| oak | 23631.64 | 259948 |
| aqua | 22935.28 | 252313 |
| deno_canary | 22091.6 | 220917 |
| abc | 17262.19 | 189871 |
| little_native | 16142.91 | 177579 |
| little_std | 13348 | 133482 |
| mandarinets | 10274.21 | 102737 |
| opine | 9743.82 | 107168 |
| dinatra | 9360.91 | 102963 |
| express | 8774.8 | 87731 |
| tinyhttp | 5909.28 | 64994 |
| servest | 4300.28 | 47297 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12639   | 12639   | 17775   | 18063   | 17262.19 | 1488.11 | 12632   | 189871  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.65 MB | 1.68 MB | 1.61 MB  | 138 kB  | 1.17 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.87 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23391   | 23391   | 33791   | 34207   | 32624   | 3155.78 | 23379   | 326261  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 3.78 MB | 3.83 MB | 3.65 MB | 354 kB  | 2.62 MB | 36.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.62 ms | 40 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14087   | 14087   | 25423   | 25631  | 22935.28 | 4263.18 | 14086   | 252313  |
| **Bytes/Sec** | 2.14 MB | 2.14 MB | 3.86 MB | 3.9 MB | 3.49 MB  | 648 kB  | 2.14 MB | 38.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.7 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19999   | 19999   | 42911  | 43487   | 37365.6 | 9253.89 | 19995   | 373616  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 4.8 MB | 4.87 MB | 4.18 MB | 1.04 MB | 2.24 MB | 41.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.75 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14591   | 14591   | 22911   | 23807   | 22091.6 | 2580.58 | 14586   | 220917  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 2.57 MB | 2.67 MB | 2.47 MB | 289 kB  | 1.63 MB | 24.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 0.98 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5251   | 5251   | 10655  | 11071  | 9360.91 | 2169.62 | 5250   | 102963  |
| **Bytes/Sec** | 273 kB | 273 kB | 554 kB | 576 kB | 487 kB  | 113 kB  | 273 kB | 5.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.81 ms | 2.37 ms | 63 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26207   | 26207   | 36447   | 36895   | 35525.1 | 2961.95 | 26195   | 390763  |
| **Bytes/Sec** | 3.62 MB | 3.62 MB | 5.03 MB | 5.09 MB | 4.9 MB  | 409 kB  | 3.61 MB | 53.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 1 ms  | 0.95 ms | 0.51 ms | 33 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 9231    | 9631    | 8774.8  | 1522.34 | 4390   | 87731   |
| **Bytes/Sec** | 949 kB | 949 kB | 1.99 MB | 2.08 MB | 1.89 MB | 329 kB  | 948 kB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.09 ms | 1.78 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19087   | 19087   | 37311   | 39199   | 33068   | 7868.11 | 19077   | 330663  |
| **Bytes/Sec** | 2.94 MB | 2.94 MB | 5.75 MB | 6.04 MB | 5.09 MB | 1.21 MB | 2.94 MB | 50.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.49 ms | 0.96 ms | 20 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11135   | 11135   | 16655   | 16959   | 16142.91 | 1601.29 | 11132   | 177579 |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 2.53 MB | 2.58 MB | 2.45 MB  | 243 kB  | 1.69 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.07 ms | 0.69 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9375    | 9375    | 13799  | 13999   | 13348   | 1334.54 | 9373    | 133482  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.1 MB | 2.13 MB | 2.03 MB | 203 kB  | 1.42 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1 ms  | 24 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6491   | 6491   | 10695  | 10863   | 10274.21 | 1266.16 | 6490   | 102737  |
| **Bytes/Sec** | 604 kB | 604 kB | 995 kB | 1.01 MB | 955 kB   | 118 kB  | 604 kB | 9.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.31 ms | 1.48 ms | 110 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15647   | 15647   | 32207   | 35903   | 28694.8 | 6821.39 | 15647   | 286960  |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 3.61 MB | 4.02 MB | 3.21 MB | 764 kB  | 1.75 MB | 32.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.92 ms | 1.06 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15903   | 15903   | 24527   | 25119   | 23631.64 | 2487.01 | 15899   | 259948  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 3.75 MB | 3.84 MB | 3.62 MB  | 381 kB  | 2.43 MB | 39.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.76 ms | 33 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7183    | 7183    | 10071   | 10223   | 9743.82 | 837.27 | 7181    | 107168  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.15 MB | 2.19 MB | 2.08 MB | 179 kB | 1.54 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.74 ms | 1.27 ms | 44 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24191   | 24191   | 33567  | 33983   | 31958.4 | 3347.34 | 24190   | 319576  |
| **Bytes/Sec** | 3.68 MB | 3.68 MB | 5.1 MB | 5.17 MB | 4.86 MB | 509 kB  | 3.68 MB | 48.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.52 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3197   | 3197   | 4107   | 5519   | 4300.28 | 867.06  | 3196   | 47297   |
| **Bytes/Sec** | 368 kB | 368 kB | 472 kB | 635 kB | 494 kB  | 99.7 kB | 368 kB | 5.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.81 ms | 16.15 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4455   | 4455   | 6043   | 6239   | 5909.28 | 466.57  | 4453   | 64994   |
| **Bytes/Sec** | 699 kB | 699 kB | 949 kB | 979 kB | 928 kB  | 73.2 kB | 699 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 14 ms | 6.39 ms | 2.18 ms | 63 ms |


---

<p align="center">Generated 2022-06-01T01:50:06.295Z</p>
