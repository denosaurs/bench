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
| node | 36888.81 | 368904 |
| fastify | 34547.64 | 380060 |
| deno_canary | 33836 | 338366 |
| alosaur | 29253.46 | 321789 |
| deno | 13968 | 139677 |
| express | 13355.8 | 133562 |
| abc | 11704.8 | 117040 |
| little_std | 11319.82 | 124517 |
| http | 11197.64 | 123160 |
| little_native | 10848.5 | 108483 |
| reno | 9426.8 | 94263 |
| aqua | 8699.4 | 86998 |
| mandarinets | 8697.73 | 95663 |
| dinatra | 8042.5 | 80417 |
| drash | 6595.28 | 72543 |
| oak | 5908.3 | 59072 |
| servest | 4667.11 | 46664 |
| opine | 4534 | 45333 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8431   | 8431   | 12167   | 12655   | 11704.8 | 1231.3 | 8429   | 117040  |
| **Bytes/Sec** | 784 kB | 784 kB | 1.13 MB | 1.18 MB | 1.09 MB | 114 kB | 784 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.97 ms | 1.22 ms | 60 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13071   | 13071   | 31743   | 32463   | 29253.46 | 5366.39 | 13067   | 321789  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 2.83 MB | 2.89 MB | 2.6 MB   | 478 kB  | 1.16 MB | 28.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.89 ms | 30 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 5455   | 5455   | 8967   | 9583   | 8699.4 | 1114.36 | 5455   | 86998 |
| **Bytes/Sec** | 502 kB | 502 kB | 825 kB | 882 kB | 800 kB | 102 kB  | 502 kB | 8 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.05 ms | 1.88 ms | 93 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8527   | 8527   | 9791   | 21135   | 13968   | 5536.95 | 8523   | 139677  |
| **Bytes/Sec** | 759 kB | 759 kB | 871 kB | 1.88 MB | 1.24 MB | 493 kB  | 759 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 2.37 ms | 2.01 ms | 28 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20623   | 20623   | 30911   | 43647   | 33836   | 9923.17 | 20612   | 338366  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 2.75 MB | 3.89 MB | 3.01 MB | 883 kB  | 1.83 MB | 30.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.91 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2515   | 2515   | 8943   | 9231   | 8042.5 | 2046.61 | 2514   | 80417   |
| **Bytes/Sec** | 131 kB | 131 kB | 465 kB | 480 kB | 418 kB | 106 kB  | 131 kB | 4.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 13 ms | 4.74 ms | 3.1 ms | 68 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2341   | 2341   | 7691   | 7903   | 6595.28 | 1840.81 | 2341   | 72543   |
| **Bytes/Sec** | 201 kB | 201 kB | 662 kB | 680 kB | 567 kB  | 158 kB  | 201 kB | 6.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 14 ms | 5.48 ms | 3.17 ms | 53 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7859   | 7859   | 12415   | 18047  | 13355.8 | 3796   | 7859   | 133562  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 2.68 MB | 3.9 MB | 2.88 MB | 820 kB | 1.7 MB | 28.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 2 ms  | 9 ms  | 2.65 ms | 2 ms  | 51 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19071   | 19071   | 35455   | 39199   | 34547.64 | 5042.46 | 19068   | 380060  |
| **Bytes/Sec** | 2.94 MB | 2.94 MB | 5.46 MB | 6.04 MB | 5.32 MB  | 777 kB  | 2.94 MB | 58.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.6 ms | 0.86 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 6847   | 6847   | 11727  | 11791  | 11197.64 | 1392.1  | 6847   | 123160 |
| **Bytes/Sec** | 356 kB | 356 kB | 610 kB | 613 kB | 582 kB   | 72.4 kB | 356 kB | 6.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.27 ms | 1.48 ms | 77 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 3273   | 3273   | 11727   | 11991   | 10848.5 | 2536.83 | 3273   | 108483 |
| **Bytes/Sec** | 422 kB | 422 kB | 1.51 MB | 1.55 MB | 1.4 MB  | 327 kB  | 422 kB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.36 ms | 1.71 ms | 37 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7903    | 7903    | 11671   | 11871   | 11319.82 | 1091.55 | 7902    | 124517  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.51 MB | 1.53 MB | 1.46 MB  | 141 kB  | 1.02 MB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1.01 ms | 21 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2915   | 2915   | 9895   | 10087  | 8697.73 | 2238.11 | 2915   | 95663  |
| **Bytes/Sec** | 271 kB | 271 kB | 920 kB | 937 kB | 809 kB  | 208 kB  | 271 kB | 8.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.88 ms | 2.36 ms | 40 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20111   | 20111   | 43295   | 43711   | 36888.81 | 9991.3  | 20104   | 368904  |
| **Bytes/Sec** | 2.25 MB | 2.25 MB | 4.85 MB | 4.89 MB | 4.13 MB  | 1.12 MB | 2.25 MB | 41.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.89 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3949   | 3949   | 6091   | 6275   | 5908.3 | 661.58  | 3949   | 59072   |
| **Bytes/Sec** | 514 kB | 514 kB | 792 kB | 816 kB | 768 kB | 85.9 kB | 513 kB | 7.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.27 ms | 1.87 ms | 54 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2543   | 2543   | 4667   | 6031   | 4534   | 869.65 | 2543   | 45333   |
| **Bytes/Sec** | 392 kB | 392 kB | 718 kB | 929 kB | 698 kB | 134 kB | 392 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 18 ms | 8.24 ms | 3.32 ms | 52 ms |


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
| **Req/Sec**   | 4843   | 4843   | 10359  | 10679  | 9426.8 | 1842.49 | 4841   | 94263   |
| **Bytes/Sec** | 378 kB | 378 kB | 808 kB | 833 kB | 735 kB | 144 kB  | 378 kB | 7.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.72 ms | 2.18 ms | 41 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1696   | 1696   | 5251   | 6047   | 4667.11 | 1515.72 | 1696   | 46664   |
| **Bytes/Sec** | 195 kB | 195 kB | 604 kB | 696 kB | 537 kB  | 174 kB  | 195 kB | 5.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 8.11 ms | 15.79 ms | 101 ms |


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

<p align="center">Generated 2021-08-24T00:44:15.230Z</p>
