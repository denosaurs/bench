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
| deno_canary | 41702.55 | 458736 |
| node | 36949.1 | 406421 |
| fastify | 34282 | 342810 |
| deno | 32930.4 | 329319 |
| oak | 16955.6 | 169572 |
| express | 16722 | 183928 |
| http | 15238.19 | 167616 |
| alosaur | 13978.4 | 139789 |
| aqua | 13288 | 132879 |
| abc | 9434.21 | 94336 |
| reno | 9237.8 | 92368 |
| dinatra | 8709.4 | 87088 |
| drash | 8403.8 | 84044 |
| mandarinets | 8033.8 | 80329 |
| little_native | 7290.37 | 80193 |
| opine | 6420.4 | 64190 |
| little_std | 4746.7 | 47462 |
| servest | 3082.2 | 30817 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6115   | 6115   | 9775   | 10159  | 9434.21 | 1134.77 | 6115   | 94336   |
| **Bytes/Sec** | 569 kB | 569 kB | 909 kB | 945 kB | 877 kB  | 106 kB  | 569 kB | 8.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.59 ms | 1.77 ms | 101 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9439   | 9439   | 14559   | 14615   | 13978.4 | 1520.14 | 9439   | 139789  |
| **Bytes/Sec** | 869 kB | 869 kB | 1.34 MB | 1.34 MB | 1.29 MB | 140 kB  | 868 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.27 ms | 75 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9727   | 9727   | 13735   | 13863   | 13288   | 1204.97 | 9722   | 132879  |
| **Bytes/Sec** | 894 kB | 894 kB | 1.26 MB | 1.28 MB | 1.22 MB | 111 kB  | 894 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.07 ms | 40 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 22719   | 22719   | 34111   | 36063   | 32930.4 | 3706   | 22714   | 329319  |
| **Bytes/Sec** | 2.02 MB | 2.02 MB | 3.04 MB | 3.21 MB | 2.93 MB | 330 kB | 2.02 MB | 29.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.66 ms | 0.91 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 30895   | 30895   | 42847   | 43263   | 41702.55 | 3431.47 | 30894   | 458736  |
| **Bytes/Sec** | 2.75 MB | 2.75 MB | 3.81 MB | 3.85 MB | 3.71 MB  | 305 kB  | 2.75 MB | 40.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.16 ms | 0.62 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5883   | 5883   | 8951   | 9487   | 8709.4 | 982.89  | 5883   | 87088   |
| **Bytes/Sec** | 306 kB | 306 kB | 465 kB | 493 kB | 453 kB | 51.1 kB | 306 kB | 4.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.26 ms | 1.56 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5267   | 5267   | 8727   | 8935   | 8403.8 | 1051.22 | 5264   | 84044   |
| **Bytes/Sec** | 453 kB | 453 kB | 751 kB | 768 kB | 723 kB | 90.5 kB | 453 kB | 7.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.31 ms | 2.17 ms | 143 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6907    | 6907    | 17951   | 18143   | 16722   | 3163.13 | 6904    | 183928  |
| **Bytes/Sec** | 1.49 MB | 1.49 MB | 3.88 MB | 3.92 MB | 3.61 MB | 683 kB  | 1.49 MB | 39.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.13 ms | 1.17 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15319   | 15319   | 36479   | 36767   | 34282   | 6330.47 | 15315   | 342810  |
| **Bytes/Sec** | 2.36 MB | 2.36 MB | 5.62 MB | 5.66 MB | 5.28 MB | 975 kB  | 2.36 MB | 52.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.98 ms | 28 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10527  | 10527  | 15815  | 16087  | 15238.19 | 1533.32 | 10520  | 167616  |
| **Bytes/Sec** | 547 kB | 547 kB | 822 kB | 837 kB | 792 kB   | 79.8 kB | 547 kB | 8.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.93 ms | 56 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5335   | 5335   | 7527   | 7779  | 7290.37 | 646.39  | 5335   | 80193   |
| **Bytes/Sec** | 689 kB | 689 kB | 971 kB | 1 MB  | 940 kB  | 83.3 kB | 688 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 8 ms  | 5 ms  | 1.4 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2837   | 2837   | 4995   | 5299   | 4746.7 | 672.1   | 2836   | 47462   |
| **Bytes/Sec** | 261 kB | 261 kB | 460 kB | 487 kB | 437 kB | 61.9 kB | 261 kB | 4.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.93 ms | 2.51 ms | 49 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4759   | 4759   | 8335   | 8575   | 8033.8 | 1099.38 | 4759   | 80329   |
| **Bytes/Sec** | 443 kB | 443 kB | 775 kB | 797 kB | 747 kB | 102 kB  | 443 kB | 7.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.42 ms | 1.59 ms | 40 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18863   | 18863   | 38719   | 39231  | 36949.1 | 5730.24 | 18856   | 406421  |
| **Bytes/Sec** | 2.11 MB | 2.11 MB | 4.34 MB | 4.4 MB | 4.14 MB | 641 kB  | 2.11 MB | 45.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.39 ms | 0.86 ms | 30 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12079   | 12079   | 17599   | 17807   | 16955.6 | 1650.95 | 12075   | 169572 |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 2.29 MB | 2.32 MB | 2.2 MB  | 215 kB  | 1.57 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.12 ms | 0.88 ms | 50 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ----- | ------ | ------- |
| **Req/Sec**   | 4547   | 4547   | 6643    | 6723    | 6420.4 | 630   | 4546   | 64190   |
| **Bytes/Sec** | 700 kB | 700 kB | 1.02 MB | 1.04 MB | 989 kB | 97 kB | 700 kB | 9.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.5 ms | 2.31 ms | 156 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------ |
| **Req/Sec**   | 6567   | 6567   | 9567   | 9615   | 9237.8 | 897.8 | 6566   | 92368  |
| **Bytes/Sec** | 512 kB | 512 kB | 746 kB | 750 kB | 720 kB | 70 kB | 512 kB | 7.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.67 ms | 1.91 ms | 122 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2505   | 2505   | 3087   | 3793   | 3082.2 | 349.62  | 2504   | 30817   |
| **Bytes/Sec** | 288 kB | 288 kB | 355 kB | 436 kB | 354 kB | 40.2 kB | 288 kB | 3.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.48 ms | 18.13 ms | 80 ms |


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

<p align="center">Generated 2021-07-17T00:46:12.528Z</p>
