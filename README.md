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
| node | 35837.6 | 358343 |
| fastify | 34236 | 342337 |
| alosaur | 30060.8 | 300622 |
| reno | 22625.1 | 248898 |
| oak | 20490.37 | 225380 |
| deno | 19687.6 | 196864 |
| deno_canary | 18891.6 | 188909 |
| express | 16748.8 | 167490 |
| aqua | 16374.4 | 163727 |
| abc | 15436.4 | 154362 |
| little_native | 13327.4 | 133266 |
| dinatra | 7797.46 | 85765 |
| little_std | 7741.1 | 85146 |
| opine | 6301.2 | 63002 |
| tinyhttp | 3317.4 | 33169 |
| servest | 3121.64 | 34330 |
| drash | 0 | 0 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11775   | 11775   | 15703   | 16719   | 15436.4 | 1494.75 | 11770   | 154362  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.46 MB | 1.55 MB | 1.44 MB | 139 kB  | 1.09 MB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.02 ms | 63 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17727   | 17727   | 33407   | 35583   | 30060.8 | 6646.66 | 17726   | 300622  |
| **Bytes/Sec** | 1.58 MB | 1.58 MB | 2.97 MB | 3.17 MB | 2.68 MB | 592 kB  | 1.58 MB | 26.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.06 ms | 0.75 ms | 38 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9391    | 9391    | 16991   | 19135   | 16374.4 | 3244.56 | 9384    | 163727  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 2.19 MB | 2.47 MB | 2.11 MB | 418 kB  | 1.21 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.93 ms | 1.25 ms | 30 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9495   | 9495   | 21423   | 23471   | 19687.6 | 4461.91 | 9489   | 196864  |
| **Bytes/Sec** | 845 kB | 845 kB | 1.91 MB | 2.09 MB | 1.75 MB | 397 kB  | 845 kB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.51 ms | 1.13 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14847   | 14847   | 19423   | 21471   | 18891.6 | 1826.44 | 14844   | 188909  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 1.73 MB | 1.91 MB | 1.68 MB | 162 kB  | 1.32 MB | 16.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.6 ms | 0.99 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5715   | 5715   | 7911   | 8383   | 7797.46 | 698.59  | 5714   | 85765   |
| **Bytes/Sec** | 297 kB | 297 kB | 411 kB | 436 kB | 405 kB  | 36.3 kB | 297 kB | 4.46 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.59 ms | 2.13 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8255    | 8255    | 18703   | 19215   | 16748.8 | 3989.29 | 8252    | 167490  |
| **Bytes/Sec** | 1.78 MB | 1.78 MB | 4.04 MB | 4.15 MB | 3.62 MB | 862 kB  | 1.78 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.82 ms | 1.23 ms | 23 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20927   | 20927   | 36191   | 40255  | 34236   | 6632.85 | 20927   | 342337  |
| **Bytes/Sec** | 3.22 MB | 3.22 MB | 5.57 MB | 6.2 MB | 5.27 MB | 1.02 MB | 3.22 MB | 52.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.83 ms | 21 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6999   | 6999   | 14887   | 15279   | 13327.4 | 2958.87 | 6997   | 133266  |
| **Bytes/Sec** | 903 kB | 903 kB | 1.92 MB | 1.97 MB | 1.72 MB | 382 kB  | 903 kB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.42 ms | 1.16 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 5655   | 5655   | 7983    | 8287    | 7741.1 | 691.27  | 5655   | 85146 |
| **Bytes/Sec** | 730 kB | 730 kB | 1.03 MB | 1.07 MB | 998 kB | 89.2 kB | 729 kB | 11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.59 ms | 1.43 ms | 33 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 18383   | 18383   | 40831   | 41471   | 35837.6 | 7961.9 | 18368   | 358343  |
| **Bytes/Sec** | 2.06 MB | 2.06 MB | 4.58 MB | 4.64 MB | 4.01 MB | 891 kB | 2.06 MB | 40.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.83 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5655   | 5655   | 23071 | 24079   | 20490.37 | 5805.79 | 5653   | 225380  |
| **Bytes/Sec** | 735 kB | 735 kB | 3 MB  | 3.13 MB | 2.66 MB  | 755 kB  | 735 kB | 29.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.45 ms | 1.52 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev  | Min    | Total |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------ | ------ | ----- |
| **Req/Sec**   | 4291   | 4291   | 6475    | 6815   | 6301.2 | 694.14 | 4289   | 63002 |
| **Bytes/Sec** | 819 kB | 819 kB | 1.24 MB | 1.3 MB | 1.2 MB | 133 kB | 819 kB | 12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 6 ms  | 10 ms | 5.87 ms | 1.9 ms | 75 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11727   | 11727   | 25487   | 26431   | 22625.1 | 4651.16 | 11720   | 248898  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.29 MB | 3.41 MB | 2.92 MB | 600 kB  | 1.51 MB | 32.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.85 ms | 31 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2337   | 2337   | 3041   | 4731   | 3121.64 | 676.33  | 2337   | 34330   |
| **Bytes/Sec** | 269 kB | 269 kB | 350 kB | 544 kB | 359 kB  | 77.7 kB | 269 kB | 3.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.32 ms | 18.24 ms | 124 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2819   | 2819   | 3361   | 3453   | 3317.4 | 184.92 | 2819   | 33169   |
| **Bytes/Sec** | 443 kB | 443 kB | 528 kB | 542 kB | 521 kB | 29 kB  | 443 kB | 5.21 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.58 ms | 2.85 ms | 62 ms |


---

<p align="center">Generated 2021-12-01T00:55:03.708Z</p>
