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
| **Average** | 9807 | 20428 | 24176.4 | 12143.2 | 15179.6 | 13677.4 | 36056 | 18401.2 | 18614.19 | 2470 | 4836.3 | 10047.8 | 7591.2 |
| **Total** | 98065 | 224710 | 241769 | 121420 | 151787 | 136768 | 396610 | 184015 | 204737 | 24696 | 48355 | 100478 | 75906 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6251   | 6251   | 10167  | 10519  | 9807   | 1205.03 | 6251   | 98065   |
| **Bytes/Sec** | 582 kB | 582 kB | 946 kB | 978 kB | 912 kB | 112 kB  | 581 kB | 9.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.54 ms | 1.91 ms | 86 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14103  | 14103  | 20975   | 21551   | 20428   | 2020.31 | 14102  | 224710  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.93 MB | 1.98 MB | 1.88 MB | 186 kB  | 1.3 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.38 ms | 1.08 ms | 66 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15359  | 15359  | 25119   | 25871   | 24176.4 | 2990.69 | 15357  | 241769  |
| **Bytes/Sec** | 783 kB | 783 kB | 1.28 MB | 1.32 MB | 1.23 MB | 153 kB  | 783 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.19 ms | 0.96 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8831   | 8831   | 12639  | 13487  | 12143.2 | 1613.5  | 8829   | 121420  |
| **Bytes/Sec** | 459 kB | 459 kB | 657 kB | 701 kB | 631 kB  | 83.9 kB | 459 kB | 6.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.59 ms | 1.55 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8767   | 8767   | 15767   | 16575   | 15179.6 | 2166.46 | 8766   | 151787  |
| **Bytes/Sec** | 754 kB | 754 kB | 1.36 MB | 1.43 MB | 1.31 MB | 186 kB  | 754 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.23 ms | 1.32 ms | 106 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5611    | 5611    | 14663   | 15031   | 13677.4 | 2744.1 | 5611    | 136768  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 3.17 MB | 3.25 MB | 2.95 MB | 593 kB | 1.21 MB | 29.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.5 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19695   | 19695   | 37695   | 38751   | 36056   | 5292.39 | 19684   | 396610  |
| **Bytes/Sec** | 3.01 MB | 3.01 MB | 5.77 MB | 5.93 MB | 5.52 MB | 810 kB  | 3.01 MB | 60.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.82 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9255    | 9255    | 18991   | 20751   | 18401.2 | 3198.01 | 9255    | 184015  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 2.13 MB | 2.32 MB | 2.06 MB | 358 kB  | 1.04 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.59 ms | 1.24 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 11991   | 11991   | 19375  | 19951   | 18614.19 | 2144.45 | 11989   | 204737 |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.8 MB | 1.85 MB | 1.73 MB  | 199 kB  | 1.11 MB | 19 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.11 ms | 66 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1779   | 1779   | 2481   | 2787   | 2470   | 281.39  | 1779   | 24696   |
| **Bytes/Sec** | 205 kB | 205 kB | 285 kB | 321 kB | 284 kB | 32.3 kB | 205 kB | 2.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 15.65 ms | 19.07 ms | 119 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2253   | 2253   | 5243    | 5351    | 4836.3  | 906.6  | 2252   | 48355   |
| **Bytes/Sec** | 640 kB | 640 kB | 1.49 MB | 1.52 MB | 1.37 MB | 257 kB | 640 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.94 ms | 4.17 ms | 253 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7443   | 7443   | 10127  | 11039   | 10047.8 | 945.8   | 7443   | 100478  |
| **Bytes/Sec** | 685 kB | 685 kB | 932 kB | 1.02 MB | 924 kB  | 86.9 kB | 685 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.51 ms | 1.46 ms | 72 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5327   | 5327   | 7851   | 7951   | 7591.2 | 758.14  | 5324   | 75906   |
| **Bytes/Sec** | 415 kB | 415 kB | 612 kB | 621 kB | 592 kB | 59.2 kB | 415 kB | 5.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.55 ms | 1.81 ms | 100 ms |


---

<p align="center">Generated 2021-02-25T00:18:06.399Z</p>