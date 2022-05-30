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
| deno | 46064 | 506681 |
| node | 35357.82 | 388904 |
| deno_canary | 30685.2 | 306859 |
| drash | 25519.2 | 255167 |
| fastify | 25250.8 | 252526 |
| oak | 23768.37 | 261428 |
| alosaur | 23376 | 233759 |
| aqua | 22743.64 | 250171 |
| reno | 20850 | 208471 |
| little_std | 16931.28 | 186233 |
| little_native | 14527.82 | 159801 |
| mandarinets | 11875.8 | 118738 |
| dinatra | 11492.73 | 126403 |
| opine | 10269 | 102685 |
| abc | 8820.21 | 88194 |
| express | 8092.5 | 80919 |
| tinyhttp | 5385.1 | 53852 |
| servest | 3836.28 | 42193 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 5295   | 5295   | 9815   | 10823   | 8820.21 | 2053.7 | 5293   | 88194  |
| **Bytes/Sec** | 492 kB | 492 kB | 912 kB | 1.01 MB | 820 kB  | 191 kB | 492 kB | 8.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 4.02 ms | 2.06 ms | 69 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16735   | 16735   | 24063  | 24511   | 23376   | 2243.54 | 16730   | 233759  |
| **Bytes/Sec** | 1.87 MB | 1.87 MB | 2.7 MB | 2.75 MB | 2.62 MB | 251 kB  | 1.87 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.35 ms | 0.78 ms | 27 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 13527   | 13527   | 24975   | 25391   | 22743.64 | 3806.05 | 13520   | 250171 |
| **Bytes/Sec** | 2.06 MB | 2.06 MB | 3.79 MB | 3.86 MB | 3.46 MB  | 578 kB  | 2.06 MB | 38 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.2 ms | 0.67 ms | 24 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 35679 | 35679 | 47455   | 47775   | 46064   | 3377.46 | 35671 | 506681  |
| **Bytes/Sec** | 4 MB  | 4 MB  | 5.31 MB | 5.35 MB | 5.16 MB | 378 kB  | 4 MB  | 56.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.31 ms | 0.56 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14639   | 14639   | 34559   | 37343   | 30685.2 | 7743.09 | 14637   | 306859  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.87 MB | 4.18 MB | 3.44 MB | 868 kB  | 1.64 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.58 ms | 0.99 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9447   | 9447   | 11719  | 11983  | 11492.73 | 687.14  | 9447   | 126403  |
| **Bytes/Sec** | 491 kB | 491 kB | 609 kB | 623 kB | 598 kB   | 35.7 kB | 491 kB | 6.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.27 ms | 1.75 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14423   | 14423   | 29263   | 29887   | 25519.2 | 6022.58 | 14416   | 255167  |
| **Bytes/Sec** | 1.99 MB | 1.99 MB | 4.04 MB | 4.12 MB | 3.52 MB | 831 kB  | 1.99 MB | 35.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.82 ms | 46 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3799   | 3799   | 8775   | 9079    | 8092.5  | 1518.68 | 3798   | 80919   |
| **Bytes/Sec** | 821 kB | 821 kB | 1.9 MB | 1.96 MB | 1.75 MB | 328 kB  | 820 kB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.5 ms | 2.05 ms | 48 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14839   | 14839   | 26559   | 27663   | 25250.8 | 3723.74 | 14837   | 252526  |
| **Bytes/Sec** | 2.29 MB | 2.29 MB | 4.09 MB | 4.26 MB | 3.89 MB | 574 kB  | 2.28 MB | 38.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.82 ms | 20 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7335    | 7335    | 16127   | 16431  | 14527.82 | 2825.9 | 7335    | 159801  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.45 MB | 2.5 MB | 2.21 MB  | 429 kB | 1.11 MB | 24.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.02 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12167   | 12167   | 17439   | 17583   | 16931.28 | 1514.65 | 12163   | 186233  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 2.65 MB | 2.67 MB | 2.57 MB  | 230 kB  | 1.85 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.06 ms | 0.67 ms | 20 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8051   | 8051   | 12279   | 12431   | 11875.8 | 1280.98 | 8049   | 118738 |
| **Bytes/Sec** | 749 kB | 749 kB | 1.14 MB | 1.16 MB | 1.1 MB  | 119 kB  | 749 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.16 ms | 1.07 ms | 61 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20399   | 20399   | 36991   | 37119   | 35357.82 | 4746.93 | 20398   | 388904  |
| **Bytes/Sec** | 2.29 MB | 2.29 MB | 4.14 MB | 4.16 MB | 3.96 MB  | 531 kB  | 2.28 MB | 43.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.58 ms | 0.79 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 13967   | 13967   | 24959   | 25311   | 23768.37 | 3147   | 13964   | 261428 |
| **Bytes/Sec** | 2.14 MB | 2.14 MB | 3.82 MB | 3.87 MB | 3.64 MB  | 481 kB | 2.14 MB | 40 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.83 ms | 46 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 7983    | 7983    | 10223   | 11223  | 10269  | 886.07 | 7982    | 102685 |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 2.19 MB | 2.4 MB | 2.2 MB | 189 kB | 1.71 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 5 ms  | 3.42 ms | 1.21 ms | 32 ms |


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
| **Req/Sec**   | 14335   | 14335   | 21567   | 22127   | 20850   | 2189.25 | 14333   | 208471  |
| **Bytes/Sec** | 2.18 MB | 2.18 MB | 3.28 MB | 3.36 MB | 3.17 MB | 333 kB  | 2.18 MB | 31.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.49 ms | 0.98 ms | 26 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2479   | 2479   | 3747   | 5323   | 3836.28 | 833.22  | 2479   | 42193   |
| **Bytes/Sec** | 285 kB | 285 kB | 431 kB | 612 kB | 441 kB  | 95.8 kB | 285 kB | 4.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.93 ms | 16.85 ms | 69 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3805   | 3805   | 5535   | 5623   | 5385.1 | 527.72  | 3804   | 53852   |
| **Bytes/Sec** | 598 kB | 598 kB | 869 kB | 883 kB | 845 kB | 82.9 kB | 597 kB | 8.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 6.82 ms | 2.75 ms | 82 ms |


---

<p align="center">Generated 2022-05-30T01:38:03.613Z</p>
