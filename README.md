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
| **Average** | 6431.3 | 22751.6 | 22917.2 | 12741.6 | 15927.2 | 15223 | 20073.1 | 40772 | 19137.1 | 6356.7 | 3107.3 | 4936.8 | 25155.64 |
| **Total** | 64308 | 227519 | 229168 | 127403 | 159274 | 152219 | 220814 | 407745 | 210479 | 63560 | 31069 | 49360 | 276723 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3567   | 3567   | 6691   | 7107   | 6431.3 | 973.05  | 3566   | 64308   |
| **Bytes/Sec** | 332 kB | 332 kB | 622 kB | 661 kB | 598 kB | 90.5 kB | 332 kB | 5.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.8 ms | 3.08 ms | 158 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 14391   | 14391   | 23583   | 25199   | 22751.6 | 2956.4 | 14385   | 227519  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 2.17 MB | 2.32 MB | 2.09 MB | 272 kB | 1.32 MB | 20.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.23 ms | 62 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 15711  | 15711  | 23567  | 25199   | 22917.2 | 2606.14 | 15710  | 229168  |
| **Bytes/Sec** | 801 kB | 801 kB | 1.2 MB | 1.29 MB | 1.17 MB | 133 kB  | 801 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.13 ms | 61 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8695   | 8695   | 13175  | 13655  | 12741.6 | 1379.85 | 8689   | 127403  |
| **Bytes/Sec** | 452 kB | 452 kB | 685 kB | 710 kB | 662 kB  | 71.8 kB | 452 kB | 6.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.52 ms | 1.82 ms | 53 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9183   | 9183   | 16511   | 17471  | 15927.2 | 2272.62 | 9182   | 159274  |
| **Bytes/Sec** | 790 kB | 790 kB | 1.42 MB | 1.5 MB | 1.37 MB | 195 kB  | 790 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.17 ms | 1.45 ms | 81 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5947    | 5947    | 16351   | 16975   | 15223   | 3167.26 | 5947    | 152219  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 3.53 MB | 3.67 MB | 3.29 MB | 684 kB  | 1.28 MB | 32.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.44 ms | 40 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9015    | 9015    | 21327   | 22079   | 20073.1 | 3553.73 | 9012    | 220814  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 3.26 MB | 3.38 MB | 3.07 MB | 544 kB  | 1.38 MB | 33.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.38 ms | 1.31 ms | 61 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 24095  | 24095  | 42175   | 44095   | 40772   | 5646.31 | 24093  | 407745  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 4.73 MB | 4.94 MB | 4.57 MB | 632 kB  | 2.7 MB | 45.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.87 ms | 64 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13023   | 13023   | 19695   | 20463  | 19137.1 | 1990.34 | 13018   | 210479  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.83 MB | 1.9 MB | 1.78 MB | 185 kB  | 1.21 MB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.31 ms | 1.1 ms | 57 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3725   | 3725   | 6707   | 6831   | 6356.7 | 893.27  | 3725   | 63560   |
| **Bytes/Sec** | 343 kB | 343 kB | 617 kB | 629 kB | 585 kB | 82.2 kB | 343 kB | 5.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.85 ms | 2.36 ms | 47 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2041   | 2041   | 2919   | 4143   | 3107.3 | 597.87  | 2041   | 31069   |
| **Bytes/Sec** | 235 kB | 235 kB | 336 kB | 477 kB | 357 kB | 68.8 kB | 235 kB | 3.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.4 ms | 18.05 ms | 99 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 2269   | 2269   | 5355    | 5523    | 4936.8 | 1005.69 | 2269   | 49360 |
| **Bytes/Sec** | 645 kB | 645 kB | 1.52 MB | 1.57 MB | 1.4 MB | 285 kB  | 644 kB | 14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.64 ms | 4.45 ms | 239 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17775  | 17775  | 25951   | 26879  | 25155.64 | 2489.91 | 17770  | 276723  |
| **Bytes/Sec** | 924 kB | 924 kB | 1.35 MB | 1.4 MB | 1.31 MB  | 129 kB  | 924 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.87 ms | 54 ms |


---

<p align="center">Generated 2020-11-22T00:23:00.782Z</p>