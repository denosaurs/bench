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
  - [deco](#deco)
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
| deno | 43585.46 | 479456 |
| deco | 36412 | 364096 |
| alosaur | 32624 | 326268 |
| reno | 27886 | 278846 |
| oak | 25460.73 | 280058 |
| deno_canary | 22605.6 | 226062 |
| fastify | 22466 | 224626 |
| node | 20286 | 202856 |
| express | 15222 | 167416 |
| aqua | 14938.37 | 164313 |
| abc | 12874.37 | 141605 |
| opine | 9876.91 | 108641 |
| dinatra | 9649.28 | 106139 |
| little_std | 8535.82 | 93874 |
| little_native | 7471.82 | 82185 |
| tinyhttp | 3935.5 | 39348 |
| servest | 3091.8 | 30912 |
| drash | 996.3 | 9963 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7443   | 7443   | 14271   | 14471   | 12874.37 | 2287.66 | 7442   | 141605  |
| **Bytes/Sec** | 692 kB | 692 kB | 1.33 MB | 1.35 MB | 1.2 MB   | 213 kB  | 692 kB | 13.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.49 ms | 1.38 ms | 57 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 18383   | 18383   | 35071   | 37503   | 32624  | 5784.71 | 18371   | 326268 |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 3.12 MB | 3.34 MB | 2.9 MB | 515 kB  | 1.64 MB | 29 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.85 ms | 0.72 ms | 28 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8007    | 8007    | 16087   | 17551   | 14938.37 | 3045.01 | 8005    | 164313  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 2.08 MB | 2.26 MB | 1.93 MB  | 393 kB  | 1.03 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.36 ms | 36 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 19391  | 19391  | 37855   | 42143   | 36412  | 6968.34 | 19376  | 364096 |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 4.88 MB | 5.44 MB | 4.7 MB | 899 kB  | 2.5 MB | 47 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.73 ms | 19 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 25519   | 25519   | 49087   | 49759   | 43585.46 | 9271.53 | 25504   | 479456  |
| **Bytes/Sec** | 2.27 MB | 2.27 MB | 4.37 MB | 4.43 MB | 3.88 MB  | 826 kB  | 2.27 MB | 42.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.6 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13359   | 13359   | 24575   | 27295   | 22605.6 | 5306.39 | 13359   | 226062  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 2.19 MB | 2.43 MB | 2.01 MB | 472 kB  | 1.19 MB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1 ms  | 19 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7247   | 7247   | 9911   | 10071  | 9649.28 | 781.68  | 7247   | 106139  |
| **Bytes/Sec** | 377 kB | 377 kB | 516 kB | 524 kB | 502 kB  | 40.6 kB | 377 kB | 5.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.42 ms | 1.72 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 871    | 871    | 1009   | 1022   | 996.3  | 42.68   | 871    | 9963    |
| **Bytes/Sec** | 363 kB | 363 kB | 421 kB | 426 kB | 415 kB | 17.8 kB | 363 kB | 4.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 25 ms | 40 ms | 46 ms | 39.66 ms | 10.46 ms | 342 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6811    | 6811    | 16447   | 18575   | 15222   | 4029.8 | 6809    | 167416  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 3.55 MB | 4.01 MB | 3.29 MB | 870 kB | 1.47 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.34 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12239   | 12239   | 23935   | 24799   | 22466   | 3542.64 | 12232   | 224626  |
| **Bytes/Sec** | 1.88 MB | 1.88 MB | 3.69 MB | 3.82 MB | 3.46 MB | 546 kB  | 1.88 MB | 34.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.03 ms | 23 ms |


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
| **Req/Sec**   | 4775   | 4775   | 8223    | 8591    | 7471.82 | 1389.36 | 4773   | 82185   |
| **Bytes/Sec** | 616 kB | 616 kB | 1.06 MB | 1.11 MB | 964 kB  | 179 kB  | 616 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.85 ms | 1.87 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5279   | 5279   | 9375    | 9943    | 8535.82 | 1529.39 | 5276   | 93874   |
| **Bytes/Sec** | 681 kB | 681 kB | 1.21 MB | 1.28 MB | 1.1 MB  | 197 kB  | 681 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.19 ms | 1.59 ms | 25 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11615  | 11615  | 22047   | 24639   | 20286   | 4642.98 | 11613  | 202856  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 2.47 MB | 2.76 MB | 2.27 MB | 520 kB  | 1.3 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.51 ms | 1.29 ms | 26 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13879  | 13879  | 28175   | 29071   | 25460.73 | 4918.99 | 13876  | 280058  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 3.66 MB | 3.78 MB | 3.31 MB  | 639 kB  | 1.8 MB | 36.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.16 ms | 0.72 ms | 38 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7223    | 7223    | 10207   | 10359   | 9876.91 | 862.11 | 7222    | 108641  |
| **Bytes/Sec** | 1.38 MB | 1.38 MB | 1.95 MB | 1.98 MB | 1.89 MB | 165 kB | 1.38 MB | 20.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 5 ms  | 3.68 ms | 1.23 ms | 47 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 14823   | 14823   | 30943   | 32543  | 27886  | 5398.68 | 14820   | 278846 |
| **Bytes/Sec** | 1.91 MB | 1.91 MB | 3.99 MB | 4.2 MB | 3.6 MB | 697 kB  | 1.91 MB | 36 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.17 ms | 0.71 ms | 27 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2685   | 2685   | 2907   | 3779   | 3091.8 | 366.54  | 2685   | 30912   |
| **Bytes/Sec** | 309 kB | 309 kB | 334 kB | 435 kB | 356 kB | 42.2 kB | 309 kB | 3.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.4 ms | 18.08 ms | 74 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2501   | 2501   | 4023   | 4355   | 3935.5 | 503.13 | 2500   | 39348   |
| **Bytes/Sec** | 393 kB | 393 kB | 632 kB | 684 kB | 618 kB | 79 kB  | 393 kB | 6.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 8 ms  | 22 ms | 9.66 ms | 5.19 ms | 192 ms |


---

<p align="center">Generated 2022-01-14T11:27:19.090Z</p>
