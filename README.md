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
  - [aqua](#aqua)
  - [deno](#deno)
  - [deno_canary](#deno_canary)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [oak](#oak)
  - [opine](#opine)
  - [pogo](#pogo)
  - [reno](#reno)
  - [servest](#servest)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 40367.2 | 403623 |
| node | 36994.4 | 369930 |
| alosaur | 33174.4 | 331758 |
| reno | 32075.64 | 352856 |
| deno_canary | 31928 | 319254 |
| fastify | 31150 | 311461 |
| oak | 26826.91 | 295117 |
| aqua | 16565.2 | 165636 |
| express | 16208.6 | 162093 |
| abc | 15992.8 | 159954 |
| little_std | 15814.19 | 173983 |
| little_native | 13788.2 | 137882 |
| opine | 9687.8 | 96863 |
| dinatra | 9446.6 | 94458 |
| tinyhttp | 4647.46 | 51110 |
| drash | 1448.7 | 14487 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |
| servest | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11831  | 11831  | 16399   | 16687   | 15992.8 | 1396.72 | 11831  | 159954  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.53 MB | 1.55 MB | 1.49 MB | 130 kB  | 1.1 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.14 ms | 0.91 ms | 57 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19455   | 19455   | 40031   | 41055  | 33174.4 | 9322.5  | 19454   | 331758  |
| **Bytes/Sec** | 2.18 MB | 2.18 MB | 4.49 MB | 4.6 MB | 3.72 MB | 1.04 MB | 2.18 MB | 37.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.77 ms | 28 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10103   | 10103   | 17055   | 20207   | 16565.2 | 3454.83 | 10099   | 165636  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.59 MB | 3.07 MB | 2.52 MB | 525 kB  | 1.54 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.83 ms | 1.29 ms | 29 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20671   | 20671   | 45887   | 48479   | 40367.2 | 9991.94 | 20670   | 403623  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 5.14 MB | 5.43 MB | 4.52 MB | 1.12 MB | 2.32 MB | 45.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.78 ms | 15 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 16431   | 16431   | 35647   | 36575   | 31928   | 6563   | 16422   | 319254  |
| **Bytes/Sec** | 1.84 MB | 1.84 MB | 3.99 MB | 4.09 MB | 3.58 MB | 735 kB | 1.84 MB | 35.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.64 ms | 0.98 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7159   | 7159   | 9679   | 9967   | 9446.6 | 776.24  | 7157   | 94458   |
| **Bytes/Sec** | 372 kB | 372 kB | 503 kB | 518 kB | 491 kB | 40.4 kB | 372 kB | 4.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.62 ms | 1.67 ms | 35 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1323   | 1323   | 1456   | 1480   | 1448.7 | 43.37   | 1323   | 14487   |
| **Bytes/Sec** | 582 kB | 582 kB | 641 kB | 651 kB | 637 kB | 19.1 kB | 582 kB | 6.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 19 ms | 29 ms | 32 ms | 27.09 ms | 6.97 ms | 238 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 8095    | 8095    | 18015   | 19391   | 16208.6 | 3970   | 8093    | 162093 |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 3.89 MB | 4.19 MB | 3.5 MB  | 857 kB | 1.75 MB | 35 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.23 ms | 1.1 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 15623   | 15623   | 33023   | 33631   | 31150  | 5233.68 | 15623   | 311461 |
| **Bytes/Sec** | 2.41 MB | 2.41 MB | 5.08 MB | 5.18 MB | 4.8 MB | 806 kB  | 2.41 MB | 48 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.05 ms | 0.82 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 7135    | 7135    | 15367   | 15791  | 13788.2 | 2822.72 | 7135    | 137882 |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 2.34 MB | 2.4 MB | 2.1 MB  | 429 kB  | 1.08 MB | 21 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.36 ms | 1.14 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8847    | 8847    | 17743  | 18095   | 15814.19 | 3369.81 | 8843    | 173983  |
| **Bytes/Sec** | 1.34 MB | 1.34 MB | 2.7 MB | 2.75 MB | 2.4 MB   | 513 kB  | 1.34 MB | 26.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.25 ms | 0.87 ms | 22 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 19023   | 19023   | 42399   | 42815  | 36994.4 | 8211.9 | 19012   | 369930  |
| **Bytes/Sec** | 2.13 MB | 2.13 MB | 4.75 MB | 4.8 MB | 4.14 MB | 920 kB | 2.13 MB | 41.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.38 ms | 0.77 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19007   | 19007   | 27599   | 28239   | 26826.91 | 2508.92 | 19007   | 295117  |
| **Bytes/Sec** | 2.91 MB | 2.91 MB | 4.22 MB | 4.32 MB | 4.1 MB   | 384 kB  | 2.91 MB | 45.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.08 ms | 0.63 ms | 28 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7379    | 7379    | 9999    | 10119   | 9687.8  | 798.87 | 7379    | 96863   |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 2.14 MB | 2.16 MB | 2.07 MB | 171 kB | 1.58 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.78 ms | 1.37 ms | 56 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18415  | 18415  | 34207  | 38175  | 32075.64 | 5735.61 | 18400  | 352856  |
| **Bytes/Sec** | 2.8 MB | 2.8 MB | 5.2 MB | 5.8 MB | 4.88 MB  | 873 kB  | 2.8 MB | 53.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.99 ms | 0.59 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3185   | 3185   | 4859   | 5183   | 4647.46 | 633.35  | 3184   | 51110   |
| **Bytes/Sec** | 500 kB | 500 kB | 763 kB | 814 kB | 729 kB  | 99.4 kB | 500 kB | 8.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 7 ms  | 18 ms | 8.09 ms | 3.81 ms | 132 ms |


---

<p align="center">Generated 2022-05-13T01:42:52.903Z</p>
