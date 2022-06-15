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
| deno_canary | 41120.81 | 411176 |
| deno | 37845.6 | 378482 |
| alosaur | 37522.19 | 412752 |
| fastify | 36431.2 | 364277 |
| drash | 27773.2 | 277731 |
| reno | 24364 | 243615 |
| oak | 24154.19 | 265690 |
| node | 19490 | 194878 |
| abc | 18022.91 | 198242 |
| aqua | 15171 | 151692 |
| express | 15156.8 | 151552 |
| little_std | 14568.91 | 160260 |
| little_native | 13770.6 | 137685 |
| mandarinets | 10685 | 106837 |
| opine | 9786.37 | 107637 |
| dinatra | 6375.2 | 63749 |
| tinyhttp | 5321.5 | 53217 |
| servest | 4417.55 | 48585 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12719   | 12719   | 18655   | 18895   | 18022.91 | 1710.07 | 12713   | 198242  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.73 MB | 1.76 MB | 1.68 MB  | 159 kB  | 1.18 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.88 ms | 61 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 19967   | 19967   | 42047   | 43039   | 37522.19 | 7291.8 | 19965   | 412752  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 4.71 MB | 4.82 MB | 4.2 MB   | 817 kB | 2.24 MB | 46.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.25 ms | 0.69 ms | 29 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7811    | 7811    | 16415   | 17295   | 15171   | 3122.36 | 7809    | 151692  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 2.49 MB | 2.63 MB | 2.31 MB | 475 kB  | 1.19 MB | 23.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.19 ms | 1.29 ms | 36 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17343   | 17343   | 41727   | 43743  | 37845.6 | 8288.54 | 17329   | 378482  |
| **Bytes/Sec** | 1.94 MB | 1.94 MB | 4.67 MB | 4.9 MB | 4.24 MB | 928 kB  | 1.94 MB | 42.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.72 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31167   | 31167   | 42399   | 42943   | 41120.81 | 3435.51 | 31154   | 411176  |
| **Bytes/Sec** | 3.49 MB | 3.49 MB | 4.75 MB | 4.81 MB | 4.61 MB  | 385 kB  | 3.49 MB | 46.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.31 ms | 0.61 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4615   | 4615   | 6507   | 6843   | 6375.2 | 602.85  | 4613   | 63749   |
| **Bytes/Sec** | 240 kB | 240 kB | 338 kB | 356 kB | 332 kB | 31.4 kB | 240 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.7 ms | 2.17 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15519   | 15519   | 29727  | 32047   | 27773.2 | 5207.14 | 15513   | 277731  |
| **Bytes/Sec** | 2.14 MB | 2.14 MB | 4.1 MB | 4.42 MB | 3.83 MB | 719 kB  | 2.14 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.73 ms | 41 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8255    | 8255    | 16831   | 18159   | 15156.8 | 3746.69 | 8252    | 151552  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 3.63 MB | 3.92 MB | 3.27 MB | 809 kB  | 1.78 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.19 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20495   | 20495   | 38175   | 38655   | 36431.2 | 5331.64 | 20495   | 364277  |
| **Bytes/Sec** | 3.16 MB | 3.16 MB | 5.88 MB | 5.95 MB | 5.61 MB | 820 kB  | 3.16 MB | 56.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.79 ms | 20 ms |


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
| **Req/Sec**   | 6795    | 6795    | 15007   | 16799   | 13770.6 | 2773.47 | 6795    | 137685  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 2.28 MB | 2.55 MB | 2.09 MB | 422 kB  | 1.03 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.11 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7163    | 7163    | 16263   | 16703   | 14568.91 | 3068.79 | 7160    | 160260  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 2.47 MB | 2.54 MB | 2.21 MB  | 467 kB  | 1.09 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.05 ms | 28 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6895   | 6895   | 10991   | 11599   | 10685  | 1289.68 | 6894   | 106837  |
| **Bytes/Sec** | 642 kB | 642 kB | 1.02 MB | 1.08 MB | 994 kB | 120 kB  | 641 kB | 9.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.23 ms | 1.56 ms | 100 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10135   | 10135   | 22863   | 23487   | 19490   | 4882.89 | 10128   | 194878  |
| **Bytes/Sec** | 1.13 MB | 1.13 MB | 2.56 MB | 2.63 MB | 2.18 MB | 547 kB  | 1.13 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.53 ms | 1.24 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15007  | 15007  | 26847   | 27935   | 24154.19 | 5147.82 | 15003  | 265690  |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 4.11 MB | 4.28 MB | 3.7 MB   | 788 kB  | 2.3 MB | 40.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.91 ms | 51 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 7243    | 7243    | 10047   | 10151   | 9786.37 | 808.92 | 7243    | 107637 |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.15 MB | 2.17 MB | 2.09 MB | 173 kB | 1.55 MB | 23 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.75 ms | 1.26 ms | 37 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 13879   | 13879   | 27087   | 29007   | 24364  | 5815.37 | 13874   | 243615 |
| **Bytes/Sec** | 2.11 MB | 2.11 MB | 4.12 MB | 4.41 MB | 3.7 MB | 884 kB  | 2.11 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.82 ms | 25 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3341   | 3341   | 4539   | 5739   | 4417.55 | 972.27 | 3341   | 48585   |
| **Bytes/Sec** | 384 kB | 384 kB | 522 kB | 660 kB | 508 kB  | 112 kB | 384 kB | 5.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 8.58 ms | 15.99 ms | 59 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4065   | 4065   | 5451   | 5515   | 5321.5 | 420.79  | 4065   | 53217   |
| **Bytes/Sec** | 638 kB | 638 kB | 856 kB | 866 kB | 835 kB | 66.1 kB | 638 kB | 8.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 6.98 ms | 2.75 ms | 97 ms |


---

<p align="center">Generated 2022-06-15T01:29:12.634Z</p>
