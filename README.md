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
  - [aqua](#aqua)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [oak](#oak)
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 42551.2 | 425505 |
| fastify | 37442.19 | 411883 |
| node | 23580.4 | 235824 |
| http | 18489.1 | 203366 |
| aqua | 13708.8 | 137076 |
| dinatra | 12027.82 | 132309 |
| oak | 10862.2 | 108609 |
| abc | 10591 | 105905 |
| drash | 9496.21 | 94963 |
| express | 8875.37 | 97628 |
| reno | 8402.21 | 84014 |
| mandarinets | 7303.2 | 73023 |
| opine | 4231.4 | 42307 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7043   | 7043   | 10959   | 11231   | 10591  | 1201.69 | 7040   | 105905  |
| **Bytes/Sec** | 655 kB | 655 kB | 1.02 MB | 1.04 MB | 985 kB | 112 kB  | 655 kB | 9.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.32 ms | 1.32 ms | 77 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9135   | 9135   | 14183  | 14639   | 13708.8 | 1546.2 | 9131   | 137076  |
| **Bytes/Sec** | 840 kB | 840 kB | 1.3 MB | 1.35 MB | 1.26 MB | 142 kB | 840 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.27 ms | 1.07 ms | 39 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 31135   | 31135   | 43295   | 45887   | 42551.2 | 4035.12 | 31125   | 425505  |
| **Bytes/Sec** | 2.77 MB | 2.77 MB | 3.85 MB | 4.08 MB | 3.79 MB | 359 kB  | 2.77 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.72 ms | 54 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8067   | 8067   | 12503  | 12663  | 12027.82 | 1278.38 | 8064   | 132309  |
| **Bytes/Sec** | 420 kB | 420 kB | 650 kB | 659 kB | 625 kB   | 66.5 kB | 419 kB | 6.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.01 ms | 1.19 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6135   | 6135   | 9879   | 10127  | 9496.21 | 1142.7  | 6132   | 94963   |
| **Bytes/Sec** | 527 kB | 527 kB | 850 kB | 871 kB | 817 kB  | 98.4 kB | 527 kB | 8.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.62 ms | 1.45 ms | 74 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3891   | 3891   | 9511    | 10183  | 8875.37 | 1708.78 | 3891   | 97628   |
| **Bytes/Sec** | 841 kB | 841 kB | 2.06 MB | 2.2 MB | 1.92 MB | 369 kB  | 840 kB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 10 ms | 3.96 ms | 2.22 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22815   | 22815   | 39039   | 39487   | 37442.19 | 4661.81 | 22802   | 411883  |
| **Bytes/Sec** | 3.51 MB | 3.51 MB | 6.01 MB | 6.08 MB | 5.77 MB  | 718 kB  | 3.51 MB | 63.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.72 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12807  | 12807  | 19167  | 20255   | 18489.1 | 1985.67 | 12802  | 203366  |
| **Bytes/Sec** | 666 kB | 666 kB | 997 kB | 1.05 MB | 961 kB  | 103 kB  | 666 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.15 ms | 31 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4447   | 4447   | 7639   | 7707   | 7303.2 | 956.02  | 4445   | 73023   |
| **Bytes/Sec** | 413 kB | 413 kB | 711 kB | 717 kB | 679 kB | 88.9 kB | 413 kB | 6.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.96 ms | 1.66 ms | 94 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12583   | 12583   | 25023  | 25263   | 23580.4 | 3703.17 | 12582   | 235824  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.8 MB | 2.83 MB | 2.64 MB | 415 kB  | 1.41 MB | 26.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.96 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6539   | 6539   | 11359   | 12239   | 10862.2 | 1518.11 | 6537   | 108609  |
| **Bytes/Sec** | 850 kB | 850 kB | 1.48 MB | 1.59 MB | 1.41 MB | 197 kB  | 850 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.2 ms | 1.39 ms | 62 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5539   | 5539   | 8647   | 8967   | 8402.21 | 966.28  | 5537   | 84014   |
| **Bytes/Sec** | 432 kB | 432 kB | 675 kB | 699 kB | 655 kB  | 75.4 kB | 432 kB | 6.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.4 ms | 1.7 ms | 101 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2933   | 2933   | 4387   | 4539   | 4231.4 | 454.73 | 2932   | 42307   |
| **Bytes/Sec** | 452 kB | 452 kB | 676 kB | 699 kB | 652 kB | 70 kB  | 452 kB | 6.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 14 ms | 8.96 ms | 2.22 ms | 100 ms |


---

<p align="center">Generated 2021-04-28T22:53:14.468Z</p>
