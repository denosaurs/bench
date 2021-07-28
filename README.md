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
| fastify | 37030.55 | 407330 |
| deno_canary | 34811.2 | 348075 |
| node | 29194.4 | 291952 |
| deno | 26968.8 | 269686 |
| http | 15525.6 | 155256 |
| alosaur | 14039.2 | 140385 |
| aqua | 13719.2 | 137190 |
| express | 12795 | 127937 |
| little_native | 11433.8 | 114337 |
| drash | 10505.8 | 105041 |
| dinatra | 10188.91 | 112069 |
| mandarinets | 8754.1 | 96285 |
| oak | 8069.5 | 80690 |
| reno | 7943.5 | 79433 |
| abc | 7767.2 | 77670 |
| opine | 5783.7 | 57820 |
| little_std | 3103.1 | 31027 |
| tinyhttp | 2976.4 | 29754 |
| servest | 2976.1 | 29756 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5191   | 5191   | 8035   | 8263   | 7767.2 | 873.26  | 5188   | 77670   |
| **Bytes/Sec** | 483 kB | 483 kB | 748 kB | 769 kB | 722 kB | 81.3 kB | 482 kB | 7.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.59 ms | 1.58 ms | 59 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9815   | 9815   | 14535   | 14695   | 14039.2 | 1417.11 | 9813   | 140385  |
| **Bytes/Sec** | 903 kB | 903 kB | 1.34 MB | 1.35 MB | 1.29 MB | 130 kB  | 903 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.08 ms | 59 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9631   | 9631   | 14199   | 14231   | 13719.2 | 1364.69 | 9628   | 137190  |
| **Bytes/Sec** | 886 kB | 886 kB | 1.31 MB | 1.31 MB | 1.26 MB | 125 kB  | 886 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.24 ms | 1.04 ms | 72 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 16575   | 16575   | 23823   | 35903   | 26968.8 | 8401.36 | 16560   | 269686 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.12 MB | 3.19 MB | 2.4 MB  | 748 kB  | 1.47 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.05 ms | 1.16 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 20351   | 20351   | 39103   | 43679   | 34811.2 | 9871.26 | 20341   | 348075 |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 3.48 MB | 3.89 MB | 3.1 MB  | 879 kB  | 1.81 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.87 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7119   | 7119   | 10495  | 10631  | 10188.91 | 976.61  | 7118   | 112069  |
| **Bytes/Sec** | 370 kB | 370 kB | 546 kB | 553 kB | 530 kB   | 50.8 kB | 370 kB | 5.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.41 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5447   | 5447   | 11103  | 11271  | 10505.8 | 1692.9 | 5447   | 105041  |
| **Bytes/Sec** | 468 kB | 468 kB | 954 kB | 969 kB | 903 kB  | 146 kB | 468 kB | 9.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.73 ms | 47 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7579    | 7579    | 9015    | 17999   | 12795   | 4290.98 | 7576    | 127937  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 1.95 MB | 3.89 MB | 2.76 MB | 926 kB  | 1.64 MB | 27.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.82 ms | 1.56 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 19471 | 19471 | 39167   | 39583   | 37030.55 | 5652.22 | 19464 | 407330  |
| **Bytes/Sec** | 3 MB  | 3 MB  | 6.03 MB | 6.09 MB | 5.7 MB   | 870 kB  | 3 MB  | 62.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.29 ms | 0.84 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10527  | 10527  | 15991  | 16351  | 15525.6 | 1680.44 | 10527  | 155256  |
| **Bytes/Sec** | 548 kB | 548 kB | 831 kB | 850 kB | 807 kB  | 87.3 kB | 547 kB | 8.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.04 ms | 62 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7807    | 7807    | 11847   | 11999   | 11433.8 | 1215.25 | 7806    | 114337  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.53 MB | 1.55 MB | 1.48 MB | 157 kB  | 1.01 MB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1 ms  | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1706   | 1706   | 3303   | 3639   | 3103.1 | 518.58  | 1706   | 31027   |
| **Bytes/Sec** | 157 kB | 157 kB | 304 kB | 335 kB | 285 kB | 47.7 kB | 157 kB | 2.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 24 ms | 12.39 ms | 4.28 ms | 78 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3111   | 3111   | 9391   | 9495   | 8754.1 | 1804.44 | 3111   | 96285   |
| **Bytes/Sec** | 290 kB | 290 kB | 873 kB | 883 kB | 814 kB | 168 kB  | 289 kB | 8.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.35 ms | 1.97 ms | 49 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16959  | 16959  | 31055   | 38271   | 29194.4 | 9348.87 | 16954  | 291952  |
| **Bytes/Sec** | 1.9 MB | 1.9 MB | 3.48 MB | 4.29 MB | 3.27 MB | 1.05 MB | 1.9 MB | 32.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.83 ms | 1.24 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3767   | 3767   | 6731   | 13775   | 8069.5  | 3066.96 | 3767   | 80690   |
| **Bytes/Sec** | 490 kB | 490 kB | 875 kB | 1.79 MB | 1.05 MB | 399 kB  | 490 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 5 ms  | 9 ms  | 4.41 ms | 2.67 ms | 135 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ----- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2659   | 2659   | 6523  | 6643    | 5783.7 | 1261.24 | 2659   | 57820  |
| **Bytes/Sec** | 410 kB | 410 kB | 1 MB  | 1.02 MB | 891 kB | 194 kB  | 409 kB | 8.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 13 ms | 6.22 ms | 3.99 ms | 242 ms |


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
| **Req/Sec**   | 3377   | 3377   | 9071   | 9527   | 7943.5 | 1830.12 | 3377   | 79433  |
| **Bytes/Sec** | 263 kB | 263 kB | 707 kB | 743 kB | 620 kB | 143 kB  | 263 kB | 6.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.48 ms | 2.46 ms | 43 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1699   | 1699   | 2195   | 5851   | 2976.1 | 1466.1 | 1699   | 29756   |
| **Bytes/Sec** | 195 kB | 195 kB | 252 kB | 673 kB | 342 kB | 169 kB | 195 kB | 3.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.92 ms | 18.31 ms | 125 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2195   | 2195   | 2967   | 3721   | 2976.4 | 420.99  | 2194   | 29754   |
| **Bytes/Sec** | 345 kB | 345 kB | 466 kB | 584 kB | 467 kB | 66.1 kB | 344 kB | 4.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 12 ms | 29 ms | 13.07 ms | 4.76 ms | 52 ms |


---

<p align="center">Generated 2021-07-28T00:49:24.113Z</p>
