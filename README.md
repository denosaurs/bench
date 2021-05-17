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
| deno_canary | 41273.46 | 454063 |
| deno | 40836 | 408351 |
| fastify | 35626.91 | 391946 |
| node | 24499.28 | 269503 |
| http | 17746.8 | 177462 |
| alosaur | 14085.46 | 154935 |
| aqua | 13966.4 | 139667 |
| oak | 12271 | 122704 |
| little_native | 12157.6 | 121572 |
| dinatra | 11813.8 | 118133 |
| abc | 10482.6 | 104816 |
| drash | 10285 | 102852 |
| express | 8989 | 89890 |
| reno | 7919.8 | 79189 |
| mandarinets | 7890 | 86783 |
| tinyhttp | 6141.6 | 61414 |
| opine | 5922.5 | 59214 |
| little_std | 4900.7 | 49000 |
| servest | 3218.7 | 32179 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6903   | 6903   | 10975   | 11119   | 10482.6 | 1213.66 | 6900   | 104816  |
| **Bytes/Sec** | 642 kB | 642 kB | 1.02 MB | 1.03 MB | 975 kB  | 113 kB  | 642 kB | 9.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.35 ms | 1.36 ms | 35 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 14743   | 15159   | 14085.46 | 1832.26 | 8435   | 154935  |
| **Bytes/Sec** | 776 kB | 776 kB | 1.36 MB | 1.39 MB | 1.3 MB   | 169 kB  | 776 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.24 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9223   | 9223   | 14479   | 14751   | 13966.4 | 1594.42 | 9222   | 139667  |
| **Bytes/Sec** | 849 kB | 849 kB | 1.33 MB | 1.36 MB | 1.29 MB | 147 kB  | 848 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.02 ms | 37 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30847   | 30847   | 42495   | 43231   | 40836   | 3536.09 | 30842   | 408351  |
| **Bytes/Sec** | 2.75 MB | 2.75 MB | 3.78 MB | 3.85 MB | 3.63 MB | 314 kB  | 2.74 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.65 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 32191   | 32191   | 42623   | 43487   | 41273.46 | 3062.99 | 32190   | 454063  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 3.79 MB | 3.87 MB | 3.67 MB  | 273 kB  | 2.86 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.61 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8119   | 8119   | 12343  | 12455  | 11813.8 | 1254.17 | 8116   | 118133  |
| **Bytes/Sec** | 422 kB | 422 kB | 642 kB | 648 kB | 614 kB  | 65.3 kB | 422 kB | 6.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.14 ms | 1.14 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 6855   | 6855   | 10583  | 11103  | 10285  | 1178.7 | 6852   | 102852  |
| **Bytes/Sec** | 589 kB | 589 kB | 910 kB | 955 kB | 884 kB | 102 kB | 589 kB | 8.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.4 ms | 1.38 ms | 67 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 9679    | 9935    | 8989    | 1595.96 | 4390   | 89890   |
| **Bytes/Sec** | 949 kB | 949 kB | 2.09 MB | 2.15 MB | 1.94 MB | 345 kB  | 948 kB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.86 ms | 1.93 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 19103   | 19103   | 37567   | 38271   | 35626.91 | 5278.4 | 19095   | 391946  |
| **Bytes/Sec** | 2.94 MB | 2.94 MB | 5.78 MB | 5.89 MB | 5.49 MB  | 813 kB | 2.94 MB | 60.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.55 ms | 0.84 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 11959  | 11959  | 18447  | 18607  | 17746.8 | 1944   | 11955  | 177462  |
| **Bytes/Sec** | 622 kB | 622 kB | 959 kB | 967 kB | 923 kB  | 101 kB | 622 kB | 9.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.69 ms | 1.04 ms | 29 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8711    | 8711    | 12591   | 12831   | 12157.6 | 1173.99 | 8705    | 121572  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.62 MB | 1.66 MB | 1.57 MB | 152 kB  | 1.12 MB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.97 ms | 0.92 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2717   | 2717   | 5139   | 5327   | 4900.7 | 753.91  | 2716   | 49000   |
| **Bytes/Sec** | 250 kB | 250 kB | 473 kB | 490 kB | 451 kB | 69.3 kB | 250 kB | 4.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 15 ms | 7.72 ms | 2.23 ms | 42 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5059   | 5059   | 8207   | 8519   | 7890   | 910.04  | 5057   | 86783   |
| **Bytes/Sec** | 471 kB | 471 kB | 763 kB | 793 kB | 734 kB | 84.6 kB | 470 kB | 8.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.55 ms | 1.7 ms | 105 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13911   | 13911   | 25631   | 26319   | 24499.28 | 3408.09 | 13908   | 269503  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.87 MB | 2.95 MB | 2.74 MB  | 382 kB  | 1.56 MB | 30.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.94 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 8155    | 8155    | 12575   | 13623   | 12271  | 1465.47 | 8152    | 122704 |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.63 MB | 1.77 MB | 1.6 MB | 191 kB  | 1.06 MB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.74 ms | 1.19 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3863   | 3863   | 6163   | 6403   | 5922.5 | 707.89 | 3862   | 59214   |
| **Bytes/Sec** | 595 kB | 595 kB | 949 kB | 986 kB | 912 kB | 109 kB | 595 kB | 9.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.3 ms | 2.02 ms | 115 ms |


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
| **Req/Sec**   | 5423   | 5423   | 8231   | 8351   | 7919.8 | 853.27  | 5420   | 79189   |
| **Bytes/Sec** | 423 kB | 423 kB | 642 kB | 652 kB | 618 kB | 66.6 kB | 423 kB | 6.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.56 ms | 1.82 ms | 77 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 2547   | 2547   | 3081   | 4211   | 3218.7 | 469.27 | 2546   | 32179  |
| **Bytes/Sec** | 293 kB | 293 kB | 355 kB | 484 kB | 370 kB | 54 kB  | 293 kB | 3.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.95 ms | 17.9 ms | 82 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4247   | 4247   | 6175   | 6787   | 6141.6 | 703.56  | 4244   | 61414   |
| **Bytes/Sec** | 565 kB | 565 kB | 821 kB | 903 kB | 817 kB | 93.7 kB | 564 kB | 8.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.14 ms | 2.13 ms | 74 ms |


---

<p align="center">Generated 2021-05-17T00:54:10.625Z</p>
