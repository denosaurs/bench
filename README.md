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
| **Average** | 6026.9 | 22994.55 | 24646.4 | 13485.6 | 19034 | 13156.6 | 21439.6 | 44472 | 14738.4 | 7076.4 | 3113.73 | 3874.7 | 23192.37 |
| **Total** | 60259 | 252949 | 246450 | 134850 | 190335 | 131554 | 214418 | 489212 | 147369 | 70757 | 34246 | 38744 | 255114 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3443   | 3443   | 6379   | 6599   | 6026.9 | 889.05  | 3442   | 60259  |
| **Bytes/Sec** | 320 kB | 320 kB | 593 kB | 614 kB | 560 kB | 82.7 kB | 320 kB | 5.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 6.12 ms | 2.96 ms | 84 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13535   | 13535   | 23823   | 24719   | 22994.55 | 3016.91 | 13530   | 252949  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.19 MB | 2.27 MB | 2.12 MB  | 278 kB  | 1.24 MB | 23.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.97 ms | 57 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16783  | 16783  | 25551  | 26143   | 24646.4 | 2688.41 | 16771  | 246450  |
| **Bytes/Sec** | 856 kB | 856 kB | 1.3 MB | 1.33 MB | 1.26 MB | 137 kB  | 855 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.98 ms | 61 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9543   | 9543   | 13799  | 14439  | 13485.6 | 1342.3  | 9540   | 134850  |
| **Bytes/Sec** | 496 kB | 496 kB | 717 kB | 751 kB | 701 kB  | 69.8 kB | 496 kB | 7.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.52 ms | 58 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10335  | 10335  | 19903   | 20287   | 19034   | 2904.63 | 10331  | 190335  |
| **Bytes/Sec** | 889 kB | 889 kB | 1.71 MB | 1.74 MB | 1.64 MB | 250 kB  | 888 kB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.47 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4723    | 4723    | 14807  | 15007   | 13156.6 | 3424.43 | 4720    | 131554  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 3.2 MB | 3.24 MB | 2.84 MB | 740 kB  | 1.02 MB | 28.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.46 ms | 1.78 ms | 44 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10759   | 10759   | 22271   | 24559   | 21439.6 | 3692.35 | 10759   | 214418  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 3.41 MB | 3.76 MB | 3.28 MB | 565 kB  | 1.65 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.16 ms | 51 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26511   | 26511   | 46047   | 48287   | 44472   | 5759.69 | 26504   | 489212  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 5.16 MB | 5.41 MB | 4.98 MB | 645 kB  | 2.97 MB | 54.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.18 ms | 0.69 ms | 34 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9447   | 9447   | 15311   | 15999   | 14738.4 | 1827.36 | 9440   | 147369  |
| **Bytes/Sec** | 878 kB | 878 kB | 1.42 MB | 1.49 MB | 1.37 MB | 170 kB  | 878 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.44 ms | 64 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4183   | 4183   | 7339   | 7647   | 7076.4 | 990.9   | 4182   | 70757   |
| **Bytes/Sec** | 385 kB | 385 kB | 675 kB | 704 kB | 651 kB | 91.2 kB | 385 kB | 6.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 4.98 ms | 2.61 ms | 74 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1995   | 1995   | 3119   | 3723   | 3113.73 | 446.7   | 1995   | 34246   |
| **Bytes/Sec** | 230 kB | 230 kB | 359 kB | 428 kB | 358 kB  | 51.4 kB | 229 kB | 3.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max   |
| ----------- | ----- | ----- | ----- | -------- | ----- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.37 ms | 18 ms | 63 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 2009   | 2009   | 4135    | 4315    | 3874.7 | 679.34 | 2009   | 38744 |
| **Bytes/Sec** | 571 kB | 571 kB | 1.17 MB | 1.23 MB | 1.1 MB | 193 kB | 571 kB | 11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.85 ms | 3.9 ms | 101 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 16095  | 16095  | 23951   | 24127   | 23192.37 | 2252.68 | 16091  | 255114  |
| **Bytes/Sec** | 837 kB | 837 kB | 1.25 MB | 1.25 MB | 1.21 MB  | 117 kB  | 837 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.87 ms | 63 ms |


---

<p align="center">Generated 2020-11-11T00:17:16.082Z</p>