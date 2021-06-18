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
| deno_canary | 43552 | 435490 |
| node | 43384.8 | 433881 |
| fastify | 39554.19 | 435115 |
| deno | 38837.1 | 427207 |
| alosaur | 14343.2 | 143427 |
| http | 12590.4 | 125886 |
| aqua | 11833.8 | 118325 |
| oak | 11801.8 | 118009 |
| drash | 11688.2 | 116880 |
| abc | 11632 | 116319 |
| mandarinets | 9163 | 91626 |
| express | 8944.37 | 98377 |
| opine | 7032.8 | 70314 |
| little_native | 7008.55 | 77092 |
| reno | 5980.5 | 59798 |
| dinatra | 5972.5 | 59720 |
| servest | 5241.7 | 52407 |
| little_std | 4994.7 | 49943 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8479   | 8479   | 12039   | 12231   | 11632   | 1070.72 | 8477   | 116319  |
| **Bytes/Sec** | 788 kB | 788 kB | 1.12 MB | 1.14 MB | 1.08 MB | 99.6 kB | 788 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.19 ms | 1.06 ms | 71 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10207  | 10207  | 14823   | 14887   | 14343.2 | 1381.6 | 10200  | 143427  |
| **Bytes/Sec** | 938 kB | 938 kB | 1.36 MB | 1.37 MB | 1.32 MB | 127 kB | 938 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------ | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.2 ms | 1 ms  | 46 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7991   | 7991   | 12535   | 12719   | 11833.8 | 1377.81 | 7989   | 118325  |
| **Bytes/Sec** | 735 kB | 735 kB | 1.15 MB | 1.17 MB | 1.09 MB | 127 kB  | 735 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.98 ms | 1.25 ms | 33 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 28719   | 28719   | 40127   | 40991   | 38837.1 | 3549.58 | 28716   | 427207 |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 3.57 MB | 3.65 MB | 3.46 MB | 316 kB  | 2.56 MB | 38 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.38 ms | 0.71 ms | 20 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 34207   | 34207   | 44767   | 45119   | 43552   | 3183.14 | 34185   | 435490  |
| **Bytes/Sec** | 3.04 MB | 3.04 MB | 3.98 MB | 4.01 MB | 3.88 MB | 284 kB  | 3.04 MB | 38.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.59 ms | 15 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3875   | 3875   | 6099   | 6423   | 5972.5 | 719.92  | 3875   | 59720   |
| **Bytes/Sec** | 202 kB | 202 kB | 317 kB | 334 kB | 311 kB | 37.4 kB | 202 kB | 3.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 4 ms  | 6 ms  | 11 ms | 6.21 ms | 2 ms  | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7831   | 7831   | 12087   | 12271   | 11688.2 | 1293.41 | 7830   | 116880  |
| **Bytes/Sec** | 674 kB | 674 kB | 1.04 MB | 1.06 MB | 1.01 MB | 111 kB  | 673 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.04 ms | 76 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4147   | 4147   | 9615    | 9767    | 8944.37 | 1598.3 | 4144   | 98377   |
| **Bytes/Sec** | 895 kB | 895 kB | 2.08 MB | 2.11 MB | 1.93 MB | 345 kB | 895 kB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 3.96 ms | 1.84 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 23039   | 23039   | 41503   | 41823   | 39554.19 | 5298.94 | 23039   | 435115 |
| **Bytes/Sec** | 3.55 MB | 3.55 MB | 6.39 MB | 6.44 MB | 6.09 MB  | 816 kB  | 3.55 MB | 67 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.24 ms | 0.71 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8727   | 8727   | 12791  | 13671  | 12590.4 | 1376.7  | 8723   | 125886  |
| **Bytes/Sec** | 454 kB | 454 kB | 665 kB | 711 kB | 655 kB  | 71.6 kB | 454 kB | 6.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.64 ms | 1.25 ms | 44 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4539   | 4539   | 7235   | 7507   | 7008.55 | 798    | 4538   | 77092   |
| **Bytes/Sec** | 586 kB | 586 kB | 933 kB | 969 kB | 904 kB  | 103 kB | 585 kB | 9.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.3 ms | 1.4 ms | 33 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2865   | 2865   | 5327   | 5387   | 4994.7 | 742.26  | 2864   | 49943   |
| **Bytes/Sec** | 264 kB | 264 kB | 490 kB | 495 kB | 459 kB | 68.3 kB | 263 kB | 4.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.74 ms | 2.21 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5987   | 5987   | 9487   | 9647   | 9163   | 1063.13 | 5987   | 91626   |
| **Bytes/Sec** | 557 kB | 557 kB | 882 kB | 897 kB | 852 kB | 98.8 kB | 557 kB | 8.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.13 ms | 1.19 ms | 30 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27407   | 27407   | 45087   | 45535  | 43384.8 | 5334.07 | 27405   | 433881  |
| **Bytes/Sec** | 3.07 MB | 3.07 MB | 5.05 MB | 5.1 MB | 4.86 MB | 598 kB  | 3.07 MB | 48.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.69 ms | 22 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7167   | 7167   | 12335  | 12743   | 11801.8 | 1600.95 | 7166   | 118009  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.6 MB | 1.66 MB | 1.53 MB | 208 kB  | 932 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.08 ms | 1.25 ms | 41 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4843   | 4843   | 7303    | 7335    | 7032.8  | 734.49 | 4840   | 70314   |
| **Bytes/Sec** | 745 kB | 745 kB | 1.13 MB | 1.13 MB | 1.08 MB | 113 kB | 745 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.36 ms | 1.41 ms | 70 ms |


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
| **Req/Sec**   | 3759   | 3759   | 6283   | 6467   | 5980.5 | 766.89  | 3758   | 59798   |
| **Bytes/Sec** | 293 kB | 293 kB | 490 kB | 505 kB | 466 kB | 59.8 kB | 293 kB | 4.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 6.09 ms | 2.68 ms | 123 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3419   | 3419   | 5279   | 6291   | 5241.7 | 785.28  | 3418   | 52407   |
| **Bytes/Sec** | 393 kB | 393 kB | 607 kB | 724 kB | 603 kB | 90.4 kB | 393 kB | 6.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 7.1 ms | 14.9 ms | 70 ms |


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

<p align="center">Generated 2021-06-18T00:45:04.843Z</p>
