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
| fastify | 35317.6 | 353151 |
| node | 31749.6 | 317512 |
| deno | 28591.2 | 285897 |
| deno_canary | 21788.4 | 217858 |
| oak | 14289.64 | 157173 |
| abc | 13113.8 | 131137 |
| http | 12052.2 | 120526 |
| reno | 10363.4 | 103620 |
| drash | 10163.4 | 101630 |
| express | 9483.8 | 94831 |
| dinatra | 8911.8 | 89114 |
| alosaur | 7217.2 | 72160 |
| mandarinets | 6609.7 | 66086 |
| little_native | 6308.4 | 63083 |
| servest | 5571.82 | 61286 |
| little_std | 4738.64 | 52117 |
| opine | 4082.2 | 40816 |
| tinyhttp | 2338.6 | 23378 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6071   | 6071   | 14111   | 14215   | 13113.8 | 2390.66 | 6071   | 131137  |
| **Bytes/Sec** | 565 kB | 565 kB | 1.31 MB | 1.32 MB | 1.22 MB | 222 kB  | 565 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.43 ms | 1.39 ms | 59 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4455   | 4455   | 7315   | 7943   | 7217.2 | 967.7   | 4453   | 72160   |
| **Bytes/Sec** | 397 kB | 397 kB | 651 kB | 707 kB | 642 kB | 86.1 kB | 396 kB | 6.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.02 ms | 2.4 ms | 59 ms |


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
| **Req/Sec**   | 18255   | 18255   | 24655   | 38111   | 28591.2 | 9057.26 | 18252   | 285897  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 2.19 MB | 3.39 MB | 2.54 MB | 806 kB  | 1.62 MB | 25.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.78 ms | 1.13 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14871   | 14871   | 22591   | 23359   | 21788.4 | 2391.37 | 14867   | 217858  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 2.01 MB | 2.08 MB | 1.94 MB | 213 kB  | 1.32 MB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.37 ms | 1.01 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4883   | 4883   | 9399   | 9559   | 8911.8 | 1352.46 | 4882   | 89114   |
| **Bytes/Sec** | 254 kB | 254 kB | 488 kB | 497 kB | 463 kB | 70.3 kB | 254 kB | 4.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.93 ms | 2.47 ms | 51 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 10935  | 11047  | 10163.4 | 1962.66 | 4390   | 101630  |
| **Bytes/Sec** | 378 kB | 378 kB | 940 kB | 950 kB | 874 kB  | 169 kB  | 378 kB | 8.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.48 ms | 1.95 ms | 102 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4547   | 4547   | 10095   | 10455   | 9483.8  | 1726.54 | 4547   | 94831   |
| **Bytes/Sec** | 983 kB | 983 kB | 2.18 MB | 2.26 MB | 2.05 MB | 373 kB  | 982 kB | 20.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.64 ms | 1.81 ms | 43 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19407   | 19407   | 40607   | 41055   | 35317.6 | 8360.72 | 19394   | 353151  |
| **Bytes/Sec** | 2.99 MB | 2.99 MB | 6.25 MB | 6.32 MB | 5.44 MB | 1.29 MB | 2.99 MB | 54.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.94 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7975   | 7975   | 12487  | 12831  | 12052.2 | 1383.42 | 7975   | 120526  |
| **Bytes/Sec** | 415 kB | 415 kB | 649 kB | 668 kB | 627 kB  | 72 kB   | 415 kB | 6.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.69 ms | 1.55 ms | 72 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4507   | 4507   | 7123   | 7547   | 6308.4 | 1319.69 | 4507   | 63083   |
| **Bytes/Sec** | 582 kB | 582 kB | 919 kB | 973 kB | 814 kB | 170 kB  | 581 kB | 8.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 12 ms | 5.83 ms | 2.25 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3987   | 3987   | 4163   | 6287   | 4738.64 | 842.92 | 3986   | 52117   |
| **Bytes/Sec** | 514 kB | 514 kB | 537 kB | 811 kB | 611 kB  | 109 kB | 514 kB | 6.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 8 ms  | 14 ms | 7.94 ms | 2.7 ms | 36 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2895   | 2895   | 7123   | 7203   | 6609.7 | 1293.58 | 2895   | 66086   |
| **Bytes/Sec** | 269 kB | 269 kB | 663 kB | 670 kB | 615 kB | 120 kB  | 269 kB | 6.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 16 ms | 5.76 ms | 2.67 ms | 36 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21199   | 21199   | 25503   | 42079   | 31749.6 | 9352.19 | 21197   | 317512  |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 2.86 MB | 4.71 MB | 3.56 MB | 1.05 MB | 2.37 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.63 ms | 1.09 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4107   | 4107   | 16367   | 16703   | 14289.64 | 3886.75 | 4106   | 157173  |
| **Bytes/Sec** | 534 kB | 534 kB | 2.13 MB | 2.17 MB | 1.86 MB  | 505 kB  | 534 kB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.41 ms | 1.63 ms | 38 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2767   | 2767   | 4243   | 4331   | 4082.2 | 446.75  | 2767   | 40816   |
| **Bytes/Sec** | 426 kB | 426 kB | 653 kB | 667 kB | 629 kB | 68.8 kB | 426 kB | 6.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 16 ms | 9.29 ms | 3.23 ms | 175 ms |


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
| **Req/Sec**   | 4679   | 4679   | 10991  | 11127  | 10363.4 | 1897.82 | 4678   | 103620  |
| **Bytes/Sec** | 365 kB | 365 kB | 857 kB | 868 kB | 808 kB  | 148 kB  | 365 kB | 8.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.39 ms | 2.24 ms | 162 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2969   | 2969   | 5847   | 6879   | 5571.82 | 1144.71 | 2969   | 61286   |
| **Bytes/Sec** | 342 kB | 342 kB | 673 kB | 791 kB | 641 kB  | 132 kB  | 341 kB | 7.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 6.66 ms | 14.56 ms | 120 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1434   | 1434   | 2491   | 2591   | 2338.6 | 355.56  | 1434   | 23378   |
| **Bytes/Sec** | 225 kB | 225 kB | 391 kB | 407 kB | 367 kB | 55.8 kB | 225 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 13 ms | 14 ms | 34 ms | 16.62 ms | 5.92 ms | 164 ms |


---

<p align="center">Generated 2021-09-01T00:52:40.337Z</p>
