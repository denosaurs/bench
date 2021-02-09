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
| **Average** | 10385.8 | 19422 | 26057.46 | 12576.37 | 18299.6 | 8982.37 | 37702.55 | 22911.6 | 15676 | 2896.1 | 5410.9 | 25451.2 | 7614.4 |
| **Total** | 103870 | 194194 | 286624 | 138348 | 182970 | 98792 | 414678 | 229130 | 156736 | 28956 | 54103 | 254511 | 76134 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6311   | 6311   | 10751   | 11567   | 10385.8 | 1386.8 | 6309   | 103870  |
| **Bytes/Sec** | 587 kB | 587 kB | 1000 kB | 1.08 MB | 966 kB  | 129 kB | 587 kB | 9.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.39 ms | 1.79 ms | 112 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12807   | 12807   | 19967   | 21151   | 19422   | 2287.09 | 12802   | 194194  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.84 MB | 1.95 MB | 1.79 MB | 210 kB  | 1.18 MB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.4 ms | 1.25 ms | 65 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19871   | 19871   | 26815   | 27471  | 26057.46 | 2088.85 | 19871   | 286624  |
| **Bytes/Sec** | 1.01 MB | 1.01 MB | 1.37 MB | 1.4 MB | 1.33 MB  | 106 kB  | 1.01 MB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.75 ms | 50 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8687   | 8687   | 13127  | 13447  | 12576.37 | 1297.16 | 8684   | 138348  |
| **Bytes/Sec** | 452 kB | 452 kB | 683 kB | 699 kB | 654 kB   | 67.5 kB | 452 kB | 7.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.47 ms | 1.4 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11375  | 11375  | 18847   | 19391   | 18299.6 | 2322.26 | 11374  | 182970  |
| **Bytes/Sec** | 978 kB | 978 kB | 1.62 MB | 1.67 MB | 1.57 MB | 200 kB  | 978 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.31 ms | 79 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4223   | 4223   | 9447    | 9975    | 8982.37 | 1570.72 | 4223   | 98792   |
| **Bytes/Sec** | 912 kB | 912 kB | 2.04 MB | 2.15 MB | 1.94 MB | 339 kB  | 912 kB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 3.91 ms | 1.9 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21903   | 21903   | 39327   | 40639   | 37702.55 | 5069.58 | 21901   | 414678  |
| **Bytes/Sec** | 3.35 MB | 3.35 MB | 6.02 MB | 6.22 MB | 5.77 MB  | 775 kB  | 3.35 MB | 63.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.57 ms | 0.77 ms | 27 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12423   | 12423   | 24031   | 24767   | 22911.6 | 3516.72 | 12421   | 229130  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 2.69 MB | 2.78 MB | 2.57 MB | 394 kB  | 1.39 MB | 25.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.31 ms | 1.09 ms | 53 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9871   | 9871   | 16295   | 16927   | 15676   | 1967.99 | 9868   | 156736  |
| **Bytes/Sec** | 918 kB | 918 kB | 1.52 MB | 1.57 MB | 1.46 MB | 183 kB  | 918 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.21 ms | 1.38 ms | 83 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1968   | 1968   | 2749   | 3601   | 2896.1 | 489.3   | 1968   | 28956   |
| **Bytes/Sec** | 226 kB | 226 kB | 316 kB | 414 kB | 333 kB | 56.2 kB | 226 kB | 3.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 13.29 ms | 18.34 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2487   | 2487   | 5679    | 6007    | 5410.9  | 1012.94 | 2486   | 54103   |
| **Bytes/Sec** | 706 kB | 706 kB | 1.61 MB | 1.71 MB | 1.54 MB | 288 kB  | 706 kB | 15.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.91 ms | 2.92 ms | 82 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18751   | 18751   | 26175   | 26463   | 25451.2 | 2256.83 | 18749   | 254511  |
| **Bytes/Sec** | 1.73 MB | 1.73 MB | 2.41 MB | 2.44 MB | 2.34 MB | 207 kB  | 1.72 MB | 23.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.12 ms | 0.67 ms | 25 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4619   | 4619   | 7911   | 8151   | 7614.4 | 1008.67 | 4618   | 76134   |
| **Bytes/Sec** | 360 kB | 360 kB | 617 kB | 636 kB | 594 kB | 78.6 kB | 360 kB | 5.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.68 ms | 2.21 ms | 106 ms |


---

<p align="center">Generated 2021-02-09T00:18:18.796Z</p>