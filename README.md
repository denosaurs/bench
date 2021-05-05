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
| node | 36164 | 361601 |
| deno_canary | 36093.6 | 360907 |
| fastify | 35276.37 | 388036 |
| deno | 24621.2 | 246222 |
| http | 20010.55 | 220118 |
| express | 16445 | 164441 |
| oak | 14890.4 | 148900 |
| alosaur | 14083.2 | 140832 |
| dinatra | 13437.6 | 134380 |
| drash | 13360.8 | 133606 |
| abc | 10398.6 | 103973 |
| aqua | 10351.4 | 103505 |
| reno | 9438.6 | 94380 |
| little_native | 7885.6 | 78859 |
| tinyhttp | 6124.8 | 61250 |
| little_std | 4609.73 | 50707 |
| opine | 4244.61 | 42433 |
| servest | 3215.2 | 32146 |
| mandarinets | 3211.7 | 32114 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7255   | 7255   | 10719  | 10895   | 10398.6 | 1051.31 | 7253   | 103973  |
| **Bytes/Sec** | 675 kB | 675 kB | 997 kB | 1.01 MB | 967 kB  | 97.8 kB | 675 kB | 9.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.31 ms | 1.41 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 9279   | 9279   | 14423   | 14943   | 14083.2 | 1620.87 | 9279   | 140832 |
| **Bytes/Sec** | 854 kB | 854 kB | 1.33 MB | 1.38 MB | 1.3 MB  | 149 kB  | 854 kB | 13 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.34 ms | 64 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6551   | 6551   | 10655  | 11135   | 10351.4 | 1283.77 | 6549   | 103505  |
| **Bytes/Sec** | 603 kB | 603 kB | 980 kB | 1.02 MB | 952 kB  | 118 kB  | 603 kB | 9.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.42 ms | 1.5 ms | 65 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16367   | 16367   | 25599   | 26207   | 24621.2 | 2820.33 | 16363   | 246222  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.28 MB | 2.33 MB | 2.19 MB | 251 kB  | 1.46 MB | 21.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.76 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26111   | 26111   | 36991   | 38559   | 36093.6 | 3432.22 | 26109   | 360907  |
| **Bytes/Sec** | 2.32 MB | 2.32 MB | 3.29 MB | 3.43 MB | 3.21 MB | 305 kB  | 2.32 MB | 32.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.51 ms | 0.76 ms | 32 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9671   | 9671   | 13807  | 14495  | 13437.6 | 1357.41 | 9671   | 134380  |
| **Bytes/Sec** | 503 kB | 503 kB | 718 kB | 754 kB | 699 kB  | 70.6 kB | 503 kB | 6.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.38 ms | 1.17 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9231   | 9231   | 13791   | 14311   | 13360.8 | 1405.61 | 9224   | 133606  |
| **Bytes/Sec** | 794 kB | 794 kB | 1.19 MB | 1.23 MB | 1.15 MB | 121 kB  | 793 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.37 ms | 1.04 ms | 69 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7535    | 7535    | 17471   | 17855   | 16445   | 3000.88 | 7532    | 164441  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.77 MB | 3.85 MB | 3.55 MB | 648 kB  | 1.63 MB | 35.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 1.08 ms | 27 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 19087   | 19087   | 36991  | 37855   | 35276.37 | 5183   | 19072   | 388036  |
| **Bytes/Sec** | 2.94 MB | 2.94 MB | 5.7 MB | 5.83 MB | 5.43 MB  | 798 kB | 2.94 MB | 59.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.56 ms | 0.81 ms | 20 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 13559  | 13559  | 20623   | 21215  | 20010.55 | 2079.42 | 13554  | 220118  |
| **Bytes/Sec** | 705 kB | 705 kB | 1.07 MB | 1.1 MB | 1.04 MB  | 108 kB  | 705 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.95 ms | 28 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5355   | 5355   | 8103    | 8455    | 7885.6  | 858.63 | 5353   | 78859   |
| **Bytes/Sec** | 691 kB | 691 kB | 1.05 MB | 1.09 MB | 1.02 MB | 111 kB | 691 kB | 10.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.5 ms | 1.4 ms | 29 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2715   | 2715   | 4767   | 5043   | 4609.73 | 625.55  | 2715   | 50707   |
| **Bytes/Sec** | 250 kB | 250 kB | 439 kB | 464 kB | 424 kB  | 57.5 kB | 250 kB | 4.67 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 8.08 ms | 2.38 ms | 54 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ----- | ----- | ----- | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 0     | 0     | 0     | 7607   | 3211.7 | 3499.24 | 2532   | 32114   |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 708 kB | 299 kB | 325 kB  | 235 kB | 2.99 MB |


| **Stat**    | 2.5%    | 50%     | 95.5%   | Avg       | Stdev     | Max     |
| ----------- | ------- | ------- | ------- | --------- | --------- | ------- |
| **Latency** | 4256 ms | 4609 ms | 5362 ms | 4667.4 ms | 317.63 ms | 5515 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20223   | 20223   | 37823   | 38399  | 36164   | 5321.88 | 20218   | 361601  |
| **Bytes/Sec** | 2.27 MB | 2.27 MB | 4.24 MB | 4.3 MB | 4.05 MB | 596 kB  | 2.26 MB | 40.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.65 ms | 0.79 ms | 31 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9743    | 9743    | 15479   | 15671   | 14890.4 | 1722.02 | 9737    | 148900  |
| **Bytes/Sec** | 1.27 MB | 1.27 MB | 2.01 MB | 2.04 MB | 1.94 MB | 224 kB  | 1.27 MB | 19.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.17 ms | 0.85 ms | 28 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2949   | 2949   | 4435   | 4599   | 4244.61 | 460.38  | 2949   | 42433   |
| **Bytes/Sec** | 454 kB | 454 kB | 683 kB | 709 kB | 653 kB  | 70.8 kB | 454 kB | 6.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 13 ms | 8.93 ms | 2.84 ms | 151 ms |


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
| **Req/Sec**   | 6071   | 6071   | 9823   | 10287  | 9438.6 | 1186.63 | 6068   | 94380   |
| **Bytes/Sec** | 473 kB | 473 kB | 766 kB | 802 kB | 736 kB | 92.6 kB | 473 kB | 7.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.62 ms | 1.84 ms | 36 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2321   | 2321   | 3359   | 3619   | 3215.2 | 377     | 2320   | 32146  |
| **Bytes/Sec** | 267 kB | 267 kB | 386 kB | 416 kB | 370 kB | 43.3 kB | 267 kB | 3.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 11.95 ms | 17.99 ms | 113 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4279   | 4279   | 6279   | 6715   | 6124.8 | 671.08  | 4278   | 61250   |
| **Bytes/Sec** | 569 kB | 569 kB | 835 kB | 893 kB | 815 kB | 89.2 kB | 569 kB | 8.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 11 ms | 6.07 ms | 1.99 ms | 72 ms |


---

<p align="center">Generated 2021-05-05T00:43:44.693Z</p>
