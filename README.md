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
| deno | 22769.2 | 227698 |
| node | 20020.41 | 200185 |
| deno_canary | 16850.8 | 168504 |
| fastify | 14726 | 147242 |
| oak | 12750.7 | 127506 |
| little_std | 11564.55 | 127190 |
| http | 10880.2 | 108794 |
| alosaur | 9772.21 | 97716 |
| reno | 9482 | 94813 |
| abc | 8992.21 | 89910 |
| drash | 8029.5 | 80289 |
| little_native | 6690.73 | 73594 |
| express | 6068.5 | 60685 |
| dinatra | 5662.1 | 62278 |
| mandarinets | 4114.3 | 41140 |
| opine | 3915.1 | 39146 |
| tinyhttp | 2583.5 | 25830 |
| servest | 1962.3 | 19623 |
| aqua | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6071   | 6071   | 9159   | 9847   | 8992.21 | 1013.67 | 6069   | 89910   |
| **Bytes/Sec** | 565 kB | 565 kB | 852 kB | 916 kB | 836 kB  | 94.3 kB | 564 kB | 8.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 2 ms  | 4 ms  | 8 ms  | 3.89 ms | 2.15 ms | 117 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6383   | 6383   | 10159  | 10839  | 9772.21 | 1182.36 | 6380   | 97716  |
| **Bytes/Sec** | 568 kB | 568 kB | 904 kB | 965 kB | 870 kB  | 105 kB  | 568 kB | 8.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 8 ms  | 3.61 ms | 1.78 ms | 42 ms |


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
| **Req/Sec**   | 14247   | 14247   | 23951   | 24639   | 22769.2 | 3025.06 | 14244   | 227698  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.13 MB | 2.19 MB | 2.03 MB | 269 kB  | 1.27 MB | 20.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.39 ms | 1.06 ms | 28 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 8607   | 8607   | 15351   | 22815   | 16850.8 | 5827.92 | 8602   | 168504 |
| **Bytes/Sec** | 766 kB | 766 kB | 1.37 MB | 2.03 MB | 1.5 MB  | 519 kB  | 766 kB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 6 ms  | 1.84 ms | 1.65 ms | 33 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3807   | 3807   | 5831   | 6079   | 5662.1 | 608.41  | 3806   | 62278   |
| **Bytes/Sec** | 198 kB | 198 kB | 303 kB | 316 kB | 294 kB | 31.6 kB | 198 kB | 3.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.59 ms | 2.32 ms | 42 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3121   | 3121   | 9159   | 9631   | 8029.5 | 2101.34 | 3120   | 80289  |
| **Bytes/Sec** | 269 kB | 269 kB | 787 kB | 828 kB | 690 kB | 181 kB  | 268 kB | 6.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 10 ms | 4.3 ms | 3.49 ms | 233 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4089   | 4089   | 5227    | 9215    | 6068.5  | 1460.36 | 4089   | 60685   |
| **Bytes/Sec** | 884 kB | 884 kB | 1.13 MB | 1.99 MB | 1.31 MB | 315 kB  | 883 kB | 13.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 7 ms  | 13 ms | 6.13 ms | 2.9 ms | 53 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10647   | 10647   | 11391   | 25439   | 14726   | 5771.76 | 10641   | 147242  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 1.75 MB | 3.92 MB | 2.27 MB | 889 kB  | 1.64 MB | 22.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 7 ms  | 2.25 ms | 1.87 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7551   | 7551   | 11343  | 11567  | 10880.2 | 1153.58 | 7550   | 108794  |
| **Bytes/Sec** | 393 kB | 393 kB | 590 kB | 602 kB | 566 kB  | 60 kB   | 393 kB | 5.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.31 ms | 1.52 ms | 78 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4491   | 4491   | 7023   | 7435   | 6690.73 | 877.09 | 4490   | 73594   |
| **Bytes/Sec** | 580 kB | 580 kB | 906 kB | 959 kB | 863 kB  | 113 kB | 579 kB | 9.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.61 ms | 2.02 ms | 27 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 7979    | 7979    | 11991   | 12159   | 11564.55 | 1148.75 | 7978    | 127190  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.55 MB | 1.57 MB | 1.49 MB  | 148 kB  | 1.03 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.17 ms | 0.98 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2583   | 2583   | 4135   | 5339   | 4114.3 | 780.25  | 2583   | 41140   |
| **Bytes/Sec** | 240 kB | 240 kB | 385 kB | 497 kB | 383 kB | 72.6 kB | 240 kB | 3.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 8 ms  | 21 ms | 9.21 ms | 4.21 ms | 102 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9975    | 9975    | 20943   | 22175   | 20020.41 | 3465.76 | 9970    | 200185  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.35 MB | 2.48 MB | 2.24 MB  | 388 kB  | 1.12 MB | 22.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.48 ms | 1.35 ms | 37 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4007   | 4007   | 14223   | 15119   | 12750.7 | 3472.27 | 4007   | 127506  |
| **Bytes/Sec** | 521 kB | 521 kB | 1.85 MB | 1.97 MB | 1.66 MB | 452 kB  | 521 kB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 7 ms  | 2.61 ms | 1.74 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2619   | 2619   | 3901   | 4407   | 3915.1 | 502.67  | 2618   | 39146   |
| **Bytes/Sec** | 403 kB | 403 kB | 601 kB | 679 kB | 603 kB | 77.5 kB | 403 kB | 6.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.7 ms | 3.37 ms | 69 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 4723   | 4723   | 10375  | 10583  | 9482   | 1876.78 | 4721   | 94813  |
| **Bytes/Sec** | 368 kB | 368 kB | 809 kB | 825 kB | 740 kB | 146 kB  | 368 kB | 7.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.69 ms | 1.88 ms | 37 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1240   | 1240   | 1867   | 3029   | 1962.3 | 422.56  | 1240   | 19623   |
| **Bytes/Sec** | 143 kB | 143 kB | 215 kB | 348 kB | 226 kB | 48.6 kB | 143 kB | 2.26 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 9 ms  | 56 ms | 19.86 ms | 19.76 ms | 80 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1550   | 1550   | 2761   | 2841   | 2583.5 | 397.53  | 1550   | 25830   |
| **Bytes/Sec** | 243 kB | 243 kB | 433 kB | 446 kB | 406 kB | 62.4 kB | 243 kB | 4.06 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 12 ms | 13 ms | 30 ms | 15.07 ms | 5.02 ms | 78 ms |


---

<p align="center">Generated 2021-09-05T00:50:38.412Z</p>
