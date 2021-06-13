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
| deno_canary | 44301.1 | 487333 |
| deno | 26132.8 | 261325 |
| node | 23037.2 | 230367 |
| fastify | 19248.41 | 192488 |
| http | 13316.8 | 133148 |
| aqua | 12385.6 | 123866 |
| oak | 11210.6 | 112091 |
| alosaur | 10721 | 107219 |
| abc | 9317 | 93155 |
| express | 9121.8 | 91225 |
| drash | 9022.21 | 90220 |
| dinatra | 8496.6 | 84961 |
| little_native | 7868.37 | 86547 |
| reno | 7570.8 | 75696 |
| mandarinets | 7089.7 | 70888 |
| opine | 4848.46 | 53326 |
| little_std | 3298.8 | 32986 |
| servest | 3134 | 31336 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6503   | 6503   | 9639   | 9703   | 9317   | 939.78  | 6503   | 93155   |
| **Bytes/Sec** | 605 kB | 605 kB | 897 kB | 903 kB | 866 kB | 87.3 kB | 605 kB | 8.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 4.01 ms | 1.35 ms | 82 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6751   | 6751   | 11079   | 11615   | 10721  | 1349.16 | 6751   | 107219  |
| **Bytes/Sec** | 622 kB | 622 kB | 1.02 MB | 1.07 MB | 986 kB | 124 kB  | 621 kB | 9.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.32 ms | 1.54 ms | 88 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9151   | 9151   | 12719   | 12879   | 12385.6 | 1083.07 | 9150   | 123866  |
| **Bytes/Sec** | 842 kB | 842 kB | 1.17 MB | 1.18 MB | 1.14 MB | 99.6 kB | 842 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3 ms  | 1.03 ms | 61 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17471   | 17471   | 26895   | 27743   | 26132.8 | 2914.49 | 17466   | 261325  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.39 MB | 2.47 MB | 2.33 MB | 259 kB  | 1.55 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.76 ms | 27 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 34303   | 34303   | 45823   | 46111  | 44301.1 | 3348.07 | 34299   | 487333  |
| **Bytes/Sec** | 3.05 MB | 3.05 MB | 4.08 MB | 4.1 MB | 3.94 MB | 298 kB  | 3.05 MB | 43.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.43 ms | 0.63 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5715   | 5715   | 8607   | 9167   | 8496.6 | 964.51  | 5712   | 84961   |
| **Bytes/Sec** | 297 kB | 297 kB | 448 kB | 476 kB | 442 kB | 50.1 kB | 297 kB | 4.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.35 ms | 1.43 ms | 34 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6347   | 6347   | 9231   | 9839   | 9022.21 | 936.93  | 6344   | 90220   |
| **Bytes/Sec** | 546 kB | 546 kB | 794 kB | 846 kB | 776 kB  | 80.7 kB | 546 kB | 7.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.91 ms | 1.38 ms | 49 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4375   | 4375   | 9615    | 10015   | 9121.8  | 1618.83 | 4374   | 91225   |
| **Bytes/Sec** | 945 kB | 945 kB | 2.08 MB | 2.16 MB | 1.97 MB | 350 kB  | 945 kB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.81 ms | 1.88 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9871    | 9871    | 20447   | 21743   | 19248.41 | 3265.84 | 9871    | 192488  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.15 MB | 3.35 MB | 2.96 MB  | 503 kB  | 1.52 MB | 29.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.52 ms | 1.25 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9095   | 9095   | 13783  | 13871  | 13316.8 | 1409.18 | 9091   | 133148  |
| **Bytes/Sec** | 473 kB | 473 kB | 717 kB | 721 kB | 692 kB  | 73.3 kB | 473 kB | 6.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.12 ms | 61 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5507   | 5507   | 7923    | 8727    | 7868.37 | 822.88 | 5504   | 86547   |
| **Bytes/Sec** | 710 kB | 710 kB | 1.02 MB | 1.13 MB | 1.01 MB | 106 kB | 710 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.57 ms | 1.7 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2007   | 2007   | 3467   | 3669   | 3298.8 | 483.81  | 2007   | 32986   |
| **Bytes/Sec** | 185 kB | 185 kB | 319 kB | 338 kB | 303 kB | 44.5 kB | 185 kB | 3.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.63 ms | 3.01 ms | 69 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4059   | 4059   | 7523   | 7551   | 7089.7 | 1031.21 | 4058   | 70888   |
| **Bytes/Sec** | 378 kB | 378 kB | 699 kB | 702 kB | 659 kB | 95.9 kB | 377 kB | 6.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.36 ms | 1.79 ms | 60 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10783   | 10783   | 24511   | 25103   | 23037.2 | 4129.22 | 10783   | 230367  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 2.75 MB | 2.81 MB | 2.58 MB | 462 kB  | 1.21 MB | 25.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.3 ms | 1.16 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7271   | 7271   | 11679   | 12215   | 11210.6 | 1396.6 | 7271   | 112091  |
| **Bytes/Sec** | 946 kB | 946 kB | 1.52 MB | 1.59 MB | 1.46 MB | 181 kB | 945 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.15 ms | 1.28 ms | 30 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ----- | ------ | ------- |
| **Req/Sec**   | 3289   | 3289   | 5043   | 5095   | 4848.46 | 499.8 | 3288   | 53326   |
| **Bytes/Sec** | 506 kB | 506 kB | 776 kB | 784 kB | 747 kB  | 77 kB | 506 kB | 8.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.61 ms | 2.41 ms | 150 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 5127   | 5127   | 7787   | 7983   | 7570.8 | 818.63  | 5125   | 75696  |
| **Bytes/Sec** | 400 kB | 400 kB | 607 kB | 623 kB | 590 kB | 63.9 kB | 400 kB | 5.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.56 ms | 1.72 ms | 31 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2501   | 2501   | 3063   | 3769   | 3134   | 335.99  | 2501   | 31336  |
| **Bytes/Sec** | 288 kB | 288 kB | 352 kB | 434 kB | 360 kB | 38.7 kB | 288 kB | 3.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.28 ms | 18.04 ms | 85 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2021-06-13T00:48:22.751Z</p>
