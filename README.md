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
| deno_canary | 29012 | 290126 |
| node | 25704 | 257015 |
| deno | 24118.4 | 241176 |
| fastify | 19442.8 | 194432 |
| abc | 12362.6 | 123642 |
| little_native | 11216.6 | 112163 |
| express | 9366 | 93647 |
| http | 8957.9 | 89577 |
| little_std | 8419 | 92604 |
| alosaur | 7878.4 | 78782 |
| drash | 7825 | 78243 |
| oak | 5983.3 | 59829 |
| mandarinets | 5687 | 56867 |
| dinatra | 5056.9 | 50564 |
| reno | 4512.1 | 49623 |
| opine | 4277.55 | 47053 |
| tinyhttp | 3614 | 36132 |
| servest | 2011.2 | 20108 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8047   | 8047   | 12823   | 12943  | 12362.6 | 1441.5 | 8044   | 123642  |
| **Bytes/Sec** | 749 kB | 749 kB | 1.19 MB | 1.2 MB | 1.15 MB | 134 kB | 748 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.64 ms | 1.78 ms | 149 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4735   | 4735   | 8031   | 9087   | 7878.4 | 1105.84 | 4734   | 78782   |
| **Bytes/Sec** | 421 kB | 421 kB | 715 kB | 808 kB | 701 kB | 98.4 kB | 421 kB | 7.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 10 ms | 4.51 ms | 2.35 ms | 56 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17151   | 17151   | 25391   | 25727   | 24118.4 | 2723.19 | 17145   | 241176  |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 2.26 MB | 2.29 MB | 2.15 MB | 242 kB  | 1.53 MB | 21.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.84 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21231   | 21231   | 21663   | 44607   | 29012   | 9713.19 | 21230   | 290126  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 1.93 MB | 3.97 MB | 2.58 MB | 864 kB  | 1.89 MB | 25.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.62 ms | 1.04 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3827   | 3827   | 5375   | 5723   | 5056.9 | 654.96 | 3826   | 50564   |
| **Bytes/Sec** | 199 kB | 199 kB | 280 kB | 297 kB | 263 kB | 34 kB  | 199 kB | 2.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 14 ms | 7.4 ms | 2.79 ms | 47 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4783   | 4783   | 7963   | 8951   | 7825   | 1068.18 | 4783   | 78243   |
| **Bytes/Sec** | 411 kB | 411 kB | 685 kB | 770 kB | 673 kB | 91.8 kB | 411 kB | 6.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.59 ms | 2.3 ms | 131 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5171    | 5171    | 8463    | 14287   | 9366    | 2670.19 | 5171    | 93647   |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.83 MB | 3.09 MB | 2.02 MB | 577 kB  | 1.12 MB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 10 ms | 3.76 ms | 2.55 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9319    | 9319    | 20511   | 21503   | 19442.8 | 3444.87 | 9313    | 194432  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 3.16 MB | 3.31 MB | 2.99 MB | 531 kB  | 1.43 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.49 ms | 1.44 ms | 33 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2987   | 2987   | 10927  | 11527  | 8957.9 | 3107.52 | 2986   | 89577   |
| **Bytes/Sec** | 155 kB | 155 kB | 568 kB | 600 kB | 466 kB | 162 kB  | 155 kB | 4.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 10 ms | 4.06 ms | 2.72 ms | 46 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7907    | 7907    | 11575   | 12175   | 11216.6 | 1162.91 | 7906    | 112163  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.49 MB | 1.57 MB | 1.45 MB | 150 kB  | 1.02 MB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.13 ms | 1.11 ms | 18 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2431   | 2431   | 11223   | 12415  | 8419    | 3958.81 | 2431   | 92604   |
| **Bytes/Sec** | 314 kB | 314 kB | 1.45 MB | 1.6 MB | 1.09 MB | 511 kB  | 314 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 16 ms | 4.37 ms | 3.81 ms | 24 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2261   | 2261   | 5431   | 7471   | 5687   | 1729.92 | 2261   | 56867   |
| **Bytes/Sec** | 210 kB | 210 kB | 505 kB | 695 kB | 529 kB | 161 kB  | 210 kB | 5.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 16 ms | 6.54 ms | 3.23 ms | 53 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 16895   | 16895   | 17375   | 39327  | 25704   | 10233.59 | 16895   | 257015  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 1.95 MB | 4.4 MB | 2.88 MB | 1.15 MB  | 1.89 MB | 28.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.94 ms | 1.3 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3339   | 3339   | 6283   | 6699   | 5983.3 | 931.39 | 3339   | 59829   |
| **Bytes/Sec** | 434 kB | 434 kB | 817 kB | 871 kB | 778 kB | 121 kB | 434 kB | 7.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.18 ms | 2.07 ms | 29 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2135   | 2135   | 4715   | 5091   | 4277.55 | 907.2  | 2134   | 47053   |
| **Bytes/Sec** | 329 kB | 329 kB | 727 kB | 784 kB | 659 kB  | 140 kB | 329 kB | 7.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 18 ms | 8.92 ms | 3.64 ms | 187 ms |


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
| **Req/Sec**   | 2077   | 2077   | 4323   | 5903   | 4512.1 | 1063.55 | 2077   | 49623   |
| **Bytes/Sec** | 162 kB | 162 kB | 337 kB | 460 kB | 352 kB | 82.9 kB | 162 kB | 3.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 8 ms  | 18 ms | 8.37 ms | 4.78 ms | 213 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1786   | 1786   | 1964   | 2309   | 2011.2 | 189.17  | 1786   | 20108   |
| **Bytes/Sec** | 205 kB | 205 kB | 226 kB | 265 kB | 231 kB | 21.7 kB | 205 kB | 2.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 8 ms  | 53 ms | 19.42 ms | 19.5 ms | 80 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2957   | 2957   | 3681   | 3761   | 3614   | 222.46  | 2957   | 36132   |
| **Bytes/Sec** | 464 kB | 464 kB | 578 kB | 590 kB | 567 kB | 34.9 kB | 464 kB | 5.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 18 ms | 10.59 ms | 2.45 ms | 77 ms |


---

<p align="center">Generated 2021-09-07T00:46:17.910Z</p>
