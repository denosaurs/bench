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
| **Average** | 8516 | 18304.41 | 29482.91 | 8364.6 | 15332.8 | 16651.1 | 36508 | 36384.73 | 17391.6 | 5571.1 | 2736.4 | 4612.5 | 21048.4 |
| **Total** | 85163 | 183022 | 324313 | 83635 | 153319 | 183141 | 365026 | 400287 | 173897 | 55703 | 27359 | 46122 | 210465 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4927   | 4927   | 8839   | 9263   | 8516   | 1247.65 | 4925   | 85163   |
| **Bytes/Sec** | 458 kB | 458 kB | 822 kB | 862 kB | 792 kB | 116 kB  | 458 kB | 7.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.28 ms | 2.69 ms | 145 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 9695   | 9695   | 18975   | 20271   | 18304.41 | 2917.9 | 9694   | 183022  |
| **Bytes/Sec** | 892 kB | 892 kB | 1.75 MB | 1.86 MB | 1.68 MB  | 268 kB | 892 kB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.55 ms | 1.43 ms | 63 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22863   | 22863   | 30127   | 31167   | 29482.91 | 2239.43 | 22857   | 324313  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.54 MB | 1.59 MB | 1.5 MB   | 114 kB  | 1.17 MB | 16.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.08 ms | 0.67 ms | 62 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6379   | 6379   | 8527   | 8895   | 8364.6 | 683.17  | 6378   | 83635   |
| **Bytes/Sec** | 332 kB | 332 kB | 443 kB | 462 kB | 435 kB | 35.5 kB | 332 kB | 4.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.36 ms | 1.94 ms | 71 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8855   | 8855   | 15927   | 16623   | 15332.8 | 2209.88 | 8849   | 153319  |
| **Bytes/Sec** | 761 kB | 761 kB | 1.37 MB | 1.43 MB | 1.32 MB | 190 kB  | 761 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.92 ms | 144 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7419   | 7419   | 17695   | 17887   | 16651.1 | 2943.97 | 7419   | 183141  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 3.82 MB | 3.86 MB | 3.6 MB  | 636 kB  | 1.6 MB | 39.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.11 ms | 1.17 ms | 59 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17231   | 17231   | 38751   | 39839   | 36508   | 6489.58 | 17231   | 365026  |
| **Bytes/Sec** | 2.64 MB | 2.64 MB | 5.93 MB | 6.09 MB | 5.58 MB | 992 kB  | 2.64 MB | 55.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 1.1 ms | 60 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20047   | 20047   | 38047   | 38527   | 36384.73 | 5180.65 | 20036   | 400287  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 4.26 MB | 4.32 MB | 4.08 MB  | 581 kB  | 2.24 MB | 44.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.95 ms | 66 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10935   | 10935   | 18079   | 18943   | 17391.6 | 2206.65 | 10928   | 173897  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.68 MB | 1.76 MB | 1.62 MB | 205 kB  | 1.02 MB | 16.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.68 ms | 1.37 ms | 47 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3141   | 3141   | 5839   | 6183   | 5571.1 | 864.55  | 3141   | 55703   |
| **Bytes/Sec** | 289 kB | 289 kB | 538 kB | 569 kB | 513 kB | 79.6 kB | 289 kB | 5.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 13 ms | 6.77 ms | 2.93 ms | 82 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1537   | 1537   | 2793   | 3335   | 2736.4 | 465.63  | 1537   | 27359   |
| **Bytes/Sec** | 177 kB | 177 kB | 321 kB | 384 kB | 315 kB | 53.6 kB | 177 kB | 3.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.12 ms | 18.83 ms | 89 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2311   | 2311   | 4983    | 5147    | 4612.5  | 823.36 | 2310   | 46122   |
| **Bytes/Sec** | 656 kB | 656 kB | 1.42 MB | 1.46 MB | 1.31 MB | 234 kB | 656 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.18 ms | 4.05 ms | 103 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13983  | 13983  | 21727   | 22591   | 21048.4 | 2410.03 | 13983  | 210465  |
| **Bytes/Sec** | 728 kB | 728 kB | 1.13 MB | 1.18 MB | 1.09 MB | 125 kB  | 727 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.29 ms | 1.16 ms | 65 ms |


---

<p align="center">Generated 2020-11-10T00:17:10.440Z</p>