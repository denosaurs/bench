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
| deno | 45875.2 | 458767 |
| alosaur | 38112.73 | 419217 |
| fastify | 37759.2 | 377567 |
| node | 37215.2 | 372136 |
| reno | 33930.91 | 373220 |
| deno_canary | 32982.4 | 329778 |
| aqua | 24789.1 | 272660 |
| drash | 20339.6 | 203378 |
| oak | 17838.8 | 178399 |
| express | 17210 | 189326 |
| abc | 13588.91 | 149464 |
| little_std | 13422.6 | 134221 |
| dinatra | 12715.2 | 127138 |
| mandarinets | 11867.82 | 130539 |
| opine | 10219.21 | 102175 |
| little_native | 8382 | 92188 |
| tinyhttp | 5248.5 | 52477 |
| servest | 3171.4 | 31709 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 7583   | 7583   | 15343   | 15511   | 13588.91 | 2983.8 | 7580   | 149464  |
| **Bytes/Sec** | 705 kB | 705 kB | 1.43 MB | 1.44 MB | 1.26 MB  | 277 kB | 705 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.47 ms | 1.4 ms | 64 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 21775   | 21775   | 42751   | 43487   | 38112.73 | 8094.19 | 21766   | 419217 |
| **Bytes/Sec** | 2.44 MB | 2.44 MB | 4.79 MB | 4.87 MB | 4.27 MB  | 907 kB  | 2.44 MB | 47 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.24 ms | 0.67 ms | 33 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18015   | 18015   | 25583   | 25743   | 24789.1 | 2170.75 | 18002   | 272660  |
| **Bytes/Sec** | 2.74 MB | 2.74 MB | 3.89 MB | 3.91 MB | 3.77 MB | 330 kB  | 2.74 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.09 ms | 0.56 ms | 23 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 34847  | 34847  | 47295  | 47615   | 45875.2 | 3752.76 | 34839  | 458767  |
| **Bytes/Sec** | 3.9 MB | 3.9 MB | 5.3 MB | 5.33 MB | 5.14 MB | 420 kB  | 3.9 MB | 51.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.59 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 14927   | 14927   | 36799   | 41919   | 32982.4 | 10747.69 | 14925   | 329778  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 4.12 MB | 4.69 MB | 3.69 MB | 1.2 MB   | 1.67 MB | 36.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.5 ms | 1.09 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10015  | 10015  | 12919  | 13439  | 12715.2 | 955.09  | 10011  | 127138  |
| **Bytes/Sec** | 521 kB | 521 kB | 672 kB | 699 kB | 661 kB  | 49.6 kB | 521 kB | 6.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.93 ms | 64 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5% | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13199   | 13199   | 21007  | 21759 | 20339.6 | 2416.24 | 13194   | 203378  |
| **Bytes/Sec** | 1.82 MB | 1.82 MB | 2.9 MB | 3 MB  | 2.81 MB | 333 kB  | 1.82 MB | 28.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.56 ms | 1.06 ms | 49 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7775    | 7775    | 18095   | 19071   | 17210   | 3116.29 | 7772    | 189326  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 3.91 MB | 4.12 MB | 3.72 MB | 673 kB  | 1.68 MB | 40.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.09 ms | 0.95 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21807   | 21807   | 39487   | 39999   | 37759.2 | 5331.53 | 21798   | 377567  |
| **Bytes/Sec** | 3.36 MB | 3.36 MB | 6.08 MB | 6.16 MB | 5.81 MB | 821 kB  | 3.36 MB | 58.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.26 ms | 0.74 ms | 20 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ----- |
| **Req/Sec**   | 5907   | 5907   | 8679    | 8879    | 8382    | 805.91 | 5907   | 92188 |
| **Bytes/Sec** | 898 kB | 898 kB | 1.32 MB | 1.35 MB | 1.27 MB | 122 kB | 898 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.3 ms | 1.25 ms | 28 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7943    | 7943    | 15087   | 15463   | 13422.6 | 2810.13 | 7942    | 134221  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 2.29 MB | 2.35 MB | 2.04 MB | 427 kB  | 1.21 MB | 20.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.18 ms | 27 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7251   | 7251   | 12407   | 12631   | 11867.82 | 1484.44 | 7251   | 130539  |
| **Bytes/Sec** | 675 kB | 675 kB | 1.15 MB | 1.17 MB | 1.1 MB   | 138 kB  | 674 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.19 ms | 1.22 ms | 69 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18991   | 18991   | 42367   | 43071   | 37215.2 | 8474.32 | 18979   | 372136  |
| **Bytes/Sec** | 2.13 MB | 2.13 MB | 4.74 MB | 4.83 MB | 4.17 MB | 949 kB  | 2.13 MB | 41.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.77 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11183   | 11183   | 18479   | 19231   | 17838.8 | 2248.36 | 11182   | 178399  |
| **Bytes/Sec** | 1.71 MB | 1.71 MB | 2.83 MB | 2.94 MB | 2.73 MB | 344 kB  | 1.71 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.88 ms | 1.1 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 8199    | 8199    | 10199   | 11471   | 10219.21 | 832.16 | 8194    | 102175  |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 2.18 MB | 2.46 MB | 2.19 MB  | 178 kB | 1.75 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.49 ms | 1.26 ms | 52 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19327   | 19327   | 37023   | 37631   | 33930.91 | 5854.62 | 19319   | 373220  |
| **Bytes/Sec** | 2.94 MB | 2.94 MB | 5.62 MB | 5.72 MB | 5.16 MB  | 890 kB  | 2.94 MB | 56.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.86 ms | 0.62 ms | 17 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2415   | 2415   | 3141   | 3745   | 3171.4 | 346.36  | 2415   | 31709   |
| **Bytes/Sec** | 278 kB | 278 kB | 361 kB | 431 kB | 365 kB | 39.8 kB | 278 kB | 3.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.09 ms | 17.98 ms | 108 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4031   | 4031   | 5427   | 5591   | 5248.5 | 461.94  | 4031   | 52477   |
| **Bytes/Sec** | 633 kB | 633 kB | 852 kB | 878 kB | 824 kB | 72.4 kB | 633 kB | 8.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 7.01 ms | 2.99 ms | 91 ms |


---

<p align="center">Generated 2022-05-22T01:22:01.255Z</p>
