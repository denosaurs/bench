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
| node | 36527.28 | 401734 |
| fastify | 33487.28 | 368356 |
| deno | 25368 | 253685 |
| http | 20589.46 | 226485 |
| dinatra | 15272.8 | 152727 |
| express | 13235.1 | 145587 |
| aqua | 12887.2 | 128864 |
| drash | 11992.6 | 119920 |
| reno | 11575.8 | 115762 |
| oak | 10188.21 | 101873 |
| abc | 9656.21 | 96552 |
| opine | 6076.8 | 60758 |
| mandarinets | 5194.9 | 51935 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6319   | 6319   | 10031  | 10375  | 9656.21 | 1127.62 | 6319   | 96552   |
| **Bytes/Sec** | 588 kB | 588 kB | 932 kB | 965 kB | 898 kB  | 105 kB  | 588 kB | 8.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.51 ms | 1.49 ms | 72 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8927   | 8927   | 13239   | 13735   | 12887.2 | 1345.31 | 8926   | 128864  |
| **Bytes/Sec** | 821 kB | 821 kB | 1.22 MB | 1.26 MB | 1.19 MB | 124 kB  | 821 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.51 ms | 1.34 ms | 90 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19775   | 19775   | 25439   | 27903   | 25368   | 2108.46 | 19768   | 253685  |
| **Bytes/Sec** | 1.76 MB | 1.76 MB | 2.27 MB | 2.48 MB | 2.26 MB | 188 kB  | 1.76 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.69 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10295  | 10295  | 15895  | 16111  | 15272.8 | 1685.97 | 10293  | 152727  |
| **Bytes/Sec** | 536 kB | 536 kB | 827 kB | 838 kB | 794 kB  | 87.7 kB | 535 kB | 7.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.21 ms | 0.93 ms | 20 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7795   | 7795   | 12335   | 12855   | 11992.6 | 1430.42 | 7792   | 119920  |
| **Bytes/Sec** | 670 kB | 670 kB | 1.06 MB | 1.11 MB | 1.03 MB | 123 kB  | 670 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.06 ms | 1.13 ms | 27 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5131    | 5131    | 14111   | 14631   | 13235.1 | 2612.45 | 5131    | 145587  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 3.05 MB | 3.16 MB | 2.86 MB | 564 kB  | 1.11 MB | 31.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.48 ms | 1.69 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17743   | 17743   | 35103   | 35455   | 33487.28 | 4987.81 | 17735   | 368356  |
| **Bytes/Sec** | 2.73 MB | 2.73 MB | 5.41 MB | 5.46 MB | 5.16 MB  | 768 kB  | 2.73 MB | 56.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.79 ms | 0.84 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13591  | 13591  | 21439   | 21663   | 20589.46 | 2253.89 | 13588  | 226485  |
| **Bytes/Sec** | 707 kB | 707 kB | 1.12 MB | 1.13 MB | 1.07 MB  | 117 kB  | 707 kB | 11.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.04 ms | 43 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3199   | 3199   | 5459    | 5483    | 5194.9  | 671.76 | 3198   | 51935   |
| **Bytes/Sec** | 908 kB | 908 kB | 1.55 MB | 1.56 MB | 1.47 MB | 191 kB | 908 kB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 12 ms | 7.44 ms | 2.24 ms | 148 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 21327   | 21327   | 38367  | 38911   | 36527.28 | 4955.09 | 21321   | 401734 |
| **Bytes/Sec** | 2.39 MB | 2.39 MB | 4.3 MB | 4.36 MB | 4.09 MB  | 555 kB  | 2.39 MB | 45 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.77 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6415   | 6415   | 10551   | 10855   | 10188.21 | 1266.49 | 6414   | 101873  |
| **Bytes/Sec** | 834 kB | 834 kB | 1.37 MB | 1.41 MB | 1.32 MB  | 165 kB  | 834 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.35 ms | 1.25 ms | 28 ms |


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
| **Req/Sec**   | 7963   | 7963   | 11991  | 12223  | 11575.8 | 1219.14 | 7963   | 115762  |
| **Bytes/Sec** | 622 kB | 622 kB | 935 kB | 953 kB | 903 kB  | 95 kB   | 621 kB | 9.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.28 ms | 59 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4535   | 4535   | 6283   | 6339   | 6076.8 | 523.56  | 4535   | 60758   |
| **Bytes/Sec** | 699 kB | 699 kB | 967 kB | 976 kB | 936 kB | 80.4 kB | 698 kB | 9.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 9 ms  | 6.32 ms | 1.78 ms | 124 ms |


---

<p align="center">Generated 2021-04-27T00:41:11.266Z</p>
