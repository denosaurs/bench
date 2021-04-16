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
| abc | 14328 | 143273 || aqua | 13585.6 | 135853 || deno | 24531.2 | 245315 || dinatra | 16676 | 183419 || drash | 16201.46 | 178185 || express | 16343 | 163421 || fastify | 19370.8 | 193713 || http | 31824 | 350064 || mandarinets | 6619.5 | 66180 || node | 25080.37 | 275857 || oak | 15838.4 | 158384 || pogo | 0 | 0 || reno | 10709 | 107080 || opine | 7520.55 | 82717 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10023  | 10023  | 14895   | 15159   | 14328   | 1471.89 | 10020  | 143273  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.39 MB | 1.41 MB | 1.33 MB | 137 kB  | 932 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.12 ms | 54 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10743  | 10743  | 11351   | 19391   | 13585.6 | 3151.52 | 10742  | 135853  |
| **Bytes/Sec** | 989 kB | 989 kB | 1.04 MB | 1.78 MB | 1.25 MB | 290 kB  | 988 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.42 ms | 1.06 ms | 37 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17487   | 17487   | 25311   | 26639   | 24531.2 | 2622.47 | 17472   | 245315  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.25 MB | 2.37 MB | 2.18 MB | 234 kB  | 1.56 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.8 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 12623  | 12623  | 16607  | 18447  | 16676  | 1501.45 | 12616  | 183419  |
| **Bytes/Sec** | 656 kB | 656 kB | 863 kB | 959 kB | 867 kB | 78.1 kB | 656 kB | 9.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.02 ms | 1.01 ms | 21 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10671  | 10671  | 16863   | 17343   | 16201.46 | 1802.41 | 10668  | 178185  |
| **Bytes/Sec** | 918 kB | 918 kB | 1.45 MB | 1.49 MB | 1.39 MB  | 155 kB  | 917 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.02 ms | 30 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7739    | 7739    | 17391   | 17711   | 16343   | 2899.51 | 7737    | 163421  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 3.75 MB | 3.83 MB | 3.53 MB | 626 kB  | 1.67 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.06 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9447    | 9447    | 20479   | 21919   | 19370.8 | 3397.63 | 9446    | 193713  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 3.15 MB | 3.38 MB | 2.98 MB | 523 kB  | 1.45 MB | 29.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.48 ms | 1.36 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25391   | 25391   | 32767  | 33663   | 31824   | 2157.05 | 25390   | 350064  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 1.7 MB | 1.75 MB | 1.65 MB | 112 kB  | 1.32 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.04 ms | 0.54 ms | 22 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3373   | 3373   | 7039  | 7091    | 6619.5  | 1093.74 | 3373   | 66180   |
| **Bytes/Sec** | 958 kB | 958 kB | 2 MB  | 2.01 MB | 1.88 MB | 311 kB  | 958 kB | 18.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.51 ms | 2.08 ms | 95 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13663   | 13663   | 26159   | 27567   | 25080.37 | 3687.65 | 13661   | 275857  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.93 MB | 3.09 MB | 2.81 MB  | 413 kB  | 1.53 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.94 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8799    | 8799    | 16447   | 17231   | 15838.4 | 2381.13 | 8797    | 158384  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.14 MB | 2.24 MB | 2.06 MB | 310 kB  | 1.14 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.16 ms | 29 ms |


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
| **Req/Sec**   | 7719   | 7719   | 10951  | 11327  | 10709  | 1016.04 | 7716   | 107080  |
| **Bytes/Sec** | 602 kB | 602 kB | 855 kB | 883 kB | 835 kB | 79.2 kB | 602 kB | 8.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.36 ms | 1.42 ms | 47 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4671   | 4671   | 7827    | 7919    | 7520.55 | 909.46 | 4671   | 82717   |
| **Bytes/Sec** | 719 kB | 719 kB | 1.21 MB | 1.22 MB | 1.16 MB | 140 kB | 719 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.65 ms | 1.84 ms | 88 ms |


---

<p align="center">Generated 2021-04-16T19:34:06.219Z</p>
