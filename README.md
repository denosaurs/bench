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
| node | 38124 | 381190 |
| deno | 34381.82 | 378229 |
| deno_canary | 34191.2 | 341936 |
| alosaur | 29734 | 297331 |
| fastify | 18612 | 186131 |
| http | 13008 | 130071 |
| express | 12634.73 | 138978 |
| little_std | 12017.1 | 132188 |
| drash | 10865.4 | 108653 |
| abc | 10682.2 | 106816 |
| oak | 10580.6 | 105809 |
| reno | 9982.37 | 109781 |
| mandarinets | 9720.6 | 97208 |
| little_native | 9672.6 | 96717 |
| dinatra | 6592 | 65915 |
| opine | 5995.1 | 59944 |
| servest | 5838.46 | 64217 |
| tinyhttp | 3335.2 | 33343 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7315   | 7315   | 11191   | 11415   | 10682.2 | 1185.6 | 7315   | 106816  |
| **Bytes/Sec** | 680 kB | 680 kB | 1.04 MB | 1.06 MB | 993 kB  | 110 kB | 680 kB | 9.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.29 ms | 1.34 ms | 52 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15911   | 15911   | 31839   | 33055   | 29734   | 5300.61 | 15905   | 297331  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.83 MB | 2.94 MB | 2.65 MB | 472 kB  | 1.42 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.7 ms | 40 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17679   | 17679   | 38655   | 40127   | 34381.82 | 7571.17 | 17676   | 378229  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.44 MB | 3.57 MB | 3.06 MB  | 674 kB  | 1.57 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.7 ms | 0.95 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18431   | 18431   | 39103   | 40255   | 34191.2 | 7649.66 | 18430   | 341936  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.48 MB | 3.58 MB | 3.04 MB | 681 kB  | 1.64 MB | 30.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.98 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4399   | 4399   | 6751   | 7175   | 6592   | 753.91  | 4398   | 65915   |
| **Bytes/Sec** | 229 kB | 229 kB | 351 kB | 373 kB | 343 kB | 39.2 kB | 229 kB | 3.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.69 ms | 2.16 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7819   | 7819   | 11247  | 11311  | 10865.4 | 1023.27 | 7818   | 108653  |
| **Bytes/Sec** | 673 kB | 673 kB | 967 kB | 973 kB | 934 kB  | 87.9 kB | 672 kB | 9.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.51 ms | 105 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 4959    | 4959    | 13239   | 14863   | 12634.73 | 2583.91 | 4959    | 138978 |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 2.86 MB | 3.21 MB | 2.73 MB  | 558 kB  | 1.07 MB | 30 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.6 ms | 1.74 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10343   | 10343   | 19247   | 22367   | 18612   | 4057.58 | 10343   | 186131  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.96 MB | 3.44 MB | 2.87 MB | 625 kB  | 1.59 MB | 28.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.54 ms | 1.51 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 9015   | 9015   | 13535  | 13743  | 13008  | 1365.99 | 9013   | 130071  |
| **Bytes/Sec** | 469 kB | 469 kB | 703 kB | 715 kB | 676 kB | 71 kB   | 469 kB | 6.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.29 ms | 26 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6187   | 6187   | 10095  | 10263   | 9672.6  | 1172.69 | 6186   | 96717   |
| **Bytes/Sec** | 798 kB | 798 kB | 1.3 MB | 1.32 MB | 1.25 MB | 151 kB  | 798 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.41 ms | 1.35 ms | 33 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8383    | 8383    | 12607   | 12767   | 12017.1 | 1231.17 | 8381    | 132188  |
| **Bytes/Sec** | 1.08 MB | 1.08 MB | 1.63 MB | 1.65 MB | 1.55 MB | 159 kB  | 1.08 MB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.12 ms | 0.88 ms | 21 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6027   | 6027   | 10095  | 10247  | 9720.6 | 1233.34 | 6027   | 97208   |
| **Bytes/Sec** | 561 kB | 561 kB | 939 kB | 953 kB | 904 kB | 115 kB  | 561 kB | 9.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.39 ms | 1.45 ms | 39 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23375   | 23375   | 43263   | 44063   | 38124   | 8382.88 | 23367   | 381190  |
| **Bytes/Sec** | 2.62 MB | 2.62 MB | 4.85 MB | 4.94 MB | 4.27 MB | 939 kB  | 2.62 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.41 ms | 0.83 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5915   | 5915   | 11239   | 11679   | 10580.6 | 1758.29 | 5914   | 105809  |
| **Bytes/Sec** | 769 kB | 769 kB | 1.46 MB | 1.52 MB | 1.38 MB | 229 kB  | 769 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.92 ms | 100 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4053   | 4053   | 6271   | 6303   | 5995.1 | 663.68 | 4053   | 59944   |
| **Bytes/Sec** | 625 kB | 625 kB | 966 kB | 971 kB | 923 kB | 102 kB | 624 kB | 9.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.4 ms | 2.61 ms | 164 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6975   | 6975   | 10271  | 10383  | 9982.37 | 953.07  | 6975   | 109781  |
| **Bytes/Sec** | 544 kB | 544 kB | 801 kB | 809 kB | 778 kB  | 74.3 kB | 544 kB | 8.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.39 ms | 1.41 ms | 38 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2987   | 2987   | 5947   | 6891   | 5838.46 | 1064.94 | 2986   | 64217   |
| **Bytes/Sec** | 344 kB | 344 kB | 684 kB | 793 kB | 671 kB  | 123 kB  | 343 kB | 7.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 44 ms | 6.34 ms | 14.26 ms | 67 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2601   | 2601   | 3401   | 3481   | 3335.2 | 250.98  | 2601   | 33343   |
| **Bytes/Sec** | 409 kB | 409 kB | 534 kB | 547 kB | 523 kB | 39.3 kB | 408 kB | 5.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 19 ms | 11.52 ms | 2.64 ms | 68 ms |


---

<p align="center">Generated 2021-09-14T00:52:51.668Z</p>
