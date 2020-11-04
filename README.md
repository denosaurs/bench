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
| **Average** | 8007.4 | 19141.2 | 18615.6 | 13506.55 | 23896 | 12373 | 19323.6 | 23791.6 | 17523.6 | 5549.1 | 2708.6 | 4402.3 | 19640.41 |
| **Total** | 80069 | 191390 | 186127 | 148569 | 262855 | 123731 | 193216 | 237915 | 175221 | 55485 | 27082 | 44019 | 196418 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4631   | 4631   | 8247   | 8711   | 8007.4 | 1148.84 | 4631   | 80069   |
| **Bytes/Sec** | 361 kB | 361 kB | 643 kB | 679 kB | 625 kB | 89.5 kB | 361 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.68 ms | 2.6 ms | 80 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12095   | 12095   | 19759   | 20911   | 19141.2 | 2424.44 | 12095   | 191390  |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.82 MB | 1.92 MB | 1.76 MB | 223 kB  | 1.11 MB | 17.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.5 ms | 1.23 ms | 57 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 11479  | 11479  | 19279  | 20095   | 18615.6 | 2416.7 | 11478  | 186127  |
| **Bytes/Sec** | 586 kB | 586 kB | 983 kB | 1.02 MB | 949 kB  | 123 kB | 585 kB | 9.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.59 ms | 1.46 ms | 86 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8423   | 8423   | 14095  | 14319  | 13506.55 | 1638.33 | 8423   | 148569  |
| **Bytes/Sec** | 438 kB | 438 kB | 733 kB | 744 kB | 702 kB   | 85.2 kB | 438 kB | 7.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.49 ms | 43 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 16655   | 16655   | 24527   | 25375   | 23896   | 2381.5 | 16652   | 262855  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.11 MB | 2.18 MB | 2.05 MB | 205 kB | 1.43 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.15 ms | 1.09 ms | 56 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 13415  | 14103   | 12373   | 2914.86 | 4350   | 123731  |
| **Bytes/Sec** | 940 kB | 940 kB | 2.9 MB | 3.05 MB | 2.67 MB | 630 kB  | 940 kB | 26.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 8 ms  | 2.66 ms | 2.12 ms | 66 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9311    | 9311    | 20431   | 21295   | 19323.6 | 3376.34 | 9311    | 193216  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 3.13 MB | 3.26 MB | 2.96 MB | 516 kB  | 1.42 MB | 29.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.48 ms | 1.29 ms | 47 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11863   | 11863   | 24383   | 27359   | 23791.6 | 4243.71 | 11861   | 237915  |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 2.73 MB | 3.07 MB | 2.66 MB | 475 kB  | 1.33 MB | 26.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.13 ms | 40 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10895   | 10895   | 18543   | 19215   | 17523.6 | 2394.15 | 10892   | 175221  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.72 MB | 1.79 MB | 1.63 MB | 223 kB  | 1.01 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.58 ms | 1.45 ms | 61 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3281   | 3281   | 5759   | 6011   | 5549.1 | 773.54  | 3280   | 55485  |
| **Bytes/Sec** | 302 kB | 302 kB | 530 kB | 553 kB | 510 kB | 71.2 kB | 302 kB | 5.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.72 ms | 3.28 ms | 75 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1831   | 1831   | 2701   | 3357   | 2708.6 | 380.76  | 1831   | 27082   |
| **Bytes/Sec** | 211 kB | 211 kB | 311 kB | 386 kB | 311 kB | 43.8 kB | 211 kB | 3.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.27 ms | 18.78 ms | 122 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2018   | 2018   | 4779    | 4927   | 4402.3  | 879.19 | 2018   | 44019   |
| **Bytes/Sec** | 573 kB | 573 kB | 1.36 MB | 1.4 MB | 1.25 MB | 250 kB | 573 kB | 12.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 7 ms  | 7 ms  | 18 ms | 8.56 ms | 4.3 ms | 115 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14303  | 14303  | 20063   | 21263   | 19640.41 | 1838.38 | 14303  | 196418  |
| **Bytes/Sec** | 744 kB | 744 kB | 1.04 MB | 1.11 MB | 1.02 MB  | 95.6 kB | 744 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.39 ms | 1.27 ms | 68 ms |


---

<p align="center">Generated 2020-11-04T00:23:55.699Z</p>