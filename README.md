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
| **Average** | 8449.4 | 18469.2 | 26652.8 | 8498.21 | 17070 | 9399 | 34467.64 | 42189.6 | 16189.6 | 2821.8 | 5082.5 | 20902 | 9109.4 |
| **Total** | 84496 | 184702 | 266517 | 84976 | 170709 | 93990 | 379183 | 421893 | 161902 | 28212 | 50821 | 209004 | 91098 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5595   | 5595   | 8775   | 8959   | 8449.4 | 966.37  | 5593   | 84496   |
| **Bytes/Sec** | 520 kB | 520 kB | 816 kB | 833 kB | 786 kB | 89.9 kB | 520 kB | 7.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.33 ms | 1.77 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 11487   | 11487   | 19007   | 20175   | 18469.2 | 2381.58 | 11486   | 184702 |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.75 MB | 1.86 MB | 1.7 MB  | 219 kB  | 1.06 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.5 ms | 1.26 ms | 71 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%    | 2.5%  | 50%    | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------ | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 19695 | 19695 | 27391  | 28063   | 26652.8 | 2360.36 | 19682 | 266517  |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.4 MB | 1.43 MB | 1.36 MB | 120 kB  | 1 MB  | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.66 ms | 40 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6363   | 6363   | 8663   | 8927   | 8498.21 | 727.84  | 6360   | 84976   |
| **Bytes/Sec** | 331 kB | 331 kB | 451 kB | 464 kB | 442 kB  | 37.9 kB | 331 kB | 4.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.29 ms | 1.58 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10119  | 10119  | 17887   | 18223   | 17070   | 2339.15 | 10117  | 170709  |
| **Bytes/Sec** | 870 kB | 870 kB | 1.54 MB | 1.57 MB | 1.47 MB | 201 kB  | 870 kB | 14.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.91 ms | 1.2 ms | 52 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4499   | 4499   | 10007   | 10463   | 9399    | 1696.61 | 4498   | 93990   |
| **Bytes/Sec** | 972 kB | 972 kB | 2.16 MB | 2.26 MB | 2.03 MB | 366 kB  | 972 kB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.7 ms | 1.72 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 18543   | 18543   | 36095   | 36703   | 34467.64 | 5067.57 | 18539   | 379183 |
| **Bytes/Sec** | 2.84 MB | 2.84 MB | 5.53 MB | 5.62 MB | 5.27 MB  | 776 kB  | 2.84 MB | 58 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.64 ms | 0.81 ms | 20 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 27039   | 27039   | 43743  | 44703   | 42189.6 | 5111   | 27028   | 421893  |
| **Bytes/Sec** | 3.03 MB | 3.03 MB | 4.9 MB | 5.01 MB | 4.73 MB | 572 kB | 3.03 MB | 47.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.69 ms | 17 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9079   | 9079   | 16959   | 17711   | 16189.6 | 2412.51 | 9072   | 161902  |
| **Bytes/Sec** | 844 kB | 844 kB | 1.58 MB | 1.65 MB | 1.51 MB | 225 kB  | 844 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.19 ms | 1.18 ms | 40 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 1917   | 1917   | 2831   | 3137   | 2821.8 | 331.08 | 1917   | 28212   |
| **Bytes/Sec** | 221 kB | 221 kB | 326 kB | 361 kB | 324 kB | 38 kB  | 220 kB | 3.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.65 ms | 18.4 ms | 96 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2731   | 2731   | 5415    | 5483    | 5082.5  | 814.32 | 2731   | 50821   |
| **Bytes/Sec** | 776 kB | 776 kB | 1.54 MB | 1.56 MB | 1.44 MB | 231 kB | 776 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 6 ms  | 14 ms | 7.25 ms | 3.58 ms | 207 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 15367   | 15367   | 21551   | 22127   | 20902   | 1927.4 | 15365   | 209004  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 1.98 MB | 2.04 MB | 1.92 MB | 177 kB | 1.41 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.95 ms | 66 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6195   | 6195   | 9415   | 9591   | 9109.4 | 979.83  | 6194   | 91098   |
| **Bytes/Sec** | 483 kB | 483 kB | 735 kB | 749 kB | 711 kB | 76.4 kB | 483 kB | 7.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.66 ms | 2.07 ms | 101 ms |


---

<p align="center">Generated 2021-03-24T00:18:45.213Z</p>