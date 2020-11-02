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
| **Average** | 6761.91 | 18651.28 | 23636.8 | 13487.64 | 20758.91 | 8895.5 | 20015.6 | 34952.81 | 15291.2 | 7069.6 | 3035.37 | 5083.11 | 26664 |
| **Total** | 74377 | 205177 | 236356 | 148357 | 228343 | 88939 | 200162 | 349561 | 152926 | 70692 | 33383 | 50830 | 293306 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 3969   | 3969   | 7043   | 7307   | 6761.91 | 901.81  | 3969   | 74377  |
| **Bytes/Sec** | 310 kB | 310 kB | 549 kB | 570 kB | 527 kB  | 70.3 kB | 310 kB | 5.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.42 ms | 2.9 ms | 171 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11919  | 11919  | 19007   | 21247   | 18651.28 | 2407.52 | 11915  | 205177  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.75 MB | 1.95 MB | 1.72 MB  | 221 kB  | 1.1 MB | 18.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.56 ms | 1.71 ms | 72 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16527  | 16527  | 24207   | 25343   | 23636.8 | 2441.62 | 16513  | 236356  |
| **Bytes/Sec** | 842 kB | 842 kB | 1.23 MB | 1.29 MB | 1.21 MB | 125 kB  | 842 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.95 ms | 51 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9799   | 9799   | 13823  | 14423  | 13487.64 | 1274.71 | 9792   | 148357  |
| **Bytes/Sec** | 509 kB | 509 kB | 719 kB | 750 kB | 701 kB   | 66.3 kB | 509 kB | 7.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.41 ms | 1.78 ms | 66 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13983  | 13983  | 21247   | 22223   | 20758.91 | 2228.79 | 13978  | 228343  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.83 MB | 1.91 MB | 1.79 MB  | 192 kB  | 1.2 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 1 ms  | 61 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3813   | 3813   | 9559    | 10031   | 8895.5  | 1801.43 | 3812   | 88939   |
| **Bytes/Sec** | 824 kB | 824 kB | 2.06 MB | 2.17 MB | 1.92 MB | 389 kB  | 823 kB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 3.92 ms | 2.29 ms | 56 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8871    | 8871    | 21167   | 21775   | 20015.6 | 3743.11 | 8868    | 200162  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 3.24 MB | 3.33 MB | 3.06 MB | 573 kB  | 1.36 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.35 ms | 1.26 ms | 46 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18383   | 18383   | 36479   | 37599   | 34952.81 | 5556.69 | 18379   | 349561  |
| **Bytes/Sec** | 2.06 MB | 2.06 MB | 4.09 MB | 4.21 MB | 3.92 MB  | 622 kB  | 2.06 MB | 39.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 1.04 ms | 55 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9583   | 9583   | 15871   | 16623   | 15291.2 | 1953.98 | 9583   | 152926  |
| **Bytes/Sec** | 891 kB | 891 kB | 1.48 MB | 1.55 MB | 1.42 MB | 182 kB  | 891 kB | 14.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.38 ms | 48 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4203   | 4203   | 7323   | 7675   | 7069.6 | 983.43  | 4202   | 70692  |
| **Bytes/Sec** | 387 kB | 387 kB | 674 kB | 706 kB | 650 kB | 90.4 kB | 387 kB | 6.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.07 ms | 2.49 ms | 64 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2055   | 2055   | 3101   | 3467   | 3035.37 | 344.17  | 2054   | 33383   |
| **Bytes/Sec** | 236 kB | 236 kB | 357 kB | 399 kB | 349 kB  | 39.6 kB | 236 kB | 3.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.71 ms | 18.2 ms | 64 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2613   | 2613   | 5439    | 5739    | 5083.11 | 880.05 | 2613   | 50830   |
| **Bytes/Sec** | 742 kB | 742 kB | 1.55 MB | 1.63 MB | 1.44 MB | 250 kB | 742 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 15 ms | 7.38 ms | 3.36 ms | 82 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19855   | 19855   | 27519   | 27935   | 26664   | 2247.98 | 19842   | 293306  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.43 MB | 1.45 MB | 1.39 MB | 117 kB  | 1.03 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.68 ms | 35 ms |


---

<p align="center">Generated 2020-11-02T13:54:45.753Z</p>