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
| node | 33316 | 333154 |
| deno_canary | 32757.6 | 327583 |
| fastify | 32540.8 | 325447 |
| deno | 29480 | 294780 |
| alosaur | 24018 | 240160 |
| oak | 20453.41 | 204498 |
| aqua | 14097.64 | 155070 |
| abc | 12204 | 134235 |
| little_std | 11728 | 128995 |
| little_native | 11483.8 | 114830 |
| dinatra | 8916.91 | 98074 |
| express | 8157.5 | 81571 |
| opine | 7322.8 | 73223 |
| tinyhttp | 5186.11 | 51856 |
| drash | 1283.5 | 12835 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |
| reno | 0 | 0 |
| servest | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8519   | 8519   | 12623   | 12783   | 12204   | 1187.07 | 8516   | 134235  |
| **Bytes/Sec** | 792 kB | 792 kB | 1.17 MB | 1.19 MB | 1.13 MB | 110 kB  | 792 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.95 ms | 1.32 ms | 72 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12991   | 12991   | 24047   | 30255   | 24018   | 5180.67 | 12985   | 240160  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 2.14 MB | 2.69 MB | 2.14 MB | 461 kB  | 1.16 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.93 ms | 32 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 6283   | 6283   | 16047   | 17599   | 14097.64 | 3704.83 | 6283   | 155070 |
| **Bytes/Sec** | 811 kB | 811 kB | 2.07 MB | 2.27 MB | 1.82 MB  | 478 kB  | 811 kB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.5 ms | 36 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13847   | 13847   | 32415   | 35743   | 29480   | 8374.62 | 13845   | 294780  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 2.89 MB | 3.18 MB | 2.62 MB | 745 kB  | 1.23 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.59 ms | 0.99 ms | 20 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15679  | 15679  | 38623   | 40063   | 32757.6 | 9334.61 | 15677  | 327583  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 3.44 MB | 3.57 MB | 2.92 MB | 831 kB  | 1.4 MB | 29.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.85 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6175   | 6175   | 9519   | 10199  | 8916.91 | 1421.06 | 6172   | 98074  |
| **Bytes/Sec** | 321 kB | 321 kB | 495 kB | 530 kB | 464 kB  | 73.9 kB | 321 kB | 5.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.82 ms | 2.76 ms | 67 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1154   | 1154   | 1300   | 1313   | 1283.5 | 44.23   | 1154   | 12835   |
| **Bytes/Sec** | 481 kB | 481 kB | 542 kB | 548 kB | 535 kB | 18.5 kB | 481 kB | 5.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 20 ms | 31 ms | 36 ms | 30.66 ms | 7.04 ms | 272 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3721   | 3721   | 8823   | 9159    | 8157.5  | 1628.68 | 3721   | 81571   |
| **Bytes/Sec** | 804 kB | 804 kB | 1.9 MB | 1.98 MB | 1.76 MB | 352 kB  | 804 kB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.46 ms | 2.1 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18367   | 18367   | 37375   | 38527   | 32540.8 | 7459.75 | 18366   | 325447  |
| **Bytes/Sec** | 2.83 MB | 2.83 MB | 5.75 MB | 5.94 MB | 5.01 MB | 1.15 MB | 2.83 MB | 50.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.54 ms | 0.95 ms | 21 ms |


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
| **Req/Sec**   | 6055   | 6055   | 13447   | 13647   | 11483.8 | 3172.84 | 6053   | 114830  |
| **Bytes/Sec** | 781 kB | 781 kB | 1.73 MB | 1.76 MB | 1.48 MB | 409 kB  | 781 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.74 ms | 1.56 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6183   | 6183   | 13391   | 13863   | 11728   | 2826.78 | 6181   | 128995  |
| **Bytes/Sec** | 798 kB | 798 kB | 1.73 MB | 1.79 MB | 1.51 MB | 365 kB  | 797 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.72 ms | 1.48 ms | 24 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17711   | 17711   | 35775   | 39903   | 33316   | 7624.59 | 17710   | 333154  |
| **Bytes/Sec** | 1.98 MB | 1.98 MB | 4.01 MB | 4.47 MB | 3.73 MB | 854 kB  | 1.98 MB | 37.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.62 ms | 0.9 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7491   | 7491   | 24175   | 24431   | 20453.41 | 6142.35 | 7489   | 204498  |
| **Bytes/Sec** | 974 kB | 974 kB | 3.14 MB | 3.18 MB | 2.66 MB  | 798 kB  | 974 kB | 26.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.25 ms | 40 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 4591   | 4591   | 7543    | 8051    | 7322.8 | 935.53 | 4589   | 73223 |
| **Bytes/Sec** | 877 kB | 877 kB | 1.44 MB | 1.54 MB | 1.4 MB | 179 kB | 876 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.01 ms | 2.12 ms | 94 ms |


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


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3663   | 3663   | 5327   | 5459   | 5186.11 | 510.62  | 3663   | 51856   |
| **Bytes/Sec** | 575 kB | 575 kB | 837 kB | 857 kB | 814 kB  | 80.1 kB | 575 kB | 8.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.27 ms | 2.98 ms | 118 ms |


---

<p align="center">Generated 2022-02-24T01:00:55.031Z</p>
