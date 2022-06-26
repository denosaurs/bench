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
| deno_canary | 43105.6 | 431076 |
| node | 38288.73 | 421155 |
| alosaur | 34193.6 | 341929 |
| reno | 31695.28 | 348633 |
| oak | 27202.19 | 299199 |
| drash | 25196 | 251963 |
| deno | 23972.8 | 239718 |
| aqua | 22631.6 | 226321 |
| little_std | 17903.64 | 196932 |
| fastify | 17684.41 | 176822 |
| express | 15479.82 | 170256 |
| little_native | 13606.37 | 149671 |
| abc | 12380 | 123792 |
| dinatra | 11514.4 | 115138 |
| opine | 9805 | 98053 |
| tinyhttp | 5376.7 | 53760 |
| servest | 4382.1 | 48192 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9487   | 9487   | 12471   | 14015  | 12380   | 1126.15 | 9486   | 123792  |
| **Bytes/Sec** | 883 kB | 883 kB | 1.16 MB | 1.3 MB | 1.15 MB | 105 kB  | 882 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.7 ms | 1.27 ms | 70 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24063  | 24063  | 35583   | 36031   | 34193.6 | 3499.58 | 24051   | 341929  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 3.99 MB | 4.03 MB | 3.83 MB | 392 kB  | 2.69 MB | 38.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.97 ms | 0.64 ms | 26 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12407   | 12407   | 25119   | 25615   | 22631.6 | 4403.42 | 12403   | 226321  |
| **Bytes/Sec** | 1.89 MB | 1.89 MB | 3.82 MB | 3.89 MB | 3.44 MB | 669 kB  | 1.89 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.81 ms | 22 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16975  | 16975  | 24735   | 25567   | 23972.8 | 2385.97 | 16971  | 239718  |
| **Bytes/Sec** | 1.9 MB | 1.9 MB | 2.77 MB | 2.86 MB | 2.68 MB | 267 kB  | 1.9 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.75 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21535   | 21535   | 49119  | 49855   | 43105.6 | 9627.85 | 21528   | 431076  |
| **Bytes/Sec** | 2.41 MB | 2.41 MB | 5.5 MB | 5.59 MB | 4.83 MB | 1.08 MB | 2.41 MB | 48.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.65 ms | 15 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9015   | 9015   | 11711  | 12127  | 11514.4 | 869.91  | 9008   | 115138  |
| **Bytes/Sec** | 468 kB | 468 kB | 609 kB | 631 kB | 599 kB  | 45.3 kB | 468 kB | 5.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.7 ms | 54 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13631   | 13631   | 29039   | 29487   | 25196   | 6128.58 | 13625   | 251963  |
| **Bytes/Sec** | 1.88 MB | 1.88 MB | 4.01 MB | 4.07 MB | 3.48 MB | 846 kB  | 1.88 MB | 34.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.81 ms | 30 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7127    | 7127    | 16463   | 16735   | 15479.82 | 2671.17 | 7124    | 170256  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.56 MB | 3.61 MB | 3.34 MB  | 577 kB  | 1.54 MB | 36.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 1.07 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9127    | 9127    | 20767  | 21935   | 17684.41 | 4794.39 | 9123   | 176822  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 3.2 MB | 3.38 MB | 2.72 MB  | 738 kB  | 1.4 MB | 27.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.64 ms | 1.44 ms | 27 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7999    | 7999    | 13247   | 16879   | 13606.37 | 2886.72 | 7997    | 149671  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 2.01 MB | 2.57 MB | 2.07 MB  | 439 kB  | 1.22 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.48 ms | 1.2 ms | 29 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13087   | 13087   | 18431  | 18687   | 17903.64 | 1550.56 | 13086   | 196932  |
| **Bytes/Sec** | 1.99 MB | 1.99 MB | 2.8 MB | 2.84 MB | 2.72 MB  | 235 kB  | 1.99 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.03 ms | 0.65 ms | 18 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21615   | 21615   | 43295   | 44127   | 38288.73 | 7458.21 | 21610   | 421155  |
| **Bytes/Sec** | 2.42 MB | 2.42 MB | 4.85 MB | 4.94 MB | 4.29 MB  | 835 kB  | 2.42 MB | 47.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.29 ms | 0.71 ms | 19 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19663   | 19663   | 27999   | 28223   | 27202.19 | 2394.34 | 19650   | 299199  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 4.28 MB | 4.32 MB | 4.16 MB  | 367 kB  | 3.01 MB | 45.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.07 ms | 0.58 ms | 37 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ----- |
| **Req/Sec**   | 7431    | 7431    | 10079   | 10175   | 9805   | 796.99 | 7429    | 98053 |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.16 MB | 2.18 MB | 2.1 MB | 171 kB | 1.59 MB | 21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.74 ms | 1.22 ms | 38 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 23487   | 23487   | 32543   | 32863   | 31695.28 | 2606.8 | 23473   | 348633 |
| **Bytes/Sec** | 3.57 MB | 3.57 MB | 4.95 MB | 4.99 MB | 4.82 MB  | 396 kB | 3.57 MB | 53 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.5 ms | 26 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3145   | 3145   | 4815   | 5415   | 4382.1 | 863.84  | 3144   | 48192   |
| **Bytes/Sec** | 362 kB | 362 kB | 553 kB | 623 kB | 504 kB | 99.3 kB | 362 kB | 5.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.62 ms | 16.05 ms | 62 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4025   | 4025   | 5535   | 5575   | 5376.7 | 452.99  | 4025   | 53760   |
| **Bytes/Sec** | 632 kB | 632 kB | 869 kB | 876 kB | 844 kB | 71.1 kB | 632 kB | 8.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 6.89 ms | 2.65 ms | 99 ms |


---

<p align="center">Generated 2022-06-26T01:43:58.346Z</p>
