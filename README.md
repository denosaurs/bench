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
| node | 42026.91 | 462270 |
| fastify | 32488.37 | 357371 |
| deno | 25560 | 255586 |
| deno_canary | 24609.6 | 246092 |
| http | 21923.6 | 219254 |
| alosaur | 16632.8 | 166326 |
| aqua | 16479.6 | 164813 |
| express | 16095 | 160931 |
| drash | 14331.2 | 143319 |
| dinatra | 11597.6 | 115963 |
| abc | 10904.6 | 109038 |
| oak | 10582.2 | 105829 |
| reno | 7591.46 | 83506 |
| little_native | 7391.2 | 73906 |
| tinyhttp | 7284.8 | 72843 |
| mandarinets | 6697.64 | 73672 |
| opine | 5737.2 | 57365 |
| servest | 4404.1 | 48435 |
| little_std | 3836.1 | 38354 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7163   | 7163   | 11279   | 11599   | 10904.6 | 1256.96 | 7163   | 109038  |
| **Bytes/Sec** | 667 kB | 667 kB | 1.05 MB | 1.08 MB | 1.01 MB | 117 kB  | 666 kB | 10.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.27 ms | 1.26 ms | 72 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11855   | 11855   | 17055   | 17599   | 16632.8 | 1640.42 | 11851   | 166326  |
| **Bytes/Sec** | 1.09 MB | 1.09 MB | 1.57 MB | 1.62 MB | 1.53 MB | 151 kB  | 1.09 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.12 ms | 0.98 ms | 43 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12679   | 12679   | 16831   | 17167   | 16479.6 | 1285.07 | 12674   | 164813  |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.55 MB | 1.58 MB | 1.52 MB | 118 kB  | 1.17 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2 ms  | 0.85 ms | 56 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18911   | 18911   | 25903   | 27343   | 25560   | 2292.31 | 18896   | 255586  |
| **Bytes/Sec** | 1.68 MB | 1.68 MB | 2.31 MB | 2.43 MB | 2.27 MB | 204 kB  | 1.68 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.7 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 17967  | 17967  | 25295   | 26463   | 24609.6 | 2443.03 | 17953  | 246092  |
| **Bytes/Sec** | 1.6 MB | 1.6 MB | 2.25 MB | 2.36 MB | 2.19 MB | 218 kB  | 1.6 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.8 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8279   | 8279   | 11887  | 12335  | 11597.6 | 1130.33 | 8273   | 115963  |
| **Bytes/Sec** | 430 kB | 430 kB | 618 kB | 642 kB | 603 kB  | 58.8 kB | 430 kB | 6.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.19 ms | 1.11 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10399  | 10399  | 14767   | 14871   | 14331.2 | 1315.32 | 10399  | 143319  |
| **Bytes/Sec** | 894 kB | 894 kB | 1.27 MB | 1.28 MB | 1.23 MB | 113 kB  | 894 kB | 12.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.85 ms | 57 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7271    | 7271    | 17247   | 17439   | 16095   | 2970.77 | 7271    | 160931  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.72 MB | 3.76 MB | 3.48 MB | 641 kB  | 1.57 MB | 34.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.17 ms | 1.15 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 15175   | 15175   | 33887   | 35423   | 32488.37 | 5547.45 | 15174   | 357371 |
| **Bytes/Sec** | 2.34 MB | 2.34 MB | 5.22 MB | 5.46 MB | 5 MB     | 854 kB  | 2.34 MB | 55 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 1.05 ms | 51 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16063  | 16063  | 22735   | 22943   | 21923.6 | 2019.51 | 16063  | 219254  |
| **Bytes/Sec** | 836 kB | 836 kB | 1.18 MB | 1.19 MB | 1.14 MB | 105 kB  | 835 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.18 ms | 0.78 ms | 19 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5019   | 5019   | 7467   | 8687    | 7391.2 | 987.73 | 5017   | 73906   |
| **Bytes/Sec** | 648 kB | 648 kB | 964 kB | 1.12 MB | 953 kB | 127 kB | 647 kB | 9.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 11 ms | 4.83 ms | 1.89 ms | 26 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2279   | 2279   | 4049   | 4207   | 3836.1 | 567.64  | 2278   | 38354   |
| **Bytes/Sec** | 210 kB | 210 kB | 373 kB | 387 kB | 353 kB | 52.2 kB | 210 kB | 3.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 9.94 ms | 2.86 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4115   | 4115   | 6967   | 7195   | 6697.64 | 836.27  | 4115   | 73672   |
| **Bytes/Sec** | 383 kB | 383 kB | 648 kB | 669 kB | 623 kB  | 77.8 kB | 383 kB | 6.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.48 ms | 1.85 ms | 105 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 24063  | 24063  | 43711   | 45183   | 42026.91 | 5719.25 | 24056   | 462270  |
| **Bytes/Sec** | 2.7 MB | 2.7 MB | 4.89 MB | 5.06 MB | 4.71 MB  | 640 kB  | 2.69 MB | 51.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.2 ms | 0.63 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7291   | 7291   | 10983   | 11207   | 10582.2 | 1119.7 | 7288   | 105829  |
| **Bytes/Sec** | 948 kB | 948 kB | 1.43 MB | 1.46 MB | 1.38 MB | 146 kB | 947 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.27 ms | 1.11 ms | 31 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4119   | 4119   | 5871   | 6043   | 5737.2 | 543.45  | 4116   | 57365   |
| **Bytes/Sec** | 634 kB | 634 kB | 904 kB | 931 kB | 883 kB | 83.7 kB | 634 kB | 8.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.44 ms | 1.78 ms | 104 ms |


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
| **Req/Sec**   | 4999   | 4999   | 7839   | 8059   | 7591.46 | 827.06  | 4999   | 83506   |
| **Bytes/Sec** | 390 kB | 390 kB | 612 kB | 629 kB | 592 kB  | 64.5 kB | 390 kB | 6.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.68 ms | 1.8 ms | 77 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2743   | 2743   | 4355   | 5247   | 4404.1 | 835.06 | 2742   | 48435   |
| **Bytes/Sec** | 315 kB | 315 kB | 501 kB | 604 kB | 506 kB | 96 kB  | 315 kB | 5.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 8.59 ms | 16.08 ms | 77 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5379   | 5379   | 7419   | 7835    | 7284.8 | 683.63  | 5377   | 72843   |
| **Bytes/Sec** | 715 kB | 715 kB | 987 kB | 1.04 MB | 969 kB | 90.9 kB | 715 kB | 9.69 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5 ms  | 1.72 ms | 50 ms |


---

<p align="center">Generated 2021-05-19T00:53:41.567Z</p>
