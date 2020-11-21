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
| **Average** | 6690.7 | 21167.6 | 21442.8 | 16239.64 | 19550.8 | 13874.2 | 32893.82 | 38095.2 | 18633.82 | 7292.55 | 3091.9 | 4766 | 26947.2 |
| **Total** | 66904 | 211690 | 214414 | 178654 | 195519 | 138726 | 361843 | 381003 | 204947 | 80214 | 30911 | 47652 | 269477 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3569   | 3569   | 6987   | 7299   | 6690.7 | 1056.57 | 3569   | 66904   |
| **Bytes/Sec** | 332 kB | 332 kB | 650 kB | 679 kB | 622 kB | 98.2 kB | 332 kB | 6.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.51 ms | 2.68 ms | 133 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13655   | 13655   | 21887   | 22719   | 21167.6 | 2529.49 | 13652   | 211690  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 2.01 MB | 2.09 MB | 1.95 MB | 233 kB  | 1.26 MB | 19.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.1 ms | 71 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 13431  | 13431  | 22303   | 22863   | 21442.8 | 2699.4 | 13427  | 214414  |
| **Bytes/Sec** | 685 kB | 685 kB | 1.14 MB | 1.17 MB | 1.09 MB | 138 kB | 685 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.07 ms | 40 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11983  | 11983  | 16911  | 17039  | 16239.64 | 1408.51 | 11982  | 178654  |
| **Bytes/Sec** | 623 kB | 623 kB | 879 kB | 886 kB | 845 kB   | 73.4 kB | 623 kB | 9.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.18 ms | 1.19 ms | 65 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12927   | 12927   | 20367   | 20623   | 19550.8 | 2227.06 | 12925   | 195519  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.75 MB | 1.77 MB | 1.68 MB | 192 kB  | 1.11 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.2 ms | 84 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5731    | 5731    | 15015   | 15319   | 13874.2 | 2842.17 | 5728    | 138726 |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 3.24 MB | 3.31 MB | 3 MB    | 614 kB  | 1.24 MB | 30 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.77 ms | 62 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16479   | 16479   | 35263   | 35999   | 32893.82 | 5393.75 | 16472   | 361843  |
| **Bytes/Sec** | 2.52 MB | 2.52 MB | 5.39 MB | 5.51 MB | 5.03 MB  | 825 kB  | 2.52 MB | 55.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1 ms  | 0.78 ms | 41 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21679   | 21679   | 39583   | 41631   | 38095.2 | 5521.86 | 21675   | 381003  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 4.44 MB | 4.67 MB | 4.27 MB | 619 kB  | 2.43 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.85 ms | 47 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13199   | 13199   | 19071   | 20847   | 18633.82 | 1835.79 | 13194   | 204947  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.77 MB | 1.94 MB | 1.73 MB  | 171 kB  | 1.23 MB | 19.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.54 ms | 1.16 ms | 54 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4227   | 4227   | 7587   | 7835   | 7292.55 | 982.69  | 4226   | 80214   |
| **Bytes/Sec** | 389 kB | 389 kB | 698 kB | 721 kB | 671 kB  | 90.4 kB | 389 kB | 7.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.78 ms | 2.5 ms | 109 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1849   | 1849   | 2845   | 4307   | 3091.9 | 664.51  | 1849   | 30911   |
| **Bytes/Sec** | 213 kB | 213 kB | 327 kB | 495 kB | 355 kB | 76.4 kB | 213 kB | 3.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.44 ms | 18.14 ms | 132 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2277   | 2277   | 5163    | 5267   | 4766    | 940.61 | 2277   | 47652   |
| **Bytes/Sec** | 647 kB | 647 kB | 1.47 MB | 1.5 MB | 1.35 MB | 267 kB | 647 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 7.98 ms | 4.3 ms | 232 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 19455   | 19455   | 27807   | 28991   | 26947.2 | 2625.56 | 19441   | 269477 |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.45 MB | 1.51 MB | 1.4 MB  | 137 kB  | 1.01 MB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.13 ms | 0.77 ms | 36 ms |


---

<p align="center">Generated 2020-11-21T00:30:12.961Z</p>