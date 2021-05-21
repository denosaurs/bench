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
| deno | 44775.28 | 492521 |
| deno_canary | 43750.4 | 437496 |
| node | 41734.55 | 459095 |
| fastify | 32800.81 | 327984 |
| alosaur | 19491.6 | 194915 |
| http | 18685.2 | 186835 |
| express | 16502 | 165009 |
| aqua | 12242.4 | 122414 |
| little_native | 12094.37 | 133028 |
| oak | 10678.37 | 117458 |
| abc | 10136.19 | 111488 |
| drash | 9535.8 | 95356 |
| mandarinets | 9234.21 | 92346 |
| dinatra | 7857.1 | 86423 |
| reno | 7271.2 | 72708 |
| opine | 6760.4 | 67600 |
| tinyhttp | 5720.8 | 57199 |
| servest | 5237.7 | 52369 |
| little_std | 4536.55 | 49894 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6507   | 6507   | 10543  | 10743  | 10136.19 | 1187.31 | 6506   | 111488  |
| **Bytes/Sec** | 605 kB | 605 kB | 980 kB | 999 kB | 943 kB   | 110 kB  | 605 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.41 ms | 1.47 ms | 79 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14719   | 14719   | 20047   | 20367   | 19491.6 | 1635.19 | 14718   | 194915  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 1.84 MB | 1.87 MB | 1.79 MB | 150 kB  | 1.35 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.83 ms | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8591   | 8591   | 12607   | 13711   | 12242.4 | 1342.55 | 8584   | 122414  |
| **Bytes/Sec** | 790 kB | 790 kB | 1.16 MB | 1.26 MB | 1.13 MB | 124 kB  | 790 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.73 ms | 1.34 ms | 79 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 34911   | 34911   | 45887   | 46175   | 44775.28 | 3151.14 | 34911   | 492521  |
| **Bytes/Sec** | 3.11 MB | 3.11 MB | 4.08 MB | 4.11 MB | 3.98 MB  | 280 kB  | 3.11 MB | 43.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.57 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 33247   | 33247   | 44959 | 45407   | 43750.4 | 3519.8 | 33238   | 437496  |
| **Bytes/Sec** | 2.96 MB | 2.96 MB | 4 MB  | 4.04 MB | 3.89 MB | 313 kB | 2.96 MB | 38.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.65 ms | 38 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5543   | 5543   | 8095   | 8311   | 7857.1 | 742.97  | 5541   | 86423   |
| **Bytes/Sec** | 288 kB | 288 kB | 421 kB | 432 kB | 409 kB | 38.6 kB | 288 kB | 4.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.58 ms | 1.54 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6987   | 6987   | 9607   | 10639  | 9535.8 | 957.61  | 6984   | 95356  |
| **Bytes/Sec** | 601 kB | 601 kB | 826 kB | 915 kB | 820 kB | 82.3 kB | 601 kB | 8.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.69 ms | 1.37 ms | 36 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8215    | 8215    | 17503   | 17695   | 16502   | 2778.01 | 8212    | 165009  |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 3.78 MB | 3.82 MB | 3.56 MB | 600 kB  | 1.77 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.13 ms | 0.98 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16511   | 16511   | 35039  | 35519   | 32800.81 | 5519.65 | 16505   | 327984  |
| **Bytes/Sec** | 2.54 MB | 2.54 MB | 5.4 MB | 5.47 MB | 5.05 MB  | 850 kB  | 2.54 MB | 50.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.69 ms | 0.96 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13103  | 13103  | 19247 | 19519   | 18685.2 | 1867.62 | 13099  | 186835  |
| **Bytes/Sec** | 681 kB | 681 kB | 1 MB  | 1.01 MB | 972 kB  | 97.1 kB | 681 kB | 9.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 0.95 ms | 29 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8167    | 8167    | 12487   | 12591   | 12094.37 | 1243.81 | 8166    | 133028  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.61 MB | 1.63 MB | 1.56 MB  | 160 kB  | 1.05 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.05 ms | 0.85 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2625   | 2625   | 4691   | 5195   | 4536.55 | 712.99  | 2624   | 49894   |
| **Bytes/Sec** | 242 kB | 242 kB | 432 kB | 478 kB | 417 kB  | 65.6 kB | 241 kB | 4.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.29 ms | 2.7 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5579   | 5579   | 9623   | 9775   | 9234.21 | 1222.44 | 5578   | 92346   |
| **Bytes/Sec** | 519 kB | 519 kB | 895 kB | 909 kB | 859 kB  | 114 kB  | 519 kB | 8.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.93 ms | 1.41 ms | 65 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 25711   | 25711   | 43263   | 44223   | 41734.55 | 5091.9 | 25706   | 459095  |
| **Bytes/Sec** | 2.88 MB | 2.88 MB | 4.85 MB | 4.96 MB | 4.67 MB  | 570 kB | 2.88 MB | 51.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.68 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 6335   | 6335   | 11119   | 11447   | 10678.37 | 1397.2 | 6333   | 117458  |
| **Bytes/Sec** | 823 kB | 823 kB | 1.45 MB | 1.49 MB | 1.39 MB  | 182 kB | 823 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.31 ms | 1.34 ms | 42 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4747   | 4747   | 6971    | 7051    | 6760.4  | 675.5  | 4745   | 67600   |
| **Bytes/Sec** | 731 kB | 731 kB | 1.07 MB | 1.09 MB | 1.04 MB | 104 kB | 731 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.39 ms | 1.61 ms | 101 ms |


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
| **Req/Sec**   | 4759   | 4759   | 7371   | 8103   | 7271.2 | 898.88  | 4757   | 72708   |
| **Bytes/Sec** | 371 kB | 371 kB | 575 kB | 632 kB | 567 kB | 70.1 kB | 371 kB | 5.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 5 ms  | 2.22 ms | 111 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2963   | 2963   | 5375   | 6135   | 5237.7 | 986.24 | 2963   | 52369   |
| **Bytes/Sec** | 341 kB | 341 kB | 618 kB | 706 kB | 602 kB | 113 kB | 341 kB | 6.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.16 ms | 14.91 ms | 57 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4227   | 4227   | 5843   | 6255   | 5720.8 | 583.24  | 4224   | 57199   |
| **Bytes/Sec** | 562 kB | 562 kB | 777 kB | 832 kB | 761 kB | 77.6 kB | 562 kB | 7.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 11 ms | 6.47 ms | 2.03 ms | 46 ms |


---

<p align="center">Generated 2021-05-21T00:54:32.971Z</p>
