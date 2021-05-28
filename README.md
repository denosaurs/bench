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
| fastify | 40300.37 | 443336 |
| deno | 38333.6 | 383325 |
| deno_canary | 25467.2 | 254657 |
| node | 25030 | 250295 |
| http | 22552 | 248053 |
| oak | 17441.82 | 191865 |
| alosaur | 15491.28 | 170398 |
| aqua | 14920.8 | 149206 |
| little_native | 14513.82 | 159647 |
| express | 14371.46 | 158100 |
| abc | 12914.4 | 129139 |
| dinatra | 11353.28 | 124893 |
| drash | 9769.4 | 97686 |
| reno | 7704.4 | 77043 |
| mandarinets | 6873.55 | 75607 |
| tinyhttp | 6079.5 | 60786 |
| opine | 5526.1 | 55255 |
| servest | 4707.8 | 47070 |
| little_std | 3599.4 | 35990 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8343   | 8343   | 13375   | 13831   | 12914.4 | 1543.16 | 8338   | 129139 |
| **Bytes/Sec** | 776 kB | 776 kB | 1.24 MB | 1.29 MB | 1.2 MB  | 144 kB  | 775 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.19 ms | 59 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10095  | 10095  | 15671   | 16895   | 15491.28 | 1800.08 | 10091  | 170398  |
| **Bytes/Sec** | 929 kB | 929 kB | 1.44 MB | 1.55 MB | 1.43 MB  | 166 kB  | 928 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 1.07 ms | 39 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11111   | 11111   | 15327   | 15719   | 14920.8 | 1296.8 | 11108   | 149206  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.41 MB | 1.45 MB | 1.37 MB | 119 kB | 1.02 MB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.17 ms | 0.91 ms | 63 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30591   | 30591   | 39903   | 41023   | 38333.6 | 3023.51 | 30590   | 383325  |
| **Bytes/Sec** | 2.72 MB | 2.72 MB | 3.55 MB | 3.65 MB | 3.41 MB | 269 kB  | 2.72 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.69 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18415   | 18415   | 26623   | 27855   | 25467.2 | 2779.73 | 18413   | 254657  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.37 MB | 2.48 MB | 2.27 MB | 247 kB  | 1.64 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.77 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8087   | 8087   | 11687  | 11863  | 11353.28 | 1045.06 | 8084   | 124893  |
| **Bytes/Sec** | 421 kB | 421 kB | 608 kB | 617 kB | 590 kB   | 54.4 kB | 420 kB | 6.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.24 ms | 1.25 ms | 43 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6275   | 6275   | 10119  | 10439  | 9769.4 | 1177.82 | 6272   | 97686  |
| **Bytes/Sec** | 540 kB | 540 kB | 870 kB | 898 kB | 840 kB | 101 kB  | 539 kB | 8.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.52 ms | 1.43 ms | 86 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 6223    | 6223    | 15263  | 16047   | 14371.46 | 2672.43 | 6220    | 158100  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 3.3 MB | 3.47 MB | 3.1 MB   | 577 kB  | 1.34 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.38 ms | 49 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24303   | 24303   | 41919   | 42079   | 40300.37 | 5062.07 | 24298   | 443336  |
| **Bytes/Sec** | 3.74 MB | 3.74 MB | 6.46 MB | 6.48 MB | 6.21 MB  | 779 kB  | 3.74 MB | 68.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.67 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17183  | 17183  | 23327   | 23503   | 22552   | 1769.51 | 17175  | 248053  |
| **Bytes/Sec** | 893 kB | 893 kB | 1.21 MB | 1.22 MB | 1.17 MB | 92 kB   | 893 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.74 ms | 24 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 10663   | 10663   | 14735  | 15599   | 14513.82 | 1391.19 | 10660   | 159647  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.9 MB | 2.01 MB | 1.87 MB  | 180 kB  | 1.38 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.13 ms | 0.76 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2127   | 2127   | 3735   | 3939   | 3599.4 | 533.78  | 2126   | 35990   |
| **Bytes/Sec** | 196 kB | 196 kB | 344 kB | 362 kB | 331 kB | 49.1 kB | 196 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 19 ms | 10.58 ms | 2.95 ms | 56 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4001   | 4001   | 7115   | 7435   | 6873.55 | 919.37  | 4000   | 75607   |
| **Bytes/Sec** | 372 kB | 372 kB | 662 kB | 692 kB | 639 kB  | 85.5 kB | 372 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.39 ms | 2.06 ms | 125 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 11495   | 11495   | 26607   | 27535   | 25030  | 4563.35 | 11495   | 250295 |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 2.98 MB | 3.08 MB | 2.8 MB | 511 kB  | 1.29 MB | 28 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.95 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12679   | 12679   | 17919   | 18063   | 17441.82 | 1509.78 | 12677   | 191865  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 2.33 MB | 2.35 MB | 2.27 MB  | 196 kB  | 1.65 MB | 24.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.07 ms | 0.58 ms | 21 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3707   | 3707   | 5787   | 5803   | 5526.1 | 615.03  | 3706   | 55255   |
| **Bytes/Sec** | 571 kB | 571 kB | 891 kB | 893 kB | 851 kB | 94.8 kB | 571 kB | 8.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 11 ms | 6.56 ms | 2.02 ms | 117 ms |


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
| **Req/Sec**   | 5119   | 5119   | 7963   | 8175   | 7704.4 | 867.46  | 5118   | 77043   |
| **Bytes/Sec** | 399 kB | 399 kB | 622 kB | 638 kB | 601 kB | 67.7 kB | 399 kB | 6.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.72 ms | 2 ms  | 75 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2141   | 2141   | 5619   | 6271   | 4707.8 | 1607.6 | 2140   | 47070   |
| **Bytes/Sec** | 246 kB | 246 kB | 646 kB | 721 kB | 541 kB | 185 kB | 246 kB | 5.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ----- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 8 ms  | 15.62 ms | 58 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3985   | 3985   | 6311   | 6503   | 6079.5 | 716.4   | 3985   | 60786   |
| **Bytes/Sec** | 530 kB | 530 kB | 839 kB | 865 kB | 809 kB | 95.2 kB | 530 kB | 8.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 12 ms | 6.15 ms | 2.09 ms | 54 ms |


---

<p align="center">Generated 2021-05-28T01:23:13.177Z</p>
