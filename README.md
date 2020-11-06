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
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 8654.6 | 19777.82 | 23017.2 | 12964.73 | 20900.73 | 13216.2 | 33550.19 | 38085.1 | 14977.6 | 7406.4 | 3040.4 | 4639 | 21989.2 |
| **Total** | 86528 | 217563 | 230160 | 142608 | 229880 | 132156 | 369055 | 418939 | 149759 | 74056 | 30399 | 46384 | 219873 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5191   | 5191   | 9007   | 9239   | 8654.6 | 1178.22 | 5188   | 86528   |
| **Bytes/Sec** | 405 kB | 405 kB | 702 kB | 720 kB | 675 kB | 91.9 kB | 405 kB | 6.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.07 ms | 2.05 ms | 43 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 11911  | 11911  | 20767   | 21519   | 19777.82 | 2611.36 | 11911  | 217563 |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.91 MB | 1.98 MB | 1.82 MB  | 240 kB  | 1.1 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.4 ms | 104 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15495  | 15495  | 23839   | 24287   | 23017.2 | 2521.76 | 15495  | 230160  |
| **Bytes/Sec** | 791 kB | 791 kB | 1.22 MB | 1.24 MB | 1.17 MB | 128 kB  | 790 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.95 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 13655  | 14023  | 12964.73 | 1597.83 | 8435   | 142608  |
| **Bytes/Sec** | 439 kB | 439 kB | 710 kB | 729 kB | 674 kB   | 83.1 kB | 439 kB | 7.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.66 ms | 52 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14487   | 14487   | 21583   | 21983   | 20900.73 | 2062.52 | 14482   | 229880  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.86 MB | 1.89 MB | 1.8 MB   | 177 kB  | 1.25 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.09 ms | 93 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 14463   | 15079   | 13216.2 | 3183.51 | 4391   | 132156  |
| **Bytes/Sec** | 949 kB | 949 kB | 3.12 MB | 3.26 MB | 2.85 MB | 688 kB  | 948 kB | 28.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.49 ms | 2.08 ms | 71 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15551   | 15551   | 35455   | 35775   | 33550.19 | 5705.86 | 15544   | 369055  |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 5.42 MB | 5.48 MB | 5.13 MB  | 873 kB  | 2.38 MB | 56.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.02 ms | 0.88 ms | 52 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 20735   | 20735   | 39935   | 40319   | 38085.1 | 5512.6 | 20734   | 418939  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 4.47 MB | 4.52 MB | 4.27 MB | 617 kB | 2.32 MB | 46.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.86 ms | 65 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9263   | 9263   | 15575   | 16159  | 14977.6 | 1963.33 | 9259   | 149759  |
| **Bytes/Sec** | 861 kB | 861 kB | 1.45 MB | 1.5 MB | 1.39 MB | 183 kB  | 861 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.49 ms | 65 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4643   | 4643   | 7643   | 7987   | 7406.4 | 937.5   | 4640   | 74056   |
| **Bytes/Sec** | 427 kB | 427 kB | 703 kB | 735 kB | 681 kB | 86.3 kB | 427 kB | 6.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.72 ms | 2.61 ms | 117 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2159   | 2159   | 3133   | 3315   | 3040.4 | 317.64  | 2159   | 30399  |
| **Bytes/Sec** | 248 kB | 248 kB | 360 kB | 381 kB | 350 kB | 36.5 kB | 248 kB | 3.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.69 ms | 18.24 ms | 107 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2155   | 2155   | 4991    | 5139    | 4639    | 897.99 | 2154   | 46384   |
| **Bytes/Sec** | 612 kB | 612 kB | 1.42 MB | 1.46 MB | 1.32 MB | 255 kB | 612 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 16 ms | 8.16 ms | 4.96 ms | 257 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14767  | 14767  | 22735   | 23487   | 21989.2 | 2439.18 | 14761  | 219873  |
| **Bytes/Sec** | 768 kB | 768 kB | 1.18 MB | 1.22 MB | 1.14 MB | 127 kB  | 768 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.17 ms | 73 ms |


---

<p align="center">Generated 2020-11-06T00:27:36.204Z</p>