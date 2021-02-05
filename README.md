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
| **Average** | 10256.21 | 26146.19 | 22169.82 | 13084.73 | 19268 | 13286.2 | 21714 | 23670 | 16501.2 | 2677.1 | 5158.3 | 25858.19 | 6552.8 |
| **Total** | 102550 | 287596 | 243851 | 143904 | 211923 | 132849 | 217125 | 236706 | 165023 | 26765 | 51580 | 284432 | 65519 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6695   | 6695   | 10639  | 10871   | 10256.21 | 1195.83 | 6693   | 102550  |
| **Bytes/Sec** | 623 kB | 623 kB | 990 kB | 1.01 MB | 954 kB   | 111 kB  | 622 kB | 9.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.46 ms | 1.7 ms | 87 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19519  | 19519  | 26719   | 27951   | 26146.19 | 2168.18 | 19507   | 287596  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.46 MB | 2.57 MB | 2.41 MB  | 200 kB  | 1.79 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.67 ms | 41 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14751  | 14751  | 22911   | 23919   | 22169.82 | 2458.91 | 14748  | 243851  |
| **Bytes/Sec** | 753 kB | 753 kB | 1.17 MB | 1.22 MB | 1.13 MB  | 125 kB  | 752 kB | 12.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 0.95 ms | 41 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9455   | 9455   | 13615  | 14183  | 13084.73 | 1280.1  | 9451   | 143904  |
| **Bytes/Sec** | 492 kB | 492 kB | 708 kB | 737 kB | 680 kB   | 66.5 kB | 491 kB | 7.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.28 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12959   | 12959   | 19887   | 20351   | 19268   | 2008.65 | 12953   | 211923  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.71 MB | 1.75 MB | 1.66 MB | 173 kB  | 1.11 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 0.98 ms | 51 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5171    | 5171    | 14327   | 14815  | 13286.2 | 2806.08 | 5171    | 132849  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 3.09 MB | 3.2 MB | 2.87 MB | 606 kB  | 1.12 MB | 28.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.58 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10047   | 10047   | 23023   | 23455   | 21714   | 3927.76 | 10041   | 217125  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.52 MB | 3.59 MB | 3.32 MB | 601 kB  | 1.54 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.17 ms | 32 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13767   | 13767   | 24239   | 25823   | 23670   | 3359.82 | 13765   | 236706  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.71 MB | 2.89 MB | 2.65 MB | 376 kB  | 1.54 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.88 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11823  | 11823  | 16783   | 18575   | 16501.2 | 1765.53 | 11823  | 165023  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.56 MB | 1.73 MB | 1.53 MB | 164 kB  | 1.1 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.11 ms | 1.16 ms | 77 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1932   | 1932   | 2673   | 2933   | 2677.1 | 284.07  | 1932   | 26765   |
| **Bytes/Sec** | 222 kB | 222 kB | 307 kB | 337 kB | 308 kB | 32.7 kB | 222 kB | 3.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 50 ms | 14.43 ms | 18.71 ms | 114 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2457   | 2457   | 5579    | 5775    | 5158.3  | 989.72 | 2457   | 51580   |
| **Bytes/Sec** | 698 kB | 698 kB | 1.59 MB | 1.64 MB | 1.46 MB | 281 kB | 698 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 15 ms | 7.27 ms | 3.44 ms | 188 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18959   | 18959   | 26463   | 27167  | 25858.19 | 2199.33 | 18958   | 284432  |
| **Bytes/Sec** | 1.74 MB | 1.74 MB | 2.44 MB | 2.5 MB | 2.38 MB  | 202 kB  | 1.74 MB | 26.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.62 ms | 27 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4139   | 4139   | 6843   | 6939   | 6552.8 | 811.88  | 4139   | 65519   |
| **Bytes/Sec** | 323 kB | 323 kB | 534 kB | 542 kB | 511 kB | 63.3 kB | 323 kB | 5.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 10 ms | 5.66 ms | 2.29 ms | 111 ms |


---

<p align="center">Generated 2021-02-05T00:22:21.802Z</p>