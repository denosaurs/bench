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
| **Average** | 6699.6 | 24309.1 | 28392 | 13428.8 | 18672.37 | 13963.46 | 21168.37 | 22916.4 | 18446.19 | 3318.8 | 6033.5 | 17064.37 | 8980.21 |
| **Total** | 66991 | 267386 | 283911 | 134272 | 205402 | 153592 | 232841 | 229149 | 202898 | 33183 | 60329 | 187700 | 89806 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4751   | 4751   | 6935   | 7167   | 6699.6 | 669.75  | 4751   | 66991   |
| **Bytes/Sec** | 442 kB | 442 kB | 645 kB | 667 kB | 623 kB | 62.3 kB | 442 kB | 6.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.51 ms | 2.02 ms | 116 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16527   | 16527   | 25855   | 26079  | 24309.1 | 3347.67 | 16518   | 267386  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.38 MB | 2.4 MB | 2.24 MB | 308 kB  | 1.52 MB | 24.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.78 ms | 64 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 19391  | 19391  | 29391  | 30287   | 28392   | 3051.26 | 19381  | 283911  |
| **Bytes/Sec** | 989 kB | 989 kB | 1.5 MB | 1.55 MB | 1.45 MB | 156 kB  | 988 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.09 ms | 0.71 ms | 59 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10119  | 10119  | 13751  | 14111  | 13428.8 | 1138.92 | 10114  | 134272  |
| **Bytes/Sec** | 526 kB | 526 kB | 715 kB | 734 kB | 698 kB  | 59.2 kB | 526 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.14 ms | 27 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10823  | 10823  | 19503   | 19823  | 18672.37 | 2495.51 | 10819  | 205402  |
| **Bytes/Sec** | 931 kB | 931 kB | 1.68 MB | 1.7 MB | 1.61 MB  | 215 kB  | 930 kB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.14 ms | 78 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5655    | 5655    | 14983   | 15207   | 13963.46 | 2682.54 | 5652    | 153592  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.24 MB | 3.28 MB | 3.02 MB  | 579 kB  | 1.22 MB | 33.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.37 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 10839   | 10839   | 22543   | 23071   | 21168.37 | 3366.5 | 10833   | 232841  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 3.45 MB | 3.53 MB | 3.24 MB  | 515 kB | 1.66 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.3 ms | 1.02 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10407   | 10407   | 24591   | 25295   | 22916.4 | 4256.14 | 10401   | 229149  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 2.75 MB | 2.83 MB | 2.57 MB | 477 kB  | 1.16 MB | 25.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.17 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12847  | 12847  | 19023   | 19711   | 18446.19 | 1828.26 | 12842   | 202898  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.77 MB | 1.83 MB | 1.72 MB  | 170 kB  | 1.19 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.6 ms | 1.14 ms | 61 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2233   | 2233   | 3339   | 4063   | 3318.8 | 502.47  | 2232   | 33183   |
| **Bytes/Sec** | 257 kB | 257 kB | 384 kB | 467 kB | 382 kB | 57.8 kB | 257 kB | 3.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 11.54 ms | 17.6 ms | 82 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 3589    | 3589    | 6299    | 6463    | 6033.5  | 823.58 | 3588    | 60329   |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.79 MB | 1.84 MB | 1.71 MB | 234 kB | 1.02 MB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.13 ms | 2.4 ms | 138 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9807   | 9807   | 17759   | 18223   | 17064.37 | 2314.86 | 9802   | 187700  |
| **Bytes/Sec** | 902 kB | 902 kB | 1.63 MB | 1.68 MB | 1.57 MB  | 213 kB  | 902 kB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.88 ms | 1.27 ms | 48 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ----- |
| **Req/Sec**   | 6391   | 6391   | 9295   | 9511   | 8980.21 | 888.09  | 6391   | 89806 |
| **Bytes/Sec** | 499 kB | 499 kB | 725 kB | 742 kB | 701 kB  | 69.2 kB | 498 kB | 7 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.8 ms | 2.1 ms | 90 ms |


---

<p align="center">Generated 2021-04-05T00:42:27.801Z</p>