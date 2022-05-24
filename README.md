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
| deno_canary | 41872.81 | 418724 |
| deno | 41416 | 414134 |
| node | 36776.81 | 367752 |
| drash | 35276.37 | 388036 |
| alosaur | 35225.46 | 387464 |
| reno | 33302.55 | 366268 |
| fastify | 30380.73 | 334207 |
| aqua | 22960.37 | 252579 |
| oak | 18278 | 182784 |
| little_native | 13938.37 | 153316 |
| mandarinets | 11062.6 | 110620 |
| express | 10237.1 | 102362 |
| opine | 9908.21 | 99083 |
| abc | 9080.21 | 90804 |
| little_std | 8708.6 | 87087 |
| tinyhttp | 5799.6 | 57997 |
| dinatra | 5791.73 | 63706 |
| servest | 4207 | 42060 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5183   | 5183   | 10383  | 10799 | 9080.21 | 2078.04 | 5181   | 90804   |
| **Bytes/Sec** | 482 kB | 482 kB | 965 kB | 1 MB  | 844 kB  | 193 kB  | 482 kB | 8.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.89 ms | 2.13 ms | 77 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21183   | 21183   | 39071   | 40031   | 35225.46 | 6499.31 | 21179   | 387464  |
| **Bytes/Sec** | 2.37 MB | 2.37 MB | 4.38 MB | 4.48 MB | 3.95 MB  | 728 kB  | 2.37 MB | 43.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.33 ms | 0.71 ms | 28 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13095   | 13095   | 25151   | 25855   | 22960.37 | 4145.29 | 13088   | 252579  |
| **Bytes/Sec** | 1.99 MB | 1.99 MB | 3.82 MB | 3.93 MB | 3.49 MB  | 630 kB  | 1.99 MB | 38.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.71 ms | 28 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22847   | 22847   | 47071   | 48063   | 41416   | 9833.01 | 22834   | 414134  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 5.27 MB | 5.39 MB | 4.64 MB | 1.1 MB  | 2.56 MB | 46.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.71 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 32063   | 32063   | 43263   | 43807   | 41872.81 | 3376.4 | 32060   | 418724  |
| **Bytes/Sec** | 3.59 MB | 3.59 MB | 4.85 MB | 4.91 MB | 4.69 MB  | 378 kB | 3.59 MB | 46.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.58 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3589   | 3589   | 6415   | 6639   | 5791.73 | 1028.39 | 3588   | 63706   |
| **Bytes/Sec** | 187 kB | 187 kB | 334 kB | 345 kB | 301 kB  | 53.5 kB | 187 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 6.35 ms | 2.86 ms | 46 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25903   | 25903   | 36191 | 36479   | 35276.37 | 2970.16 | 25900   | 388036  |
| **Bytes/Sec** | 3.58 MB | 3.58 MB | 5 MB  | 5.03 MB | 4.87 MB  | 409 kB  | 3.57 MB | 53.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 1 ms  | 0.96 ms | 0.54 ms | 39 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3055   | 3055   | 12159   | 14783   | 10237.1 | 3668.07 | 3054   | 102362  |
| **Bytes/Sec** | 660 kB | 660 kB | 2.63 MB | 3.19 MB | 2.21 MB | 792 kB  | 660 kB | 22.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 13 ms | 3.53 ms | 2.58 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13095   | 13095   | 31791  | 33727   | 30380.73 | 5554.76 | 13093   | 334207  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 4.9 MB | 5.19 MB | 4.68 MB  | 855 kB  | 2.02 MB | 51.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.98 ms | 0.92 ms | 31 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7115    | 7115    | 15615   | 15759  | 13938.37 | 2929.06 | 7114    | 153316  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 2.37 MB | 2.4 MB | 2.12 MB  | 445 kB  | 1.08 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.07 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6867    | 6867    | 8791    | 9279    | 8708.6  | 642.14  | 6865    | 87087   |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.34 MB | 1.41 MB | 1.32 MB | 97.5 kB | 1.04 MB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 7 ms  | 4.13 ms | 1.36 ms | 34 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6631   | 6631   | 11463   | 11711   | 11062.6 | 1482.69 | 6630   | 110620  |
| **Bytes/Sec** | 617 kB | 617 kB | 1.07 MB | 1.09 MB | 1.03 MB | 138 kB  | 617 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.26 ms | 1.4 ms | 63 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20111   | 20111   | 41631   | 42271   | 36776.81 | 7909.67 | 20102   | 367752  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 4.66 MB | 4.73 MB | 4.12 MB  | 885 kB  | 2.25 MB | 41.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.53 ms | 0.78 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 11447   | 11447   | 18959  | 19711   | 18278  | 2360.88 | 11445   | 182784 |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 2.9 MB | 3.02 MB | 2.8 MB | 361 kB  | 1.75 MB | 28 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.63 ms | 1.11 ms | 48 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7239    | 7239    | 10199   | 10367   | 9908.21 | 902.75 | 7237    | 99083   |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.18 MB | 2.22 MB | 2.12 MB | 193 kB | 1.55 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.66 ms | 1.32 ms | 48 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25439   | 25439   | 34207  | 34431   | 33302.55 | 2507.85 | 25436   | 366268  |
| **Bytes/Sec** | 3.87 MB | 3.87 MB | 5.2 MB | 5.23 MB | 5.06 MB  | 381 kB  | 3.87 MB | 55.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.46 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2967   | 2967   | 3819   | 5811   | 4207   | 856.91  | 2966   | 42060   |
| **Bytes/Sec** | 341 kB | 341 kB | 439 kB | 668 kB | 484 kB | 98.5 kB | 341 kB | 4.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.01 ms | 16.25 ms | 68 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4119   | 4119   | 5987   | 6047   | 5799.6 | 562.54  | 4118   | 57997   |
| **Bytes/Sec** | 647 kB | 647 kB | 940 kB | 949 kB | 911 kB | 88.4 kB | 647 kB | 9.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 14 ms | 6.47 ms | 2.58 ms | 92 ms |


---

<p align="center">Generated 2022-05-24T01:39:04.023Z</p>
