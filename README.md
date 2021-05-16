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
| deno_canary | 26694.4 | 266947 |
| deno | 24336 | 243347 |
| node | 22786 | 227848 |
| fastify | 20611.28 | 226740 |
| aqua | 16679.6 | 166803 |
| alosaur | 16099.2 | 161009 |
| http | 15923.2 | 159224 |
| abc | 14828 | 148268 |
| express | 13655.4 | 136555 |
| little_native | 12722.4 | 127218 |
| drash | 12649.8 | 126488 |
| dinatra | 12215.2 | 122152 |
| oak | 10855.4 | 108554 |
| reno | 10071.8 | 100704 |
| mandarinets | 9595.8 | 95962 |
| opine | 6800.8 | 67999 |
| tinyhttp | 5158.11 | 51572 |
| servest | 4598.61 | 45980 |
| little_std | 3298 | 32974 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11383   | 11383   | 15223   | 15607   | 14828   | 1175.48 | 11377   | 148268  |
| **Bytes/Sec** | 1.06 MB | 1.06 MB | 1.42 MB | 1.45 MB | 1.38 MB | 109 kB  | 1.06 MB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.86 ms | 43 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10783  | 10783  | 16591   | 17615   | 16099.2 | 1845.72 | 10779  | 161009  |
| **Bytes/Sec** | 992 kB | 992 kB | 1.53 MB | 1.62 MB | 1.48 MB | 170 kB  | 992 kB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 0.92 ms | 59 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12791   | 12791   | 17199   | 17327   | 16679.6 | 1308.82 | 12785   | 166803  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.58 MB | 1.59 MB | 1.53 MB | 121 kB  | 1.18 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.09 ms | 0.77 ms | 49 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18639   | 18639   | 24271   | 28191   | 24336   | 2539.66 | 18634   | 243347  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.16 MB | 2.51 MB | 2.17 MB | 226 kB  | 1.66 MB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.77 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20831   | 20831   | 27311   | 28335   | 26694.4 | 2114.49 | 20818   | 266947  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 2.43 MB | 2.52 MB | 2.38 MB | 188 kB  | 1.85 MB | 23.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.65 ms | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8975   | 8975   | 12679  | 12887  | 12215.2 | 1138.18 | 8968   | 122152  |
| **Bytes/Sec** | 466 kB | 466 kB | 659 kB | 670 kB | 635 kB  | 59.3 kB | 466 kB | 6.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.88 ms | 1.16 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7751   | 7751   | 12975   | 13703   | 12649.8 | 1689.14 | 7748   | 126488  |
| **Bytes/Sec** | 667 kB | 667 kB | 1.12 MB | 1.18 MB | 1.09 MB | 145 kB  | 666 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.58 ms | 1.36 ms | 84 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5639    | 5639    | 14583   | 15079   | 13655.4 | 2708.57 | 5637    | 136555  |
| **Bytes/Sec** | 1.22 MB | 1.22 MB | 3.15 MB | 3.26 MB | 2.95 MB | 585 kB  | 1.22 MB | 29.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.49 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 9015    | 9015    | 21855   | 23295   | 20611.28 | 3743.5 | 9015    | 226740  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 3.36 MB | 3.59 MB | 3.17 MB  | 577 kB | 1.39 MB | 34.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.2 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10207  | 10207  | 16527  | 17343  | 15923.2 | 1981.29 | 10200  | 159224  |
| **Bytes/Sec** | 530 kB | 530 kB | 859 kB | 902 kB | 828 kB  | 103 kB  | 530 kB | 8.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.15 ms | 1.19 ms | 54 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9079    | 9079    | 12919   | 13687   | 12722.4 | 1272.43 | 9076    | 127218  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.67 MB | 1.77 MB | 1.64 MB | 164 kB  | 1.17 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 2.69 ms | 0.94 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1859   | 1859   | 3515   | 3779   | 3298   | 544.65  | 1859   | 32974   |
| **Bytes/Sec** | 171 kB | 171 kB | 324 kB | 348 kB | 303 kB | 50.1 kB | 171 kB | 3.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 21 ms | 11.65 ms | 3.37 ms | 71 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6171   | 6171   | 10055  | 10183  | 9595.8 | 1157.35 | 6170   | 95962   |
| **Bytes/Sec** | 574 kB | 574 kB | 935 kB | 947 kB | 892 kB | 108 kB  | 574 kB | 8.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.51 ms | 1.32 ms | 69 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14799   | 14799   | 23631   | 24479   | 22786   | 2721.38 | 14794   | 227848  |
| **Bytes/Sec** | 1.66 MB | 1.66 MB | 2.65 MB | 2.74 MB | 2.55 MB | 305 kB  | 1.66 MB | 25.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.83 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6871   | 6871   | 11087   | 11983   | 10855.4 | 1387.37 | 6870   | 108554  |
| **Bytes/Sec** | 893 kB | 893 kB | 1.44 MB | 1.56 MB | 1.41 MB | 180 kB  | 893 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.17 ms | 36 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4907   | 4907   | 7003    | 7131   | 6800.8  | 640.51  | 4904   | 67999   |
| **Bytes/Sec** | 756 kB | 756 kB | 1.08 MB | 1.1 MB | 1.05 MB | 98.6 kB | 755 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 8 ms  | 5.36 ms | 1.35 ms | 37 ms |


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
| **Req/Sec**   | 6819   | 6819   | 10399  | 10679  | 10071.8 | 1090.93 | 6818   | 100704  |
| **Bytes/Sec** | 532 kB | 532 kB | 811 kB | 833 kB | 786 kB  | 85.1 kB | 532 kB | 7.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.42 ms | 1.56 ms | 74 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2555   | 2555   | 4807   | 5387   | 4598.61 | 845.55  | 2555   | 45980   |
| **Bytes/Sec** | 294 kB | 294 kB | 553 kB | 620 kB | 529 kB  | 97.2 kB | 294 kB | 5.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 8.19 ms | 15.67 ms | 87 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3415   | 3415   | 5383   | 5559   | 5158.11 | 604.97  | 3414   | 51572   |
| **Bytes/Sec** | 454 kB | 454 kB | 716 kB | 739 kB | 686 kB  | 80.5 kB | 454 kB | 6.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 13 ms | 7.26 ms | 2.38 ms | 54 ms |


---

<p align="center">Generated 2021-05-16T00:58:22.329Z</p>
