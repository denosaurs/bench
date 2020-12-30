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
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 8338.37 | 23350.91 | 22835.28 | 13324 | 15250 | 9085.3 | 40157.6 | 22133.46 | 15918.4 | 3032.8 | 4681.5 | 19219.28 | 6375.7 |
| **Total** | 91719 | 256873 | 251179 | 133226 | 152505 | 90844 | 401600 | 243459 | 159160 | 30321 | 46811 | 211408 | 63754 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4731   | 4731   | 8727   | 8879   | 8338.37 | 1151.2 | 4728   | 91719   |
| **Bytes/Sec** | 440 kB | 440 kB | 812 kB | 826 kB | 775 kB  | 107 kB | 440 kB | 8.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.53 ms | 2.13 ms | 108 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 16063   | 16063   | 24063   | 24447   | 23350.91 | 2322.2 | 16060   | 256873  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.21 MB | 2.25 MB | 2.15 MB  | 214 kB | 1.48 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.8 ms | 49 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14199  | 14199  | 23375   | 25135   | 22835.28 | 2856.15 | 14199  | 251179  |
| **Bytes/Sec** | 724 kB | 724 kB | 1.19 MB | 1.28 MB | 1.16 MB  | 146 kB  | 724 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.03 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 10071  | 10071  | 13551  | 14111  | 13324  | 1107.91 | 10065  | 133226  |
| **Bytes/Sec** | 524 kB | 524 kB | 705 kB | 734 kB | 693 kB | 57.6 kB | 523 kB | 6.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.18 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8463   | 8463   | 15879   | 16511   | 15250   | 2291.85 | 8459   | 152505  |
| **Bytes/Sec** | 728 kB | 728 kB | 1.37 MB | 1.42 MB | 1.31 MB | 197 kB  | 727 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.23 ms | 1.33 ms | 63 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3859   | 3859   | 9855    | 10167  | 9085.3  | 1846.21 | 3859   | 90844   |
| **Bytes/Sec** | 834 kB | 834 kB | 2.13 MB | 2.2 MB | 1.96 MB | 399 kB  | 834 kB | 19.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 10 ms | 3.84 ms | 2.18 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 24383   | 24383   | 42015   | 42463  | 40157.6 | 5279.5 | 24376   | 401600  |
| **Bytes/Sec** | 3.73 MB | 3.73 MB | 6.43 MB | 6.5 MB | 6.14 MB | 808 kB | 3.73 MB | 61.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.73 ms | 17 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12207   | 12207   | 22991   | 25087   | 22133.46 | 3255.28 | 12204   | 243459  |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 2.57 MB | 2.81 MB | 2.48 MB  | 365 kB  | 1.37 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.01 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10463  | 10463  | 15983   | 17983   | 15918.4 | 1951.82 | 10456  | 159160  |
| **Bytes/Sec** | 973 kB | 973 kB | 1.49 MB | 1.67 MB | 1.48 MB | 181 kB  | 972 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.18 ms | 1.31 ms | 72 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1945   | 1945   | 3065   | 3661   | 3032.8 | 473.94  | 1945   | 30321   |
| **Bytes/Sec** | 224 kB | 224 kB | 353 kB | 421 kB | 349 kB | 54.5 kB | 224 kB | 3.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 51 ms | 12.7 ms | 18.2 ms | 99 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2185   | 2185   | 5047    | 5163    | 4681.5  | 872.57 | 2185   | 46811   |
| **Bytes/Sec** | 621 kB | 621 kB | 1.43 MB | 1.47 MB | 1.33 MB | 248 kB | 621 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 17 ms | 8.09 ms | 3.45 ms | 95 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12375   | 12375   | 19871   | 20623  | 19219.28 | 2207.62 | 12368   | 211408  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.83 MB | 1.9 MB | 1.77 MB  | 203 kB  | 1.14 MB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.42 ms | 1.14 ms | 43 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3799   | 3799   | 6683   | 6899   | 6375.7 | 880.07  | 3798   | 63754   |
| **Bytes/Sec** | 296 kB | 296 kB | 521 kB | 539 kB | 497 kB | 68.7 kB | 296 kB | 4.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 11 ms | 5.77 ms | 2.46 ms | 117 ms |


---

<p align="center">Generated 2020-12-30T00:28:32.756Z</p>