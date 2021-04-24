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
| node | 35901.6 | 359043 |
| deno | 24765.2 | 247633 |
| http | 23656 | 236557 |
| fastify | 19338 | 193371 |
| abc | 12202.73 | 134225 |
| dinatra | 11997.6 | 119976 |
| drash | 11729.6 | 117292 |
| aqua | 10969.8 | 109694 |
| oak | 10795.4 | 107949 |
| reno | 9752.21 | 97514 |
| express | 9101.1 | 100098 |
| mandarinets | 5114.3 | 51136 |
| opine | 4263.5 | 42617 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8135   | 8135   | 12599   | 12711   | 12202.73 | 1288.32 | 8135   | 134225  |
| **Bytes/Sec** | 757 kB | 757 kB | 1.17 MB | 1.18 MB | 1.13 MB  | 120 kB  | 757 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.07 ms | 1.07 ms | 41 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6879   | 6879   | 11447   | 11831   | 10969.8 | 1394.48 | 6879   | 109694  |
| **Bytes/Sec** | 633 kB | 633 kB | 1.05 MB | 1.09 MB | 1.01 MB | 128 kB  | 633 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.21 ms | 1.36 ms | 67 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 14895   | 14895   | 26383   | 26703   | 24765.2 | 3448.63 | 14894   | 247633 |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.35 MB | 2.38 MB | 2.2 MB  | 307 kB  | 1.33 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.85 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8687   | 8687   | 12383  | 12671  | 11997.6 | 1129.64 | 8687   | 119976  |
| **Bytes/Sec** | 452 kB | 452 kB | 644 kB | 659 kB | 624 kB  | 58.7 kB | 452 kB | 6.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.09 ms | 1.09 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8631   | 8631   | 12079   | 12847  | 11729.6 | 1200.96 | 8625   | 117292  |
| **Bytes/Sec** | 742 kB | 742 kB | 1.04 MB | 1.1 MB | 1.01 MB | 103 kB  | 742 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.9 ms | 1.32 ms | 35 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 9703   | 10159   | 9101.1  | 1621.4 | 4350   | 100098  |
| **Bytes/Sec** | 940 kB | 940 kB | 2.1 MB | 2.19 MB | 1.97 MB | 350 kB | 940 kB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.83 ms | 2.04 ms | 52 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8783    | 8783    | 20655   | 21551   | 19338   | 3643.84 | 8779    | 193371  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 3.18 MB | 3.32 MB | 2.98 MB | 561 kB  | 1.35 MB | 29.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.27 ms | 37 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17983  | 17983  | 24367   | 24575   | 23656   | 1921.06 | 17974  | 236557  |
| **Bytes/Sec** | 935 kB | 935 kB | 1.27 MB | 1.28 MB | 1.23 MB | 99.9 kB | 935 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.65 ms | 22 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3241   | 3241   | 5323    | 5387    | 5114.3  | 629.15 | 3240   | 51136   |
| **Bytes/Sec** | 921 kB | 921 kB | 1.51 MB | 1.53 MB | 1.45 MB | 179 kB | 920 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 12 ms | 7.47 ms | 1.83 ms | 48 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20351   | 20351   | 37599   | 38399  | 35901.6 | 5208.04 | 20342   | 359043  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 4.21 MB | 4.3 MB | 4.02 MB | 583 kB  | 2.28 MB | 40.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.83 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7007   | 7007   | 11295   | 11615   | 10795.4 | 1306.44 | 7004   | 107949 |
| **Bytes/Sec** | 911 kB | 911 kB | 1.47 MB | 1.51 MB | 1.4 MB  | 170 kB  | 911 kB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.32 ms | 1.25 ms | 29 ms |


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
| **Req/Sec**   | 6207   | 6207   | 10111  | 10399  | 9752.21 | 1198.95 | 6204   | 97514   |
| **Bytes/Sec** | 484 kB | 484 kB | 788 kB | 811 kB | 761 kB  | 93.5 kB | 484 kB | 7.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.49 ms | 1.8 ms | 53 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2913   | 2913   | 4323   | 4623   | 4263.5 | 468.72  | 2913   | 42617   |
| **Bytes/Sec** | 449 kB | 449 kB | 666 kB | 712 kB | 656 kB | 72.1 kB | 449 kB | 6.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 8.87 ms | 3.74 ms | 202 ms |


---

<p align="center">Generated 2021-04-24T00:42:53.114Z</p>
