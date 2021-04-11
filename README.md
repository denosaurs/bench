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
| **Average** | 7062.8 | 23393.1 | 22654.91 | 13097.6 | 21326.8 | 8511.73 | 31705.82 | 22557.2 | 15989.46 | 2702.82 | 3958.2 | 19035.6 | 8822.6 |
| **Total** | 70625 | 257295 | 249194 | 130961 | 213255 | 93619 | 348735 | 225544 | 175867 | 29724 | 39576 | 190330 | 88215 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5015   | 5015   | 7315   | 7587   | 7062.8 | 746.67  | 5014   | 70625   |
| **Bytes/Sec** | 466 kB | 466 kB | 680 kB | 706 kB | 657 kB | 69.5 kB | 466 kB | 6.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.13 ms | 2.14 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15295   | 15295   | 24159   | 24479   | 23393.1 | 2566.08 | 15289   | 257295  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.22 MB | 2.25 MB | 2.15 MB | 236 kB  | 1.41 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.8 ms | 30 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15303  | 15303  | 23151   | 24223   | 22654.91 | 2387.76 | 15298  | 249194  |
| **Bytes/Sec** | 780 kB | 780 kB | 1.18 MB | 1.24 MB | 1.16 MB  | 122 kB  | 780 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.24 ms | 0.9 ms | 38 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9951   | 9951   | 13279  | 13751  | 13097.6 | 1075.41 | 9947   | 130961  |
| **Bytes/Sec** | 517 kB | 517 kB | 691 kB | 715 kB | 681 kB  | 55.9 kB | 517 kB | 6.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.33 ms | 1.21 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14511   | 14511   | 22095  | 22383   | 21326.8 | 2289.2 | 14510   | 213255  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.9 MB | 1.93 MB | 1.83 MB | 197 kB | 1.25 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.88 ms | 64 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4063   | 4063   | 8991    | 9503    | 8511.73 | 1542.97 | 4063   | 93619   |
| **Bytes/Sec** | 878 kB | 878 kB | 1.94 MB | 2.05 MB | 1.84 MB | 333 kB  | 878 kB | 20.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.17 ms | 2.03 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 15551   | 15551   | 32991   | 34847   | 31705.82 | 5217.85 | 15549   | 348735  |
| **Bytes/Sec** | 2.38 MB | 2.38 MB | 5.05 MB | 5.33 MB | 4.85 MB  | 798 kB  | 2.38 MB | 53.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.01 ms | 0.83 ms | 38 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12991   | 12991   | 23711   | 24127  | 22557.2 | 3250.18 | 12984   | 225544  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.66 MB | 2.7 MB | 2.53 MB | 364 kB  | 1.45 MB | 25.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.93 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8303   | 8303   | 16799   | 17583   | 15989.46 | 2462.04 | 8298   | 175867  |
| **Bytes/Sec** | 772 kB | 772 kB | 1.56 MB | 1.64 MB | 1.49 MB  | 229 kB  | 772 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.14 ms | 1.34 ms | 91 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2111   | 2111   | 2731   | 2967   | 2702.82 | 241.94  | 2111   | 29724   |
| **Bytes/Sec** | 243 kB | 243 kB | 314 kB | 341 kB | 311 kB  | 27.8 kB | 243 kB | 3.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.28 ms | 18.7 ms | 92 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2167   | 2167   | 4243   | 4435    | 3958.2  | 653.7  | 2167   | 39576   |
| **Bytes/Sec** | 616 kB | 616 kB | 1.2 MB | 1.26 MB | 1.12 MB | 186 kB | 615 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.62 ms | 3.8 ms | 89 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 12111   | 12111   | 19567  | 20607  | 19035.6 | 2343.8 | 12104   | 190330  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.8 MB | 1.9 MB | 1.75 MB | 216 kB | 1.11 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.51 ms | 1.13 ms | 55 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5903   | 5903   | 9135   | 9351   | 8822.6 | 989.05  | 5900   | 88215   |
| **Bytes/Sec** | 460 kB | 460 kB | 713 kB | 730 kB | 688 kB | 77.2 kB | 460 kB | 6.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 3.87 ms | 2.16 ms | 117 ms |


---

<p align="center">Generated 2021-04-11T00:43:30.466Z</p>