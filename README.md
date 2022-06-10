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
| deno_canary | 43840 | 438419 |
| node | 42157.6 | 421573 |
| fastify | 37620 | 376177 |
| reno | 31132.73 | 342438 |
| deno | 23027.2 | 230243 |
| alosaur | 20183.6 | 201821 |
| aqua | 19757.1 | 217322 |
| drash | 19605.2 | 196045 |
| oak | 19006.8 | 190063 |
| abc | 16766.8 | 167683 |
| express | 16629.2 | 166287 |
| little_std | 13960.37 | 153558 |
| little_native | 10293.28 | 113218 |
| mandarinets | 8301.8 | 83012 |
| opine | 6700 | 66989 |
| dinatra | 6297.2 | 62972 |
| servest | 3420 | 34194 |
| http | 0 | 0 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12575   | 12575   | 17103   | 17887   | 16766.8 | 1417.55 | 12574   | 167683  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.59 MB | 1.66 MB | 1.56 MB | 132 kB  | 1.17 MB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.89 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10879   | 10879   | 22223   | 24831   | 20183.6 | 4518.51 | 10875   | 201821  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 2.49 MB | 2.78 MB | 2.26 MB | 506 kB  | 1.22 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.56 ms | 1.2 ms | 34 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10775   | 10775   | 21935   | 22767   | 19757.1 | 3717.98 | 10768   | 217322 |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.33 MB | 3.46 MB | 3 MB    | 565 kB  | 1.64 MB | 33 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.37 ms | 0.92 ms | 26 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18031   | 18031   | 23279   | 25215   | 23027.2 | 1951.56 | 18018   | 230243  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 2.61 MB | 2.82 MB | 2.58 MB | 219 kB  | 2.02 MB | 25.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.79 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 33887   | 33887   | 43711   | 47807   | 43840   | 4099.14 | 33882   | 438419  |
| **Bytes/Sec** | 3.79 MB | 3.79 MB | 4.89 MB | 5.35 MB | 4.91 MB | 459 kB  | 3.79 MB | 49.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.62 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4839   | 4839   | 6431   | 6647   | 6297.2 | 507.84  | 4839   | 62972   |
| **Bytes/Sec** | 252 kB | 252 kB | 335 kB | 346 kB | 327 kB | 26.4 kB | 252 kB | 3.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.78 ms | 2.2 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13055  | 13055  | 20511   | 20975   | 19605.2 | 2277.65 | 13053  | 196045  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.83 MB | 2.89 MB | 2.71 MB | 314 kB  | 1.8 MB | 27.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.54 ms | 1.2 ms | 53 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8255    | 8255    | 18623   | 19823   | 16629.2 | 4029.55 | 8252    | 166287  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 4.02 MB | 4.28 MB | 3.59 MB | 871 kB  | 1.78 MB | 35.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.83 ms | 1.23 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20863   | 20863   | 43807   | 44415   | 37620   | 9706.95 | 20854   | 376177  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 6.75 MB | 6.84 MB | 5.79 MB | 1.49 MB | 3.21 MB | 57.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.79 ms | 19 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7819    | 7819    | 10575   | 10967   | 10293.28 | 862.25 | 7819    | 113218  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 1.61 MB | 1.67 MB | 1.56 MB  | 131 kB | 1.19 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.31 ms | 1.04 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8351    | 8351    | 15495   | 15695   | 13960.37 | 2693.56 | 8345    | 153558  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.36 MB | 2.39 MB | 2.12 MB  | 409 kB  | 1.27 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.04 ms | 20 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4583   | 4583   | 8743   | 8919   | 8301.8 | 1249.28 | 4581   | 83012   |
| **Bytes/Sec** | 426 kB | 426 kB | 813 kB | 829 kB | 772 kB | 116 kB  | 426 kB | 7.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.39 ms | 1.69 ms | 35 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 22607   | 22607   | 46175   | 49727   | 42157.6 | 10074.13 | 22604   | 421573  |
| **Bytes/Sec** | 2.53 MB | 2.53 MB | 5.17 MB | 5.57 MB | 4.72 MB | 1.13 MB  | 2.53 MB | 47.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.72 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11047   | 11047   | 22127   | 22687   | 19006.8 | 4639.68 | 11045   | 190063  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.39 MB | 3.47 MB | 2.91 MB | 710 kB  | 1.69 MB | 29.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.48 ms | 1.16 ms | 58 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5079    | 5079    | 6807    | 7139    | 6700    | 560.75 | 5077    | 66989   |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.46 MB | 1.53 MB | 1.43 MB | 120 kB | 1.09 MB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.47 ms | 1.65 ms | 52 ms |


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
| **Req/Sec**   | 16279   | 16279   | 35487   | 35999   | 31132.73 | 6518.88 | 16278   | 342438  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 5.39 MB | 5.47 MB | 4.73 MB  | 991 kB  | 2.47 MB | 52.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.1 ms | 0.56 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2455   | 2455   | 3479   | 3879   | 3420   | 393.98  | 2454   | 34194   |
| **Bytes/Sec** | 282 kB | 282 kB | 400 kB | 446 kB | 393 kB | 45.4 kB | 282 kB | 3.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.21 ms | 17.47 ms | 84 ms |


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

<p align="center">Generated 2022-06-10T01:28:08.271Z</p>
