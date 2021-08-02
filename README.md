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
| deno_canary | 46457.6 | 464581 |
| deno | 41945.46 | 461369 |
| node | 41775.2 | 417754 |
| fastify | 38728 | 426007 |
| oak | 17592.41 | 175919 |
| express | 16095.82 | 177043 |
| aqua | 13180 | 131800 |
| drash | 12100 | 120998 |
| alosaur | 12068.2 | 120675 |
| http | 11869.4 | 118695 |
| dinatra | 10066.37 | 110720 |
| abc | 9116.19 | 100267 |
| reno | 8995 | 89936 |
| mandarinets | 7661.6 | 76606 |
| little_native | 6916.4 | 69154 |
| opine | 6214.4 | 62141 |
| little_std | 4949.5 | 49496 |
| servest | 4257 | 42567 |
| tinyhttp | 2887 | 28861 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5767   | 5767   | 9399   | 9831   | 9116.19 | 1073.12 | 5764   | 100267  |
| **Bytes/Sec** | 536 kB | 536 kB | 874 kB | 914 kB | 848 kB  | 99.9 kB | 536 kB | 9.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.81 ms | 1.99 ms | 138 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7815   | 7815   | 12527   | 12871   | 12068.2 | 1443.84 | 7813   | 120675  |
| **Bytes/Sec** | 719 kB | 719 kB | 1.15 MB | 1.18 MB | 1.11 MB | 133 kB  | 719 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.78 ms | 1.63 ms | 91 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9271   | 9271   | 13783   | 14367   | 13180   | 1676.81 | 9264   | 131800  |
| **Bytes/Sec** | 852 kB | 852 kB | 1.27 MB | 1.32 MB | 1.21 MB | 154 kB  | 852 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.36 ms | 63 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31999   | 31999   | 43519   | 44319   | 41945.46 | 3449.03 | 31984   | 461369  |
| **Bytes/Sec** | 2.85 MB | 2.85 MB | 3.87 MB | 3.94 MB | 3.73 MB  | 308 kB  | 2.85 MB | 41.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.17 ms | 0.65 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 35871   | 35871   | 48319  | 48639   | 46457.6 | 3771.23 | 35844   | 464581  |
| **Bytes/Sec** | 3.19 MB | 3.19 MB | 4.3 MB | 4.33 MB | 4.13 MB | 336 kB  | 3.19 MB | 41.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.12 ms | 0.61 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7419   | 7419   | 10359  | 10439  | 10066.37 | 841.02  | 7417   | 110720  |
| **Bytes/Sec** | 386 kB | 386 kB | 539 kB | 543 kB | 523 kB   | 43.7 kB | 386 kB | 5.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.22 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8215   | 8215   | 12527   | 12647   | 12100   | 1302.04 | 8211   | 120998  |
| **Bytes/Sec** | 707 kB | 707 kB | 1.08 MB | 1.09 MB | 1.04 MB | 112 kB  | 706 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.09 ms | 1.28 ms | 83 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7363    | 7363    | 17071   | 17375   | 16095.82 | 2788.54 | 7361    | 177043  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.69 MB | 3.75 MB | 3.48 MB  | 602 kB  | 1.59 MB | 38.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.08 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20863   | 20863   | 40543   | 40831   | 38728   | 5657.43 | 20851   | 426007  |
| **Bytes/Sec** | 3.21 MB | 3.21 MB | 6.24 MB | 6.29 MB | 5.96 MB | 872 kB  | 3.21 MB | 65.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.28 ms | 0.77 ms | 22 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7851   | 7851   | 12239  | 12607  | 11869.4 | 1347.05 | 7850   | 118695  |
| **Bytes/Sec** | 408 kB | 408 kB | 636 kB | 656 kB | 617 kB  | 70 kB   | 408 kB | 6.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.88 ms | 1.34 ms | 30 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4231   | 4231   | 7147   | 7419   | 6916.4 | 906.56 | 4228   | 69154   |
| **Bytes/Sec** | 546 kB | 546 kB | 922 kB | 957 kB | 892 kB | 117 kB | 545 kB | 8.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.34 ms | 1.99 ms | 36 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3077   | 3077   | 5155   | 5311   | 4949.5 | 644.07  | 3077   | 49496   |
| **Bytes/Sec** | 283 kB | 283 kB | 474 kB | 488 kB | 455 kB | 59.3 kB | 283 kB | 4.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.68 ms | 2.15 ms | 46 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4407   | 4407   | 7915   | 8423   | 7661.6 | 1118.18 | 4405   | 76606   |
| **Bytes/Sec** | 410 kB | 410 kB | 736 kB | 783 kB | 712 kB | 104 kB  | 410 kB | 7.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.66 ms | 1.91 ms | 100 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25999   | 25999   | 44063   | 44351   | 41775.2 | 5404.07 | 25994   | 417754  |
| **Bytes/Sec** | 2.91 MB | 2.91 MB | 4.94 MB | 4.97 MB | 4.68 MB | 605 kB  | 2.91 MB | 46.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.37 ms | 0.74 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11839   | 11839   | 18207   | 18911   | 17592.41 | 2004.57 | 11838   | 175919  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.37 MB | 2.46 MB | 2.29 MB  | 261 kB  | 1.54 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.9 ms | 1.06 ms | 57 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4255   | 4255   | 6455   | 6523  | 6214.4 | 660.04 | 4254   | 62141   |
| **Bytes/Sec** | 655 kB | 655 kB | 994 kB | 1 MB  | 957 kB | 102 kB | 655 kB | 9.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 10 ms | 5.75 ms | 1.73 ms | 58 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6411   | 6411   | 9303   | 9335   | 8995   | 862.56  | 6409   | 89936   |
| **Bytes/Sec** | 500 kB | 500 kB | 726 kB | 728 kB | 702 kB | 67.3 kB | 500 kB | 7.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.21 ms | 1.82 ms | 118 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2357   | 2357   | 4731   | 5651   | 4257   | 1267.03 | 2357   | 42567  |
| **Bytes/Sec** | 271 kB | 271 kB | 544 kB | 650 kB | 489 kB | 146 kB  | 271 kB | 4.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------ | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 8.9 ms | 16.21 ms | 72 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2169   | 2169   | 2961   | 3081   | 2887   | 262.24  | 2168   | 28861   |
| **Bytes/Sec** | 340 kB | 340 kB | 465 kB | 484 kB | 453 kB | 41.2 kB | 340 kB | 4.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 10 ms | 12 ms | 23 ms | 13.35 ms | 3.36 ms | 52 ms |


---

<p align="center">Generated 2021-08-02T00:46:34.693Z</p>
