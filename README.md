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
| **Average** | 8533.4 | 22063.6 | 23905.82 | 13427.2 | 20785.82 | 8520.5 | 37868.37 | 38767.2 | 19333.46 | 9041.28 | 2932.6 | 4527.61 | 24456 |
| **Total** | 85326 | 220638 | 262968 | 134278 | 228647 | 85206 | 416546 | 387693 | 212667 | 99458 | 29324 | 45267 | 244563 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5259   | 5259   | 8767   | 9207   | 8533.4 | 1112.11 | 5257   | 85326   |
| **Bytes/Sec** | 489 kB | 489 kB | 815 kB | 857 kB | 794 kB | 103 kB  | 489 kB | 7.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.27 ms | 1.96 ms | 67 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13735   | 13735   | 23135   | 23471   | 22063.6 | 2808.12 | 13732   | 220638  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 2.13 MB | 2.16 MB | 2.03 MB | 258 kB  | 1.26 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 1.16 ms | 104 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 15639  | 15639  | 24799   | 25135   | 23905.82 | 2641.62 | 15633  | 262968  |
| **Bytes/Sec** | 798 kB | 798 kB | 1.26 MB | 1.28 MB | 1.22 MB  | 135 kB  | 797 kB | 13.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.99 ms | 89 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8799   | 8799   | 14303  | 15703  | 13427.2 | 2171.14 | 8798   | 134278  |
| **Bytes/Sec** | 458 kB | 458 kB | 744 kB | 817 kB | 698 kB  | 113 kB  | 457 kB | 6.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.4 ms | 1.65 ms | 71 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13303   | 13303   | 21535   | 22191   | 20785.82 | 2393.47 | 13299   | 228647  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.85 MB | 1.91 MB | 1.79 MB  | 206 kB  | 1.14 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.27 ms | 110 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3759   | 3759   | 9103    | 10111   | 8520.5  | 1797.17 | 3759   | 85206   |
| **Bytes/Sec** | 812 kB | 812 kB | 1.97 MB | 2.19 MB | 1.84 MB | 388 kB  | 812 kB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.15 ms | 2.45 ms | 59 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16463   | 16463   | 40127   | 41407   | 37868.37 | 6839.45 | 16455   | 416546  |
| **Bytes/Sec** | 2.52 MB | 2.52 MB | 6.14 MB | 6.34 MB | 5.79 MB  | 1.05 MB | 2.52 MB | 63.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.9 ms | 34 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20623   | 20623   | 40895   | 41503   | 38767.2 | 6088.13 | 20614   | 387693  |
| **Bytes/Sec** | 2.31 MB | 2.31 MB | 4.58 MB | 4.65 MB | 4.34 MB | 682 kB  | 2.31 MB | 43.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.27 ms | 0.85 ms | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14591   | 14591   | 19855   | 22719   | 19333.46 | 1952.44 | 14588   | 212667  |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 1.85 MB | 2.11 MB | 1.8 MB   | 182 kB  | 1.36 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.39 ms | 66 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6271   | 6271   | 9287   | 9607   | 9041.28 | 903.77  | 6269   | 99458   |
| **Bytes/Sec** | 577 kB | 577 kB | 854 kB | 884 kB | 832 kB  | 83.2 kB | 577 kB | 9.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.9 ms | 1.99 ms | 92 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1995   | 1995   | 2963   | 3523   | 2932.6 | 412.69  | 1995   | 29324   |
| **Bytes/Sec** | 230 kB | 230 kB | 341 kB | 405 kB | 337 kB | 47.5 kB | 229 kB | 3.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.16 ms | 18.4 ms | 84 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2019   | 2019   | 4919   | 5083    | 4527.61 | 930.22 | 2019   | 45267   |
| **Bytes/Sec** | 573 kB | 573 kB | 1.4 MB | 1.44 MB | 1.29 MB | 264 kB | 573 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.29 ms | 5.1 ms | 277 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17727  | 17727  | 25119   | 26031   | 24456   | 2291.23 | 17713  | 244563  |
| **Bytes/Sec** | 921 kB | 921 kB | 1.31 MB | 1.35 MB | 1.27 MB | 119 kB  | 921 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.94 ms | 57 ms |


---

<p align="center">Generated 2020-11-27T00:17:55.842Z</p>