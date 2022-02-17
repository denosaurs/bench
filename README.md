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
  - [deco](#deco)
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
| deco | 41464.81 | 414641 |
| fastify | 40360.81 | 403649 |
| deno | 32762.4 | 327567 |
| node | 28672.4 | 286699 |
| oak | 25548.73 | 281054 |
| alosaur | 20289.6 | 202883 |
| aqua | 19957.46 | 219537 |
| deno_canary | 19706.41 | 197040 |
| reno | 16360 | 163599 |
| little_std | 15530.91 | 170835 |
| abc | 14575.64 | 160321 |
| express | 14283.28 | 157105 |
| little_native | 11948.6 | 119491 |
| opine | 9519.4 | 95190 |
| dinatra | 9250.73 | 101746 |
| tinyhttp | 3319.2 | 33189 |
| servest | 3103.55 | 34135 |
| drash | 1262.5 | 12625 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11351   | 11351   | 14975   | 15071  | 14575.64 | 1042.06 | 11347   | 160321  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.39 MB | 1.4 MB | 1.36 MB  | 96.9 kB | 1.06 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.94 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10303  | 10303  | 23967   | 25439   | 20289.6 | 5726.1 | 10300  | 202883  |
| **Bytes/Sec** | 917 kB | 917 kB | 2.13 MB | 2.26 MB | 1.81 MB | 509 kB | 917 kB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.27 ms | 36 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12311   | 12311   | 22031   | 22623   | 19957.46 | 3662.57 | 12309   | 219537  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.84 MB | 2.92 MB | 2.57 MB  | 473 kB  | 1.59 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.85 ms | 24 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31855   | 31855   | 43647   | 43839   | 41464.81 | 4322.38 | 31844   | 414641  |
| **Bytes/Sec** | 4.11 MB | 4.11 MB | 5.63 MB | 5.66 MB | 5.35 MB  | 558 kB  | 4.11 MB | 53.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.13 ms | 0.54 ms | 30 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17103   | 17103   | 37823   | 38335   | 32762.4 | 8392.82 | 17092   | 327567  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.36 MB | 3.41 MB | 2.92 MB | 747 kB  | 1.52 MB | 29.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.85 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9567   | 9567   | 21343  | 24623   | 19706.41 | 5427.04 | 9560   | 197040  |
| **Bytes/Sec** | 851 kB | 851 kB | 1.9 MB | 2.19 MB | 1.75 MB  | 483 kB  | 851 kB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.58 ms | 1.23 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7191   | 7191   | 9487   | 9727   | 9250.73 | 676.72  | 7189   | 101746  |
| **Bytes/Sec** | 374 kB | 374 kB | 494 kB | 506 kB | 481 kB  | 35.2 kB | 374 kB | 5.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.59 ms | 2.3 ms | 59 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1146   | 1146   | 1276   | 1294   | 1262.5 | 40.99   | 1146   | 12625   |
| **Bytes/Sec** | 478 kB | 478 kB | 532 kB | 540 kB | 526 kB | 17.1 kB | 478 kB | 5.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 20 ms | 32 ms | 35 ms | 31.13 ms | 7.16 ms | 269 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7211    | 7211    | 15759  | 16879   | 14283.28 | 3384.49 | 7209    | 157105  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.4 MB | 3.64 MB | 3.08 MB  | 731 kB  | 1.56 MB | 33.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.38 ms | 1.34 ms | 35 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24175   | 24175   | 42111   | 42559   | 40360.81 | 5404.79 | 24169   | 403649  |
| **Bytes/Sec** | 3.72 MB | 3.72 MB | 6.48 MB | 6.56 MB | 6.22 MB  | 833 kB  | 3.72 MB | 62.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.25 ms | 0.69 ms | 23 ms |


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
| **Req/Sec**   | 7603   | 7603   | 12535   | 17039  | 11948.6 | 3429.55 | 7600   | 119491  |
| **Bytes/Sec** | 980 kB | 980 kB | 1.62 MB | 2.2 MB | 1.54 MB | 443 kB  | 980 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.84 ms | 1.44 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 8407    | 8407    | 17455   | 17647   | 15530.91 | 3022.75 | 8403    | 170835 |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 2.25 MB | 2.28 MB | 2 MB     | 390 kB  | 1.08 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.25 ms | 0.9 ms | 20 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16095  | 16095  | 32799   | 35263   | 28672.4 | 7433.76 | 16092  | 286699  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 3.67 MB | 3.95 MB | 3.21 MB | 832 kB  | 1.8 MB | 32.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.86 ms | 1.02 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14015   | 14015   | 28335   | 28799   | 25548.73 | 4990.59 | 14011   | 281054  |
| **Bytes/Sec** | 1.82 MB | 1.82 MB | 3.68 MB | 3.74 MB | 3.32 MB  | 649 kB  | 1.82 MB | 36.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.7 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7055    | 7055    | 9855    | 9911    | 9519.4  | 834.89 | 7053    | 95190   |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 1.88 MB | 1.89 MB | 1.82 MB | 159 kB | 1.35 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.8 ms | 1.24 ms | 34 ms |


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
| **Req/Sec**   | 9127    | 9127    | 19087   | 20223   | 16360   | 4336.85 | 9124    | 163599  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 2.46 MB | 2.61 MB | 2.11 MB | 559 kB  | 1.18 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.85 ms | 1.61 ms | 33 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2417   | 2417   | 3225   | 3459   | 3103.55 | 337.93  | 2417   | 34135   |
| **Bytes/Sec** | 278 kB | 278 kB | 371 kB | 398 kB | 357 kB  | 38.9 kB | 278 kB | 3.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.38 ms | 18.08 ms | 86 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2437   | 2437   | 3419   | 3607   | 3319.2 | 319     | 2437   | 33189   |
| **Bytes/Sec** | 383 kB | 383 kB | 537 kB | 567 kB | 521 kB | 50.1 kB | 383 kB | 5.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 7 ms  | 10 ms | 22 ms | 11.57 ms | 4.75 ms | 165 ms |


---

<p align="center">Generated 2022-02-17T00:33:10.634Z</p>
