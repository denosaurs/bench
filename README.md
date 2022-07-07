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
  - [hono](#hono)
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
| deno_canary | 42068.8 | 420710 |
| node | 39924 | 399229 |
| hono | 39152 | 391557 |
| fastify | 27836 | 278378 |
| reno | 25444.73 | 279908 |
| drash | 24830 | 248303 |
| oak | 22886 | 228841 |
| abc | 19249.1 | 211736 |
| alosaur | 18478.8 | 184777 |
| deno | 18443.6 | 184425 |
| express | 15528.2 | 155249 |
| aqua | 13004.4 | 130041 |
| little_native | 12326.91 | 135581 |
| dinatra | 9964.6 | 99647 |
| opine | 8052.6 | 80517 |
| little_std | 7277.1 | 80052 |
| tinyhttp | 5408.7 | 54087 |
| servest | 3182.8 | 31821 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 13935  | 13935  | 19839   | 19919   | 19249.1 | 1690.18 | 13933  | 211736  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.85 MB | 1.85 MB | 1.79 MB | 157 kB  | 1.3 MB | 19.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.89 ms | 52 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11663   | 11663   | 18735  | 21551   | 18478.8 | 2524.3 | 11656   | 184777  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 2.1 MB | 2.41 MB | 2.07 MB | 283 kB | 1.31 MB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.64 ms | 1.21 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4559   | 4559   | 14631   | 15703   | 13004.4 | 3602.15 | 4556   | 130041  |
| **Bytes/Sec** | 693 kB | 693 kB | 2.22 MB | 2.39 MB | 1.98 MB | 548 kB  | 693 kB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.65 ms | 2.01 ms | 43 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8663   | 8663   | 20799   | 22511   | 18443.6 | 5258.55 | 8662   | 184425  |
| **Bytes/Sec** | 970 kB | 970 kB | 2.33 MB | 2.52 MB | 2.07 MB | 589 kB  | 970 kB | 20.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.68 ms | 1.36 ms | 25 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21935   | 21935   | 47391   | 48831   | 42068.8 | 9386.3  | 21933   | 420710  |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 5.31 MB | 5.47 MB | 4.71 MB | 1.05 MB | 2.46 MB | 47.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.73 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7235   | 7235   | 10311  | 10527  | 9964.6 | 938.51  | 7233   | 99647   |
| **Bytes/Sec** | 376 kB | 376 kB | 536 kB | 547 kB | 518 kB | 48.8 kB | 376 kB | 5.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.45 ms | 1.77 ms | 31 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13879   | 13879   | 26719   | 28527   | 24830   | 4828.98 | 13875   | 248303  |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 3.69 MB | 3.94 MB | 3.43 MB | 667 kB  | 1.91 MB | 34.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.98 ms | 37 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6943   | 6943   | 16575   | 16799   | 15528.2 | 2893.46 | 6940   | 155249  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 3.58 MB | 3.63 MB | 3.35 MB | 625 kB  | 1.5 MB | 33.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 1.16 ms | 25 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15399   | 15399   | 32495   | 33791   | 27836   | 7246.06 | 15393   | 278378  |
| **Bytes/Sec** | 2.37 MB | 2.37 MB | 5.01 MB | 5.21 MB | 4.29 MB | 1.12 MB | 2.37 MB | 42.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.15 ms | 0.94 ms | 24 ms |


### [hono](https://github.com/honojs/hono)

> Ultrafast web framework for Cloudflare Workers and Deno.


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22639   | 22639   | 43135  | 45535   | 39152   | 7409.01 | 22639   | 391557  |
| **Bytes/Sec** | 3.47 MB | 3.47 MB | 6.6 MB | 6.96 MB | 5.99 MB | 1.13 MB | 3.46 MB | 59.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.26 ms | 0.73 ms | 23 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 8663    | 8663    | 12663   | 13935   | 12326.91 | 1399.2 | 8663    | 135581  |
| **Bytes/Sec** | 1.32 MB | 1.32 MB | 1.93 MB | 2.12 MB | 1.87 MB  | 213 kB | 1.32 MB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.77 ms | 1.24 ms | 35 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4447   | 4447   | 8019    | 8431    | 7277.1  | 1358.54 | 4447   | 80052   |
| **Bytes/Sec** | 676 kB | 676 kB | 1.22 MB | 1.28 MB | 1.11 MB | 207 kB  | 676 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.92 ms | 1.95 ms | 32 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 21295   | 21295   | 45407   | 45951   | 39924   | 8959.29 | 21291   | 399229  |
| **Bytes/Sec** | 2.39 MB | 2.39 MB | 5.09 MB | 5.14 MB | 4.47 MB | 1 MB    | 2.38 MB | 44.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.23 ms | 0.69 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 14071   | 14071   | 25407   | 26031   | 22886  | 4381.84 | 14064   | 228841 |
| **Bytes/Sec** | 2.15 MB | 2.15 MB | 3.89 MB | 3.98 MB | 3.5 MB | 670 kB  | 2.15 MB | 35 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.81 ms | 27 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5455    | 5455    | 8263    | 8559    | 8052.6  | 876.98 | 5455    | 80517   |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.77 MB | 1.83 MB | 1.72 MB | 187 kB | 1.17 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 4.39 ms | 1.54 ms | 44 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13223   | 13223   | 27903   | 28191   | 25444.73 | 4637.76 | 13223   | 279908  |
| **Bytes/Sec** | 2.01 MB | 2.01 MB | 4.24 MB | 4.29 MB | 3.87 MB  | 705 kB  | 2.01 MB | 42.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.84 ms | 22 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2289   | 2289   | 3199   | 3687   | 3182.8 | 348.14 | 2289   | 31821   |
| **Bytes/Sec** | 263 kB | 263 kB | 368 kB | 424 kB | 366 kB | 40 kB  | 263 kB | 3.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.07 ms | 17.97 ms | 94 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3957   | 3957   | 5555   | 5671   | 5408.7 | 486.64  | 3956   | 54087   |
| **Bytes/Sec** | 622 kB | 622 kB | 872 kB | 890 kB | 849 kB | 76.4 kB | 621 kB | 8.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 16 ms | 6.81 ms | 2.67 ms | 68 ms |


---

<p align="center">Generated 2022-07-07T05:29:20.001Z</p>
