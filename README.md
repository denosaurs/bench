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
| node | 43581.82 | 479421 |
| deno_canary | 43073.46 | 473805 |
| fastify | 32989.1 | 362884 |
| deno | 26590.4 | 265924 |
| http | 20024.37 | 220261 |
| alosaur | 16948.41 | 169434 |
| express | 15233 | 152349 |
| abc | 14576.8 | 145773 |
| drash | 12720.8 | 127193 |
| oak | 12590.2 | 125893 |
| aqua | 12387.4 | 123860 |
| dinatra | 11716.2 | 117162 |
| reno | 11337.6 | 113368 |
| mandarinets | 9005.4 | 90059 |
| little_native | 8005.2 | 80044 |
| tinyhttp | 6626 | 66255 |
| opine | 6460.8 | 64595 |
| little_std | 5542.7 | 55421 |
| servest | 4712.46 | 51832 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10295  | 10295  | 15071  | 15175   | 14576.8 | 1433.49 | 10292  | 145773  |
| **Bytes/Sec** | 957 kB | 957 kB | 1.4 MB | 1.41 MB | 1.36 MB | 133 kB  | 957 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 0.83 ms | 22 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12167   | 12167   | 17535   | 17807   | 16948.41 | 1631.83 | 12163   | 169434  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 1.61 MB | 1.64 MB | 1.56 MB  | 150 kB  | 1.12 MB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.88 ms | 51 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8047   | 8047   | 12639   | 13383   | 12387.4 | 1496.92 | 8046   | 123860  |
| **Bytes/Sec** | 740 kB | 740 kB | 1.16 MB | 1.23 MB | 1.14 MB | 138 kB  | 740 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.64 ms | 1.31 ms | 78 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 19455   | 19455   | 27455   | 27887   | 26590.4 | 2407.61 | 19450   | 265924  |
| **Bytes/Sec** | 1.73 MB | 1.73 MB | 2.44 MB | 2.48 MB | 2.37 MB | 214 kB  | 1.73 MB | 23.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.2 ms | 0.63 ms | 19 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 33887   | 33887   | 43839  | 44671   | 43073.46 | 2940.69 | 33879   | 473805  |
| **Bytes/Sec** | 3.02 MB | 3.02 MB | 3.9 MB | 3.98 MB | 3.83 MB  | 261 kB  | 3.02 MB | 42.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.36 ms | 0.58 ms | 16 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7391   | 7391   | 12383  | 12631  | 11716.2 | 1542.48 | 7389   | 117162  |
| **Bytes/Sec** | 384 kB | 384 kB | 644 kB | 657 kB | 609 kB  | 80.2 kB | 384 kB | 6.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.14 ms | 1.23 ms | 29 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8287   | 8287   | 13303   | 13743   | 12720.8 | 1528.6 | 8282   | 127193  |
| **Bytes/Sec** | 713 kB | 713 kB | 1.14 MB | 1.18 MB | 1.09 MB | 131 kB | 712 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.57 ms | 1.18 ms | 28 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6411    | 6411    | 16151   | 17055   | 15233   | 3051.6 | 6410    | 152349  |
| **Bytes/Sec** | 1.39 MB | 1.39 MB | 3.49 MB | 3.68 MB | 3.29 MB | 659 kB | 1.38 MB | 32.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.2 ms | 1.24 ms | 28 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16479   | 16479   | 36319   | 37055   | 32989.1 | 5881.62 | 16479   | 362884  |
| **Bytes/Sec** | 2.54 MB | 2.54 MB | 5.59 MB | 5.71 MB | 5.08 MB | 905 kB  | 2.54 MB | 55.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.63 ms | 0.88 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14495  | 14495  | 20863   | 20975   | 20024.37 | 1856.21 | 14493  | 220261  |
| **Bytes/Sec** | 754 kB | 754 kB | 1.09 MB | 1.09 MB | 1.04 MB  | 96.6 kB | 754 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.9 ms | 44 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5139   | 5139   | 8327    | 8543   | 8005.2  | 966.6  | 5139   | 80044   |
| **Bytes/Sec** | 663 kB | 663 kB | 1.07 MB | 1.1 MB | 1.03 MB | 125 kB | 663 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.48 ms | 1.84 ms | 61 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 3181   | 3181   | 5831   | 5995   | 5542.7 | 815.03 | 3180   | 55421  |
| **Bytes/Sec** | 293 kB | 293 kB | 537 kB | 551 kB | 510 kB | 75 kB  | 293 kB | 5.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.7 ms | 2.04 ms | 47 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5147   | 5147   | 9479   | 9919   | 9005.4 | 1325.3 | 5144   | 90059   |
| **Bytes/Sec** | 478 kB | 478 kB | 882 kB | 923 kB | 838 kB | 123 kB | 478 kB | 8.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.07 ms | 1.51 ms | 81 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27887   | 27887   | 45183   | 45503  | 43581.82 | 4974.82 | 27874   | 479421  |
| **Bytes/Sec** | 3.12 MB | 3.12 MB | 5.06 MB | 5.1 MB | 4.88 MB  | 557 kB  | 3.12 MB | 53.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.29 ms | 0.62 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8027    | 8027    | 13263   | 13607   | 12590.2 | 1591.01 | 8026    | 125893  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.72 MB | 1.77 MB | 1.64 MB | 207 kB  | 1.04 MB | 16.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.63 ms | 1.22 ms | 26 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4587   | 4587   | 6699    | 6763    | 6460.8 | 630.83  | 4585   | 64595   |
| **Bytes/Sec** | 707 kB | 707 kB | 1.03 MB | 1.04 MB | 995 kB | 97.1 kB | 706 kB | 9.95 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.49 ms | 1.66 ms | 96 ms |


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
| **Req/Sec**   | 8223   | 8223   | 11719  | 11879  | 11337.6 | 1049.9  | 8222   | 113368  |
| **Bytes/Sec** | 642 kB | 642 kB | 914 kB | 927 kB | 884 kB  | 81.8 kB | 641 kB | 8.84 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.29 ms | 1.26 ms | 58 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2625   | 2625   | 4815   | 5595   | 4712.46 | 739.01  | 2624   | 51832   |
| **Bytes/Sec** | 302 kB | 302 kB | 554 kB | 644 kB | 542 kB  | 85.1 kB | 302 kB | 5.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.99 ms | 15.53 ms | 74 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4559   | 4559   | 6827   | 7079   | 6626   | 700.63  | 4557   | 66255   |
| **Bytes/Sec** | 606 kB | 606 kB | 908 kB | 942 kB | 881 kB | 93.3 kB | 606 kB | 8.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.53 ms | 1.97 ms | 35 ms |


---

<p align="center">Generated 2021-06-05T01:18:30.907Z</p>
