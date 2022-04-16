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
| deno | 42062.4 | 420592 |
| alosaur | 34974.4 | 349756 |
| fastify | 30791.6 | 307899 |
| reno | 30504 | 335539 |
| deno_canary | 27230.4 | 272311 |
| oak | 26536.8 | 265366 |
| aqua | 21534.4 | 215355 |
| node | 17643.2 | 176428 |
| abc | 12988.8 | 129878 |
| little_std | 12986.6 | 129861 |
| express | 12405 | 124033 |
| little_native | 11096.2 | 110956 |
| dinatra | 10196.19 | 112146 |
| opine | 9741 | 97408 |
| tinyhttp | 5232.28 | 57546 |
| drash | 1244.41 | 12444 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |
| servest | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8687   | 8687   | 13439   | 13623   | 12988.8 | 1438.22 | 8681   | 129878  |
| **Bytes/Sec** | 807 kB | 807 kB | 1.25 MB | 1.27 MB | 1.21 MB | 134 kB  | 807 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.31 ms | 1.71 ms | 146 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19231   | 19231   | 38079   | 38623   | 34974.4 | 6159.89 | 19216   | 349756  |
| **Bytes/Sec** | 2.15 MB | 2.15 MB | 4.26 MB | 4.33 MB | 3.92 MB | 690 kB  | 2.15 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.77 ms | 28 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%  | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------ | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 13175 | 13175 | 23855   | 24335  | 21534.4 | 4014.33 | 13173 | 215355  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 3.62 MB | 3.7 MB | 3.27 MB | 610 kB  | 2 MB  | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 0.86 ms | 23 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21263   | 21263   | 48127   | 48447   | 42062.4 | 9174.96 | 21248   | 420592  |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 5.39 MB | 5.43 MB | 4.71 MB | 1.03 MB | 2.38 MB | 47.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.69 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12247   | 12247   | 30623   | 32927   | 27230.4 | 7443.05 | 12246   | 272311  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 3.43 MB | 3.69 MB | 3.05 MB | 834 kB  | 1.37 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.28 ms | 0.95 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7879   | 7879   | 10439  | 10887  | 10196.19 | 803.41  | 7876   | 112146  |
| **Bytes/Sec** | 410 kB | 410 kB | 543 kB | 566 kB | 530 kB   | 41.8 kB | 410 kB | 5.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.38 ms | 2.09 ms | 70 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1128   | 1128   | 1256   | 1273   | 1244.41 | 40.49   | 1128   | 12444   |
| **Bytes/Sec** | 496 kB | 496 kB | 553 kB | 560 kB | 547 kB  | 17.8 kB | 496 kB | 5.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 21 ms | 32 ms | 36 ms | 31.64 ms | 7.46 ms | 277 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5127    | 5127    | 13263   | 13751   | 12405   | 2457.71 | 5127    | 124033  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 2.87 MB | 2.97 MB | 2.68 MB | 531 kB  | 1.11 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.62 ms | 1.64 ms | 44 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14639   | 14639   | 32607   | 33183   | 30791.6 | 5439.04 | 14639   | 307899  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 5.02 MB | 5.11 MB | 4.74 MB | 838 kB  | 2.25 MB | 47.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.06 ms | 0.81 ms | 31 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7383    | 7383    | 11479   | 12143   | 11096.2 | 1325.31 | 7380    | 110956  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.74 MB | 1.85 MB | 1.69 MB | 201 kB  | 1.12 MB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.18 ms | 1.38 ms | 35 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6479   | 6479   | 14159   | 14671   | 12986.6 | 2457.7 | 6476   | 129861  |
| **Bytes/Sec** | 985 kB | 985 kB | 2.15 MB | 2.23 MB | 1.97 MB | 374 kB | 984 kB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.49 ms | 1.38 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%    | 2.5%  | 50%    | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------ | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 8951  | 8951  | 19663  | 22191   | 17643.2 | 4668.09 | 8950  | 176428  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 2.2 MB | 2.49 MB | 1.98 MB | 523 kB  | 1 MB  | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.8 ms | 1.36 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9679    | 9679    | 30111   | 30495   | 26536.8 | 7226.93 | 9675    | 265366  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 4.61 MB | 4.67 MB | 4.06 MB | 1.11 MB | 1.48 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.08 ms | 0.97 ms | 35 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7279    | 7279    | 10039   | 10135   | 9741    | 829.1  | 7279    | 97408   |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.15 MB | 2.17 MB | 2.08 MB | 177 kB | 1.56 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.73 ms | 1.3 ms | 63 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 17887   | 17887   | 34143   | 34719   | 30504   | 6366.11 | 17882   | 335539 |
| **Bytes/Sec** | 2.72 MB | 2.72 MB | 5.19 MB | 5.28 MB | 4.64 MB | 967 kB  | 2.72 MB | 51 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.11 ms | 0.55 ms | 18 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3719   | 3719   | 5455   | 5555   | 5232.28 | 521.3   | 3719   | 57546   |
| **Bytes/Sec** | 584 kB | 584 kB | 856 kB | 872 kB | 821 kB  | 81.8 kB | 584 kB | 9.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 17 ms | 7.33 ms | 3.22 ms | 97 ms |


---

<p align="center">Generated 2022-04-16T01:11:44.629Z</p>
