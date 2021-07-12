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
| deno | 40890.4 | 408897 |
| deno_canary | 38589.82 | 424513 |
| fastify | 37360.73 | 411007 |
| node | 32398.4 | 324004 |
| oak | 17452.41 | 174541 |
| alosaur | 13776.37 | 151535 |
| express | 13724.55 | 150981 |
| aqua | 13396.8 | 133955 |
| http | 12816.8 | 128171 |
| little_native | 11323.82 | 124561 |
| dinatra | 10322.73 | 113530 |
| abc | 9821.64 | 108037 |
| drash | 9788.19 | 107662 |
| reno | 9707 | 97068 |
| mandarinets | 7442.73 | 81865 |
| opine | 5255.55 | 57802 |
| little_std | 4181.64 | 45995 |
| servest | 3546.4 | 35459 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6295   | 6295   | 10159  | 10383  | 9821.64 | 1120.19 | 6294   | 108037 |
| **Bytes/Sec** | 586 kB | 586 kB | 945 kB | 965 kB | 913 kB  | 104 kB  | 585 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.38 ms | 1.48 ms | 103 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10143  | 10143  | 14143  | 14503   | 13776.37 | 1188.43 | 10142  | 151535  |
| **Bytes/Sec** | 933 kB | 933 kB | 1.3 MB | 1.33 MB | 1.27 MB  | 109 kB  | 933 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.14 ms | 66 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9223   | 9223   | 13847   | 13983   | 13396.8 | 1393.2 | 9221   | 133955  |
| **Bytes/Sec** | 848 kB | 848 kB | 1.27 MB | 1.29 MB | 1.23 MB | 128 kB | 848 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.25 ms | 0.97 ms | 25 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30943   | 30943   | 42239   | 43039   | 40890.4 | 3444.65 | 30928   | 408897  |
| **Bytes/Sec** | 2.75 MB | 2.75 MB | 3.76 MB | 3.83 MB | 3.64 MB | 306 kB  | 2.75 MB | 36.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.24 ms | 0.71 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24623   | 24623   | 40543   | 41151   | 38589.82 | 4571.51 | 24615   | 424513  |
| **Bytes/Sec** | 2.19 MB | 2.19 MB | 3.61 MB | 3.66 MB | 3.43 MB  | 407 kB  | 2.19 MB | 37.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.52 ms | 0.81 ms | 40 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7423   | 7423   | 10767  | 10919  | 10322.73 | 966.73  | 7421   | 113530 |
| **Bytes/Sec** | 386 kB | 386 kB | 560 kB | 568 kB | 537 kB   | 50.2 kB | 386 kB | 5.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.34 ms | 1.24 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6511   | 6511   | 10095  | 10447  | 9788.19 | 1078.8  | 6510   | 107662  |
| **Bytes/Sec** | 560 kB | 560 kB | 868 kB | 898 kB | 842 kB  | 92.8 kB | 560 kB | 9.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.46 ms | 1.44 ms | 68 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5171    | 5171    | 14487   | 15567   | 13724.55 | 2809.23 | 5171    | 150981  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 3.13 MB | 3.36 MB | 2.96 MB  | 607 kB  | 1.12 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.55 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21887   | 21887   | 38975 | 39295   | 37360.73 | 4906.06 | 21887   | 411007  |
| **Bytes/Sec** | 3.37 MB | 3.37 MB | 6 MB  | 6.05 MB | 5.75 MB  | 756 kB  | 3.37 MB | 63.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.26 ms | 0.72 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8647   | 8647   | 13215  | 13607  | 12816.8 | 1413.31 | 8644   | 128171  |
| **Bytes/Sec** | 450 kB | 450 kB | 687 kB | 708 kB | 666 kB  | 73.5 kB | 449 kB | 6.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.56 ms | 1.32 ms | 49 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7987    | 7987    | 11759   | 12807   | 11323.82 | 1183.67 | 7984    | 124561  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.52 MB | 1.65 MB | 1.46 MB  | 153 kB  | 1.03 MB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.07 ms | 1.14 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2183   | 2183   | 4499   | 4555   | 4181.64 | 692.21  | 2182   | 45995   |
| **Bytes/Sec** | 201 kB | 201 kB | 414 kB | 419 kB | 385 kB  | 63.7 kB | 201 kB | 4.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 8 ms  | 8 ms  | 18 ms | 9 ms  | 2.83 ms | 56 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4275   | 4275   | 7787   | 7867   | 7442.73 | 1009.39 | 4273   | 81865   |
| **Bytes/Sec** | 398 kB | 398 kB | 724 kB | 732 kB | 692 kB  | 93.9 kB | 397 kB | 7.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 8 ms  | 4.84 ms | 1.74 ms | 91 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16399   | 16399   | 34047   | 34975   | 32398.4 | 5402.84 | 16385   | 324004  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.81 MB | 3.92 MB | 3.63 MB | 605 kB  | 1.84 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 1 ms  | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12599   | 12599   | 18095   | 18271   | 17452.41 | 1668.18 | 12599   | 174541  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.35 MB | 2.38 MB | 2.27 MB  | 217 kB  | 1.64 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.1 ms | 0.77 ms | 21 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 3235   | 3235   | 5463   | 5579   | 5255.55 | 649.85 | 3235   | 57802  |
| **Bytes/Sec** | 498 kB | 498 kB | 841 kB | 859 kB | 809 kB  | 100 kB | 498 kB | 8.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 12 ms | 7.09 ms | 2.41 ms | 128 ms |


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
| **Req/Sec**   | 6835   | 6835   | 10031  | 10151  | 9707   | 969.97  | 6835   | 97068   |
| **Bytes/Sec** | 534 kB | 534 kB | 783 kB | 792 kB | 757 kB | 75.6 kB | 533 kB | 7.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.36 ms | 1.28 ms | 76 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2525   | 2525   | 3065   | 5555   | 3546.4 | 922.97 | 2524   | 35459   |
| **Bytes/Sec** | 290 kB | 290 kB | 353 kB | 639 kB | 408 kB | 106 kB | 290 kB | 4.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 10.78 ms | 17.33 ms | 61 ms |


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

<p align="center">Generated 2021-07-12T00:47:37.301Z</p>
