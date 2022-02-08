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
| deno_canary | 40071.2 | 400707 |
| deno | 38273.6 | 382708 |
| fastify | 33189.82 | 365087 |
| alosaur | 31756.37 | 349328 |
| node | 31477.6 | 314780 |
| reno | 28369.2 | 283679 |
| oak | 26172 | 287885 |
| aqua | 21792.8 | 217905 |
| deco | 18191.6 | 181913 |
| abc | 14015.2 | 140143 |
| express | 13902 | 139036 |
| little_std | 11758.55 | 129350 |
| opine | 9616.6 | 96158 |
| little_native | 8259.28 | 90840 |
| dinatra | 8193.8 | 81933 |
| tinyhttp | 5099.7 | 50993 |
| servest | 3260.2 | 32596 |
| drash | 1402.5 | 14025 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 10695  | 10695  | 14383   | 14647   | 14015.2 | 1145.4 | 10693  | 140143 |
| **Bytes/Sec** | 995 kB | 995 kB | 1.34 MB | 1.36 MB | 1.3 MB  | 106 kB | 994 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 0.99 ms | 44 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18991   | 18991   | 35231   | 36447   | 31756.37 | 6392.71 | 18984   | 349328  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.14 MB | 3.24 MB | 2.83 MB  | 569 kB  | 1.69 MB | 31.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.96 ms | 0.74 ms | 36 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14535   | 14535   | 24079  | 24287   | 21792.8 | 3711.92 | 14534   | 217905  |
| **Bytes/Sec** | 1.87 MB | 1.87 MB | 3.1 MB | 3.13 MB | 2.81 MB | 479 kB  | 1.87 MB | 28.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 0.81 ms | 22 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9663    | 9663    | 20031   | 23087   | 18191.6 | 4962.01 | 9662    | 181913  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.58 MB | 2.98 MB | 2.35 MB | 640 kB  | 1.25 MB | 23.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 5 ms  | 1.72 ms | 1.39 ms | 28 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18319   | 18319   | 42943   | 43487   | 38273.6 | 7834.81 | 18312   | 382708  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.82 MB | 3.87 MB | 3.41 MB | 697 kB  | 1.63 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.72 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20927   | 20927   | 45503   | 45983   | 40071.2 | 7993.85 | 20921   | 400707  |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 4.05 MB | 4.09 MB | 3.57 MB | 711 kB  | 1.86 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.67 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5995   | 5995   | 8335   | 8815   | 8193.8 | 771.08  | 5992   | 81933   |
| **Bytes/Sec** | 312 kB | 312 kB | 434 kB | 458 kB | 426 kB | 40.1 kB | 312 kB | 4.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.44 ms | 1.84 ms | 38 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1277   | 1277   | 1417   | 1444   | 1402.5 | 45      | 1277   | 14025   |
| **Bytes/Sec** | 533 kB | 533 kB | 591 kB | 603 kB | 585 kB | 18.8 kB | 533 kB | 5.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 19 ms | 28 ms | 32 ms | 28 ms | 5.98 ms | 242 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg   | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------ | ----- | ------- | ------- | ------ |
| **Req/Sec**   | 7103    | 7103    | 14927   | 16655  | 13902 | 3470.23 | 7103    | 139036 |
| **Bytes/Sec** | 1.53 MB | 1.53 MB | 3.23 MB | 3.6 MB | 3 MB  | 750 kB  | 1.53 MB | 30 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.44 ms | 1.43 ms | 26 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17711   | 17711   | 37727   | 38463   | 33189.82 | 7114.87 | 17698   | 365087  |
| **Bytes/Sec** | 2.73 MB | 2.73 MB | 5.81 MB | 5.92 MB | 5.11 MB  | 1.1 MB  | 2.73 MB | 56.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.46 ms | 0.9 ms | 21 ms |


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
| **Req/Sec**   | 5119   | 5119   | 9231    | 9439    | 8259.28 | 1468.76 | 5116   | 90840   |
| **Bytes/Sec** | 660 kB | 660 kB | 1.19 MB | 1.22 MB | 1.07 MB | 190 kB  | 660 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.39 ms | 1.59 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6175   | 6175   | 13279   | 13599   | 11758.55 | 2768.58 | 6173   | 129350  |
| **Bytes/Sec** | 797 kB | 797 kB | 1.71 MB | 1.75 MB | 1.52 MB  | 357 kB  | 796 kB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.8 ms | 1.41 ms | 27 ms |


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


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 17823 | 17823 | 35007   | 37183   | 31477.6 | 7470.22 | 17815 | 314780  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 3.92 MB | 4.16 MB | 3.53 MB | 837 kB  | 2 MB  | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 0.93 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------- | ------- |
| **Req/Sec**   | 15671   | 15671   | 29071   | 29391   | 26172  | 4893.6 | 15669   | 287885  |
| **Bytes/Sec** | 2.04 MB | 2.04 MB | 3.78 MB | 3.82 MB | 3.4 MB | 636 kB | 2.04 MB | 37.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.13 ms | 0.7 ms | 37 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7147    | 7147    | 9911    | 10039   | 9616.6  | 833.18 | 7144    | 96158   |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 1.89 MB | 1.92 MB | 1.84 MB | 159 kB | 1.36 MB | 18.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 4 ms  | 6 ms  | 3.77 ms | 1.27 ms | 54 ms |


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
| **Req/Sec**   | 14503   | 14503   | 31839   | 32207   | 28369.2 | 5670.13 | 14497   | 283679  |
| **Bytes/Sec** | 1.87 MB | 1.87 MB | 4.11 MB | 4.15 MB | 3.66 MB | 731 kB  | 1.87 MB | 36.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.68 ms | 20 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2451   | 2451   | 3229   | 3705   | 3260.2 | 370.44  | 2450   | 32596   |
| **Bytes/Sec** | 282 kB | 282 kB | 371 kB | 426 kB | 375 kB | 42.6 kB | 282 kB | 3.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.77 ms | 17.86 ms | 85 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3771   | 3771   | 5171   | 5595   | 5099.7 | 481.74  | 3771   | 50993   |
| **Bytes/Sec** | 592 kB | 592 kB | 812 kB | 878 kB | 801 kB | 75.6 kB | 592 kB | 8.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 17 ms | 7.3 ms | 2.98 ms | 86 ms |


---

<p align="center">Generated 2022-02-08T00:35:01.092Z</p>
