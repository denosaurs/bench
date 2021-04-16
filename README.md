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
| pogo | 0 | 0 |
| opine | 6025.1 | 60246 |
| mandarinets | 6512.1 | 65117 |
| express | 8796.82 | 96763 |
| reno | 9901.4 | 99017 |
| dinatra | 10317.8 | 103176 |
| abc | 14443.28 | 158868 |
| aqua | 20258 | 202564 |
| oak | 20461.46 | 225063 |
| fastify | 21237.2 | 212367 |
| drash | 22126.19 | 243377 |
| http | 25670.4 | 256714 |
| node | 31154.4 | 311560 |
| deno | 42326.55 | 465601 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8199   | 8199   | 15255   | 15423   | 14443.28 | 2018.25 | 8198   | 158868  |
| **Bytes/Sec** | 763 kB | 763 kB | 1.42 MB | 1.43 MB | 1.34 MB  | 188 kB  | 762 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.28 ms | 72 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11375   | 11375   | 21359   | 22287   | 20258   | 3099.73 | 11373   | 202564  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.97 MB | 2.05 MB | 1.86 MB | 285 kB  | 1.05 MB | 18.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.19 ms | 35 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 30751   | 30751   | 43615   | 45055   | 42326.55 | 3798.33 | 30741   | 465601  |
| **Bytes/Sec** | 2.74 MB | 2.74 MB | 3.88 MB | 4.01 MB | 3.77 MB  | 338 kB  | 2.74 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.61 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7559   | 7559   | 10543  | 10823  | 10317.8 | 928.11  | 7558   | 103176  |
| **Bytes/Sec** | 393 kB | 393 kB | 548 kB | 563 kB | 537 kB  | 48.3 kB | 393 kB | 5.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.36 ms | 1.55 ms | 51 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15567   | 15567   | 22671   | 23407   | 22126.19 | 2110.39 | 15563   | 243377  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 1.95 MB | 2.01 MB | 1.9 MB   | 181 kB  | 1.34 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.77 ms | 50 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4023   | 4023   | 9279  | 10207  | 8796.82 | 1615.65 | 4023   | 96763   |
| **Bytes/Sec** | 869 kB | 869 kB | 2 MB  | 2.2 MB | 1.9 MB  | 349 kB  | 869 kB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.99 ms | 1.97 ms | 47 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9343    | 9343    | 22191   | 23615   | 21237.2 | 4011.81 | 9342    | 212367  |
| **Bytes/Sec** | 1.44 MB | 1.44 MB | 3.42 MB | 3.64 MB | 3.27 MB | 618 kB  | 1.44 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.28 ms | 48 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 20239   | 20239   | 25759   | 28895  | 25670.4 | 2211.9 | 20236   | 256714  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.34 MB | 1.5 MB | 1.34 MB | 115 kB | 1.05 MB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.83 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3439   | 3439   | 6823    | 7055  | 6512.1  | 1034.29 | 3438   | 65117   |
| **Bytes/Sec** | 977 kB | 977 kB | 1.94 MB | 2 MB  | 1.85 MB | 294 kB  | 976 kB | 18.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.61 ms | 2.34 ms | 136 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17087   | 17087   | 32719   | 34047   | 31154.4 | 4814.72 | 17079   | 311560  |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 3.66 MB | 3.81 MB | 3.49 MB | 539 kB  | 1.91 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.75 ms | 0.94 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13639   | 13639   | 21199   | 21855   | 20461.46 | 2234.44 | 13633   | 225063  |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 2.75 MB | 2.84 MB | 2.66 MB  | 291 kB  | 1.77 MB | 29.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.87 ms | 29 ms |


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
| **Req/Sec**   | 6027   | 6027   | 10311  | 10543  | 9901.4 | 1301.17 | 6026   | 99017   |
| **Bytes/Sec** | 470 kB | 470 kB | 804 kB | 823 kB | 772 kB | 101 kB  | 470 kB | 7.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.57 ms | 1.86 ms | 65 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3533   | 3533   | 6335   | 6411   | 6025.1 | 838.01 | 3533   | 60246   |
| **Bytes/Sec** | 544 kB | 544 kB | 975 kB | 988 kB | 928 kB | 129 kB | 544 kB | 9.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.15 ms | 2.11 ms | 54 ms |


---

<p align="center">Generated 2021-04-16T20:11:49.159Z</p>
