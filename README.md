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
| alosaur | 42196 | 421970 |
| node | 35970.4 | 359740 |
| drash | 31124.8 | 311223 |
| oak | 26387.28 | 290245 |
| reno | 21868 | 240540 |
| deno | 20205.6 | 202057 |
| deno_canary | 19907.6 | 199073 |
| express | 18050.73 | 198554 |
| fastify | 15542.2 | 155414 |
| aqua | 15403.2 | 154049 |
| abc | 14886.4 | 148869 |
| little_std | 12795.82 | 140749 |
| little_native | 12552 | 125506 |
| dinatra | 9816.91 | 107980 |
| opine | 9130.6 | 91303 |
| mandarinets | 7374.4 | 73741 |
| tinyhttp | 5424.9 | 54246 |
| servest | 3905.64 | 42958 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10703  | 10703  | 15359   | 15687   | 14886.4 | 1413.92 | 10702  | 148869  |
| **Bytes/Sec** | 995 kB | 995 kB | 1.43 MB | 1.46 MB | 1.38 MB | 132 kB  | 995 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 1.09 ms | 63 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30111   | 30111   | 43647   | 44511   | 42196   | 4100.88 | 30110   | 421970  |
| **Bytes/Sec** | 3.37 MB | 3.37 MB | 4.89 MB | 4.98 MB | 4.73 MB | 459 kB  | 3.37 MB | 47.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.13 ms | 0.56 ms | 27 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9647    | 9647    | 15927   | 17343   | 15403.2 | 2080.78 | 9645    | 154049  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.42 MB | 2.64 MB | 2.34 MB | 317 kB  | 1.47 MB | 23.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.15 ms | 1.39 ms | 35 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14807   | 14807   | 20991   | 22255   | 20205.6 | 2415.35 | 14805   | 202057  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.35 MB | 2.49 MB | 2.26 MB | 270 kB  | 1.66 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.47 ms | 1.17 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9199    | 9199    | 23295   | 24143   | 19907.6 | 4957.79 | 9194    | 199073  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 2.61 MB | 2.71 MB | 2.23 MB | 555 kB  | 1.03 MB | 22.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.57 ms | 1.26 ms | 27 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6963   | 6963   | 10159  | 10615  | 9816.91 | 986.52  | 6960   | 107980  |
| **Bytes/Sec** | 362 kB | 362 kB | 528 kB | 552 kB | 510 kB  | 51.4 kB | 362 kB | 5.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.47 ms | 1.67 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23311   | 23311   | 33055   | 33759   | 31124.8 | 3895.25 | 23296   | 311223  |
| **Bytes/Sec** | 3.22 MB | 3.22 MB | 4.56 MB | 4.66 MB | 4.29 MB | 538 kB  | 3.21 MB | 42.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.05 ms | 0.59 ms | 25 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7823    | 7823    | 19215   | 19391   | 18050.73 | 3259.11 | 7820    | 198554  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 4.15 MB | 4.19 MB | 3.9 MB   | 704 kB  | 1.69 MB | 42.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.05 ms | 0.98 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 6495  | 6495  | 16559   | 17103   | 15542.2 | 3033.38 | 6495  | 155414  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 2.55 MB | 2.63 MB | 2.39 MB | 467 kB  | 1 MB  | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.13 ms | 1.46 ms | 37 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8551   | 8551   | 12975   | 13439   | 12552   | 1352.65 | 8545   | 125506  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.97 MB | 2.04 MB | 1.91 MB | 206 kB  | 1.3 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.85 ms | 1.12 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ----- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7859   | 7859   | 13135 | 14359   | 12795.82 | 1643.53 | 7856    | 140749  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 2 MB  | 2.18 MB | 1.94 MB  | 250 kB  | 1.19 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.5 ms | 1.3 ms | 38 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4867   | 4867   | 7731   | 8063   | 7374.4 | 931.89  | 4864   | 73741   |
| **Bytes/Sec** | 453 kB | 453 kB | 719 kB | 750 kB | 686 kB | 86.7 kB | 452 kB | 6.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 4.9 ms | 1.75 ms | 31 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18127   | 18127   | 40703   | 42335   | 35970.4 | 7991.26 | 18112   | 359740  |
| **Bytes/Sec** | 2.03 MB | 2.03 MB | 4.56 MB | 4.74 MB | 4.03 MB | 895 kB  | 2.03 MB | 40.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.82 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 13927   | 13927   | 27711   | 30895   | 26387.28 | 5233.7 | 13921   | 290245  |
| **Bytes/Sec** | 2.13 MB | 2.13 MB | 4.24 MB | 4.73 MB | 4.04 MB  | 801 kB | 2.13 MB | 44.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.69 ms | 36 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6647    | 6647    | 9423    | 9479    | 9130.6  | 829.98 | 6646    | 91303   |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.02 MB | 2.03 MB | 1.95 MB | 178 kB | 1.42 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 4 ms  | 6 ms  | 3.91 ms | 1.3 ms | 44 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14551   | 14551   | 22575   | 23647   | 21868   | 2409.82 | 14547   | 240540  |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 3.43 MB | 3.59 MB | 3.32 MB | 366 kB  | 2.21 MB | 36.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.86 ms | 28 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3175   | 3175   | 3785   | 4787   | 3905.64 | 550.14  | 3175   | 42958   |
| **Bytes/Sec** | 365 kB | 365 kB | 435 kB | 550 kB | 449 kB  | 63.2 kB | 365 kB | 4.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 47 ms | 9.76 ms | 16.69 ms | 68 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3959   | 3959   | 5519   | 5847   | 5424.9 | 509.55  | 3958   | 54246   |
| **Bytes/Sec** | 622 kB | 622 kB | 866 kB | 918 kB | 852 kB | 80.1 kB | 621 kB | 8.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 6.8 ms | 2.98 ms | 120 ms |


---

<p align="center">Generated 2022-06-08T01:22:44.976Z</p>
