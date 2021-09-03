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
| deno_canary | 36044.37 | 396503 |
| deno | 34574.4 | 345810 |
| node | 33812 | 338095 |
| fastify | 31184 | 311791 |
| alosaur | 20040.2 | 200401 |
| oak | 16955.41 | 169568 |
| express | 16016.2 | 160155 |
| abc | 12272 | 122726 |
| http | 11579.82 | 127373 |
| little_native | 11285.64 | 124130 |
| little_std | 11084.19 | 121916 |
| drash | 10457.8 | 104578 |
| mandarinets | 8892.21 | 88922 |
| reno | 6491.82 | 71406 |
| opine | 5815.9 | 58152 |
| dinatra | 5218.64 | 57395 |
| tinyhttp | 3644.8 | 36438 |
| servest | 1871 | 18709 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8775   | 8775   | 12663   | 12831   | 12272   | 1190.11 | 8773   | 122726  |
| **Bytes/Sec** | 816 kB | 816 kB | 1.18 MB | 1.19 MB | 1.14 MB | 111 kB  | 816 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.73 ms | 1.29 ms | 55 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6939   | 6939   | 25023   | 25647   | 20040.2 | 7047.65 | 6938   | 200401  |
| **Bytes/Sec** | 618 kB | 618 kB | 2.23 MB | 2.28 MB | 1.78 MB | 627 kB  | 617 kB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.38 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20415   | 20415   | 38079   | 43263   | 34574.4 | 9732.09 | 20411   | 345810  |
| **Bytes/Sec** | 1.82 MB | 1.82 MB | 3.39 MB | 3.85 MB | 3.08 MB | 866 kB  | 1.82 MB | 30.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.35 ms | 0.88 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27279   | 27279   | 37823   | 38847   | 36044.37 | 3516.88 | 27265   | 396503  |
| **Bytes/Sec** | 2.43 MB | 2.43 MB | 3.36 MB | 3.46 MB | 3.21 MB  | 313 kB  | 2.43 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.9 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3649   | 3649   | 5339   | 5583   | 5218.64 | 511.71  | 3648   | 57395   |
| **Bytes/Sec** | 190 kB | 190 kB | 278 kB | 290 kB | 271 kB  | 26.6 kB | 190 kB | 2.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 12 ms | 7.15 ms | 2.41 ms | 39 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5583   | 5583   | 11039  | 11199  | 10457.8 | 1634.41 | 5580   | 104578  |
| **Bytes/Sec** | 480 kB | 480 kB | 949 kB | 963 kB | 899 kB  | 141 kB  | 480 kB | 8.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.81 ms | 42 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7383    | 7383    | 17071   | 17343   | 16016.2 | 2904.05 | 7380    | 160155  |
| **Bytes/Sec** | 1.59 MB | 1.59 MB | 3.69 MB | 3.75 MB | 3.46 MB | 627 kB  | 1.59 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.15 ms | 1.08 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 18367   | 18367   | 38143   | 38879   | 31184  | 9185.54 | 18362   | 311791 |
| **Bytes/Sec** | 2.83 MB | 2.83 MB | 5.87 MB | 5.99 MB | 4.8 MB | 1.41 MB | 2.83 MB | 48 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.77 ms | 1.06 ms | 19 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7627   | 7627   | 11975  | 12551  | 11579.82 | 1286.89 | 7624   | 127373  |
| **Bytes/Sec** | 397 kB | 397 kB | 623 kB | 653 kB | 602 kB   | 67 kB   | 396 kB | 6.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.04 ms | 1.38 ms | 73 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7671   | 7671   | 11703   | 11967   | 11285.64 | 1170.45 | 7669   | 124130 |
| **Bytes/Sec** | 990 kB | 990 kB | 1.51 MB | 1.54 MB | 1.46 MB  | 151 kB  | 989 kB | 16 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.2 ms | 1.1 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7711   | 7711   | 11431   | 11631  | 11084.19 | 1073.68 | 7708   | 121916  |
| **Bytes/Sec** | 995 kB | 995 kB | 1.47 MB | 1.5 MB | 1.43 MB  | 138 kB  | 994 kB | 15.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.21 ms | 0.98 ms | 22 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4503   | 4503   | 9343   | 9983   | 8892.21 | 1500.58 | 4503   | 88922   |
| **Bytes/Sec** | 419 kB | 419 kB | 869 kB | 928 kB | 827 kB  | 140 kB  | 419 kB | 8.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 3 ms  | 9 ms  | 3.97 ms | 2.39 ms | 127 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev    | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 20287   | 20287   | 32319   | 44063   | 33812   | 10328.55 | 20280   | 338095  |
| **Bytes/Sec** | 2.27 MB | 2.27 MB | 3.62 MB | 4.94 MB | 3.79 MB | 1.16 MB  | 2.27 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.67 ms | 0.95 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 5615   | 5615   | 18863   | 19023   | 16955.41 | 4133.59 | 5612   | 169568 |
| **Bytes/Sec** | 730 kB | 730 kB | 2.45 MB | 2.47 MB | 2.2 MB   | 538 kB  | 730 kB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.31 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3137   | 3137   | 6339   | 6407   | 5815.9 | 1012.54 | 3136   | 58152   |
| **Bytes/Sec** | 483 kB | 483 kB | 976 kB | 987 kB | 896 kB | 156 kB  | 483 kB | 8.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 6.51 ms | 2.61 ms | 54 ms |


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
| **Req/Sec**   | 4455   | 4455   | 7063   | 7439   | 6491.82 | 1140.85 | 4454   | 71406   |
| **Bytes/Sec** | 348 kB | 348 kB | 551 kB | 580 kB | 506 kB  | 89 kB   | 347 kB | 5.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.71 ms | 2.35 ms | 93 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1411   | 1411   | 1843   | 2277   | 1871   | 258.47  | 1411   | 18709   |
| **Bytes/Sec** | 162 kB | 162 kB | 212 kB | 262 kB | 215 kB | 29.7 kB | 162 kB | 2.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 9 ms  | 56 ms | 20.87 ms | 19.84 ms | 88 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2925   | 2925   | 3711   | 3801   | 3644.8 | 244.19  | 2924   | 36438   |
| **Bytes/Sec** | 459 kB | 459 kB | 583 kB | 597 kB | 572 kB | 38.3 kB | 459 kB | 5.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 17 ms | 10.43 ms | 2.47 ms | 73 ms |


---

<p align="center">Generated 2021-09-03T00:47:25.809Z</p>
