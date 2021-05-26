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
| node | 40136.81 | 401354 |
| deno | 39047.2 | 390439 |
| fastify | 35048.81 | 350537 |
| deno_canary | 23300.4 | 233004 |
| http | 19098 | 190972 |
| aqua | 17538.8 | 175379 |
| drash | 14678.55 | 161466 |
| express | 14172.19 | 155896 |
| alosaur | 13912 | 139111 |
| abc | 13178.2 | 131778 |
| little_native | 12007.46 | 132080 |
| oak | 10973.8 | 109729 |
| dinatra | 8302.91 | 91330 |
| reno | 7442.4 | 74418 |
| tinyhttp | 7065.28 | 77709 |
| mandarinets | 6722.8 | 67222 |
| little_std | 4941.73 | 54356 |
| opine | 4145.61 | 41448 |
| servest | 3397.2 | 33968 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7939   | 7939   | 12983   | 15175   | 13178.2 | 2015.64 | 7939   | 131778  |
| **Bytes/Sec** | 739 kB | 739 kB | 1.21 MB | 1.41 MB | 1.23 MB | 187 kB  | 738 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.48 ms | 1.27 ms | 68 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9055   | 9055   | 14455   | 14647   | 13912   | 1629.35 | 9053   | 139111  |
| **Bytes/Sec** | 833 kB | 833 kB | 1.33 MB | 1.35 MB | 1.28 MB | 150 kB  | 833 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.34 ms | 1.27 ms | 55 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13111   | 13111   | 17887   | 18719   | 17538.8 | 1512.16 | 13111   | 175379  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 1.64 MB | 1.72 MB | 1.61 MB | 139 kB  | 1.21 MB | 16.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.76 ms | 0.78 ms | 21 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 28959   | 28959   | 40031   | 40639   | 39047.2 | 3392.64 | 28945   | 390439  |
| **Bytes/Sec** | 2.58 MB | 2.58 MB | 3.56 MB | 3.62 MB | 3.47 MB | 302 kB  | 2.58 MB | 34.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.38 ms | 0.65 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 13991   | 13991   | 23583  | 25551   | 23300.4 | 3320.1 | 13988   | 233004  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.1 MB | 2.28 MB | 2.07 MB | 296 kB | 1.24 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.79 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6187   | 6187   | 8519   | 8759   | 8302.91 | 685.88  | 6186   | 91330   |
| **Bytes/Sec** | 322 kB | 322 kB | 443 kB | 455 kB | 432 kB  | 35.7 kB | 322 kB | 4.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.37 ms | 1.5 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 11063  | 11063  | 14879   | 16431   | 14678.55 | 1234.22 | 11062  | 161466  |
| **Bytes/Sec** | 952 kB | 952 kB | 1.28 MB | 1.41 MB | 1.26 MB  | 106 kB  | 951 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.16 ms | 0.84 ms | 58 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5815    | 5815    | 15143   | 15415   | 14172.19 | 2698.29 | 5812    | 155896  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 3.27 MB | 3.33 MB | 3.06 MB  | 583 kB  | 1.26 MB | 33.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.33 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 20655   | 20655   | 36895   | 38079   | 35048.81 | 4896.91 | 20647   | 350537 |
| **Bytes/Sec** | 3.18 MB | 3.18 MB | 5.69 MB | 5.87 MB | 5.4 MB   | 755 kB  | 3.18 MB | 54 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.85 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 13967  | 13967  | 19567   | 20415   | 19098  | 1778.3  | 13960  | 190972  |
| **Bytes/Sec** | 726 kB | 726 kB | 1.02 MB | 1.06 MB | 993 kB | 92.5 kB | 726 kB | 9.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.04 ms | 24 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------ |
| **Req/Sec**   | 8011    | 8011    | 12463   | 12543   | 12007.46 | 1269.8 | 8011    | 132080 |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.61 MB | 1.62 MB | 1.55 MB  | 164 kB | 1.03 MB | 17 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.06 ms | 0.9 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ----- |
| **Req/Sec**   | 2831   | 2831   | 5235   | 5339   | 4941.73 | 696.17 | 2830   | 54356 |
| **Bytes/Sec** | 260 kB | 260 kB | 482 kB | 491 kB | 455 kB  | 64 kB  | 260 kB | 5 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.65 ms | 2.05 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4183   | 4183   | 6943   | 7323   | 6722.8 | 868.86  | 4183   | 67222   |
| **Bytes/Sec** | 389 kB | 389 kB | 646 kB | 681 kB | 625 kB | 80.7 kB | 389 kB | 6.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.54 ms | 1.82 ms | 99 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 24143   | 24143   | 42303   | 42783   | 40136.81 | 5492.77 | 24139  | 401354 |
| **Bytes/Sec** | 2.71 MB | 2.71 MB | 4.74 MB | 4.79 MB | 4.5 MB   | 615 kB  | 2.7 MB | 45 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.75 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6767   | 6767   | 11407   | 11943   | 10973.8 | 1446.81 | 6765   | 109729  |
| **Bytes/Sec** | 880 kB | 880 kB | 1.48 MB | 1.55 MB | 1.43 MB | 188 kB  | 879 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.28 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2857   | 2857   | 4299   | 4467   | 4145.61 | 447.91 | 2856   | 41448   |
| **Bytes/Sec** | 440 kB | 440 kB | 663 kB | 688 kB | 638 kB  | 69 kB  | 440 kB | 6.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 15 ms | 9.14 ms | 2.93 ms | 156 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4987   | 4987   | 7843   | 8075   | 7442.4 | 900.3   | 4986   | 74418  |
| **Bytes/Sec** | 389 kB | 389 kB | 612 kB | 630 kB | 580 kB | 70.1 kB | 389 kB | 5.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.78 ms | 1.96 ms | 83 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2207   | 2207   | 3369   | 4399   | 3397.2 | 658.07  | 2207   | 33968   |
| **Bytes/Sec** | 254 kB | 254 kB | 387 kB | 506 kB | 391 kB | 75.7 kB | 254 kB | 3.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.24 ms | 17.5 ms | 81 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5159   | 5159   | 7239   | 7495   | 7065.28 | 615.2   | 5156   | 77709   |
| **Bytes/Sec** | 686 kB | 686 kB | 963 kB | 997 kB | 940 kB  | 81.9 kB | 686 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.19 ms | 1.81 ms | 52 ms |


---

<p align="center">Generated 2021-05-26T01:09:02.487Z</p>
