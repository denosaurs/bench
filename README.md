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
| alosaur | 25911.64 | 285006 |
| node | 23021.2 | 230199 |
| fastify | 20915.6 | 209170 |
| deno | 19340.8 | 193415 |
| oak | 15896.91 | 174865 |
| deno_canary | 15842.4 | 158422 |
| express | 14508.2 | 145076 |
| http | 14423 | 144220 |
| little_native | 12616.8 | 126168 |
| mandarinets | 9844.55 | 108292 |
| drash | 9427.19 | 103695 |
| abc | 8640.6 | 86413 |
| little_std | 7256.91 | 79823 |
| dinatra | 5600.19 | 61596 |
| reno | 5501.73 | 60508 |
| opine | 2597.5 | 25971 |
| tinyhttp | 2062.81 | 20622 |
| servest | 2033.4 | 20333 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5371   | 5371   | 8959   | 9351   | 8640.6 | 1118.32 | 5371   | 86413   |
| **Bytes/Sec** | 500 kB | 500 kB | 834 kB | 870 kB | 804 kB | 104 kB  | 500 kB | 8.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.17 ms | 1.83 ms | 68 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9303   | 9303   | 28671   | 29135   | 25911.64 | 5982.03 | 9300   | 285006  |
| **Bytes/Sec** | 828 kB | 828 kB | 2.55 MB | 2.59 MB | 2.31 MB  | 532 kB  | 828 kB | 25.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.9 ms | 31 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10791  | 10791  | 17151   | 25903   | 19340.8 | 6503.42 | 10790  | 193415  |
| **Bytes/Sec** | 961 kB | 961 kB | 1.53 MB | 2.31 MB | 1.72 MB | 579 kB  | 960 kB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.72 ms | 1.32 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10175  | 10175  | 10951  | 23471   | 15842.4 | 5648.87 | 10175  | 158422  |
| **Bytes/Sec** | 906 kB | 906 kB | 974 kB | 2.09 MB | 1.41 MB | 503 kB  | 906 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 2.06 ms | 1.6 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 4275   | 4275   | 5703   | 5939   | 5600.19 | 449.19  | 4273   | 61596  |
| **Bytes/Sec** | 222 kB | 222 kB | 297 kB | 309 kB | 291 kB  | 23.4 kB | 222 kB | 3.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 11 ms | 6.65 ms | 2.33 ms | 55 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4019   | 4019   | 10703  | 10935  | 9427.19 | 2275.93 | 4019   | 103695  |
| **Bytes/Sec** | 346 kB | 346 kB | 921 kB | 940 kB | 811 kB  | 196 kB  | 346 kB | 8.92 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.74 ms | 2.53 ms | 174 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7871   | 7871   | 16575   | 18063  | 14508.2 | 4051.65 | 7869   | 145076  |
| **Bytes/Sec** | 1.7 MB | 1.7 MB | 3.58 MB | 3.9 MB | 3.13 MB | 875 kB  | 1.7 MB | 31.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.45 ms | 1.36 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8319    | 8319    | 22255   | 23471   | 20915.6 | 4254.94 | 8314    | 209170  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 3.43 MB | 3.61 MB | 3.22 MB | 655 kB  | 1.28 MB | 32.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.29 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6251   | 6251   | 15783  | 15903  | 14423  | 2882.14 | 6249   | 144220 |
| **Bytes/Sec** | 325 kB | 325 kB | 821 kB | 827 kB | 750 kB | 150 kB  | 325 kB | 7.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.37 ms | 1.39 ms | 31 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9303   | 9303   | 12943   | 13287   | 12616.8 | 1125.26 | 9298   | 126168  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.67 MB | 1.71 MB | 1.63 MB | 145 kB  | 1.2 MB | 16.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.48 ms | 1.07 ms | 22 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5087   | 5087   | 7511   | 7727   | 7256.91 | 717.05  | 5087   | 79823   |
| **Bytes/Sec** | 656 kB | 656 kB | 969 kB | 997 kB | 936 kB  | 92.5 kB | 656 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 8 ms  | 5.04 ms | 1.48 ms | 32 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6139   | 6139   | 10143  | 10839   | 9844.55 | 1197.35 | 6137   | 108292  |
| **Bytes/Sec** | 571 kB | 571 kB | 943 kB | 1.01 MB | 916 kB  | 111 kB  | 571 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.38 ms | 1.59 ms | 120 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12079   | 12079   | 24351   | 25071   | 23021.2 | 3768.25 | 12076   | 230199  |
| **Bytes/Sec** | 1.35 MB | 1.35 MB | 2.73 MB | 2.81 MB | 2.58 MB | 422 kB  | 1.35 MB | 25.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.29 ms | 1.04 ms | 25 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 5271   | 5271   | 17631   | 17919   | 15896.91 | 3918.71 | 5269   | 174865  |
| **Bytes/Sec** | 685 kB | 685 kB | 2.29 MB | 2.33 MB | 2.07 MB  | 509 kB  | 685 kB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.27 ms | 1.55 ms | 130 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 1644   | 1644   | 2735   | 2877   | 2597.5 | 370.95  | 1644   | 25971 |
| **Bytes/Sec** | 253 kB | 253 kB | 421 kB | 443 kB | 400 kB | 57.1 kB | 253 kB | 4 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 12 ms | 13 ms | 29 ms | 14.9 ms | 4.69 ms | 159 ms |


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
| **Req/Sec**   | 3129   | 3129   | 5251   | 8247   | 5501.73 | 1238.93 | 3129   | 60508   |
| **Bytes/Sec** | 244 kB | 244 kB | 410 kB | 643 kB | 429 kB  | 96.6 kB | 244 kB | 4.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 7 ms  | 14 ms | 6.77 ms | 2.59 ms | 47 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1279   | 1279   | 1968   | 2483   | 2033.4 | 321.05  | 1279   | 20333   |
| **Bytes/Sec** | 147 kB | 147 kB | 226 kB | 286 kB | 234 kB | 36.9 kB | 147 kB | 2.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 8 ms  | 54 ms | 19.16 ms | 19.72 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1409   | 1409   | 2161   | 2715   | 2062.81 | 443.68  | 1409   | 20622   |
| **Bytes/Sec** | 221 kB | 221 kB | 339 kB | 426 kB | 324 kB  | 69.6 kB | 221 kB | 3.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 11 ms | 17 ms | 38 ms | 18.88 ms | 7.35 ms | 155 ms |


---

<p align="center">Generated 2021-08-31T00:49:00.312Z</p>
