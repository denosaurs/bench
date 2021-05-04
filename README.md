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
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 36490.91 | 401361 |
| deno_canary | 36490.91 | 401361 |
| node | 22514.8 | 225149 |
| http | 21056.37 | 231595 |
| fastify | 18359.6 | 183602 |
| oak | 14038.4 | 140386 |
| alosaur | 13115.4 | 131153 |
| abc | 12495.8 | 124964 |
| aqua | 12220 | 122197 |
| dinatra | 11223 | 112225 |
| mandarinets | 10600.2 | 105999 |
| drash | 9868.19 | 108533 |
| reno | 9472.21 | 94707 |
| express | 8379.9 | 83806 |
| tinyhttp | 5922.9 | 59226 |
| little_native | 5534.82 | 60878 |
| little_std | 5534.82 | 60878 |
| opine | 5203.7 | 52028 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6683   | 6683   | 13151   | 14983   | 12495.8 | 2614.4 | 6680   | 124964  |
| **Bytes/Sec** | 622 kB | 622 kB | 1.22 MB | 1.39 MB | 1.16 MB | 243 kB | 621 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.67 ms | 1.73 ms | 55 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8079   | 8079   | 13503   | 14767   | 13115.4 | 1745.91 | 8076   | 131153  |
| **Bytes/Sec** | 743 kB | 743 kB | 1.24 MB | 1.36 MB | 1.21 MB | 161 kB  | 743 kB | 12.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.46 ms | 1.58 ms | 75 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8223   | 8223   | 12663   | 12759   | 12220   | 1335.55 | 8223   | 122197  |
| **Bytes/Sec** | 757 kB | 757 kB | 1.17 MB | 1.17 MB | 1.12 MB | 123 kB  | 757 kB | 11.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.06 ms | 1.06 ms | 63 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 28735   | 28735   | 37087  | 38943   | 36490.91 | 2698.83 | 28728   | 401361  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 3.3 MB | 3.47 MB | 3.25 MB  | 240 kB  | 2.56 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.69 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 28735   | 28735   | 37087  | 38943   | 36490.91 | 2698.83 | 28728   | 401361  |
| **Bytes/Sec** | 2.56 MB | 2.56 MB | 3.3 MB | 3.47 MB | 3.25 MB  | 240 kB  | 2.56 MB | 35.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.47 ms | 0.69 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7699   | 7699   | 11511  | 11927  | 11223  | 1206.33 | 7698   | 112225  |
| **Bytes/Sec** | 400 kB | 400 kB | 599 kB | 621 kB | 584 kB | 62.7 kB | 400 kB | 5.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.27 ms | 1.3 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6471   | 6471   | 10151  | 10607  | 9868.19 | 1149.37 | 6471   | 108533  |
| **Bytes/Sec** | 557 kB | 557 kB | 872 kB | 912 kB | 849 kB  | 98.9 kB | 557 kB | 9.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.44 ms | 1.46 ms | 78 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3721   | 3721   | 8975    | 9319    | 8379.9  | 1641.12 | 3721   | 83806   |
| **Bytes/Sec** | 804 kB | 804 kB | 1.94 MB | 2.01 MB | 1.81 MB | 355 kB  | 804 kB | 18.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 10 ms | 4.34 ms | 2.17 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 8215    | 8215    | 19439   | 20831   | 18359.6 | 3490.5 | 8213    | 183602  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.99 MB | 3.21 MB | 2.83 MB | 538 kB | 1.26 MB | 28.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.57 ms | 1.31 ms | 31 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 15367  | 15367  | 21711   | 22351   | 21056.37 | 1870.53 | 15360  | 231595 |
| **Bytes/Sec** | 799 kB | 799 kB | 1.13 MB | 1.16 MB | 1.09 MB  | 97.3 kB | 799 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.79 ms | 36 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 3343   | 3343   | 5839   | 5895   | 5534.82 | 711.48  | 3343   | 60878  |
| **Bytes/Sec** | 308 kB | 308 kB | 538 kB | 542 kB | 509 kB  | 65.4 kB | 308 kB | 5.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.64 ms | 1.88 ms | 42 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 3343   | 3343   | 5839   | 5895   | 5534.82 | 711.48  | 3343   | 60878  |
| **Bytes/Sec** | 308 kB | 308 kB | 538 kB | 542 kB | 509 kB  | 65.4 kB | 308 kB | 5.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 12 ms | 6.64 ms | 1.88 ms | 42 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7031   | 7031   | 11047   | 11207   | 10600.2 | 1201   | 7029   | 105999  |
| **Bytes/Sec** | 654 kB | 654 kB | 1.03 MB | 1.04 MB | 986 kB  | 112 kB | 654 kB | 9.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.24 ms | 1.09 ms | 66 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12599   | 12599   | 23759   | 24687   | 22514.8 | 3432.06 | 12593   | 225149  |
| **Bytes/Sec** | 1.41 MB | 1.41 MB | 2.66 MB | 2.76 MB | 2.52 MB | 384 kB  | 1.41 MB | 25.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.3 ms | 1.07 ms | 36 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 9455    | 9455    | 14551   | 14855   | 14038.4 | 1544.7 | 9453    | 140386  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.89 MB | 1.93 MB | 1.83 MB | 201 kB | 1.23 MB | 18.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.22 ms | 0.93 ms | 27 ms |


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
| **Req/Sec**   | 6447   | 6447   | 9759   | 10215  | 9472.21 | 1054.84 | 6444   | 94707   |
| **Bytes/Sec** | 503 kB | 503 kB | 761 kB | 797 kB | 739 kB  | 82.3 kB | 503 kB | 7.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.62 ms | 1.8 ms | 82 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3739   | 3739   | 5403   | 5459   | 5203.7 | 495.56  | 3739   | 52028   |
| **Bytes/Sec** | 576 kB | 576 kB | 832 kB | 841 kB | 801 kB | 76.3 kB | 576 kB | 8.01 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 11 ms | 7.36 ms | 1.82 ms | 115 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3423   | 3423   | 6035   | 6927   | 5922.9 | 959.17 | 3423   | 59226   |
| **Bytes/Sec** | 455 kB | 455 kB | 803 kB | 921 kB | 788 kB | 128 kB | 455 kB | 7.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 6 ms  | 12 ms | 6.25 ms | 2.66 ms | 109 ms |


---

<p align="center">Generated 2021-05-04T18:01:02.686Z</p>
