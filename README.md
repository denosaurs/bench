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
| node | 42557.82 | 468091 |
| deno | 41724.37 | 458998 |
| deno_canary | 41340.37 | 454668 |
| fastify | 39414.55 | 433564 |
| oak | 17399.6 | 174010 |
| express | 14987.1 | 164863 |
| http | 14122.4 | 141210 |
| alosaur | 14022.4 | 140216 |
| drash | 12250.55 | 134742 |
| aqua | 11491 | 114906 |
| abc | 11314.4 | 113122 |
| little_native | 10053.28 | 110579 |
| mandarinets | 9240.21 | 92393 |
| reno | 8370.73 | 92065 |
| dinatra | 7822 | 78224 |
| opine | 4175.3 | 41744 |
| little_std | 4088 | 44966 |
| servest | 3173.6 | 31730 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8503   | 8503   | 11647   | 11719   | 11314.4 | 941.24  | 8498   | 113122  |
| **Bytes/Sec** | 791 kB | 791 kB | 1.08 MB | 1.09 MB | 1.05 MB | 87.5 kB | 790 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.17 ms | 0.93 ms | 71 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9663   | 9663   | 14583   | 14663   | 14022.4 | 1467.83 | 9660   | 140216  |
| **Bytes/Sec** | 889 kB | 889 kB | 1.34 MB | 1.35 MB | 1.29 MB | 135 kB  | 889 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.12 ms | 68 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8043   | 8043   | 11751   | 12127   | 11491   | 1164.65 | 8042   | 114906  |
| **Bytes/Sec** | 740 kB | 740 kB | 1.08 MB | 1.12 MB | 1.06 MB | 107 kB  | 740 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.02 ms | 1.52 ms | 97 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 29983   | 29983   | 43231   | 44191   | 41724.37 | 4001.75 | 29978   | 458998  |
| **Bytes/Sec** | 2.67 MB | 2.67 MB | 3.85 MB | 3.93 MB | 3.71 MB  | 356 kB  | 2.67 MB | 40.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.14 ms | 0.71 ms | 22 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 30335  | 30335  | 42943   | 43519   | 41340.37 | 3719.15 | 30321  | 454668  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 3.82 MB | 3.87 MB | 3.68 MB  | 331 kB  | 2.7 MB | 40.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.25 ms | 0.76 ms | 39 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4411   | 4411   | 7903   | 8903   | 7822   | 1229.85 | 4410   | 78224   |
| **Bytes/Sec** | 229 kB | 229 kB | 411 kB | 463 kB | 407 kB | 64 kB   | 229 kB | 4.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.67 ms | 2.22 ms | 37 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 8439   | 8439   | 12695   | 12799  | 12250.55 | 1225.11 | 8435   | 134742  |
| **Bytes/Sec** | 726 kB | 726 kB | 1.09 MB | 1.1 MB | 1.05 MB  | 105 kB  | 725 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.02 ms | 1.05 ms | 74 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5983    | 5983    | 15903   | 16799   | 14987.1 | 2960.66 | 5982    | 164863  |
| **Bytes/Sec** | 1.29 MB | 1.29 MB | 3.43 MB | 3.63 MB | 3.24 MB | 640 kB  | 1.29 MB | 35.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.38 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22111   | 22111   | 41503   | 41823   | 39414.55 | 5527.05 | 22106  | 433564  |
| **Bytes/Sec** | 3.41 MB | 3.41 MB | 6.39 MB | 6.44 MB | 6.07 MB  | 851 kB  | 3.4 MB | 66.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.33 ms | 0.77 ms | 22 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9591   | 9591   | 14623  | 14735  | 14122.4 | 1513.66 | 9588   | 141210  |
| **Bytes/Sec** | 499 kB | 499 kB | 761 kB | 766 kB | 734 kB  | 78.7 kB | 499 kB | 7.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.14 ms | 68 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5563   | 5563   | 10703   | 10855  | 10053.28 | 1456.29 | 5560   | 110579  |
| **Bytes/Sec** | 717 kB | 717 kB | 1.38 MB | 1.4 MB | 1.3 MB   | 188 kB  | 717 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.37 ms | 1.43 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2317   | 2317   | 4331   | 4463   | 4088   | 609.24 | 2317   | 44966   |
| **Bytes/Sec** | 213 kB | 213 kB | 399 kB | 411 kB | 376 kB | 56 kB  | 213 kB | 4.14 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 9.25 ms | 2.82 ms | 58 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5695   | 5695   | 9647   | 9727   | 9240.21 | 1185.41 | 5694   | 92393   |
| **Bytes/Sec** | 530 kB | 530 kB | 898 kB | 905 kB | 859 kB  | 110 kB  | 530 kB | 8.59 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.08 ms | 1.27 ms | 74 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 26799 | 26799 | 44703   | 44991   | 42557.82 | 5087.24 | 26793 | 468091  |
| **Bytes/Sec** | 3 MB  | 3 MB  | 5.01 MB | 5.04 MB | 4.77 MB  | 569 kB  | 3 MB  | 52.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.41 ms | 0.73 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12247   | 12247   | 18159   | 18383   | 17399.6 | 1770.21 | 12245   | 174010  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 2.36 MB | 2.39 MB | 2.26 MB | 230 kB  | 1.59 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.11 ms | 0.81 ms | 25 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2831   | 2831   | 4267   | 4583   | 4175.3 | 506.1   | 2831   | 41744   |
| **Bytes/Sec** | 436 kB | 436 kB | 657 kB | 706 kB | 643 kB | 77.9 kB | 436 kB | 6.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 9.08 ms | 2.53 ms | 93 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6039   | 6039   | 8535   | 9039   | 8370.73 | 758.34  | 6039   | 92065   |
| **Bytes/Sec** | 471 kB | 471 kB | 666 kB | 705 kB | 653 kB  | 59.1 kB | 471 kB | 7.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.3 ms | 1.35 ms | 83 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2279   | 2279   | 3243   | 3509   | 3173.6 | 348.33  | 2278   | 31730   |
| **Bytes/Sec** | 262 kB | 262 kB | 373 kB | 404 kB | 365 kB | 40.1 kB | 262 kB | 3.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.1 ms | 17.97 ms | 104 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


---

<p align="center">Generated 2021-07-11T00:52:07.478Z</p>
