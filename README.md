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
| **Average** | 6275.1 | 22359.6 | 18703.6 | 15217.1 | 16616.41 | 17404 | 36128.73 | 41719.2 | 23042.19 | 2985.19 | 4464.8 | 26330.91 | 8226.4 |
| **Total** | 62747 | 223575 | 187050 | 167384 | 166168 | 191438 | 397401 | 417182 | 253466 | 32831 | 44639 | 289642 | 82242 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3797   | 3797   | 6499   | 6899   | 6275.1 | 837.31  | 3796   | 62747   |
| **Bytes/Sec** | 353 kB | 353 kB | 605 kB | 642 kB | 584 kB | 77.8 kB | 353 kB | 5.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 5.89 ms | 2.43 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15015   | 15015   | 23039   | 23407   | 22359.6 | 2454.18 | 15014   | 223575  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 2.12 MB | 2.15 MB | 2.06 MB | 226 kB  | 1.38 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.2 ms | 0.89 ms | 63 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12343  | 12343  | 19375  | 19727   | 18703.6 | 2141.96 | 12343  | 187050  |
| **Bytes/Sec** | 630 kB | 630 kB | 988 kB | 1.01 MB | 954 kB  | 109 kB  | 629 kB | 9.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.61 ms | 1.12 ms | 35 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 11719  | 11719  | 15543  | 15863  | 15217.1 | 1115.63 | 11714  | 167384 |
| **Bytes/Sec** | 609 kB | 609 kB | 808 kB | 825 kB | 791 kB  | 58.1 kB | 609 kB | 8.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.2 ms | 0.9 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10287  | 10287  | 17135   | 18255   | 16616.41 | 2150.13 | 10284  | 166168  |
| **Bytes/Sec** | 885 kB | 885 kB | 1.47 MB | 1.57 MB | 1.43 MB  | 185 kB  | 884 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.97 ms | 1.27 ms | 73 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 8583    | 8583    | 18191   | 20127   | 17404   | 2859.9 | 8576    | 191438  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 3.93 MB | 4.35 MB | 3.76 MB | 618 kB | 1.85 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.98 ms | 0.99 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19951   | 19951   | 37791   | 38783   | 36128.73 | 5152.55 | 19951   | 397401  |
| **Bytes/Sec** | 3.05 MB | 3.05 MB | 5.78 MB | 5.94 MB | 5.53 MB  | 788 kB  | 3.05 MB | 60.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.81 ms | 26 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 23647   | 23647   | 42655   | 45727   | 41719.2 | 6235.07 | 23632   | 417182  |
| **Bytes/Sec** | 2.65 MB | 2.65 MB | 4.78 MB | 5.12 MB | 4.67 MB | 698 kB  | 2.65 MB | 46.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.72 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17359   | 17359   | 23487   | 24511   | 23042.19 | 1841.17 | 17354   | 253466  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.19 MB | 2.28 MB | 2.14 MB  | 171 kB  | 1.61 MB | 23.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.77 ms | 40 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2051   | 2051   | 3101   | 3661   | 2985.19 | 419.32  | 2051   | 32831   |
| **Bytes/Sec** | 236 kB | 236 kB | 357 kB | 421 kB | 343 kB  | 48.2 kB | 236 kB | 3.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.9 ms | 18.36 ms | 90 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2199   | 2199   | 4691    | 5115    | 4464.8  | 796.34 | 2198   | 44639   |
| **Bytes/Sec** | 625 kB | 625 kB | 1.33 MB | 1.45 MB | 1.27 MB | 226 kB | 624 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.43 ms | 3.95 ms | 205 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19695   | 19695   | 27087   | 28239  | 26330.91 | 2227.33 | 19691   | 289642  |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 2.49 MB | 2.6 MB | 2.42 MB  | 205 kB  | 1.81 MB | 26.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.68 ms | 39 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4919   | 4919   | 8631   | 8943   | 8226.4 | 1128.64 | 4916   | 82242   |
| **Bytes/Sec** | 383 kB | 383 kB | 673 kB | 697 kB | 641 kB | 88 kB   | 383 kB | 6.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.49 ms | 1.98 ms | 98 ms |


---

<p align="center">Generated 2021-01-25T00:46:51.974Z</p>