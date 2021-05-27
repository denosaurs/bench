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
| deno | 38676 | 386723 |
| fastify | 34169.46 | 375821 |
| deno_canary | 24470.4 | 244695 |
| node | 23615.6 | 236151 |
| http | 18879.6 | 188774 |
| alosaur | 16632.41 | 166322 |
| abc | 16242.91 | 178644 |
| aqua | 15108.8 | 151076 |
| dinatra | 11467.1 | 126122 |
| little_native | 11232.2 | 112317 |
| oak | 11173 | 111744 |
| drash | 10205.4 | 102053 |
| reno | 9328.21 | 93287 |
| express | 8359.91 | 91957 |
| mandarinets | 6759.7 | 67593 |
| opine | 5922.9 | 59214 |
| tinyhttp | 4946.11 | 49455 |
| servest | 4772.9 | 47724 |
| little_std | 4708.1 | 51783 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12511   | 12511   | 16703   | 16783   | 16242.91 | 1192.92 | 12507   | 178644  |
| **Bytes/Sec** | 1.16 MB | 1.16 MB | 1.55 MB | 1.56 MB | 1.51 MB  | 111 kB  | 1.16 MB | 16.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.64 ms | 21 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11327   | 11327   | 17279   | 17359  | 16632.41 | 1781.32 | 11326   | 166322  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.59 MB | 1.6 MB | 1.53 MB  | 164 kB  | 1.04 MB | 15.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.84 ms | 52 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11095   | 11095   | 15527   | 15919   | 15108.8 | 1358.7 | 11093   | 151076  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.43 MB | 1.46 MB | 1.39 MB | 125 kB | 1.02 MB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.13 ms | 0.85 ms | 56 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27487   | 27487   | 39711   | 40639   | 38676   | 3756.73 | 27485   | 386723  |
| **Bytes/Sec** | 2.45 MB | 2.45 MB | 3.53 MB | 3.62 MB | 3.44 MB | 334 kB  | 2.45 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.4 ms | 0.68 ms | 20 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16671   | 16671   | 25375   | 26511   | 24470.4 | 2668.48 | 16665   | 244695  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.26 MB | 2.36 MB | 2.18 MB | 238 kB  | 1.48 MB | 21.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.85 ms | 28 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8083   | 8083   | 11879  | 12231  | 11467.1 | 1126.23 | 8083   | 126122  |
| **Bytes/Sec** | 420 kB | 420 kB | 617 kB | 636 kB | 596 kB  | 58.5 kB | 420 kB | 6.56 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.21 ms | 1.31 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6835   | 6835   | 10543  | 10919  | 10205.4 | 1148.88 | 6835   | 102053  |
| **Bytes/Sec** | 588 kB | 588 kB | 906 kB | 940 kB | 878 kB  | 98.7 kB | 588 kB | 8.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.37 ms | 43 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4017   | 4017   | 8847    | 9447    | 8359.91 | 1455.43 | 4017   | 91957   |
| **Bytes/Sec** | 868 kB | 868 kB | 1.91 MB | 2.04 MB | 1.81 MB | 314 kB  | 868 kB | 19.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 11 ms | 4.32 ms | 2.15 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18175  | 18175  | 35711  | 36287   | 34169.46 | 5068.18 | 18160  | 375821  |
| **Bytes/Sec** | 2.8 MB | 2.8 MB | 5.5 MB | 5.59 MB | 5.26 MB  | 781 kB  | 2.8 MB | 57.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.68 ms | 0.88 ms | 53 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12855  | 12855  | 19455   | 20063   | 18879.6 | 2072.25 | 12848  | 188774  |
| **Bytes/Sec** | 668 kB | 668 kB | 1.01 MB | 1.04 MB | 982 kB  | 108 kB  | 668 kB | 9.82 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 1.07 ms | 65 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7271   | 7271   | 11783   | 12151   | 11232.2 | 1385.42 | 7269   | 112317  |
| **Bytes/Sec** | 938 kB | 938 kB | 1.52 MB | 1.57 MB | 1.45 MB | 179 kB  | 938 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 7 ms  | 3.17 ms | 1.31 ms | 25 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2657   | 2657   | 4955   | 5187   | 4708.1 | 692.61  | 2657   | 51783   |
| **Bytes/Sec** | 244 kB | 244 kB | 456 kB | 477 kB | 433 kB | 63.7 kB | 244 kB | 4.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 15 ms | 8.01 ms | 2.47 ms | 51 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4095   | 4095   | 7127   | 7255   | 6759.7 | 916.55  | 4094   | 67593   |
| **Bytes/Sec** | 381 kB | 381 kB | 663 kB | 675 kB | 629 kB | 85.3 kB | 381 kB | 6.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.51 ms | 1.83 ms | 98 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13111   | 13111   | 24783   | 26159   | 23615.6 | 3650.41 | 13109   | 236151  |
| **Bytes/Sec** | 1.47 MB | 1.47 MB | 2.78 MB | 2.93 MB | 2.64 MB | 409 kB  | 1.47 MB | 26.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 0.92 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6719   | 6719   | 11695   | 12215   | 11173   | 1526.86 | 6719   | 111744  |
| **Bytes/Sec** | 873 kB | 873 kB | 1.52 MB | 1.59 MB | 1.45 MB | 199 kB  | 873 kB | 14.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.2 ms | 1.42 ms | 50 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4039   | 4039   | 6123   | 6363   | 5922.9 | 638.69  | 4039   | 59214   |
| **Bytes/Sec** | 622 kB | 622 kB | 943 kB | 979 kB | 912 kB | 98.3 kB | 622 kB | 9.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.3 ms | 2.23 ms | 142 ms |


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
| **Req/Sec**   | 6247   | 6247   | 9679   | 10127  | 9328.21 | 1057.04 | 6244   | 93287   |
| **Bytes/Sec** | 487 kB | 487 kB | 755 kB | 790 kB | 728 kB  | 82.5 kB | 487 kB | 7.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 9 ms  | 3.68 ms | 1.86 ms | 75 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2679   | 2679   | 5175   | 5919   | 4772.9 | 1057.49 | 2679   | 47724   |
| **Bytes/Sec** | 308 kB | 308 kB | 595 kB | 681 kB | 549 kB | 122 kB  | 308 kB | 5.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 47 ms | 7.91 ms | 15.5 ms | 68 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3507   | 3507   | 5139   | 5411   | 4946.11 | 523.54  | 3506   | 49455   |
| **Bytes/Sec** | 466 kB | 466 kB | 684 kB | 719 kB | 658 kB  | 69.6 kB | 466 kB | 6.58 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 5 ms  | 7 ms  | 14 ms | 7.6 ms | 2.4 ms | 48 ms |


---

<p align="center">Generated 2021-05-27T01:13:32.230Z</p>
