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
| deno_canary | 36930.19 | 406266 |
| fastify | 33391.2 | 333920 |
| deno | 26984 | 269831 |
| node | 23693.2 | 236951 |
| http | 23011.2 | 230090 |
| oak | 18359.64 | 201965 |
| abc | 14669.6 | 146683 |
| express | 14462.2 | 144619 |
| alosaur | 13986.4 | 139876 |
| dinatra | 13892 | 138913 |
| aqua | 11939.8 | 119385 |
| little_native | 11871 | 118707 |
| drash | 11834.73 | 130187 |
| reno | 11249 | 112495 |
| mandarinets | 10799 | 107965 |
| tinyhttp | 6548.8 | 65483 |
| opine | 4703.11 | 47026 |
| little_std | 3769.3 | 37685 |
| servest | 3191.4 | 31907 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11007   | 11007   | 15119   | 15327   | 14669.6 | 1236.53 | 11003   | 146683  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.41 MB | 1.43 MB | 1.36 MB | 115 kB  | 1.02 MB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.18 ms | 0.82 ms | 23 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9463   | 9463   | 14479   | 14935   | 13986.4 | 1545.17 | 9463   | 139876  |
| **Bytes/Sec** | 871 kB | 871 kB | 1.33 MB | 1.37 MB | 1.29 MB | 142 kB  | 871 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.16 ms | 63 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8099   | 8099   | 12423   | 12679   | 11939.8 | 1335.26 | 8099   | 119385 |
| **Bytes/Sec** | 745 kB | 745 kB | 1.14 MB | 1.17 MB | 1.1 MB  | 123 kB  | 745 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.89 ms | 1.3 ms | 80 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 18047   | 18047   | 27695   | 28911   | 26984  | 3043.39 | 18042   | 269831 |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.47 MB | 2.57 MB | 2.4 MB | 271 kB  | 1.61 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.65 ms | 23 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 22079   | 22079   | 38783   | 39871   | 36930.19 | 4951.64 | 22073   | 406266  |
| **Bytes/Sec** | 1.97 MB | 1.97 MB | 3.45 MB | 3.55 MB | 3.29 MB  | 441 kB  | 1.96 MB | 36.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.74 ms | 23 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 10559  | 10559  | 14255  | 14479  | 13892  | 1120.7  | 10554  | 138913  |
| **Bytes/Sec** | 549 kB | 549 kB | 741 kB | 753 kB | 722 kB | 58.3 kB | 549 kB | 7.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.07 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7695   | 7695   | 12311   | 12655   | 11834.73 | 1342.09 | 7694   | 130187  |
| **Bytes/Sec** | 662 kB | 662 kB | 1.06 MB | 1.09 MB | 1.02 MB  | 115 kB  | 662 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.09 ms | 1.14 ms | 32 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6451    | 6451    | 15271  | 15815   | 14462.2 | 2696.56 | 6448    | 144619  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 3.3 MB | 3.42 MB | 3.12 MB | 582 kB  | 1.39 MB | 31.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.41 ms | 41 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16623   | 16623   | 35327   | 35551   | 33391.2 | 5595.51 | 16622   | 333920  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 5.44 MB | 5.47 MB | 5.14 MB | 862 kB  | 2.56 MB | 51.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.59 ms | 0.91 ms | 27 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 17871  | 17871  | 23535   | 23887   | 23011.2 | 1724.79 | 17856  | 230090 |
| **Bytes/Sec** | 929 kB | 929 kB | 1.22 MB | 1.24 MB | 1.2 MB  | 89.8 kB | 929 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.68 ms | 29 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7403   | 7403   | 12319   | 12639   | 11871   | 1495.72 | 7402   | 118707  |
| **Bytes/Sec** | 955 kB | 955 kB | 1.59 MB | 1.63 MB | 1.53 MB | 193 kB  | 955 kB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.07 ms | 1.05 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2323   | 2323   | 3935   | 4123   | 3769.3 | 524.63  | 2323   | 37685   |
| **Bytes/Sec** | 214 kB | 214 kB | 362 kB | 379 kB | 347 kB | 48.2 kB | 214 kB | 3.47 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 10.12 ms | 2.69 ms | 58 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg   | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ----- | ------- | ------ | ------ |
| **Req/Sec**   | 7035   | 7035   | 11239   | 11335   | 10799 | 1261.56 | 7032   | 107965 |
| **Bytes/Sec** | 654 kB | 654 kB | 1.05 MB | 1.05 MB | 1 MB  | 117 kB  | 654 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.24 ms | 1.26 ms | 52 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12703   | 12703   | 24687   | 26543   | 23693.2 | 3912.81 | 12700   | 236951  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 2.76 MB | 2.97 MB | 2.65 MB | 438 kB  | 1.42 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 1.12 ms | 55 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13847  | 13847  | 18831   | 19871   | 18359.64 | 1643.55 | 13840  | 201965  |
| **Bytes/Sec** | 1.8 MB | 1.8 MB | 2.45 MB | 2.58 MB | 2.39 MB  | 214 kB  | 1.8 MB | 26.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.6 ms | 0.8 ms | 20 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3489   | 3489   | 4855   | 5075   | 4703.11 | 454.67 | 3489   | 47026   |
| **Bytes/Sec** | 538 kB | 538 kB | 748 kB | 782 kB | 724 kB  | 70 kB  | 537 kB | 7.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 8 ms  | 13 ms | 8.05 ms | 2.17 ms | 103 ms |


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
| **Req/Sec**   | 8063   | 8063   | 11575  | 11775  | 11249  | 1065.43 | 8060   | 112495  |
| **Bytes/Sec** | 629 kB | 629 kB | 903 kB | 919 kB | 877 kB | 83.2 kB | 629 kB | 8.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.32 ms | 73 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2309   | 2309   | 3025   | 3999   | 3191.4 | 467.15  | 2309   | 31907   |
| **Bytes/Sec** | 266 kB | 266 kB | 348 kB | 460 kB | 367 kB | 53.7 kB | 266 kB | 3.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.05 ms | 17.97 ms | 95 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4719   | 4719   | 6707   | 6915   | 6548.8 | 630.67  | 4716   | 65483   |
| **Bytes/Sec** | 628 kB | 628 kB | 892 kB | 920 kB | 871 kB | 83.9 kB | 627 kB | 8.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.67 ms | 1.75 ms | 60 ms |


---

<p align="center">Generated 2021-05-23T01:00:12.623Z</p>
