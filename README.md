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
| node | 41986.4 | 419901 |
| fastify | 38502.55 | 423533 |
| alosaur | 24671.28 | 271364 |
| deno | 23825.6 | 238254 |
| deno_canary | 22270 | 222703 |
| oak | 20446.19 | 224888 |
| http | 14846.4 | 148458 |
| express | 13011.82 | 143121 |
| little_std | 11511.8 | 115114 |
| abc | 11349.4 | 113483 |
| aqua | 10901.4 | 109010 |
| little_native | 10628.6 | 106285 |
| drash | 10213.4 | 102119 |
| dinatra | 9318 | 102486 |
| reno | 9026.6 | 90249 |
| mandarinets | 8080.4 | 80805 |
| opine | 4832.7 | 48316 |
| servest | 3879.28 | 42667 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8147   | 8147   | 11703   | 11871  | 11349.4 | 1076.69 | 8146   | 113483  |
| **Bytes/Sec** | 758 kB | 758 kB | 1.09 MB | 1.1 MB | 1.06 MB | 100 kB  | 758 kB | 10.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.21 ms | 1.14 ms | 65 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18799   | 18799   | 24687  | 29055   | 24671.28 | 2556.18 | 18784   | 271364  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.2 MB | 2.59 MB | 2.2 MB   | 228 kB  | 1.67 MB | 24.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.89 ms | 38 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6195   | 6195   | 11143   | 12007  | 10901.4 | 1616.84 | 6193   | 109010 |
| **Bytes/Sec** | 570 kB | 570 kB | 1.03 MB | 1.1 MB | 1 MB    | 149 kB  | 570 kB | 10 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.33 ms | 1.54 ms | 70 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 16511   | 16511   | 24207   | 25967   | 23825.6 | 2581   | 16511   | 238254  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.15 MB | 2.31 MB | 2.12 MB | 229 kB | 1.47 MB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.34 ms | 1 ms  | 26 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 15783  | 15783  | 23791   | 24607   | 22270   | 2689.5 | 15777  | 222703  |
| **Bytes/Sec** | 1.4 MB | 1.4 MB | 2.12 MB | 2.19 MB | 1.98 MB | 239 kB | 1.4 MB | 19.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.35 ms | 0.92 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ----- | ------ | ------- |
| **Req/Sec**   | 6795   | 6795   | 9591   | 9703   | 9318   | 806.7 | 6793   | 102486  |
| **Bytes/Sec** | 353 kB | 353 kB | 499 kB | 505 kB | 485 kB | 42 kB | 353 kB | 5.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.55 ms | 1.51 ms | 28 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7051   | 7051   | 10511  | 10935  | 10213.4 | 1098.51 | 7050   | 102119  |
| **Bytes/Sec** | 607 kB | 607 kB | 904 kB | 940 kB | 878 kB  | 94.4 kB | 606 kB | 8.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.8 ms | 111 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 5075   | 5075   | 13879 | 14391   | 13011.82 | 2587.3 | 5073   | 143121  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 3 MB  | 3.11 MB | 2.81 MB  | 559 kB | 1.1 MB | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.44 ms | 1.63 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22735  | 22735  | 40383   | 40671   | 38502.55 | 5048.22 | 22731  | 423533  |
| **Bytes/Sec** | 3.5 MB | 3.5 MB | 6.22 MB | 6.26 MB | 5.93 MB  | 777 kB  | 3.5 MB | 65.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.32 ms | 0.78 ms | 21 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10511  | 10511  | 15423  | 15503  | 14846.4 | 1467.36 | 10509  | 148458  |
| **Bytes/Sec** | 547 kB | 547 kB | 802 kB | 806 kB | 772 kB  | 76.3 kB | 546 kB | 7.72 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.11 ms | 63 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7139   | 7139   | 10903   | 11359   | 10628.6 | 1178.29 | 7139   | 106285  |
| **Bytes/Sec** | 921 kB | 921 kB | 1.41 MB | 1.47 MB | 1.37 MB | 152 kB  | 921 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.25 ms | 1.14 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 7995    | 7995    | 11895   | 12039   | 11511.8 | 1177.5 | 7995    | 115114  |
| **Bytes/Sec** | 1.03 MB | 1.03 MB | 1.53 MB | 1.55 MB | 1.48 MB | 152 kB | 1.03 MB | 14.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.17 ms | 0.95 ms | 21 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4955   | 4955   | 8311   | 8751   | 8080.4 | 1084.57 | 4955   | 80805   |
| **Bytes/Sec** | 461 kB | 461 kB | 773 kB | 814 kB | 752 kB | 101 kB  | 461 kB | 7.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.42 ms | 1.72 ms | 101 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev  | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------ | ------- | ------ |
| **Req/Sec**   | 26415   | 26415   | 43743  | 44831   | 41986.4 | 5318.9 | 26405   | 419901 |
| **Bytes/Sec** | 2.96 MB | 2.96 MB | 4.9 MB | 5.02 MB | 4.7 MB  | 596 kB | 2.96 MB | 47 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.42 ms | 0.76 ms | 21 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 14223   | 14223   | 21119   | 21487   | 20446.19 | 1981.55 | 14221   | 224888  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 2.75 MB | 2.79 MB | 2.66 MB  | 258 kB  | 1.85 MB | 29.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.86 ms | 36 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3037   | 3037   | 4855   | 5423   | 4832.7 | 677.31 | 3037   | 48316   |
| **Bytes/Sec** | 468 kB | 468 kB | 748 kB | 835 kB | 744 kB | 104 kB | 468 kB | 7.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 7.9 ms | 2.33 ms | 70 ms |


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
| **Req/Sec**   | 6399   | 6399   | 9391   | 9455   | 9026.6 | 888.38  | 6397   | 90249   |
| **Bytes/Sec** | 499 kB | 499 kB | 732 kB | 737 kB | 704 kB | 69.2 kB | 499 kB | 7.04 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 3.95 ms | 1.87 ms | 86 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2467   | 2467   | 3449   | 5427   | 3879.28 | 1178.97 | 2467   | 42667   |
| **Bytes/Sec** | 284 kB | 284 kB | 397 kB | 624 kB | 446 kB  | 136 kB  | 284 kB | 4.91 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------ | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.8 ms | 16.78 ms | 70 ms |


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

<p align="center">Generated 2021-08-17T00:46:18.388Z</p>
