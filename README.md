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
| deno_canary | 31620.1 | 316217 |
| node | 21635.6 | 216343 |
| alosaur | 21062.73 | 231654 |
| fastify | 14817.6 | 148191 |
| http | 13515 | 135155 |
| abc | 12180.8 | 121804 |
| little_native | 11554 | 127096 |
| deno | 11498.8 | 114982 |
| drash | 10423.46 | 114650 |
| dinatra | 8376.46 | 92144 |
| little_std | 7213.64 | 79340 |
| reno | 6793 | 67923 |
| oak | 6458.9 | 64582 |
| express | 6124.46 | 67367 |
| opine | 5644.5 | 56437 |
| mandarinets | 4549.61 | 45482 |
| servest | 4529.73 | 49824 |
| tinyhttp | 2436.81 | 24360 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8495   | 8495   | 12567   | 12727   | 12180.8 | 1231.54 | 8493   | 121804  |
| **Bytes/Sec** | 790 kB | 790 kB | 1.17 MB | 1.18 MB | 1.13 MB | 115 kB  | 790 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.03 ms | 1.35 ms | 96 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 6515   | 6515   | 24783   | 25951   | 21062.73 | 6889.9 | 6512   | 231654  |
| **Bytes/Sec** | 580 kB | 580 kB | 2.21 MB | 2.31 MB | 1.87 MB  | 613 kB | 580 kB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.4 ms | 47 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9079   | 9079   | 9327   | 22159   | 11498.8 | 3975.32 | 9075   | 114982  |
| **Bytes/Sec** | 808 kB | 808 kB | 830 kB | 1.97 MB | 1.02 MB | 354 kB  | 808 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.99 ms | 2.15 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3729   | 3729   | 36159   | 37535   | 31620.1 | 9798.24 | 3728   | 316217  |
| **Bytes/Sec** | 332 kB | 332 kB | 3.22 MB | 3.34 MB | 2.81 MB | 872 kB  | 332 kB | 28.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 0.9 ms | 1.46 ms | 52 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2893   | 2893   | 8943   | 9207   | 8376.46 | 1747.6  | 2893   | 92144   |
| **Bytes/Sec** | 151 kB | 151 kB | 465 kB | 479 kB | 436 kB  | 90.9 kB | 150 kB | 4.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.52 ms | 2.36 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 4531   | 4531   | 11151  | 11207  | 10423.46 | 1878.34 | 4531   | 114650  |
| **Bytes/Sec** | 390 kB | 390 kB | 959 kB | 964 kB | 896 kB   | 161 kB  | 390 kB | 9.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.43 ms | 2.03 ms | 137 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4063   | 4063   | 5519    | 9127    | 6124.46 | 1500.16 | 4063   | 67367   |
| **Bytes/Sec** | 878 kB | 878 kB | 1.19 MB | 1.97 MB | 1.32 MB | 324 kB  | 878 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 12 ms | 6.02 ms | 2.69 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9167    | 9167    | 10431   | 23119   | 14817.6 | 6134.55 | 9161    | 148191  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 1.61 MB | 3.56 MB | 2.28 MB | 945 kB  | 1.41 MB | 22.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 7 ms  | 2.14 ms | 1.92 ms | 30 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4299   | 4299   | 14823  | 15367  | 13515  | 3247.66 | 4297   | 135155  |
| **Bytes/Sec** | 223 kB | 223 kB | 771 kB | 799 kB | 703 kB | 169 kB  | 223 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.44 ms | 1.78 ms | 48 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7951    | 7951    | 11951   | 12167   | 11554   | 1149.16 | 7949    | 127096  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.54 MB | 1.57 MB | 1.49 MB | 148 kB  | 1.03 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.16 ms | 0.94 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4875   | 4875   | 7495   | 7639   | 7213.64 | 754.02  | 4873   | 79340   |
| **Bytes/Sec** | 629 kB | 629 kB | 967 kB | 985 kB | 930 kB  | 97.3 kB | 629 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.24 ms | 1.4 ms | 33 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2175   | 2175   | 4947   | 5327   | 4549.61 | 927.17  | 2174   | 45482   |
| **Bytes/Sec** | 202 kB | 202 kB | 460 kB | 495 kB | 423 kB  | 86.2 kB | 202 kB | 4.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 19 ms | 8.3 ms | 3.46 ms | 47 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10479   | 10479   | 22751   | 23839   | 21635.6 | 3748.08 | 10478   | 216343  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.55 MB | 2.67 MB | 2.42 MB | 419 kB  | 1.17 MB | 24.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.21 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3379   | 3379   | 6527   | 7459   | 6458.9 | 1093.31 | 3378   | 64582  |
| **Bytes/Sec** | 439 kB | 439 kB | 849 kB | 970 kB | 840 kB | 142 kB  | 439 kB | 8.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.8 ms | 2.69 ms | 138 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2887   | 2887   | 6163   | 6283   | 5644.5 | 1066.98 | 2886   | 56437   |
| **Bytes/Sec** | 445 kB | 445 kB | 949 kB | 967 kB | 869 kB | 164 kB  | 444 kB | 8.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.79 ms | 3.61 ms | 229 ms |


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
| **Req/Sec**   | 4243   | 4243   | 6963   | 9135   | 6793   | 1137.15 | 4240   | 67923  |
| **Bytes/Sec** | 331 kB | 331 kB | 543 kB | 713 kB | 530 kB | 88.8 kB | 331 kB | 5.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 5 ms  | 12 ms | 5.51 ms | 2.3 ms | 44 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1513   | 1513   | 5235   | 5807   | 4529.73 | 1335.46 | 1513   | 49824   |
| **Bytes/Sec** | 174 kB | 174 kB | 602 kB | 668 kB | 521 kB  | 154 kB  | 174 kB | 5.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 8.34 ms | 15.87 ms | 142 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1680   | 1680   | 2601   | 2721   | 2436.81 | 353.41  | 1680   | 24360   |
| **Bytes/Sec** | 264 kB | 264 kB | 408 kB | 427 kB | 383 kB  | 55.4 kB | 264 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 12 ms | 14 ms | 32 ms | 15.95 ms | 5.46 ms | 62 ms |


---

<p align="center">Generated 2021-09-04T00:48:09.262Z</p>
