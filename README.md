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
| deno | 42454.55 | 466954 |
| node | 34764 | 347602 |
| alosaur | 28159.28 | 309749 |
| deno_canary | 22362 | 223619 |
| fastify | 20491.6 | 204900 |
| http | 15724.8 | 157236 |
| express | 14136.6 | 141359 |
| oak | 12975.4 | 129738 |
| little_std | 11780.19 | 129582 |
| little_native | 11609.6 | 116082 |
| abc | 11551.2 | 115505 |
| aqua | 10220.6 | 102195 |
| mandarinets | 8974.6 | 89742 |
| drash | 7954.4 | 79529 |
| reno | 7556.4 | 75562 |
| opine | 6182.8 | 61826 |
| dinatra | 5930.4 | 59298 |
| servest | 3024.2 | 30237 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8447   | 8447   | 11983   | 12031   | 11551.2 | 1057.51 | 8445   | 115505  |
| **Bytes/Sec** | 785 kB | 785 kB | 1.11 MB | 1.12 MB | 1.07 MB | 98.3 kB | 785 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.18 ms | 1.08 ms | 69 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 20783   | 20783   | 29023   | 29567   | 28159.28 | 2362.5 | 20768   | 309749  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 2.58 MB | 2.63 MB | 2.51 MB  | 210 kB | 1.85 MB | 27.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.09 ms | 0.71 ms | 38 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7427   | 7427   | 10359  | 11391   | 10220.6 | 1004.98 | 7426   | 102195 |
| **Bytes/Sec** | 684 kB | 684 kB | 953 kB | 1.05 MB | 940 kB  | 92.4 kB | 683 kB | 9.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.44 ms | 1.43 ms | 33 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 32543  | 32543  | 43423   | 44063   | 42454.55 | 3184.47 | 32542  | 466954  |
| **Bytes/Sec** | 2.9 MB | 2.9 MB | 3.86 MB | 3.92 MB | 3.78 MB  | 283 kB  | 2.9 MB | 41.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.26 ms | 0.64 ms | 17 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14383   | 14383   | 22847   | 24655   | 22362   | 2736.29 | 14380   | 223619  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 2.03 MB | 2.19 MB | 1.99 MB | 244 kB  | 1.28 MB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 0.99 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4283   | 4283   | 6091   | 6423   | 5930.4 | 599.45  | 4280   | 59298   |
| **Bytes/Sec** | 223 kB | 223 kB | 317 kB | 334 kB | 308 kB | 31.2 kB | 223 kB | 3.08 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 12 ms | 6.25 ms | 2.47 ms | 44 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5131   | 5131   | 8223   | 8607   | 7954.4 | 974.83  | 5131   | 79529   |
| **Bytes/Sec** | 441 kB | 441 kB | 707 kB | 740 kB | 684 kB | 83.8 kB | 441 kB | 6.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.54 ms | 2.04 ms | 110 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6051    | 6051    | 14999   | 15847   | 14136.6 | 2801.92 | 6048    | 141359  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.24 MB | 3.42 MB | 3.05 MB | 606 kB  | 1.31 MB | 30.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.44 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9711   | 9711   | 21503   | 23231   | 20491.6 | 3741.41 | 9705    | 204900  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 3.31 MB | 3.58 MB | 3.16 MB | 576 kB  | 1.49 MB | 31.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.41 ms | 1.17 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11887  | 11887  | 16167  | 16359  | 15724.8 | 1287.53 | 11880  | 157236  |
| **Bytes/Sec** | 618 kB | 618 kB | 841 kB | 851 kB | 818 kB  | 67 kB   | 618 kB | 8.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.18 ms | 0.91 ms | 23 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8583    | 8583    | 11903   | 12663   | 11609.6 | 1237.84 | 8577    | 116082 |
| **Bytes/Sec** | 1.11 MB | 1.11 MB | 1.53 MB | 1.63 MB | 1.5 MB  | 160 kB  | 1.11 MB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.97 ms | 1.33 ms | 32 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8167    | 8167    | 11887   | 13095   | 11780.19 | 1237.21 | 8165    | 129582  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.53 MB | 1.69 MB | 1.52 MB  | 160 kB  | 1.05 MB | 16.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3 ms  | 0.98 ms | 19 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5839   | 5839   | 9375   | 9423   | 8974.6 | 1051.01 | 5837   | 89742   |
| **Bytes/Sec** | 543 kB | 543 kB | 871 kB | 876 kB | 835 kB | 97.7 kB | 543 kB | 8.35 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 6 ms  | 4.22 ms | 1.53 ms | 107 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18319   | 18319   | 36511   | 37055   | 34764   | 5490.87 | 18316   | 347602  |
| **Bytes/Sec** | 2.05 MB | 2.05 MB | 4.09 MB | 4.15 MB | 3.89 MB | 615 kB  | 2.05 MB | 38.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.62 ms | 0.89 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8087    | 8087    | 13375   | 14231   | 12975.4 | 1685.16 | 8087    | 129738  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.74 MB | 1.85 MB | 1.69 MB | 219 kB  | 1.05 MB | 16.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.51 ms | 1.16 ms | 31 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4131   | 4131   | 6427   | 6503  | 6182.8 | 689.86 | 4131   | 61826   |
| **Bytes/Sec** | 636 kB | 636 kB | 990 kB | 1 MB  | 952 kB | 106 kB | 636 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.84 ms | 2.53 ms | 129 ms |


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
| **Req/Sec**   | 5203   | 5203   | 7795   | 7955   | 7556.4 | 790.07  | 5200   | 75562   |
| **Bytes/Sec** | 406 kB | 406 kB | 608 kB | 621 kB | 589 kB | 61.7 kB | 406 kB | 5.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.7 ms | 2.4 ms | 132 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2417   | 2417   | 3025   | 3377   | 3024.2 | 244.85  | 2416   | 30237   |
| **Bytes/Sec** | 278 kB | 278 kB | 348 kB | 389 kB | 348 kB | 28.2 kB | 278 kB | 3.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.74 ms | 18.19 ms | 99 ms |


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

<p align="center">Generated 2021-08-18T00:47:29.645Z</p>
