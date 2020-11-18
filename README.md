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
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 6767.2 | 22012 | 22877.46 | 9106.21 | 21228.4 | 13731 | 33232.4 | 36079.28 | 15127.6 | 7145.2 | 2906.55 | 3463.6 | 25090.19 |
| **Total** | 67666 | 242123 | 251634 | 91052 | 212313 | 137296 | 332323 | 396910 | 151261 | 71449 | 31971 | 34629 | 276002 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4227   | 4227   | 6931   | 7523   | 6767.2 | 874.63  | 4226   | 67666   |
| **Bytes/Sec** | 393 kB | 393 kB | 645 kB | 699 kB | 629 kB | 81.3 kB | 393 kB | 6.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.41 ms | 2.36 ms | 72 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14151  | 14151  | 22911   | 23247   | 22012   | 2531.89 | 14151  | 242123  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.11 MB | 2.14 MB | 2.02 MB | 233 kB  | 1.3 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 1 ms  | 40 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15927  | 15927  | 23455  | 24735   | 22877.46 | 2299.77 | 15924  | 251634  |
| **Bytes/Sec** | 813 kB | 813 kB | 1.2 MB | 1.26 MB | 1.17 MB  | 117 kB  | 812 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.07 ms | 48 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6475   | 6475   | 9399   | 9671   | 9106.21 | 885.14  | 6473   | 91052   |
| **Bytes/Sec** | 337 kB | 337 kB | 489 kB | 503 kB | 473 kB  | 46.1 kB | 337 kB | 4.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.88 ms | 1.92 ms | 64 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 13575   | 13575   | 21983   | 22591   | 21228.4 | 2564.2 | 13569   | 212313  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.89 MB | 1.94 MB | 1.83 MB | 221 kB | 1.17 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.92 ms | 37 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5611    | 5611    | 14855   | 15335   | 13731   | 2808.5 | 5608    | 137296  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 3.21 MB | 3.31 MB | 2.97 MB | 607 kB | 1.21 MB | 29.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.59 ms | 50 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 15063  | 15063  | 35039   | 36223   | 33232.4 | 6134.6 | 15056  | 332323  |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 5.36 MB | 5.54 MB | 5.08 MB | 939 kB | 2.3 MB | 50.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.99 ms | 65 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20687   | 20687   | 37919   | 38495   | 36079.28 | 4938.14 | 20686   | 396910  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 4.25 MB | 4.31 MB | 4.04 MB  | 553 kB  | 2.32 MB | 44.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 0.91 ms | 46 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9751   | 9751   | 15551   | 16623   | 15127.6 | 1886.55 | 9748   | 151261  |
| **Bytes/Sec** | 907 kB | 907 kB | 1.45 MB | 1.55 MB | 1.41 MB | 175 kB  | 907 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.37 ms | 67 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4195   | 4195   | 7527   | 7607   | 7145.2 | 1004.39 | 4194   | 71449   |
| **Bytes/Sec** | 386 kB | 386 kB | 693 kB | 700 kB | 657 kB | 92.4 kB | 386 kB | 6.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.89 ms | 3.22 ms | 193 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1842   | 1842   | 3067   | 3321   | 2906.55 | 375.85  | 1842   | 31971   |
| **Bytes/Sec** | 212 kB | 212 kB | 353 kB | 382 kB | 334 kB  | 43.2 kB | 212 kB | 3.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.25 ms | 18.57 ms | 108 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1695   | 1695   | 3807    | 3977    | 3463.6 | 709.66 | 1695   | 34629   |
| **Bytes/Sec** | 482 kB | 482 kB | 1.08 MB | 1.13 MB | 983 kB | 201 kB | 481 kB | 9.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 10 ms | 22 ms | 11.06 ms | 4.68 ms | 107 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18079  | 18079  | 25807   | 26847  | 25090.19 | 2304.72 | 18076  | 276002  |
| **Bytes/Sec** | 940 kB | 940 kB | 1.34 MB | 1.4 MB | 1.3 MB   | 120 kB  | 940 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.75 ms | 46 ms |


---

<p align="center">Generated 2020-11-18T00:19:54.400Z</p>