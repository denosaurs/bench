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
| node | 39624.73 | 435874 |
| deno | 18688.41 | 186873 |
| http | 17316 | 190444 |
| deno_canary | 16007.2 | 160069 |
| fastify | 15104.8 | 151059 |
| oak | 13322.73 | 146550 |
| express | 13097.4 | 130980 |
| drash | 12027.28 | 132282 |
| aqua | 11698.6 | 116991 |
| abc | 11556.8 | 115554 |
| alosaur | 11338.4 | 113382 |
| dinatra | 9164.91 | 100824 |
| mandarinets | 8934.21 | 89338 |
| reno | 7035.3 | 70349 |
| opine | 6182.1 | 61816 |
| little_native | 5921.2 | 59211 |
| little_std | 2680.2 | 26795 |
| servest | 2374.81 | 23745 |
| tinyhttp | 2108.81 | 21080 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 11895   | 11983   | 11556.8 | 1042.35 | 8433   | 115554  |
| **Bytes/Sec** | 784 kB | 784 kB | 1.11 MB | 1.12 MB | 1.07 MB | 97 kB   | 784 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.13 ms | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8543   | 8543   | 9775   | 13823   | 11338.4 | 2064.11 | 8541   | 113382  |
| **Bytes/Sec** | 786 kB | 786 kB | 900 kB | 1.27 MB | 1.04 MB | 190 kB  | 786 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.96 ms | 1.52 ms | 76 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7991   | 7991   | 12087   | 12367   | 11698.6 | 1247.8 | 7989   | 116991  |
| **Bytes/Sec** | 735 kB | 735 kB | 1.11 MB | 1.14 MB | 1.08 MB | 115 kB | 735 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.11 ms | 1.18 ms | 76 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10647  | 10647  | 14815   | 25439   | 18688.41 | 6416.32 | 10641  | 186873  |
| **Bytes/Sec** | 947 kB | 947 kB | 1.32 MB | 2.27 MB | 1.66 MB  | 571 kB  | 947 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.76 ms | 1.4 ms | 29 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10967  | 10967  | 11735   | 23055   | 16007.2 | 5266.62 | 10964  | 160069  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.04 MB | 2.05 MB | 1.42 MB | 469 kB  | 976 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 2.02 ms | 1.62 ms | 24 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6559   | 6559   | 9455   | 9735   | 9164.91 | 848.67  | 6558   | 100824  |
| **Bytes/Sec** | 341 kB | 341 kB | 492 kB | 506 kB | 477 kB  | 44.1 kB | 341 kB | 5.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.93 ms | 1.49 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8455   | 8455   | 12367   | 12567   | 12027.28 | 1135.64 | 8451   | 132282  |
| **Bytes/Sec** | 727 kB | 727 kB | 1.06 MB | 1.08 MB | 1.03 MB  | 97.7 kB | 727 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.12 ms | 1.23 ms | 111 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7775    | 7775    | 9663    | 17679   | 13097.4 | 4247.14 | 7772    | 130980  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.09 MB | 3.82 MB | 2.83 MB | 918 kB  | 1.68 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.74 ms | 1.43 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9463    | 9463    | 10639   | 22383   | 15104.8 | 5606.54 | 9463    | 151059  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 1.64 MB | 3.45 MB | 2.33 MB | 863 kB  | 1.46 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 2.13 ms | 1.91 ms | 34 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 12479  | 12479  | 17055  | 18863  | 17316  | 1786.35 | 12474  | 190444 |
| **Bytes/Sec** | 649 kB | 649 kB | 887 kB | 980 kB | 900 kB | 92.9 kB | 649 kB | 9.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.05 ms | 0.8 ms | 21 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4231   | 4231   | 4907   | 8131    | 5921.2 | 1528.4 | 4229   | 59211   |
| **Bytes/Sec** | 546 kB | 546 kB | 633 kB | 1.05 MB | 764 kB | 197 kB | 546 kB | 7.64 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 14 ms | 6.25 ms | 2.82 ms | 37 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1725   | 1725   | 2755   | 3025   | 2680.2 | 382.1   | 1725   | 26795   |
| **Bytes/Sec** | 159 kB | 159 kB | 254 kB | 278 kB | 247 kB | 35.1 kB | 159 kB | 2.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 13 ms | 26 ms | 14.44 ms | 4.16 ms | 58 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5059   | 5059   | 9303   | 9535   | 8934.21 | 1299.88 | 5058   | 89338   |
| **Bytes/Sec** | 471 kB | 471 kB | 865 kB | 887 kB | 831 kB  | 121 kB  | 470 kB | 8.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.26 ms | 1.64 ms | 41 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20447   | 20447   | 43455   | 44223   | 39624.73 | 7888.93 | 20440   | 435874  |
| **Bytes/Sec** | 2.29 MB | 2.29 MB | 4.87 MB | 4.96 MB | 4.44 MB  | 884 kB  | 2.29 MB | 48.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.22 ms | 0.76 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6983   | 6983   | 11127   | 19231  | 13322.73 | 3987.79 | 6982   | 146550  |
| **Bytes/Sec** | 908 kB | 908 kB | 1.45 MB | 2.5 MB | 1.73 MB  | 519 kB  | 908 kB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 5 ms  | 2.64 ms | 1.48 ms | 87 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3111   | 3111   | 6543    | 6631    | 6182.1 | 1028.84 | 3111   | 61816   |
| **Bytes/Sec** | 479 kB | 479 kB | 1.01 MB | 1.02 MB | 952 kB | 158 kB  | 479 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 5.73 ms | 2.32 ms | 42 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3041   | 3041   | 8091   | 8199   | 7035.3 | 1648.6 | 3041   | 70349   |
| **Bytes/Sec** | 237 kB | 237 kB | 631 kB | 639 kB | 549 kB | 129 kB | 237 kB | 5.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 12 ms | 5.06 ms | 2.61 ms | 48 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1724   | 1724   | 2036   | 3679   | 2374.81 | 612     | 1724   | 23745   |
| **Bytes/Sec** | 198 kB | 198 kB | 234 kB | 423 kB | 273 kB  | 70.4 kB | 198 kB | 2.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 16.33 ms | 19.26 ms | 112 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1680   | 1680   | 2201   | 2241   | 2108.81 | 184.33  | 1680   | 21080   |
| **Bytes/Sec** | 264 kB | 264 kB | 346 kB | 352 kB | 331 kB  | 28.9 kB | 264 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 14 ms | 16 ms | 35 ms | 18.46 ms | 5.65 ms | 68 ms |


---

<p align="center">Generated 2021-07-24T00:47:08.750Z</p>
