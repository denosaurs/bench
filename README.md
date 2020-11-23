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
| **Average** | 9819.4 | 21723.6 | 23683.28 | 13611.28 | 15292.8 | 13058.6 | 35248.81 | 22906 | 21107.28 | 7015.3 | 2699.46 | 4746.8 | 19514.8 |
| **Total** | 98188 | 217219 | 260499 | 149731 | 152933 | 130576 | 352488 | 229043 | 232177 | 70145 | 29689 | 47459 | 195147 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6295   | 6295   | 10287  | 10511  | 9819.4 | 1200.91 | 6293   | 98188   |
| **Bytes/Sec** | 586 kB | 586 kB | 956 kB | 977 kB | 913 kB | 112 kB  | 585 kB | 9.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.52 ms | 2.02 ms | 116 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 14575   | 14575   | 22623   | 22975   | 21723.6 | 2421.4 | 14568   | 217219 |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.08 MB | 2.11 MB | 2 MB    | 223 kB | 1.34 MB | 20 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 1.07 ms | 58 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16103  | 16103  | 23935   | 26383   | 23683.28 | 2763.06 | 16100  | 260499  |
| **Bytes/Sec** | 821 kB | 821 kB | 1.22 MB | 1.35 MB | 1.21 MB  | 141 kB  | 821 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.89 ms | 37 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9519   | 9519   | 14023  | 14551  | 13611.28 | 1327.86 | 9517   | 149731  |
| **Bytes/Sec** | 495 kB | 495 kB | 730 kB | 757 kB | 708 kB   | 69 kB   | 495 kB | 7.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.34 ms | 1.64 ms | 74 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9263   | 9263   | 16063   | 16359   | 15292.8 | 2057.26 | 9259   | 152933  |
| **Bytes/Sec** | 797 kB | 797 kB | 1.38 MB | 1.41 MB | 1.32 MB | 177 kB  | 796 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.29 ms | 78 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 4895    | 4895    | 13983   | 14607   | 13058.6 | 2813   | 4892    | 130576  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 3.02 MB | 3.16 MB | 2.82 MB | 608 kB | 1.06 MB | 28.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.49 ms | 1.82 ms | 50 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17631  | 17631  | 37311   | 37695   | 35248.81 | 5897.86 | 17628  | 352488  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 5.71 MB | 5.77 MB | 5.39 MB  | 903 kB  | 2.7 MB | 53.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.61 ms | 1 ms  | 60 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12095   | 12095   | 23743   | 25231   | 22906   | 3652.23 | 12093   | 229043  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.66 MB | 2.83 MB | 2.57 MB | 409 kB  | 1.35 MB | 25.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.18 ms | 52 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13143   | 13143   | 21615   | 23551   | 21107.28 | 2587.71 | 13143   | 232177  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 2.01 MB | 2.19 MB | 1.96 MB  | 241 kB  | 1.22 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 1.04 ms | 56 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4075   | 4075   | 7343   | 7571   | 7015.3 | 1009.9  | 4075   | 70145   |
| **Bytes/Sec** | 375 kB | 375 kB | 675 kB | 697 kB | 645 kB | 92.9 kB | 375 kB | 6.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.08 ms | 3.02 ms | 170 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1922   | 1922   | 2753   | 3695   | 2699.46 | 398.46  | 1922   | 29689   |
| **Bytes/Sec** | 221 kB | 221 kB | 317 kB | 425 kB | 310 kB  | 45.8 kB | 221 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.34 ms | 18.71 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2317   | 2317   | 5139    | 5283   | 4746.8  | 911.78 | 2316   | 47459   |
| **Bytes/Sec** | 658 kB | 658 kB | 1.46 MB | 1.5 MB | 1.35 MB | 259 kB | 658 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.03 ms | 3.38 ms | 90 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13335  | 13335  | 20255   | 21231  | 19514.8 | 2156.44 | 13335  | 195147  |
| **Bytes/Sec** | 694 kB | 694 kB | 1.05 MB | 1.1 MB | 1.01 MB | 112 kB  | 693 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.13 ms | 61 ms |


---

<p align="center">Generated 2020-11-23T00:20:46.698Z</p>