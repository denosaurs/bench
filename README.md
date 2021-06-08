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
| node | 38832.73 | 427177 |
| deno_canary | 25484.8 | 254835 |
| deno | 23710.4 | 237127 |
| fastify | 21818.8 | 218178 |
| http | 18541.46 | 203927 |
| alosaur | 16665.2 | 166672 |
| little_native | 13771.2 | 137706 |
| aqua | 13288 | 132866 |
| oak | 11624.6 | 116246 |
| drash | 11603.8 | 116031 |
| dinatra | 11368.2 | 113674 |
| mandarinets | 10774.73 | 118516 |
| abc | 10013.8 | 100138 |
| express | 9309.8 | 93093 |
| reno | 7674.6 | 76739 |
| tinyhttp | 7281.6 | 72809 |
| little_std | 4774.64 | 52511 |
| opine | 4659.5 | 46588 |
| servest | 3116.6 | 31160 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6655   | 6655   | 10119  | 11007   | 10013.8 | 1192.76 | 6655   | 100138  |
| **Bytes/Sec** | 619 kB | 619 kB | 941 kB | 1.02 MB | 931 kB  | 111 kB  | 619 kB | 9.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.46 ms | 1.33 ms | 50 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10055  | 10055  | 17199   | 17967   | 16665.2 | 2232.16 | 10052  | 166672  |
| **Bytes/Sec** | 925 kB | 925 kB | 1.58 MB | 1.65 MB | 1.53 MB | 205 kB  | 925 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.1 ms | 0.93 ms | 54 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 9319   | 9319   | 13695   | 14159  | 13288   | 1357.6 | 9313   | 132866  |
| **Bytes/Sec** | 857 kB | 857 kB | 1.26 MB | 1.3 MB | 1.22 MB | 125 kB | 857 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.14 ms | 59 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16959   | 16959   | 24479   | 26159   | 23710.4 | 2483.71 | 16953   | 237127  |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 2.18 MB | 2.33 MB | 2.11 MB | 221 kB  | 1.51 MB | 21.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 0.77 ms | 20 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19727   | 19727   | 25887  | 27135   | 25484.8 | 2011.17 | 19720   | 254835  |
| **Bytes/Sec** | 1.76 MB | 1.76 MB | 2.3 MB | 2.41 MB | 2.27 MB | 179 kB  | 1.76 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.71 ms | 25 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7471   | 7471   | 11655  | 12607  | 11368.2 | 1355.62 | 7469   | 113674  |
| **Bytes/Sec** | 389 kB | 389 kB | 606 kB | 656 kB | 591 kB  | 70.5 kB | 388 kB | 5.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.25 ms | 1.33 ms | 26 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7811   | 7811   | 11951   | 12239   | 11603.8 | 1270.54 | 7808   | 116031  |
| **Bytes/Sec** | 672 kB | 672 kB | 1.03 MB | 1.05 MB | 998 kB  | 109 kB  | 671 kB | 9.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.15 ms | 1.04 ms | 68 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 10087   | 10487   | 9309.8  | 1746.08 | 4350   | 93093   |
| **Bytes/Sec** | 940 kB | 940 kB | 2.18 MB | 2.27 MB | 2.01 MB | 377 kB  | 940 kB | 20.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.74 ms | 1.86 ms | 34 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 10999   | 10999   | 22959   | 24031  | 21818.8 | 3672.2 | 10997   | 218178  |
| **Bytes/Sec** | 1.69 MB | 1.69 MB | 3.54 MB | 3.7 MB | 3.36 MB | 566 kB | 1.69 MB | 33.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.05 ms | 39 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13447  | 13447  | 19039  | 19583   | 18541.46 | 1650.68 | 13442  | 203927  |
| **Bytes/Sec** | 699 kB | 699 kB | 990 kB | 1.02 MB | 964 kB   | 85.8 kB | 699 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.48 ms | 0.94 ms | 32 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9871    | 9871    | 14239   | 14479   | 13771.2 | 1321.62 | 9868    | 137706  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 1.84 MB | 1.87 MB | 1.78 MB | 170 kB  | 1.27 MB | 17.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.21 ms | 0.89 ms | 20 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2437   | 2437   | 5027   | 5243   | 4774.64 | 780.56  | 2436   | 52511   |
| **Bytes/Sec** | 224 kB | 224 kB | 462 kB | 483 kB | 439 kB  | 71.9 kB | 224 kB | 4.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.89 ms | 2.78 ms | 70 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7043   | 7043   | 11159   | 11183   | 10774.73 | 1180.66 | 7040   | 118516 |
| **Bytes/Sec** | 655 kB | 655 kB | 1.04 MB | 1.04 MB | 1 MB     | 110 kB  | 655 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.21 ms | 1.03 ms | 28 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 23231  | 23231  | 40479   | 40831   | 38832.73 | 4952.14 | 23231  | 427177  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 4.53 MB | 4.58 MB | 4.35 MB  | 555 kB  | 2.6 MB | 47.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.41 ms | 0.73 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7683   | 7683   | 12079   | 12415   | 11624.6 | 1341.49 | 7681   | 116246  |
| **Bytes/Sec** | 999 kB | 999 kB | 1.57 MB | 1.61 MB | 1.51 MB | 174 kB  | 999 kB | 15.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 1.09 ms | 62 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3125   | 3125   | 4883   | 5015   | 4659.5 | 536.4   | 3125   | 46588   |
| **Bytes/Sec** | 481 kB | 481 kB | 752 kB | 773 kB | 717 kB | 82.6 kB | 481 kB | 7.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 13 ms | 8.09 ms | 2.49 ms | 140 ms |


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
| **Req/Sec**   | 5111   | 5111   | 7847   | 8223   | 7674.6 | 866.23  | 5108   | 76739   |
| **Bytes/Sec** | 399 kB | 399 kB | 612 kB | 642 kB | 599 kB | 67.6 kB | 398 kB | 5.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.67 ms | 1.81 ms | 57 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2305   | 2305   | 3133   | 4009   | 3116.6 | 544.25  | 2305   | 31160   |
| **Bytes/Sec** | 265 kB | 265 kB | 360 kB | 461 kB | 358 kB | 62.6 kB | 265 kB | 3.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.33 ms | 18.1 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5343   | 5343   | 7359   | 8035    | 7281.6 | 685.05  | 5340   | 72809   |
| **Bytes/Sec** | 711 kB | 711 kB | 978 kB | 1.07 MB | 968 kB | 91.1 kB | 710 kB | 9.68 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 9 ms  | 5.03 ms | 1.63 ms | 28 ms |


---

<p align="center">Generated 2021-06-08T01:12:13.336Z</p>
