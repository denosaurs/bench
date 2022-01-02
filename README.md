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
| deno_canary | 38284.37 | 421165 |
| node | 36360.81 | 363607 |
| fastify | 33623.64 | 369856 |
| alosaur | 33439.28 | 367800 |
| reno | 27697.6 | 276992 |
| aqua | 22538.91 | 247910 |
| deno | 20586 | 205871 |
| oak | 17457.2 | 174561 |
| little_native | 13693.28 | 150605 |
| abc | 13367.64 | 147037 |
| express | 12967.82 | 142633 |
| little_std | 11165.46 | 122812 |
| dinatra | 9706.37 | 106764 |
| opine | 7535.9 | 75354 |
| tinyhttp | 5376.5 | 53755 |
| servest | 3584.82 | 39425 |
| drash | 1495 | 14950 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 9471   | 9471   | 13743   | 14191   | 13367.64 | 1251.3 | 9471   | 147037  |
| **Bytes/Sec** | 881 kB | 881 kB | 1.28 MB | 1.32 MB | 1.24 MB  | 116 kB | 881 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.4 ms | 1.23 ms | 66 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18479   | 18479   | 36991   | 38143   | 33439.28 | 6304.55 | 18464   | 367800  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.29 MB | 3.39 MB | 2.98 MB  | 561 kB  | 1.64 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.81 ms | 0.71 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total  |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------ |
| **Req/Sec**   | 15495 | 15495 | 23551   | 26575   | 22538.91 | 3725.01 | 15493 | 247910 |
| **Bytes/Sec** | 2 MB  | 2 MB  | 3.04 MB | 3.43 MB | 2.91 MB  | 481 kB  | 2 MB  | 32 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.63 ms | 19 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8879   | 8879   | 24047   | 25439   | 20586   | 6322.51 | 8874   | 205871  |
| **Bytes/Sec** | 790 kB | 790 kB | 2.14 MB | 2.27 MB | 1.83 MB | 563 kB  | 790 kB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.31 ms | 34 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21663   | 21663   | 43071   | 43615   | 38284.37 | 8233.02 | 21656   | 421165  |
| **Bytes/Sec** | 1.93 MB | 1.93 MB | 3.83 MB | 3.88 MB | 3.41 MB  | 733 kB  | 1.93 MB | 37.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.69 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7643   | 7643   | 9975   | 10183  | 9706.37 | 690.06  | 7641   | 106764  |
| **Bytes/Sec** | 398 kB | 398 kB | 519 kB | 530 kB | 505 kB  | 35.9 kB | 397 kB | 5.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.43 ms | 1.9 ms | 57 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1356   | 1356   | 1511   | 1531   | 1495   | 48.27   | 1356   | 14950   |
| **Bytes/Sec** | 566 kB | 566 kB | 630 kB | 638 kB | 623 kB | 20.1 kB | 565 kB | 6.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 18 ms | 26 ms | 29 ms | 26.25 ms | 5.62 ms | 228 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5783    | 5783    | 14415   | 14727   | 12967.82 | 2622.73 | 5781    | 142633  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 3.12 MB | 3.18 MB | 2.8 MB   | 567 kB  | 1.25 MB | 30.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.48 ms | 1.52 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 15207   | 15207   | 35487   | 36191   | 33623.64 | 5835.55 | 15201   | 369856 |
| **Bytes/Sec** | 2.34 MB | 2.34 MB | 5.46 MB | 5.57 MB | 5.18 MB  | 899 kB  | 2.34 MB | 57 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.93 ms | 37 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5% | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ----- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7059   | 7059   | 15183   | 15527 | 13693.28 | 2589.44 | 7059   | 150605  |
| **Bytes/Sec** | 911 kB | 911 kB | 1.96 MB | 2 MB  | 1.77 MB  | 334 kB  | 911 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.11 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6063   | 6063   | 12271   | 13535   | 11165.46 | 2592.13 | 6060   | 122812  |
| **Bytes/Sec** | 782 kB | 782 kB | 1.58 MB | 1.75 MB | 1.44 MB  | 334 kB  | 782 kB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.02 ms | 1.76 ms | 46 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19535   | 19535   | 41439   | 41983  | 36360.81 | 8337.94 | 19522   | 363607  |
| **Bytes/Sec** | 2.19 MB | 2.19 MB | 4.64 MB | 4.7 MB | 4.07 MB  | 934 kB  | 2.19 MB | 40.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.78 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8575    | 8575    | 19087   | 21151   | 17457.2 | 4301.96 | 8575    | 174561  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.48 MB | 2.75 MB | 2.27 MB | 559 kB  | 1.11 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.8 ms | 1.4 ms | 38 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 1261   | 1261   | 8271    | 8671    | 7535.9  | 2130.4 | 1261   | 75354   |
| **Bytes/Sec** | 241 kB | 241 kB | 1.58 MB | 1.66 MB | 1.44 MB | 407 kB | 241 kB | 14.4 MB |


| **Stat**    | 2.5%   | 50%    | 95.5%  | Avg       | Stdev    | Max    |
| ----------- | ------ | ------ | ------ | --------- | -------- | ------ |
| **Latency** | 348 ms | 371 ms | 613 ms | 389.36 ms | 59.42 ms | 762 ms |


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
| **Req/Sec**   | 19231   | 19231   | 28607   | 28975   | 27697.6 | 2829.82 | 19229   | 276992  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 3.69 MB | 3.74 MB | 3.57 MB | 365 kB  | 2.48 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.07 ms | 0.54 ms | 23 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2589   | 2589   | 3727   | 4315   | 3584.82 | 577.33  | 2589   | 39425   |
| **Bytes/Sec** | 298 kB | 298 kB | 429 kB | 496 kB | 412 kB  | 66.3 kB | 298 kB | 4.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.68 ms | 17.27 ms | 70 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4071   | 4071   | 5495   | 5799   | 5376.5 | 494.3   | 4070   | 53755   |
| **Bytes/Sec** | 639 kB | 639 kB | 863 kB | 910 kB | 844 kB | 77.5 kB | 639 kB | 8.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 6.93 ms | 2.67 ms | 31 ms |


---

<p align="center">Generated 2022-01-02T00:56:48.523Z</p>
