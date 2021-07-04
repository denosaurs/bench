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
| deno | 41559.2 | 415552 |
| deno_canary | 41232.73 | 453522 |
| fastify | 38506.4 | 385120 |
| node | 37055.2 | 370547 |
| express | 16923.46 | 186128 |
| oak | 16914.8 | 169155 |
| http | 13525.6 | 135239 |
| drash | 13367.2 | 133666 |
| aqua | 13092 | 130913 |
| alosaur | 12452 | 136964 |
| abc | 11561.6 | 115613 |
| little_native | 10606.6 | 106062 |
| mandarinets | 9711.4 | 97107 |
| reno | 6772 | 67718 |
| dinatra | 6714.4 | 67133 |
| opine | 6269.6 | 62691 |
| little_std | 4343.2 | 43427 |
| servest | 3098.1 | 30976 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8311   | 8311   | 11935   | 12079   | 11561.6 | 1094.98 | 8308   | 115613  |
| **Bytes/Sec** | 773 kB | 773 kB | 1.11 MB | 1.12 MB | 1.08 MB | 102 kB  | 773 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.04 ms | 61 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8839   | 8839   | 12823   | 13551   | 12452   | 1269.9 | 8836   | 136964  |
| **Bytes/Sec** | 813 kB | 813 kB | 1.18 MB | 1.25 MB | 1.15 MB | 117 kB | 813 kB | 12.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.63 ms | 1.29 ms | 43 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 9687   | 9687   | 13431   | 13583   | 13092  | 1137.41 | 9683   | 130913 |
| **Bytes/Sec** | 891 kB | 891 kB | 1.24 MB | 1.25 MB | 1.2 MB | 105 kB  | 891 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.1 ms | 54 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 31647   | 31647   | 43391   | 43711   | 41559.2 | 3797.62 | 31634   | 415552 |
| **Bytes/Sec** | 2.82 MB | 2.82 MB | 3.86 MB | 3.89 MB | 3.7 MB  | 338 kB  | 2.82 MB | 37 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.15 ms | 0.69 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31999   | 31999   | 42175   | 42623   | 41232.73 | 2938.27 | 31998   | 453522  |
| **Bytes/Sec** | 2.85 MB | 2.85 MB | 3.75 MB | 3.79 MB | 3.67 MB  | 261 kB  | 2.85 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.12 ms | 0.58 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4687   | 4687   | 6847   | 7207   | 6714.4 | 692.43 | 4684   | 67133   |
| **Bytes/Sec** | 244 kB | 244 kB | 356 kB | 375 kB | 349 kB | 36 kB  | 244 kB | 3.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.48 ms | 1.7 ms | 41 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9303   | 9303   | 13831   | 13935  | 13367.2 | 1358.37 | 9297   | 133666  |
| **Bytes/Sec** | 800 kB | 800 kB | 1.19 MB | 1.2 MB | 1.15 MB | 117 kB  | 800 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.27 ms | 1.05 ms | 32 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7131    | 7131    | 18047  | 18335   | 16923.46 | 3149.7 | 7128    | 186128  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 3.9 MB | 3.96 MB | 3.66 MB  | 680 kB | 1.54 MB | 40.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 1.06 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 22655   | 22655   | 40511   | 41023   | 38506.4 | 5360.48 | 22642   | 385120  |
| **Bytes/Sec** | 3.49 MB | 3.49 MB | 6.24 MB | 6.32 MB | 5.93 MB | 826 kB  | 3.49 MB | 59.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.26 ms | 0.8 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9631   | 9631   | 13991  | 15311  | 13525.6 | 1624.29 | 9629   | 135239  |
| **Bytes/Sec** | 501 kB | 501 kB | 728 kB | 796 kB | 703 kB  | 84.5 kB | 501 kB | 7.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.45 ms | 1.49 ms | 103 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6911   | 6911   | 11023   | 11231   | 10606.6 | 1246.63 | 6910   | 106062  |
| **Bytes/Sec** | 891 kB | 891 kB | 1.42 MB | 1.45 MB | 1.37 MB | 161 kB  | 891 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.28 ms | 1.17 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ----- |
| **Req/Sec**   | 2373   | 2373   | 4639   | 4759   | 4343.2 | 693.26  | 2373   | 43427 |
| **Bytes/Sec** | 218 kB | 218 kB | 427 kB | 438 kB | 400 kB | 63.8 kB | 218 kB | 4 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 8.74 ms | 2.72 ms | 62 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6975   | 6975   | 9639   | 10607  | 9711.4 | 1028.73 | 6973   | 97107   |
| **Bytes/Sec** | 649 kB | 649 kB | 897 kB | 986 kB | 903 kB | 95.6 kB | 648 kB | 9.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 3.69 ms | 1.21 ms | 69 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20591   | 20591   | 38719   | 39391   | 37055.2 | 5500.54 | 20591   | 370547  |
| **Bytes/Sec** | 2.31 MB | 2.31 MB | 4.34 MB | 4.41 MB | 4.15 MB | 615 kB  | 2.31 MB | 41.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 1 ms  | 0.68 ms | 0.81 ms | 27 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 11287   | 11287   | 17551   | 17775   | 16914.8 | 1889.78 | 11284   | 169155 |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.28 MB | 2.31 MB | 2.2 MB  | 246 kB  | 1.47 MB | 22 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.12 ms | 0.83 ms | 32 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4355   | 4355   | 6495    | 6563    | 6269.6 | 643.63  | 4355   | 62691   |
| **Bytes/Sec** | 671 kB | 671 kB | 1000 kB | 1.01 MB | 965 kB | 99.1 kB | 671 kB | 9.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.73 ms | 1.62 ms | 42 ms |


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
| **Req/Sec**   | 4623   | 4623   | 7023   | 7099   | 6772   | 724     | 4621   | 67718   |
| **Bytes/Sec** | 360 kB | 360 kB | 548 kB | 554 kB | 528 kB | 56.5 kB | 360 kB | 5.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 9 ms  | 5.43 ms | 1.83 ms | 104 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2297   | 2297   | 2791   | 4423   | 3098.1 | 637.66  | 2296   | 30976   |
| **Bytes/Sec** | 264 kB | 264 kB | 321 kB | 509 kB | 356 kB | 73.4 kB | 264 kB | 3.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 12.42 ms | 17.99 ms | 76 ms |


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

<p align="center">Generated 2021-07-04T00:47:25.491Z</p>
