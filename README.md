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
| **Average** | 7948.8 | 23014 | 24948.8 | 12591.64 | 21134.8 | 13965 | 16452.6 | 36272.73 | 17866 | 2905.6 | 4489 | 16377.6 | 9567 |
| **Total** | 79470 | 230122 | 249460 | 138511 | 211345 | 139648 | 164514 | 399019 | 178651 | 29053 | 44883 | 163782 | 95653 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5811   | 5811   | 8067   | 8439   | 7948.8 | 732.01 | 5809   | 79470   |
| **Bytes/Sec** | 541 kB | 541 kB | 750 kB | 785 kB | 739 kB | 68 kB  | 540 kB | 7.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.51 ms | 1.72 ms | 92 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15799   | 15799   | 23711   | 24383   | 23014   | 2420.18 | 15796   | 230122  |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.18 MB | 2.24 MB | 2.12 MB | 223 kB  | 1.45 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.85 ms | 67 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17615  | 17615  | 25743   | 26159   | 24948.8 | 2460.49 | 17603  | 249460  |
| **Bytes/Sec** | 898 kB | 898 kB | 1.31 MB | 1.33 MB | 1.27 MB | 126 kB  | 898 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.76 ms | 48 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 8415   | 8415   | 13047  | 13295  | 12591.64 | 1338.09 | 8415   | 138511 |
| **Bytes/Sec** | 438 kB | 438 kB | 679 kB | 691 kB | 655 kB   | 69.5 kB | 438 kB | 7.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.39 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13679   | 13679   | 21599   | 23215 | 21134.8 | 2558.59 | 13677   | 211345  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.86 MB | 2 MB  | 1.82 MB | 220 kB  | 1.18 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.84 ms | 33 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5663    | 5663    | 15151   | 15247   | 13965   | 2816.88 | 5662    | 139648  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.27 MB | 3.29 MB | 3.02 MB | 608 kB  | 1.22 MB | 30.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.32 ms | 1.4 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7479    | 7479    | 17471   | 18031   | 16452.6 | 3027.76 | 7479    | 164514  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 2.67 MB | 2.76 MB | 2.52 MB | 463 kB  | 1.14 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.96 ms | 1.44 ms | 35 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20287   | 20287   | 38175   | 38527   | 36272.73 | 5100.86 | 20278   | 399019  |
| **Bytes/Sec** | 2.27 MB | 2.27 MB | 4.28 MB | 4.32 MB | 4.06 MB  | 572 kB  | 2.27 MB | 44.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.59 ms | 0.8 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12655   | 12655   | 18047   | 20511   | 17866   | 2036.23 | 12651   | 178651  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.68 MB | 1.91 MB | 1.66 MB | 189 kB  | 1.18 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.74 ms | 1.04 ms | 38 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2113   | 2113   | 2907   | 3497   | 2905.6 | 441.9   | 2112   | 29053   |
| **Bytes/Sec** | 243 kB | 243 kB | 334 kB | 402 kB | 334 kB | 50.8 kB | 243 kB | 3.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.25 ms | 18.38 ms | 87 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2625   | 2625   | 4603    | 5067    | 4489    | 714.4  | 2624   | 44883   |
| **Bytes/Sec** | 745 kB | 745 kB | 1.31 MB | 1.44 MB | 1.27 MB | 203 kB | 745 kB | 12.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 15 ms | 8.4 ms | 4.12 ms | 218 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10135  | 10135  | 17103   | 17903   | 16377.6 | 2153.79 | 10131  | 163782  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.57 MB | 1.65 MB | 1.51 MB | 198 kB  | 932 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.1 ms | 1.15 ms | 42 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6699   | 6699   | 9823   | 10079  | 9567   | 964.79  | 6698   | 95653   |
| **Bytes/Sec** | 522 kB | 522 kB | 766 kB | 786 kB | 746 kB | 75.2 kB | 522 kB | 7.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.57 ms | 1.86 ms | 88 ms |


---

<p align="center">Generated 2021-03-22T00:18:42.175Z</p>