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

- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [alosaur](#alosaur)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [fastro](#fastro)
  - [node](#node)
  - [oak](#oak)
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 3335   | 3335   | 6735   | 6995   | 6443.7 | 1044.55 | 3334   |
| **Bytes/Sec** | 260 kB | 260 kB | 525 kB | 546 kB | 503 kB | 81.5 kB | 260 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.7 ms | 2.5 ms | 54 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 9551   | 9551   | 18207   | 19311   | 17614.8 | 2745.52 | 9544   |
| **Bytes/Sec** | 878 kB | 878 kB | 1.67 MB | 1.78 MB | 1.62 MB | 253 kB  | 878 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.72 ms | 1.45 ms | 53 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 15695  | 15695  | 23487  | 24623   | 22718.8 | 2416.15 | 15690  |
| **Bytes/Sec** | 800 kB | 800 kB | 1.2 MB | 1.26 MB | 1.16 MB | 123 kB  | 800 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.02 ms | 49 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10711  | 10711  | 14479  | 15215  | 14268.8 | 1226.63 | 10709  |
| **Bytes/Sec** | 557 kB | 557 kB | 753 kB | 791 kB | 742 kB  | 63.8 kB | 557 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.28 ms | 1.35 ms | 54 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10415  | 10415  | 18175   | 20303   | 17642   | 2528.21 | 10410  |
| **Bytes/Sec** | 895 kB | 895 kB | 1.56 MB | 1.74 MB | 1.52 MB | 217 kB  | 895 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.72 ms | 1.22 ms | 41 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4819    | 4819    | 10575   | 10823   | 9883    | 1734.02 | 4817    |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 2.29 MB | 2.34 MB | 2.14 MB | 375 kB  | 1.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------ | ----- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.5 ms | 2 ms  | 72 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17231   | 17231   | 36255   | 37215   | 34389.1 | 5482.31 | 17221   |
| **Bytes/Sec** | 2.64 MB | 2.64 MB | 5.55 MB | 5.69 MB | 5.26 MB | 839 kB  | 2.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.95 ms | 0.87 ms | 55 ms |


### [fastro](https://deno.land/x/fastro)

> Fast and simple web framework for deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10143   | 10143   | 17327   | 18735   | 16950.8 | 2338.58 | 10142   |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.44 MB | 2.64 MB | 2.39 MB | 330 kB  | 1.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.73 ms | 1.53 ms | 54 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11735   | 11735   | 24927   | 27151   | 23785.2 | 4171.91 | 11735   |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 2.79 MB | 3.04 MB | 2.66 MB | 467 kB  | 1.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.04 ms | 53 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 9103   | 9103   | 15639   | 17359   | 15155.2 | 2145.98 | 9103   |
| **Bytes/Sec** | 847 kB | 847 kB | 1.46 MB | 1.61 MB | 1.41 MB | 199 kB  | 847 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.4 ms | 48 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 1451   | 1451   | 2741   | 3033   | 2653.19 | 439.34  | 1451   |
| **Bytes/Sec** | 167 kB | 167 kB | 315 kB | 349 kB | 305 kB  | 50.5 kB | 167 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.57 ms | 18.84 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 1877   | 1877   | 3227   | 3919    | 3285   | 564.81 | 1877   |
| **Bytes/Sec** | 534 kB | 534 kB | 916 kB | 1.11 MB | 933 kB | 160 kB | 533 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------ | ------ |
| **Latency** | 8 ms  | 10 ms | 22 ms | 11.68 ms | 6.3 ms | 299 ms |


---

<p align="center">Generated 2020-10-15T00:19:08.706Z</p>