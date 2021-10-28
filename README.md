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
| fastify | 35280.73 | 388112 |
| deno | 34580.81 | 345831 |
| deno_canary | 32374.4 | 323780 |
| node | 19783.2 | 197837 |
| alosaur | 19666 | 196628 |
| reno | 15937.8 | 159381 |
| little_native | 12618 | 138794 |
| aqua | 12457.1 | 137010 |
| oak | 10460.19 | 115062 |
| little_std | 9932.73 | 109267 |
| express | 9634 | 105970 |
| abc | 9463 | 94629 |
| dinatra | 5969.73 | 65661 |
| opine | 4412.3 | 44120 |
| servest | 3524.4 | 35241 |
| tinyhttp | 2421.9 | 24213 |
| drash | 0 | 0 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 6875   | 6875   | 9711   | 10223  | 9463   | 901.08  | 6873   | 94629  |
| **Bytes/Sec** | 639 kB | 639 kB | 903 kB | 951 kB | 880 kB | 83.8 kB | 639 kB | 8.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.72 ms | 1.78 ms | 100 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12847   | 12847   | 20655   | 21007   | 19666   | 2399.23 | 12840   | 196628  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.84 MB | 1.87 MB | 1.75 MB | 214 kB  | 1.14 MB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.54 ms | 1.22 ms | 44 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7047   | 7047   | 13839   | 14719  | 12457.1 | 2793.93 | 7045   | 137010  |
| **Bytes/Sec** | 909 kB | 909 kB | 1.78 MB | 1.9 MB | 1.61 MB | 360 kB  | 909 kB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 9 ms  | 2.84 ms | 1.92 ms | 27 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 17023   | 17023   | 36607   | 40671   | 34580.81 | 7328.02 | 17021   | 345831  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.26 MB | 3.62 MB | 3.08 MB  | 652 kB  | 1.51 MB | 30.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.61 ms | 0.84 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 17039   | 17039   | 37791   | 38239  | 32374.4 | 7777.45 | 17034   | 323780  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 3.36 MB | 3.4 MB | 2.88 MB | 692 kB  | 1.52 MB | 28.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.61 ms | 0.95 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3955   | 3955   | 6231   | 6691   | 5969.73 | 738.75  | 3954   | 65661   |
| **Bytes/Sec** | 206 kB | 206 kB | 324 kB | 348 kB | 310 kB  | 38.4 kB | 206 kB | 3.41 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 12 ms | 6.19 ms | 2.59 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 10151   | 10583   | 9634    | 1718.24 | 4349   | 105970  |
| **Bytes/Sec** | 940 kB | 940 kB | 2.19 MB | 2.29 MB | 2.08 MB | 371 kB  | 939 kB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.62 ms | 1.81 ms | 36 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18687   | 18687   | 36799   | 38047   | 35280.73 | 5323.16 | 18677   | 388112  |
| **Bytes/Sec** | 2.88 MB | 2.88 MB | 5.66 MB | 5.86 MB | 5.43 MB  | 820 kB  | 2.88 MB | 59.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.42 ms | 0.87 ms | 31 ms |


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
| **Req/Sec**   | 6807   | 6807   | 13895   | 14087   | 12618   | 2349.42 | 6806   | 138794  |
| **Bytes/Sec** | 878 kB | 878 kB | 1.79 MB | 1.82 MB | 1.63 MB | 303 kB  | 878 kB | 17.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.41 ms | 1.19 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5675   | 5675   | 10927   | 11647  | 9932.73 | 1936.33 | 5674   | 109267  |
| **Bytes/Sec** | 732 kB | 732 kB | 1.41 MB | 1.5 MB | 1.28 MB | 250 kB  | 732 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.62 ms | 1.71 ms | 29 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11127   | 11127   | 21087   | 24047   | 19783.2 | 4698.67 | 11127   | 197837  |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.36 MB | 2.69 MB | 2.22 MB | 526 kB  | 1.25 MB | 22.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.54 ms | 1.43 ms | 29 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------ | ------ | ------ |
| **Req/Sec**   | 6059   | 6059   | 11383   | 12447   | 10460.19 | 2024.4 | 6057   | 115062 |
| **Bytes/Sec** | 787 kB | 787 kB | 1.48 MB | 1.62 MB | 1.36 MB  | 263 kB | 787 kB | 15 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.4 ms | 1.9 ms | 93 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%    | 2.5%  | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ----- | ----- | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 0     | 0     | 5443   | 5691   | 4412.3 | 1724.29 | 3106   | 44120   |
| **Bytes/Sec** | 0 B   | 0 B   | 838 kB | 877 kB | 680 kB | 266 kB  | 478 kB | 6.79 MB |


| **Stat**    | 2.5%    | 50%     | 95.5%   | Avg        | Stdev     | Max     |
| ----------- | ------- | ------- | ------- | ---------- | --------- | ------- |
| **Latency** | 1072 ms | 1134 ms | 1670 ms | 1219.59 ms | 167.72 ms | 1702 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7147   | 7147   | 17887   | 18991   | 15937.8 | 3914.75 | 7146   | 159381  |
| **Bytes/Sec** | 922 kB | 922 kB | 2.31 MB | 2.45 MB | 2.06 MB | 505 kB  | 922 kB | 20.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 7 ms  | 2.07 ms | 1.6 ms | 58 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2283   | 2283   | 3567   | 3883   | 3524.4 | 450.26  | 2282   | 35241   |
| **Bytes/Sec** | 263 kB | 263 kB | 410 kB | 447 kB | 405 kB | 51.8 kB | 262 kB | 4.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 10.85 ms | 17.51 ms | 104 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 1906   | 1906   | 2463   | 2617   | 2421.9 | 201.59  | 1906   | 24213  |
| **Bytes/Sec** | 299 kB | 299 kB | 387 kB | 411 kB | 380 kB | 31.7 kB | 299 kB | 3.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 13 ms | 15 ms | 28 ms | 16.03 ms | 4.41 ms | 137 ms |


---

<p align="center">Generated 2021-10-28T00:50:54.734Z</p>
