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
| deno | 45226.19 | 497499 |
| node | 38874.4 | 388741 |
| deno_canary | 38608.81 | 386039 |
| fastify | 22730.8 | 227271 |
| http | 18865.2 | 188620 |
| oak | 18222.19 | 200415 |
| express | 16664.2 | 166620 |
| alosaur | 16125.82 | 177375 |
| abc | 12327.4 | 123263 |
| aqua | 12041.4 | 120396 |
| drash | 9619.1 | 105797 |
| reno | 9391.8 | 93902 |
| mandarinets | 9092.19 | 100023 |
| little_native | 8677.8 | 86772 |
| dinatra | 7574.37 | 83312 |
| tinyhttp | 7096.8 | 70967 |
| servest | 5067.46 | 55738 |
| opine | 4129.4 | 41287 |
| little_std | 3671.3 | 36706 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8087   | 8087   | 12743   | 13039   | 12327.4 | 1425.09 | 8085   | 123263  |
| **Bytes/Sec** | 752 kB | 752 kB | 1.19 MB | 1.21 MB | 1.15 MB | 132 kB  | 752 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.76 ms | 1.32 ms | 85 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11231   | 11231   | 16735   | 16895   | 16125.82 | 1601.08 | 11230   | 177375  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.54 MB | 1.55 MB | 1.48 MB  | 147 kB  | 1.03 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.03 ms | 75 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7811   | 7811   | 12479   | 12887   | 12041.4 | 1460.76 | 7808   | 120396  |
| **Bytes/Sec** | 719 kB | 719 kB | 1.15 MB | 1.19 MB | 1.11 MB | 134 kB  | 718 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.79 ms | 1.44 ms | 85 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 35519   | 35519   | 46399   | 46559   | 45226.19 | 3090.13 | 35515   | 497499  |
| **Bytes/Sec** | 3.16 MB | 3.16 MB | 4.13 MB | 4.14 MB | 4.03 MB  | 275 kB  | 3.16 MB | 44.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.58 ms | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27199   | 27199   | 39839   | 40351   | 38608.81 | 3822.55 | 27194   | 386039  |
| **Bytes/Sec** | 2.42 MB | 2.42 MB | 3.55 MB | 3.59 MB | 3.44 MB  | 340 kB  | 2.42 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.39 ms | 0.65 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5603   | 5603   | 7779   | 8179   | 7574.37 | 686.85  | 5600   | 83312   |
| **Bytes/Sec** | 291 kB | 291 kB | 405 kB | 425 kB | 394 kB  | 35.7 kB | 291 kB | 4.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.7 ms | 1.58 ms | 45 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6523   | 6523   | 9903   | 10287  | 9619.1 | 1024.66 | 6523   | 105797 |
| **Bytes/Sec** | 561 kB | 561 kB | 852 kB | 884 kB | 827 kB | 88.1 kB | 561 kB | 9.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.59 ms | 1.57 ms | 88 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 7707    | 7707    | 17775   | 18031   | 16664.2 | 3016.17 | 7707    | 166620 |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 3.84 MB | 3.89 MB | 3.6 MB  | 651 kB  | 1.66 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.06 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 12055   | 12055   | 23759   | 24959   | 22730.8 | 3675   | 12053   | 227271 |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 3.66 MB | 3.84 MB | 3.5 MB  | 566 kB | 1.86 MB | 35 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.27 ms | 1.04 ms | 30 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12519  | 12519  | 19631   | 19871   | 18865.2 | 2135.97 | 12513  | 188620  |
| **Bytes/Sec** | 651 kB | 651 kB | 1.02 MB | 1.03 MB | 981 kB  | 111 kB  | 651 kB | 9.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.05 ms | 50 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6039   | 6039   | 8919    | 9455    | 8677.8  | 910    | 6037   | 86772   |
| **Bytes/Sec** | 779 kB | 779 kB | 1.15 MB | 1.22 MB | 1.12 MB | 117 kB | 779 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.15 ms | 1.34 ms | 39 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2229   | 2229   | 3847   | 4115   | 3671.3 | 532.58 | 2229   | 36706   |
| **Bytes/Sec** | 205 kB | 205 kB | 354 kB | 379 kB | 338 kB | 49 kB  | 205 kB | 3.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 18 ms | 10.4 ms | 3.05 ms | 60 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 5199   | 5199   | 9519   | 9671   | 9092.19 | 1242.17 | 5199   | 100023 |
| **Bytes/Sec** | 484 kB | 484 kB | 886 kB | 899 kB | 846 kB  | 116 kB  | 484 kB | 9.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.05 ms | 1.44 ms | 75 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22719   | 22719   | 40671   | 41023   | 38874.4 | 5394.07 | 22705   | 388741  |
| **Bytes/Sec** | 2.54 MB | 2.54 MB | 4.55 MB | 4.59 MB | 4.35 MB | 604 kB  | 2.54 MB | 43.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.18 ms | 0.63 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12927   | 12927   | 18815   | 19919   | 18222.19 | 1859.81 | 12921   | 200415  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.45 MB | 2.59 MB | 2.37 MB  | 242 kB  | 1.68 MB | 26.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.69 ms | 0.85 ms | 19 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2665   | 2665   | 4303   | 4459   | 4129.4 | 517.64  | 2664   | 41287   |
| **Bytes/Sec** | 410 kB | 410 kB | 663 kB | 687 kB | 636 kB | 79.8 kB | 410 kB | 6.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 9.18 ms | 2.99 ms | 152 ms |


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
| **Req/Sec**   | 5851   | 5851   | 9767   | 9959   | 9391.8 | 1188.69 | 5849   | 93902   |
| **Bytes/Sec** | 456 kB | 456 kB | 762 kB | 777 kB | 732 kB | 92.7 kB | 456 kB | 7.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.59 ms | 1.88 ms | 79 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3323   | 3323   | 5099   | 6299   | 5067.46 | 928.33 | 3322   | 55738   |
| **Bytes/Sec** | 382 kB | 382 kB | 587 kB | 724 kB | 583 kB  | 107 kB | 382 kB | 6.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.42 ms | 15.15 ms | 65 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5131   | 5131   | 7371   | 7579    | 7096.8 | 694.99  | 5131   | 70967   |
| **Bytes/Sec** | 682 kB | 682 kB | 980 kB | 1.01 MB | 944 kB | 92.4 kB | 682 kB | 9.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.13 ms | 1.77 ms | 58 ms |


---

<p align="center">Generated 2021-05-14T00:56:03.587Z</p>
