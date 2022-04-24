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
| deno_canary | 37828.81 | 378338 |
| alosaur | 35624.81 | 356245 |
| deno | 32627.2 | 326283 |
| node | 31522.4 | 315182 |
| oak | 27899.28 | 306891 |
| reno | 22362.91 | 245989 |
| aqua | 21174.19 | 232896 |
| fastify | 17234.2 | 172332 |
| abc | 14684 | 146841 |
| express | 12984.91 | 142833 |
| little_std | 12872.91 | 141600 |
| little_native | 12623.2 | 126219 |
| dinatra | 10394.73 | 114342 |
| opine | 9438.6 | 94375 |
| tinyhttp | 5236.2 | 52359 |
| drash | 1279.41 | 12794 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |
| servest | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11031   | 11031   | 14919   | 16207   | 14684   | 1280.08 | 11031   | 146841  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.39 MB | 1.51 MB | 1.37 MB | 119 kB  | 1.03 MB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 1.06 ms | 57 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19695   | 19695   | 39295  | 39775   | 35624.81 | 6526.23 | 19685  | 356245  |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 4.4 MB | 4.46 MB | 3.99 MB  | 731 kB  | 2.2 MB | 39.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.76 ms | 32 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12599   | 12599   | 23183   | 23679  | 21174.19 | 3441.15 | 12592   | 232896  |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 3.52 MB | 3.6 MB | 3.22 MB  | 523 kB  | 1.91 MB | 35.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.31 ms | 0.84 ms | 25 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15887   | 15887   | 37759   | 39391   | 32627.2 | 9208.54 | 15881   | 326283  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 4.23 MB | 4.41 MB | 3.65 MB | 1.03 MB | 1.78 MB | 36.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.51 ms | 0.95 ms | 28 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18015   | 18015   | 40223   | 43583   | 37828.81 | 7744.44 | 18007   | 378338  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 4.51 MB | 4.88 MB | 4.24 MB  | 868 kB  | 2.02 MB | 42.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.74 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8151   | 8151   | 10631  | 11039  | 10394.73 | 751.64  | 8148   | 114342  |
| **Bytes/Sec** | 424 kB | 424 kB | 553 kB | 574 kB | 540 kB   | 39.1 kB | 424 kB | 5.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.35 ms | 1.69 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1168   | 1168   | 1295   | 1301   | 1279.41 | 38.32   | 1168   | 12794   |
| **Bytes/Sec** | 514 kB | 514 kB | 570 kB | 573 kB | 563 kB  | 16.9 kB | 514 kB | 5.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 21 ms | 31 ms | 35 ms | 30.76 ms | 7.09 ms | 269 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5275    | 5275    | 13711   | 14495   | 12984.91 | 2519.35 | 5272    | 142833  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.96 MB | 3.13 MB | 2.8 MB   | 544 kB  | 1.14 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.5 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7343    | 7343    | 18063   | 19087   | 17234.2 | 3323.77 | 7343    | 172332  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 2.78 MB | 2.94 MB | 2.65 MB | 512 kB  | 1.13 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.82 ms | 1.32 ms | 28 ms |


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
| **Req/Sec**   | 9607    | 9607    | 13103   | 13503   | 12623.2 | 1146.89 | 9600    | 126219  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 1.99 MB | 2.05 MB | 1.92 MB | 174 kB  | 1.46 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.76 ms | 1 ms  | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7155    | 7155    | 14343   | 14487  | 12872.91 | 2509.72 | 7155    | 141600  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 2.18 MB | 2.2 MB | 1.96 MB  | 381 kB  | 1.09 MB | 21.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.41 ms | 1.12 ms | 24 ms |


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
| **Req/Sec**   | 17583   | 17583   | 36511   | 37375   | 31522.4 | 7766.56 | 17572   | 315182  |
| **Bytes/Sec** | 1.97 MB | 1.97 MB | 4.09 MB | 4.19 MB | 3.53 MB | 870 kB  | 1.97 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.59 ms | 0.98 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 15551   | 15551   | 29711   | 30431   | 27899.28 | 4381.8 | 15544   | 306891 |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 4.55 MB | 4.66 MB | 4.27 MB  | 670 kB | 2.38 MB | 47 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.91 ms | 0.76 ms | 35 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7071    | 7071    | 9687    | 9991    | 9438.6  | 831.37 | 7071    | 94375   |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 2.07 MB | 2.14 MB | 2.02 MB | 178 kB | 1.51 MB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 6 ms  | 3.83 ms | 1.37 ms | 64 ms |


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
| **Req/Sec**   | 12087   | 12087   | 25167   | 26815   | 22362.91 | 4965.29 | 12084   | 245989  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.83 MB | 4.08 MB | 3.4 MB   | 755 kB  | 1.84 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.38 ms | 1.06 ms | 32 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3233   | 3233   | 5687   | 5931   | 5236.2 | 946.08 | 3232   | 52359   |
| **Bytes/Sec** | 508 kB | 508 kB | 893 kB | 931 kB | 822 kB | 148 kB | 507 kB | 8.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 7.13 ms | 3.39 ms | 92 ms |


---

<p align="center">Generated 2022-04-24T01:15:34.695Z</p>
