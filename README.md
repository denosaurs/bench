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
| fastify | 38506.4 | 385089 |
| deno_canary | 36376 | 400111 |
| node | 35812.4 | 358127 |
| deno | 35382.55 | 389171 |
| oak | 18449.2 | 184485 |
| alosaur | 16493.2 | 164941 |
| aqua | 14297.1 | 157256 |
| drash | 12268 | 122673 |
| http | 12170.4 | 121698 |
| abc | 11651.2 | 116501 |
| express | 10116.19 | 111269 |
| reno | 9280.21 | 92793 |
| mandarinets | 7706 | 77060 |
| little_native | 7185.28 | 79035 |
| dinatra | 6144.4 | 61438 |
| opine | 6134.8 | 61337 |
| little_std | 4740.3 | 47397 |
| tinyhttp | 3666.6 | 36660 |
| servest | 3015 | 30146 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 12031   | 12135   | 11651.2 | 1081.07 | 8439   | 116501  |
| **Bytes/Sec** | 785 kB | 785 kB | 1.12 MB | 1.13 MB | 1.08 MB | 100 kB  | 785 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.16 ms | 1.24 ms | 75 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12511   | 12511   | 16911   | 17199   | 16493.2 | 1331.95 | 12508   | 164941  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.56 MB | 1.58 MB | 1.52 MB | 123 kB  | 1.15 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.11 ms | 0.91 ms | 67 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10119  | 10119  | 14727   | 14831   | 14297.1 | 1324.18 | 10115  | 157256  |
| **Bytes/Sec** | 931 kB | 931 kB | 1.35 MB | 1.36 MB | 1.32 MB | 122 kB  | 931 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 0.93 ms | 52 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25343   | 25343   | 36799   | 37407   | 35382.55 | 3300.85 | 25333   | 389171  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 3.27 MB | 3.33 MB | 3.15 MB  | 294 kB  | 2.25 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.8 ms | 0.84 ms | 41 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25711   | 25711   | 37983   | 38783   | 36376   | 3606.67 | 25698   | 400111  |
| **Bytes/Sec** | 2.29 MB | 2.29 MB | 3.38 MB | 3.45 MB | 3.24 MB | 321 kB  | 2.29 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.85 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4543   | 4543   | 6247   | 6507   | 6144.4 | 548.16  | 4542   | 61438   |
| **Bytes/Sec** | 236 kB | 236 kB | 325 kB | 338 kB | 319 kB | 28.5 kB | 236 kB | 3.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 5.96 ms | 2.42 ms | 56 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8583   | 8583   | 12743  | 12815  | 12268   | 1242.49 | 8578   | 122673  |
| **Bytes/Sec** | 738 kB | 738 kB | 1.1 MB | 1.1 MB | 1.05 MB | 107 kB  | 738 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.98 ms | 1.31 ms | 101 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 5255    | 5255    | 10647  | 11327   | 10116.19 | 1615.41 | 5255    | 111269 |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.3 MB | 2.45 MB | 2.18 MB  | 349 kB  | 1.14 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.46 ms | 1.57 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22815   | 22815   | 40447   | 41023   | 38506.4 | 5287.57 | 22804   | 385089  |
| **Bytes/Sec** | 3.51 MB | 3.51 MB | 6.23 MB | 6.32 MB | 5.93 MB | 815 kB  | 3.51 MB | 59.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.76 ms | 22 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8231   | 8231   | 12559  | 12815  | 12170.4 | 1321.82 | 8225   | 121698  |
| **Bytes/Sec** | 428 kB | 428 kB | 653 kB | 667 kB | 633 kB  | 68.8 kB | 428 kB | 6.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.7 ms | 1.38 ms | 53 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4803   | 4803   | 7439   | 7627   | 7185.28 | 776.55 | 4803   | 79035   |
| **Bytes/Sec** | 620 kB | 620 kB | 960 kB | 984 kB | 927 kB  | 100 kB | 620 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.15 ms | 1.41 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3013   | 3013   | 4955   | 5119   | 4740.3 | 596.49  | 3013   | 47397   |
| **Bytes/Sec** | 277 kB | 277 kB | 456 kB | 471 kB | 436 kB | 54.9 kB | 277 kB | 4.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.86 ms | 2.33 ms | 42 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4655   | 4655   | 8131   | 8155   | 7706   | 1027.54 | 4653   | 77060   |
| **Bytes/Sec** | 433 kB | 433 kB | 756 kB | 758 kB | 717 kB | 95.6 kB | 433 kB | 7.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.48 ms | 1.58 ms | 34 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13887   | 13887   | 38431  | 38559   | 35812.4 | 7328.62 | 13884   | 358127  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 4.3 MB | 4.32 MB | 4.01 MB | 821 kB  | 1.56 MB | 40.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.61 ms | 0.96 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12599   | 12599   | 19055   | 19503   | 18449.2 | 1965.42 | 12593   | 184485 |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.48 MB | 2.54 MB | 2.4 MB  | 256 kB  | 1.64 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.9 ms | 0.99 ms | 68 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4307   | 4307   | 6363   | 6463   | 6134.8 | 617.77 | 4307   | 61337   |
| **Bytes/Sec** | 664 kB | 664 kB | 979 kB | 995 kB | 945 kB | 95 kB  | 663 kB | 9.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 5.99 ms | 1.84 ms | 91 ms |


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
| **Req/Sec**   | 6599   | 6599   | 9607   | 9623   | 9280.21 | 896.12  | 6597   | 92793   |
| **Bytes/Sec** | 515 kB | 515 kB | 749 kB | 751 kB | 724 kB  | 69.9 kB | 515 kB | 7.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.6 ms | 1.65 ms | 88 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2161   | 2161   | 2983   | 3819   | 3015   | 399.85 | 2160   | 30146   |
| **Bytes/Sec** | 248 kB | 248 kB | 343 kB | 439 kB | 347 kB | 46 kB  | 248 kB | 3.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.76 ms | 18.27 ms | 117 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2997   | 2997   | 3761   | 3801   | 3666.6 | 228.59  | 2997   | 36660   |
| **Bytes/Sec** | 471 kB | 471 kB | 590 kB | 597 kB | 575 kB | 35.8 kB | 471 kB | 5.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 18 ms | 10.34 ms | 2.43 ms | 45 ms |


---

<p align="center">Generated 2021-08-06T00:50:35.232Z</p>
