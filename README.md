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
| **Average** | 7019.2 | 15923.2 | 19210.8 | 8512.21 | 16444.41 | 15931.46 | 23106.8 | 36700 | 21421.2 | 3133.4 | 5108.11 | 20839.6 | 7222 |
| **Total** | 70183 | 159224 | 192096 | 85113 | 164443 | 175253 | 231046 | 367043 | 214212 | 31329 | 51074 | 208357 | 72219 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4615   | 4615   | 7247   | 7531   | 7019.2 | 813.44  | 4613   | 70183   |
| **Bytes/Sec** | 429 kB | 429 kB | 674 kB | 700 kB | 653 kB | 75.6 kB | 429 kB | 6.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.27 ms | 2.22 ms | 127 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8887   | 8887   | 16735   | 17551   | 15923.2 | 2416.63 | 8881   | 159224  |
| **Bytes/Sec** | 817 kB | 817 kB | 1.54 MB | 1.61 MB | 1.46 MB | 222 kB  | 817 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 1.96 ms | 1.63 ms | 65 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 12311  | 12311  | 19999   | 20815   | 19210.8 | 2401.76 | 12306  | 192096 |
| **Bytes/Sec** | 628 kB | 628 kB | 1.02 MB | 1.06 MB | 980 kB  | 123 kB  | 628 kB | 9.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.55 ms | 1.08 ms | 55 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6383   | 6383   | 8567   | 9031   | 8512.21 | 734.1   | 6380   | 85113   |
| **Bytes/Sec** | 332 kB | 332 kB | 446 kB | 470 kB | 443 kB  | 38.2 kB | 332 kB | 4.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.28 ms | 1.52 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9719   | 9719   | 16991   | 17711   | 16444.41 | 2262.94 | 9718   | 164443  |
| **Bytes/Sec** | 836 kB | 836 kB | 1.46 MB | 1.52 MB | 1.41 MB  | 195 kB  | 836 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.17 ms | 1.34 ms | 101 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7259    | 7259    | 16911   | 17359   | 15931.46 | 2791.42 | 7256    | 175253  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.65 MB | 3.75 MB | 3.44 MB  | 603 kB  | 1.57 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.1 ms | 1.15 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11959   | 11959   | 24239   | 24975   | 23106.8 | 3738.67 | 11957   | 231046  |
| **Bytes/Sec** | 1.83 MB | 1.83 MB | 3.71 MB | 3.82 MB | 3.54 MB | 572 kB  | 1.83 MB | 35.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.99 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 21423  | 21423  | 38335  | 38943   | 36700   | 5100.36 | 21423  | 367043  |
| **Bytes/Sec** | 2.4 MB | 2.4 MB | 4.3 MB | 4.36 MB | 4.11 MB | 571 kB  | 2.4 MB | 41.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.76 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15247   | 15247   | 21935   | 23791   | 21421.2 | 2174.52 | 15241   | 214212  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.04 MB | 2.21 MB | 1.99 MB | 202 kB  | 1.42 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.95 ms | 73 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2325   | 2325   | 3041   | 3823   | 3133.4 | 373.04  | 2325   | 31329  |
| **Bytes/Sec** | 268 kB | 268 kB | 350 kB | 440 kB | 360 kB | 42.8 kB | 267 kB | 3.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.25 ms | 17.97 ms | 75 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2739   | 2739   | 5443    | 5547    | 5108.11 | 842.12 | 2739   | 51074   |
| **Bytes/Sec** | 778 kB | 778 kB | 1.55 MB | 1.57 MB | 1.45 MB | 239 kB | 778 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 7.17 ms | 3.37 ms | 193 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14215   | 14215   | 21423   | 22319   | 20839.6 | 2231.61 | 14210   | 208357  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 1.97 MB | 2.05 MB | 1.92 MB | 205 kB  | 1.31 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.96 ms | 64 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4991   | 4991   | 7459   | 7615   | 7222   | 747.39  | 4991   | 72219   |
| **Bytes/Sec** | 389 kB | 389 kB | 582 kB | 594 kB | 563 kB | 58.3 kB | 389 kB | 5.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.98 ms | 2.44 ms | 118 ms |


---

<p align="center">Generated 2021-03-29T00:41:34.352Z</p>