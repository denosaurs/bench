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
| fastify | 33036 | 330359 |
| deno | 26139.2 | 261381 |
| node | 23957.2 | 239570 |
| http | 23353.2 | 233537 |
| aqua | 20862 | 208612 |
| oak | 17185.46 | 189023 |
| dinatra | 16157.1 | 177745 |
| drash | 16087.6 | 160860 |
| abc | 15699.6 | 156981 |
| reno | 10011 | 100117 |
| express | 8842.91 | 97269 |
| opine | 6183.5 | 61830 |
| mandarinets | 5169.11 | 51680 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10503  | 10503  | 16375   | 17071   | 15699.6 | 1862.66 | 10497  | 156981  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.52 MB | 1.59 MB | 1.46 MB | 173 kB  | 976 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------ | ----- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1 ms  | 26 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12711   | 12711   | 21743 | 22159   | 20862   | 2733.45 | 12709   | 208612  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2 MB  | 2.04 MB | 1.92 MB | 252 kB  | 1.17 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.07 ms | 34 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18815   | 18815   | 26799   | 27615   | 26139.2 | 2462.43 | 18800   | 261381  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.39 MB | 2.46 MB | 2.33 MB | 219 kB  | 1.67 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.22 ms | 0.81 ms | 30 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11631  | 11631  | 16767  | 16911  | 16157.1 | 1462.06 | 11628  | 177745  |
| **Bytes/Sec** | 605 kB | 605 kB | 872 kB | 880 kB | 840 kB  | 76.2 kB | 605 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.13 ms | 0.94 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10127  | 10127  | 16559   | 17359   | 16087.6 | 2039.18 | 10121  | 160860  |
| **Bytes/Sec** | 871 kB | 871 kB | 1.42 MB | 1.49 MB | 1.38 MB | 175 kB  | 870 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.15 ms | 1.2 ms | 52 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ----- |
| **Req/Sec**   | 4199   | 4199   | 9391    | 9999    | 8842.91 | 1563.96 | 4197   | 97269 |
| **Bytes/Sec** | 907 kB | 907 kB | 2.03 MB | 2.16 MB | 1.91 MB | 338 kB  | 907 kB | 21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.99 ms | 2.01 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16911  | 16911  | 34719   | 36351  | 33036   | 5461.51 | 16898  | 330359  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 5.35 MB | 5.6 MB | 5.09 MB | 841 kB  | 2.6 MB | 50.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.67 ms | 1 ms  | 53 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15095  | 15095  | 24287   | 24703   | 23353.2 | 2788.34 | 15095  | 233537  |
| **Bytes/Sec** | 785 kB | 785 kB | 1.26 MB | 1.29 MB | 1.21 MB | 145 kB  | 785 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.23 ms | 0.88 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2781   | 2781   | 5503    | 5635   | 5169.11 | 825.24 | 2780   | 51680   |
| **Bytes/Sec** | 790 kB | 790 kB | 1.56 MB | 1.6 MB | 1.47 MB | 234 kB | 790 kB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.18 ms | 3.06 ms | 176 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14783   | 14783   | 25487   | 25919  | 23957.2 | 3272.4 | 14781   | 239570  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.85 MB | 2.9 MB | 2.68 MB | 366 kB | 1.66 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.91 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11463   | 11463   | 17871   | 18719   | 17185.46 | 1953.05 | 11461   | 189023  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 2.32 MB | 2.43 MB | 2.23 MB  | 254 kB  | 1.49 MB | 24.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.96 ms | 0.87 ms | 27 ms |


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
| **Req/Sec**   | 6363   | 6363   | 10511  | 10783  | 10011  | 1278.56 | 6361   | 100117  |
| **Bytes/Sec** | 496 kB | 496 kB | 820 kB | 841 kB | 781 kB | 99.7 kB | 496 kB | 7.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.52 ms | 1.8 ms | 51 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3985   | 3985   | 6407   | 6563    | 6183.5 | 740.71 | 3985   | 61830   |
| **Bytes/Sec** | 614 kB | 614 kB | 987 kB | 1.01 MB | 952 kB | 114 kB | 614 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 10 ms | 5.89 ms | 2.16 ms | 58 ms |


---

<p align="center">Generated 2021-04-17T00:40:57.067Z</p>
