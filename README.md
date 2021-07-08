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
| node | 42355.64 | 465893 |
| fastify | 37610.91 | 413729 |
| deno | 36583.2 | 365858 |
| deno_canary | 21247.6 | 212481 |
| oak | 17061.2 | 170611 |
| express | 16269 | 162694 |
| alosaur | 13697.6 | 136968 |
| aqua | 13110.4 | 131106 |
| http | 12280.6 | 122794 |
| drash | 12099.46 | 133090 |
| little_native | 12094.37 | 133027 |
| reno | 9495.4 | 94946 |
| abc | 8027.2 | 80279 |
| opine | 6375.82 | 70122 |
| mandarinets | 5907.1 | 59061 |
| dinatra | 5505.5 | 55048 |
| servest | 3369.91 | 37064 |
| little_std | 3121.5 | 31210 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5439   | 5439   | 8303   | 8447   | 8027.2 | 867.05  | 5439   | 80279   |
| **Bytes/Sec** | 506 kB | 506 kB | 772 kB | 785 kB | 747 kB | 80.6 kB | 506 kB | 7.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.42 ms | 1.56 ms | 82 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9375   | 9375   | 14183   | 14439   | 13697.6 | 1462.26 | 9371   | 136968  |
| **Bytes/Sec** | 862 kB | 862 kB | 1.31 MB | 1.33 MB | 1.26 MB | 135 kB  | 862 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.16 ms | 71 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9423   | 9423   | 13519   | 13727   | 13110.4 | 1242.75 | 9421   | 131106  |
| **Bytes/Sec** | 867 kB | 867 kB | 1.24 MB | 1.26 MB | 1.21 MB | 114 kB  | 867 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.15 ms | 68 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23711   | 23711   | 38303   | 39935   | 36583.2 | 4563.91 | 23708   | 365858  |
| **Bytes/Sec** | 2.11 MB | 2.11 MB | 3.41 MB | 3.56 MB | 3.26 MB | 406 kB  | 2.11 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.82 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13543   | 13543   | 21951   | 23151   | 21247.6 | 2611.39 | 13539  | 212481  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.95 MB | 2.06 MB | 1.89 MB | 232 kB  | 1.2 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.23 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3765   | 3765   | 5567   | 5983   | 5505.5 | 605.36  | 3764   | 55048   |
| **Bytes/Sec** | 196 kB | 196 kB | 290 kB | 311 kB | 286 kB | 31.5 kB | 196 kB | 2.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 12 ms | 6.79 ms | 2.19 ms | 54 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8119   | 8119   | 12519   | 12607   | 12099.46 | 1261.02 | 8119   | 133090  |
| **Bytes/Sec** | 698 kB | 698 kB | 1.08 MB | 1.08 MB | 1.04 MB  | 108 kB  | 698 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.1 ms | 0.92 ms | 37 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7823    | 7823    | 17375   | 17663   | 16269   | 2848.31 | 7823    | 162694  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.75 MB | 3.82 MB | 3.51 MB | 615 kB  | 1.69 MB | 35.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.13 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21599   | 21599   | 39551   | 40223  | 37610.91 | 5135.23 | 21593   | 413729  |
| **Bytes/Sec** | 3.33 MB | 3.33 MB | 6.09 MB | 6.2 MB | 5.79 MB  | 791 kB  | 3.33 MB | 63.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.84 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8099   | 8099   | 12831  | 13375  | 12280.6 | 1488.34 | 8096   | 122794  |
| **Bytes/Sec** | 421 kB | 421 kB | 667 kB | 695 kB | 639 kB  | 77.4 kB | 421 kB | 6.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.69 ms | 1.5 ms | 65 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 8151    | 8151    | 12463   | 12711   | 12094.37 | 1252.3 | 8148    | 133027  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.61 MB | 1.64 MB | 1.56 MB  | 162 kB | 1.05 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.15 ms | 0.97 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1934   | 1934   | 3269   | 3489   | 3121.5 | 428.16  | 1934   | 31210   |
| **Bytes/Sec** | 178 kB | 178 kB | 301 kB | 321 kB | 287 kB | 39.4 kB | 178 kB | 2.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 12 ms | 21 ms | 12.35 ms | 3.39 ms | 67 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3433   | 3433   | 6115   | 6551   | 5907.1 | 865.8   | 3433   | 59061   |
| **Bytes/Sec** | 319 kB | 319 kB | 569 kB | 609 kB | 549 kB | 80.4 kB | 319 kB | 5.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.32 ms | 2.59 ms | 153 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 25919  | 25919  | 44063   | 44767   | 42355.64 | 5231.16 | 25918  | 465893  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 4.94 MB | 5.01 MB | 4.74 MB  | 586 kB  | 2.9 MB | 52.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.11 ms | 0.61 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12447   | 12447   | 17631   | 18015   | 17061.2 | 1592.85 | 12447   | 170611  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.29 MB | 2.34 MB | 2.22 MB | 207 kB  | 1.62 MB | 22.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.12 ms | 0.78 ms | 21 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4511   | 4511   | 6563    | 6643    | 6375.82 | 591.8   | 4510   | 70122   |
| **Bytes/Sec** | 695 kB | 695 kB | 1.01 MB | 1.02 MB | 982 kB  | 91.1 kB | 695 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.51 ms | 1.74 ms | 115 ms |


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
| **Req/Sec**   | 6991   | 6991   | 9799   | 9943   | 9495.4 | 853.71  | 6991   | 94946   |
| **Bytes/Sec** | 546 kB | 546 kB | 764 kB | 775 kB | 741 kB | 66.4 kB | 545 kB | 7.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.44 ms | 1.3 ms | 52 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2533   | 2533   | 3105   | 4975   | 3369.91 | 738.12  | 2532   | 37064   |
| **Bytes/Sec** | 291 kB | 291 kB | 357 kB | 572 kB | 388 kB  | 84.9 kB | 291 kB | 4.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 47 ms | 11.39 ms | 17.58 ms | 73 ms |


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

<p align="center">Generated 2021-07-08T00:44:55.186Z</p>
