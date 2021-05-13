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
| deno_canary | 37978.91 | 417755 |
| deno | 22326.8 | 223254 |
| http | 21935.6 | 219377 |
| node | 20307.28 | 223357 |
| alosaur | 19854 | 198522 |
| fastify | 19027.28 | 209300 |
| oak | 18738.55 | 206100 |
| express | 15724.91 | 172968 |
| abc | 15066 | 150644 |
| aqua | 14173.6 | 141730 |
| drash | 12278.6 | 122786 |
| little_native | 11771.4 | 117705 |
| reno | 11549.46 | 127041 |
| mandarinets | 9341.8 | 93420 |
| dinatra | 8522.73 | 93735 |
| tinyhttp | 7344 | 73433 |
| little_std | 5891.1 | 58902 |
| opine | 4480.5 | 44794 |
| servest | 3835.6 | 38348 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 11231   | 11231   | 14919   | 16591   | 15066  | 1520.46 | 11229   | 150644 |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.39 MB | 1.54 MB | 1.4 MB | 141 kB  | 1.04 MB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 0.88 ms | 33 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 15191  | 15191  | 20319   | 21375   | 19854   | 1696.5 | 15191  | 198522  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 1.87 MB | 1.97 MB | 1.83 MB | 156 kB | 1.4 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.47 ms | 0.9 ms | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 9839   | 9839   | 14831   | 14927   | 14173.6 | 1486.71 | 9833   | 141730 |
| **Bytes/Sec** | 905 kB | 905 kB | 1.36 MB | 1.37 MB | 1.3 MB  | 137 kB  | 905 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.23 ms | 1.08 ms | 76 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15487   | 15487   | 23087   | 23615  | 22326.8 | 2357.72 | 15486   | 223254  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.06 MB | 2.1 MB | 1.99 MB | 210 kB  | 1.38 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.32 ms | 0.93 ms | 31 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 28303   | 28303   | 38911   | 39487   | 37978.91 | 3076.57 | 28302   | 417755  |
| **Bytes/Sec** | 2.52 MB | 2.52 MB | 3.46 MB | 3.51 MB | 3.38 MB  | 274 kB  | 2.52 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.63 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6655   | 6655   | 8695   | 9031   | 8522.73 | 621.07  | 6654   | 93735   |
| **Bytes/Sec** | 346 kB | 346 kB | 452 kB | 470 kB | 443 kB  | 32.3 kB | 346 kB | 4.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.26 ms | 1.39 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8167   | 8167   | 12703   | 13055   | 12278.6 | 1382.06 | 8166   | 122786  |
| **Bytes/Sec** | 702 kB | 702 kB | 1.09 MB | 1.12 MB | 1.06 MB | 119 kB  | 702 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.83 ms | 1.13 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6503   | 6503   | 17119  | 17903   | 15724.91 | 3090.68 | 6502   | 172968  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 3.7 MB | 3.87 MB | 3.4 MB   | 668 kB  | 1.4 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.07 ms | 1.23 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9607    | 9607    | 20223   | 21311   | 19027.28 | 3149.54 | 9602    | 209300  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.12 MB | 3.28 MB | 2.93 MB  | 485 kB  | 1.48 MB | 32.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.18 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16359  | 16359  | 22623   | 22943   | 21935.6 | 1901.55 | 16358  | 219377  |
| **Bytes/Sec** | 851 kB | 851 kB | 1.18 MB | 1.19 MB | 1.14 MB | 98.9 kB | 851 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.8 ms | 21 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7983    | 7983    | 12247   | 12287   | 11771.4 | 1266.95 | 7980    | 117705  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.58 MB | 1.59 MB | 1.52 MB | 163 kB  | 1.03 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.09 ms | 0.87 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3649   | 3649   | 6179   | 6723   | 5891.1 | 806.98  | 3648   | 58902   |
| **Bytes/Sec** | 336 kB | 336 kB | 568 kB | 619 kB | 542 kB | 74.3 kB | 336 kB | 5.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.38 ms | 1.81 ms | 45 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5639   | 5639   | 9799   | 9871   | 9341.8 | 1241.48 | 5636   | 93420   |
| **Bytes/Sec** | 524 kB | 524 kB | 911 kB | 918 kB | 869 kB | 116 kB  | 524 kB | 8.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 3.81 ms | 1.34 ms | 66 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11127   | 11127   | 21375   | 22719   | 20307.28 | 3026.31 | 11121   | 223357 |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.39 MB | 2.54 MB | 2.27 MB  | 339 kB  | 1.25 MB | 25 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.14 ms | 42 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13871  | 13871  | 19135   | 20111   | 18738.55 | 1649.45 | 13869  | 206100  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.49 MB | 2.62 MB | 2.44 MB  | 214 kB  | 1.8 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.47 ms | 0.76 ms | 19 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3119   | 3119   | 4643   | 4763   | 4480.5 | 472.08  | 3118   | 44794  |
| **Bytes/Sec** | 480 kB | 480 kB | 715 kB | 733 kB | 690 kB | 72.7 kB | 480 kB | 6.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 8 ms  | 13 ms | 8.49 ms | 2.6 ms | 152 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8311   | 8311   | 11919  | 12143  | 11549.46 | 1041.3  | 8311   | 127041  |
| **Bytes/Sec** | 649 kB | 649 kB | 929 kB | 947 kB | 901 kB   | 81.1 kB | 648 kB | 9.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.25 ms | 1.27 ms | 49 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2519   | 2519   | 3569   | 5187   | 3835.6 | 967.53 | 2518   | 38348   |
| **Bytes/Sec** | 290 kB | 290 kB | 410 kB | 596 kB | 441 kB | 111 kB | 290 kB | 4.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 9.95 ms | 16.91 ms | 76 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6159   | 6159   | 7383   | 7979    | 7344   | 444.4   | 6157   | 73433   |
| **Bytes/Sec** | 819 kB | 819 kB | 982 kB | 1.06 MB | 977 kB | 59.1 kB | 819 kB | 9.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 8 ms  | 4.96 ms | 1.44 ms | 51 ms |


---

<p align="center">Generated 2021-05-13T00:54:23.105Z</p>
