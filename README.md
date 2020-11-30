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
| **Average** | 9611.4 | 19628.41 | 24494.4 | 8531 | 18069.46 | 13031.1 | 22747.6 | 38650.91 | 16732.73 | 5270.3 | 2777.6 | 3998.2 | 21660.4 |
| **Total** | 96116 | 196269 | 244937 | 85291 | 198761 | 143329 | 227444 | 425195 | 184072 | 52700 | 27773 | 39972 | 216599 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5679   | 5679   | 9951   | 10463  | 9611.4 | 1335.75 | 5677   | 96116   |
| **Bytes/Sec** | 528 kB | 528 kB | 926 kB | 973 kB | 894 kB | 124 kB  | 528 kB | 8.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.65 ms | 1.82 ms | 48 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13431   | 13431   | 19583  | 21935   | 19628.41 | 2327.34 | 13427   | 196269  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 1.8 MB | 2.02 MB | 1.81 MB  | 214 kB  | 1.24 MB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.41 ms | 64 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 18079  | 18079  | 25071   | 26479   | 24494.4 | 2330.11 | 18065  | 244937  |
| **Bytes/Sec** | 922 kB | 922 kB | 1.28 MB | 1.35 MB | 1.25 MB | 119 kB  | 921 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 1.19 ms | 70 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6243   | 6243   | 8823   | 9127   | 8531   | 780.24  | 6242   | 85291   |
| **Bytes/Sec** | 325 kB | 325 kB | 458 kB | 474 kB | 444 kB | 40.6 kB | 325 kB | 4.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.33 ms | 1.7 ms | 43 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 11615  | 11615  | 18895   | 20255   | 18069.46 | 2239.3 | 11613  | 198761  |
| **Bytes/Sec** | 999 kB | 999 kB | 1.63 MB | 1.74 MB | 1.55 MB  | 193 kB | 999 kB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.55 ms | 1.3 ms | 44 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 5031    | 5031    | 14103   | 14735   | 13031.1 | 2630.58 | 5030    | 143329 |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 3.05 MB | 3.18 MB | 2.81 MB | 568 kB  | 1.09 MB | 31 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.52 ms | 2.07 ms | 69 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9647    | 9647    | 23807   | 25311   | 22747.6 | 4408.51 | 9640    | 227444  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 3.64 MB | 3.87 MB | 3.48 MB | 675 kB  | 1.47 MB | 34.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.21 ms | 60 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19503   | 19503   | 39967   | 42303   | 38650.91 | 6138.41 | 19497   | 425195  |
| **Bytes/Sec** | 2.19 MB | 2.19 MB | 4.48 MB | 4.74 MB | 4.33 MB  | 688 kB  | 2.18 MB | 47.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.36 ms | 1.01 ms | 57 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 11871  | 11871  | 17583   | 18495   | 16732.73 | 1939.1 | 11871  | 184072  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.64 MB | 1.72 MB | 1.56 MB  | 180 kB | 1.1 MB | 17.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.98 ms | 1.36 ms | 62 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3061   | 3061   | 5559   | 5763   | 5270.3 | 776.43  | 3061   | 52700   |
| **Bytes/Sec** | 282 kB | 282 kB | 511 kB | 530 kB | 485 kB | 71.4 kB | 282 kB | 4.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7.11 ms | 3.24 ms | 97 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1937   | 1937   | 2827   | 3199   | 2777.6 | 358.3   | 1937   | 27773   |
| **Bytes/Sec** | 223 kB | 223 kB | 325 kB | 368 kB | 319 kB | 41.2 kB | 223 kB | 3.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.92 ms | 18.58 ms | 70 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2175   | 2175   | 4283    | 4443    | 3998.2  | 699.14 | 2174   | 39972   |
| **Bytes/Sec** | 617 kB | 617 kB | 1.22 MB | 1.26 MB | 1.14 MB | 199 kB | 617 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 8 ms  | 8 ms  | 18 ms | 9.51 ms | 4.42 ms | 227 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13815  | 13815  | 22559   | 23359   | 21660.4 | 2648.63 | 13811  | 216599  |
| **Bytes/Sec** | 718 kB | 718 kB | 1.17 MB | 1.21 MB | 1.13 MB | 138 kB  | 718 kB | 11.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.04 ms | 55 ms |


---

<p align="center">Generated 2020-11-30T00:19:01.944Z</p>