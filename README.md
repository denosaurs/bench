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
| alosaur | 42973.6 | 429703 |
| node | 37479.2 | 374768 |
| drash | 34828.37 | 383102 |
| deno_canary | 33818.91 | 372032 |
| reno | 29680.8 | 296813 |
| aqua | 22246.8 | 222457 |
| deno | 21657.2 | 216596 |
| little_std | 17847.6 | 178464 |
| oak | 17654 | 176540 |
| abc | 17041.82 | 187429 |
| fastify | 15111 | 166201 |
| little_native | 13960.91 | 153565 |
| dinatra | 12245.6 | 122457 |
| opine | 10594.6 | 105944 |
| mandarinets | 9759.4 | 97594 |
| express | 8395.19 | 92347 |
| tinyhttp | 5286.3 | 52855 |
| servest | 4352.82 | 47873 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 12727   | 12727   | 17503   | 17663   | 17041.82 | 1379.9 | 12722   | 187429  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.63 MB | 1.64 MB | 1.58 MB  | 128 kB | 1.18 MB | 17.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.1 ms | 0.84 ms | 63 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32095   | 32095   | 44255   | 44575   | 42973.6 | 3654.88 | 32087   | 429703  |
| **Bytes/Sec** | 3.59 MB | 3.59 MB | 4.96 MB | 4.99 MB | 4.81 MB | 410 kB  | 3.59 MB | 48.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.12 ms | 0.53 ms | 26 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12655   | 12655   | 24815   | 25039   | 22246.8 | 4035.9 | 12650   | 222457  |
| **Bytes/Sec** | 1.92 MB | 1.92 MB | 3.77 MB | 3.81 MB | 3.38 MB | 614 kB | 1.92 MB | 33.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.84 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14855   | 14855   | 22271   | 22879   | 21657.2 | 2284.96 | 14852   | 216596  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.49 MB | 2.56 MB | 2.43 MB | 256 kB  | 1.66 MB | 24.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.91 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 23407   | 23407   | 35519   | 35871   | 33818.91 | 3461.73 | 23405   | 372032  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 3.98 MB | 4.02 MB | 3.79 MB  | 388 kB  | 2.62 MB | 41.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.76 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9559   | 9559   | 12543  | 12719  | 12245.6 | 904.41 | 9559   | 122457  |
| **Bytes/Sec** | 497 kB | 497 kB | 652 kB | 662 kB | 637 kB  | 47 kB  | 497 kB | 6.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.58 ms | 1.34 ms | 22 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5% | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ----- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 25391  | 25391  | 35935   | 36223 | 34828.37 | 3047.52 | 25387  | 383102  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 4.96 MB | 5 MB  | 4.81 MB  | 421 kB  | 3.5 MB | 52.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 1 ms  | 0.99 ms | 0.53 ms | 32 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3973   | 3973   | 8991    | 9487    | 8395.19 | 1470.13 | 3972   | 92347   |
| **Bytes/Sec** | 858 kB | 858 kB | 1.94 MB | 2.05 MB | 1.81 MB | 318 kB  | 858 kB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.29 ms | 2.03 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3719   | 3719   | 18111   | 18831  | 15111   | 5400.73 | 3719   | 166201  |
| **Bytes/Sec** | 573 kB | 573 kB | 2.79 MB | 2.9 MB | 2.33 MB | 832 kB  | 573 kB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.24 ms | 2.07 ms | 41 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7027    | 7027    | 15535   | 15847   | 13960.91 | 2865.23 | 7025    | 153565  |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 2.36 MB | 2.41 MB | 2.12 MB  | 436 kB  | 1.07 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.09 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12791   | 12791   | 18399  | 18703   | 17847.6 | 1695.4 | 12788   | 178464  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 2.8 MB | 2.84 MB | 2.71 MB | 258 kB | 1.94 MB | 27.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.03 ms | 0.64 ms | 22 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5695   | 5695   | 10207  | 10551  | 9759.4 | 1387.88 | 5694   | 97594   |
| **Bytes/Sec** | 530 kB | 530 kB | 950 kB | 981 kB | 908 kB | 129 kB  | 530 kB | 9.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.49 ms | 1.71 ms | 112 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 22127   | 22127   | 43039   | 43583   | 37479.2 | 8804.44 | 22123   | 374768 |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 4.82 MB | 4.88 MB | 4.2 MB  | 986 kB  | 2.48 MB | 42 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.35 ms | 0.77 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 10263   | 10263   | 18143   | 19151   | 17654  | 2529.7 | 10263   | 176540 |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 2.78 MB | 2.93 MB | 2.7 MB | 387 kB | 1.57 MB | 27 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.66 ms | 1.27 ms | 39 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7783    | 7783    | 10911   | 11007   | 10594.6 | 940.96 | 7781    | 105944  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.33 MB | 2.36 MB | 2.27 MB | 201 kB | 1.67 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.24 ms | 1.25 ms | 41 ms |


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
| **Req/Sec**   | 18047   | 18047   | 33279   | 33791   | 29680.8 | 6141.07 | 18036   | 296813  |
| **Bytes/Sec** | 2.74 MB | 2.74 MB | 5.06 MB | 5.14 MB | 4.51 MB | 934 kB  | 2.74 MB | 45.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.1 ms | 0.56 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2959   | 2959   | 4363   | 5575   | 4352.82 | 733.06  | 2958   | 47873   |
| **Bytes/Sec** | 340 kB | 340 kB | 502 kB | 641 kB | 500 kB  | 84.3 kB | 340 kB | 5.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.71 ms | 16.1 ms | 55 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3693   | 3693   | 5427   | 5659   | 5286.3 | 541.85 | 3692   | 52855  |
| **Bytes/Sec** | 580 kB | 580 kB | 852 kB | 888 kB | 830 kB | 85 kB  | 580 kB | 8.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 7.1 ms | 3.15 ms | 128 ms |


---

<p align="center">Generated 2022-06-02T01:28:46.631Z</p>
