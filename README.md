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
| fastify | 38296 | 421293 |
| deno_canary | 20457.2 | 204583 |
| oak | 18391.64 | 202315 |
| node | 16399.6 | 163993 |
| deno | 16006.4 | 160050 |
| http | 15959.6 | 159591 |
| express | 13965.82 | 153632 |
| alosaur | 12338.4 | 123366 |
| drash | 11750.6 | 117498 |
| abc | 8466.46 | 93124 |
| aqua | 8119.4 | 81185 |
| reno | 7434.1 | 74331 |
| mandarinets | 7079.55 | 77868 |
| little_native | 6001.6 | 60014 |
| opine | 5966.3 | 59657 |
| dinatra | 5820.9 | 58203 |
| little_std | 4132.8 | 41328 |
| tinyhttp | 3393.7 | 33928 |
| servest | 2857.1 | 28566 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3471   | 3471   | 9303   | 9999   | 8466.46 | 1881.02 | 3471   | 93124   |
| **Bytes/Sec** | 323 kB | 323 kB | 865 kB | 930 kB | 787 kB  | 175 kB  | 323 kB | 8.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 4.13 ms | 2.59 ms | 53 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8695   | 8695   | 12607   | 13599   | 12338.4 | 1367.49 | 8688   | 123366  |
| **Bytes/Sec** | 800 kB | 800 kB | 1.16 MB | 1.25 MB | 1.14 MB | 126 kB  | 799 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.7 ms | 1.44 ms | 90 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5603   | 5603   | 7311   | 10375  | 8119.4 | 2082.87 | 5601   | 81185   |
| **Bytes/Sec** | 515 kB | 515 kB | 673 kB | 954 kB | 747 kB | 192 kB  | 515 kB | 7.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 4.39 ms | 2.16 ms | 51 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9415   | 9415   | 10951  | 23871   | 16006.4 | 6359.38 | 9409   | 160050  |
| **Bytes/Sec** | 838 kB | 838 kB | 974 kB | 2.13 MB | 1.42 MB | 566 kB  | 837 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 2.06 ms | 1.66 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14407   | 14407   | 21199   | 22399   | 20457.2 | 2171.59 | 14402   | 204583  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 1.89 MB | 1.99 MB | 1.82 MB | 193 kB  | 1.28 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.15 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2075   | 2075   | 6199   | 6675   | 5820.9 | 1289.56 | 2074   | 58203   |
| **Bytes/Sec** | 108 kB | 108 kB | 322 kB | 347 kB | 303 kB | 67.1 kB | 108 kB | 3.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 16 ms | 6.36 ms | 3.27 ms | 55 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8079   | 8079   | 12167   | 12279   | 11750.6 | 1227.03 | 8077   | 117498  |
| **Bytes/Sec** | 695 kB | 695 kB | 1.05 MB | 1.06 MB | 1.01 MB | 106 kB  | 695 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.16 ms | 1.29 ms | 104 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7239    | 7239    | 17391   | 17679   | 13965.82 | 4463.23 | 7239    | 153632  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 3.76 MB | 3.82 MB | 3.02 MB  | 964 kB  | 1.56 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.49 ms | 1.43 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- |
| **Req/Sec**   | 21999   | 21999   | 40319   | 40607   | 38296  | 5253.17 | 21995   | 421293  |
| **Bytes/Sec** | 3.39 MB | 3.39 MB | 6.21 MB | 6.25 MB | 5.9 MB | 809 kB  | 3.39 MB | 64.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.3 ms | 0.78 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 11615  | 11615  | 16247  | 16719  | 15959.6 | 1466.48 | 11608  | 159591 |
| **Bytes/Sec** | 604 kB | 604 kB | 845 kB | 869 kB | 830 kB  | 76.4 kB | 604 kB | 8.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.93 ms | 23 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4511   | 4511   | 4711   | 7767  | 6001.6 | 1415.78 | 4508   | 60014   |
| **Bytes/Sec** | 582 kB | 582 kB | 608 kB | 1 MB  | 774 kB | 183 kB  | 582 kB | 7.74 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 6.21 ms | 2.28 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2409   | 2409   | 4367   | 4535   | 4132.8 | 612.85  | 2409   | 41328  |
| **Bytes/Sec** | 222 kB | 222 kB | 402 kB | 417 kB | 380 kB | 56.4 kB | 222 kB | 3.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9.14 ms | 2.83 ms | 53 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2279   | 2279   | 7951   | 8127   | 7079.55 | 1795.18 | 2278   | 77868   |
| **Bytes/Sec** | 212 kB | 212 kB | 740 kB | 756 kB | 658 kB  | 167 kB  | 212 kB | 7.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 13 ms | 4.96 ms | 2.93 ms | 116 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9831   | 9831   | 11319   | 23359   | 16399.6 | 5748.8 | 9826   | 163993  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.27 MB | 2.62 MB | 1.84 MB | 644 kB | 1.1 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 7 ms  | 1.98 ms | 1.85 ms | 37 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12471   | 12471   | 19007   | 19343   | 18391.64 | 1894.24 | 12469   | 202315  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.47 MB | 2.51 MB | 2.39 MB  | 246 kB  | 1.62 MB | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.73 ms | 0.92 ms | 29 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2561   | 2561   | 6527    | 6599    | 5966.3 | 1241.19 | 2561   | 59657   |
| **Bytes/Sec** | 394 kB | 394 kB | 1.01 MB | 1.02 MB | 919 kB | 191 kB  | 394 kB | 9.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 14 ms | 5.97 ms | 2.81 ms | 48 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 2775   | 2775   | 8271   | 8471   | 7434.1 | 1895.3 | 2775   | 74331  |
| **Bytes/Sec** | 217 kB | 217 kB | 646 kB | 661 kB | 580 kB | 148 kB | 216 kB | 5.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 13 ms | 4.88 ms | 3.33 ms | 182 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1197   | 1197   | 2849   | 3929   | 2857.1 | 758.92  | 1197   | 28566   |
| **Bytes/Sec** | 138 kB | 138 kB | 328 kB | 452 kB | 328 kB | 87.2 kB | 138 kB | 3.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.53 ms | 18.87 ms | 82 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1800   | 1800   | 3721   | 3761   | 3393.7 | 702.56 | 1800   | 33928   |
| **Bytes/Sec** | 283 kB | 283 kB | 584 kB | 590 kB | 533 kB | 110 kB | 283 kB | 5.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 24 ms | 11.17 ms | 4.41 ms | 46 ms |


---

<p align="center">Generated 2021-07-26T00:46:48.975Z</p>
