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
| deno | 46313.6 | 463148 |
| deno_canary | 41794.19 | 459727 |
| node | 38358.55 | 421991 |
| fastify | 20262 | 202607 |
| http | 14603.2 | 146038 |
| express | 13502.2 | 135025 |
| drash | 12360 | 123584 |
| abc | 12289.1 | 135177 |
| alosaur | 12206.6 | 122060 |
| oak | 11923.8 | 119240 |
| aqua | 11739.8 | 117393 |
| little_native | 11305 | 113037 |
| mandarinets | 9990.6 | 99912 |
| reno | 7777.2 | 77764 |
| opine | 6097.2 | 60961 |
| dinatra | 6052.4 | 60525 |
| servest | 3281.6 | 32808 |
| little_std | 2976.46 | 32735 |
| tinyhttp | 2828.8 | 28281 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9551   | 9551   | 12119   | 13679   | 12289.1 | 1065.44 | 9546   | 135177  |
| **Bytes/Sec** | 888 kB | 888 kB | 1.13 MB | 1.27 MB | 1.14 MB | 99.1 kB | 888 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.83 ms | 1.26 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7791   | 7791   | 12767   | 12831   | 12206.6 | 1481.33 | 7789   | 122060  |
| **Bytes/Sec** | 717 kB | 717 kB | 1.17 MB | 1.18 MB | 1.12 MB | 136 kB  | 717 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.85 ms | 1.49 ms | 62 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7331   | 7331   | 12287   | 12447   | 11739.8 | 1484.83 | 7331   | 117393  |
| **Bytes/Sec** | 675 kB | 675 kB | 1.13 MB | 1.15 MB | 1.08 MB | 137 kB  | 674 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.1 ms | 1.35 ms | 73 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 36799   | 36799   | 47391   | 48799   | 46313.6 | 3520.55 | 36775   | 463148  |
| **Bytes/Sec** | 3.27 MB | 3.27 MB | 4.22 MB | 4.35 MB | 4.12 MB | 313 kB  | 3.27 MB | 41.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.24 ms | 0.64 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 32223   | 32223   | 43231   | 43967   | 41794.19 | 3299.03 | 32214   | 459727  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 3.85 MB | 3.91 MB | 3.72 MB  | 294 kB  | 2.87 MB | 40.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.17 ms | 0.64 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4423   | 4423   | 6275   | 6599   | 6052.4 | 585.87  | 4423   | 60525   |
| **Bytes/Sec** | 230 kB | 230 kB | 326 kB | 343 kB | 315 kB | 30.5 kB | 230 kB | 3.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.09 ms | 1.92 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8647   | 8647   | 12783  | 12895   | 12360   | 1241.04 | 8644   | 123584  |
| **Bytes/Sec** | 743 kB | 743 kB | 1.1 MB | 1.11 MB | 1.06 MB | 107 kB  | 743 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.87 ms | 1.33 ms | 98 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5363    | 5363    | 14695   | 15039   | 13502.2 | 2846.6 | 5360    | 135025  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 3.17 MB | 3.25 MB | 2.92 MB | 615 kB | 1.16 MB | 29.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.42 ms | 1.62 ms | 35 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9655    | 9655    | 21615   | 22319   | 20262   | 3618.11 | 9654    | 202607  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 3.33 MB | 3.44 MB | 3.12 MB | 557 kB  | 1.49 MB | 31.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.27 ms | 31 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9847   | 9847   | 15039  | 15439  | 14603.2 | 1600.28 | 9846   | 146038  |
| **Bytes/Sec** | 512 kB | 512 kB | 782 kB | 803 kB | 759 kB  | 83.2 kB | 512 kB | 7.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.23 ms | 1.07 ms | 31 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7799    | 7799    | 11679   | 11823   | 11305   | 1172.38 | 7796    | 113037  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.51 MB | 1.53 MB | 1.46 MB | 151 kB  | 1.01 MB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.2 ms | 1.12 ms | 38 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1883   | 1883   | 3141   | 3267   | 2976.46 | 387.84  | 1883   | 32735   |
| **Bytes/Sec** | 173 kB | 173 kB | 289 kB | 301 kB | 274 kB  | 35.7 kB | 173 kB | 3.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 10 ms | 12 ms | 22 ms | 12.94 ms | 3.61 ms | 91 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6447   | 6447   | 10375  | 10543  | 9990.6 | 1190.05 | 6446   | 99912   |
| **Bytes/Sec** | 600 kB | 600 kB | 965 kB | 980 kB | 929 kB | 111 kB  | 599 kB | 9.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.34 ms | 1.34 ms | 70 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22175   | 22175   | 40319   | 41247   | 38358.55 | 5304.03 | 22175   | 421991  |
| **Bytes/Sec** | 2.48 MB | 2.48 MB | 4.52 MB | 4.62 MB | 4.3 MB   | 594 kB  | 2.48 MB | 47.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.53 ms | 0.83 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7787    | 7787    | 12415   | 12879   | 11923.8 | 1411.34 | 7786    | 119240  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.61 MB | 1.67 MB | 1.55 MB | 184 kB  | 1.01 MB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.89 ms | 1.56 ms | 94 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4475   | 4475   | 6231   | 6631    | 6097.2 | 581.34  | 4473   | 60961   |
| **Bytes/Sec** | 689 kB | 689 kB | 959 kB | 1.02 MB | 939 kB | 89.5 kB | 689 kB | 9.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.06 ms | 1.76 ms | 82 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5023   | 5023   | 8091   | 8151   | 7777.2 | 919.88  | 5020   | 77764   |
| **Bytes/Sec** | 392 kB | 392 kB | 631 kB | 636 kB | 607 kB | 71.8 kB | 392 kB | 6.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.53 ms | 2.54 ms | 161 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2601   | 2601   | 3301   | 4035   | 3281.6 | 470.85  | 2601   | 32808   |
| **Bytes/Sec** | 299 kB | 299 kB | 380 kB | 464 kB | 377 kB | 54.1 kB | 299 kB | 3.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.7 ms | 17.79 ms | 99 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2089   | 2089   | 2921   | 3081   | 2828.8 | 289.45  | 2088   | 28281   |
| **Bytes/Sec** | 328 kB | 328 kB | 458 kB | 484 kB | 444 kB | 45.5 kB | 328 kB | 4.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 10 ms | 13 ms | 24 ms | 13.66 ms | 3.66 ms | 82 ms |


---

<p align="center">Generated 2021-08-03T00:52:51.884Z</p>
