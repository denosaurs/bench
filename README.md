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
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| node | 44455.2 | 444510 |
| deno | 27609.6 | 276091 |
| fastify | 21275.6 | 212704 |
| http | 20372 | 224076 |
| aqua | 15729.6 | 157288 |
| express | 15408.6 | 154074 |
| alosaur | 13675 | 136747 |
| dinatra | 12412 | 136528 |
| reno | 12240 | 122382 |
| abc | 11887 | 118861 |
| mandarinets | 11743.82 | 129176 |
| drash | 11492.2 | 114909 |
| tinyhttp | 5812.91 | 63934 |
| opine | 4130.2 | 41296 |
| little_native | 3308.6 | 33083 |
| little_std | 3308.6 | 33083 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6683   | 6683   | 12559   | 12815   | 11887   | 1760.94 | 6683   | 118861  |
| **Bytes/Sec** | 622 kB | 622 kB | 1.17 MB | 1.19 MB | 1.11 MB | 164 kB  | 622 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.98 ms | 1.48 ms | 76 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7955   | 7955   | 14279   | 14543   | 13675   | 1927.52 | 7954   | 136747  |
| **Bytes/Sec** | 732 kB | 732 kB | 1.31 MB | 1.34 MB | 1.26 MB | 177 kB  | 732 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.35 ms | 52 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11695   | 11695   | 16111   | 16303  | 15729.6 | 1350.1 | 11692   | 157288  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.48 MB | 1.5 MB | 1.45 MB | 124 kB | 1.08 MB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.12 ms | 0.72 ms | 21 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 20127   | 20127   | 28287   | 29199  | 27609.6 | 2575.4 | 20121   | 276091  |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 2.52 MB | 2.6 MB | 2.46 MB | 229 kB | 1.79 MB | 24.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.18 ms | 0.64 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 9223   | 9223   | 12839  | 13071  | 12412  | 1035.47 | 9216   | 136528 |
| **Bytes/Sec** | 479 kB | 479 kB | 668 kB | 680 kB | 645 kB | 53.9 kB | 479 kB | 7.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.73 ms | 1.11 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7335   | 7335   | 12039   | 12407   | 11492.2 | 1418.97 | 7333   | 114909  |
| **Bytes/Sec** | 631 kB | 631 kB | 1.04 MB | 1.07 MB | 988 kB  | 122 kB  | 631 kB | 9.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.07 ms | 1.29 ms | 67 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6875    | 6875    | 16295   | 17327   | 15408.6 | 2906.55 | 6873    | 154074  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.52 MB | 3.74 MB | 3.33 MB | 628 kB  | 1.48 MB | 33.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.16 ms | 1.26 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11167   | 11167   | 22351   | 23455   | 21275.6 | 3472.04 | 11166   | 212704  |
| **Bytes/Sec** | 1.72 MB | 1.72 MB | 3.44 MB | 3.61 MB | 3.28 MB | 534 kB  | 1.72 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.11 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14623  | 14623  | 21055   | 21343   | 20372   | 1881.48 | 14621  | 224076  |
| **Bytes/Sec** | 760 kB | 760 kB | 1.09 MB | 1.11 MB | 1.06 MB | 97.9 kB | 760 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.81 ms | 24 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2063   | 2063   | 3457   | 3673   | 3308.6 | 456.45 | 2063   | 33083   |
| **Bytes/Sec** | 190 kB | 190 kB | 318 kB | 338 kB | 304 kB | 42 kB  | 190 kB | 3.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.59 ms | 2.92 ms | 49 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2063   | 2063   | 3457   | 3673   | 3308.6 | 456.45 | 2063   | 33083   |
| **Bytes/Sec** | 190 kB | 190 kB | 318 kB | 338 kB | 304 kB | 42 kB  | 190 kB | 3.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.59 ms | 2.92 ms | 49 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 8063   | 8063   | 12095   | 12191   | 11743.82 | 1165.18 | 8061   | 129176 |
| **Bytes/Sec** | 750 kB | 750 kB | 1.13 MB | 1.13 MB | 1.09 MB  | 108 kB  | 750 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 4 ms  | 3.15 ms | 0.89 ms | 59 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 30495   | 30495   | 46687   | 47231   | 44455.2 | 4836.64 | 30482   | 444510  |
| **Bytes/Sec** | 3.41 MB | 3.41 MB | 5.23 MB | 5.29 MB | 4.98 MB | 542 kB  | 3.41 MB | 49.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.36 ms | 0.66 ms | 23 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 8775   | 8775   | 12295  | 13207   | 12240  | 1257.1  | 8769   | 122382  |
| **Bytes/Sec** | 684 kB | 684 kB | 959 kB | 1.03 MB | 955 kB | 98.2 kB | 684 kB | 9.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.73 ms | 1.36 ms | 71 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2915   | 2915   | 4247   | 4391   | 4130.2 | 418.88  | 2914   | 41296   |
| **Bytes/Sec** | 449 kB | 449 kB | 654 kB | 676 kB | 636 kB | 64.5 kB | 449 kB | 6.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 9 ms  | 15 ms | 9.17 ms | 2.72 ms | 135 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 4151   | 4151   | 5999   | 6283   | 5812.91 | 580.8   | 4148   | 63934  |
| **Bytes/Sec** | 552 kB | 552 kB | 798 kB | 836 kB | 773 kB  | 77.3 kB | 552 kB | 8.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 6 ms  | 11 ms | 6.39 ms | 2.1 ms | 56 ms |


---

<p align="center">Generated 2021-04-30T12:53:33.860Z</p>
