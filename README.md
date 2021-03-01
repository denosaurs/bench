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
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 9002.21 | 21008.4 | 26394.91 | 8342.37 | 20330.8 | 15083.4 | 23214.8 | 20403.28 | 18601.2 | 3126.5 | 3493 | 10214.73 | 4888.11 |
| **Total** | 90009 | 210097 | 290319 | 91756 | 203299 | 150826 | 232150 | 224439 | 186001 | 31262 | 34925 | 112351 | 48873 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5019   | 5019   | 9463   | 9655   | 9002.21 | 1348.6 | 5017   | 90009   |
| **Bytes/Sec** | 467 kB | 467 kB | 880 kB | 898 kB | 837 kB  | 125 kB | 467 kB | 8.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.72 ms | 2.33 ms | 103 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12607   | 12607   | 21887   | 22383   | 21008.4 | 2815.32 | 12606   | 210097  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 2.01 MB | 2.06 MB | 1.93 MB | 259 kB  | 1.16 MB | 19.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.06 ms | 64 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 19151  | 19151  | 27087   | 27823   | 26394.91 | 2329.18 | 19137  | 290319  |
| **Bytes/Sec** | 976 kB | 976 kB | 1.38 MB | 1.42 MB | 1.35 MB  | 119 kB  | 976 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.73 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6311   | 6311   | 8503   | 8687   | 8342.37 | 647.23  | 6309   | 91756   |
| **Bytes/Sec** | 328 kB | 328 kB | 442 kB | 452 kB | 434 kB  | 33.7 kB | 328 kB | 4.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.37 ms | 1.7 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13975  | 13975  | 20959  | 21503   | 20330.8 | 2144.03 | 13973  | 203299  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.8 MB | 1.85 MB | 1.75 MB | 184 kB  | 1.2 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.96 ms | 50 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6551    | 6551    | 16095   | 16575   | 15083.4 | 2891.81 | 6550    | 150826  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 3.48 MB | 3.58 MB | 3.26 MB | 625 kB  | 1.41 MB | 32.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.23 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12623   | 12623   | 24383   | 25343   | 23214.8 | 3609.95 | 12621   | 232150  |
| **Bytes/Sec** | 1.93 MB | 1.93 MB | 3.73 MB | 3.88 MB | 3.55 MB | 552 kB  | 1.93 MB | 35.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 1 ms  | 26 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 10583   | 10583   | 21455  | 21935   | 20403.28 | 3132.39 | 10582   | 224439  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 2.4 MB | 2.46 MB | 2.29 MB  | 351 kB  | 1.19 MB | 25.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.26 ms | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12519   | 12519   | 19119   | 20223   | 18601.2 | 2067.47 | 12515   | 186001  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.78 MB | 1.88 MB | 1.73 MB | 192 kB  | 1.16 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.15 ms | 69 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1909   | 1909   | 2973   | 4227   | 3126.5 | 714.5   | 1909   | 31262  |
| **Bytes/Sec** | 220 kB | 220 kB | 342 kB | 486 kB | 360 kB | 82.1 kB | 220 kB | 3.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 12.28 ms | 17.91 ms | 99 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1903   | 1903   | 3539    | 3997    | 3493   | 641.78 | 1903   | 34925   |
| **Bytes/Sec** | 541 kB | 541 kB | 1.01 MB | 1.14 MB | 992 kB | 182 kB | 540 kB | 9.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 10 ms | 20 ms | 10.94 ms | 4.79 ms | 237 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6995   | 6995   | 10583  | 10927   | 10214.73 | 1081.98 | 6992   | 112351  |
| **Bytes/Sec** | 644 kB | 644 kB | 973 kB | 1.01 MB | 940 kB   | 99.6 kB | 643 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.41 ms | 1.54 ms | 80 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3227   | 3227   | 5067   | 5323   | 4888.11 | 602.53 | 3227   | 48873   |
| **Bytes/Sec** | 252 kB | 252 kB | 395 kB | 415 kB | 381 kB  | 47 kB  | 252 kB | 3.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.61 ms | 2.89 ms | 137 ms |


---

<p align="center">Generated 2021-03-01T00:19:00.319Z</p>