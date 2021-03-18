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
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [node](#node)
  - [oak](#oak)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)
  - [reno](#reno)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | servest | mandarinets | aqua | reno |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 8396.21 | 27557.1 | 23939.2 | 15474.4 | 19026.55 | 14177.8 | 31942.91 | 34008.81 | 14534.4 | 2869.4 | 5019.5 | 10578.6 | 7254.37 |
| **Total** | 83937 | 303104 | 239403 | 154733 | 209287 | 141773 | 351392 | 340122 | 145332 | 28690 | 50184 | 105777 | 79789 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6127   | 6127   | 8583   | 8887   | 8396.21 | 763.52  | 6124   | 83937   |
| **Bytes/Sec** | 570 kB | 570 kB | 798 kB | 826 kB | 781 kB  | 70.9 kB | 570 kB | 7.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.33 ms | 1.59 ms | 107 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 20223   | 20223   | 28047   | 29711   | 27557.1 | 2443.1 | 20208   | 303104  |
| **Bytes/Sec** | 1.86 MB | 1.86 MB | 2.58 MB | 2.73 MB | 2.54 MB | 225 kB | 1.86 MB | 27.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.1 ms | 0.68 ms | 32 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16543  | 16543  | 24831   | 25167   | 23939.2 | 2494.43 | 16543  | 239403  |
| **Bytes/Sec** | 844 kB | 844 kB | 1.27 MB | 1.28 MB | 1.22 MB | 127 kB  | 844 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.17 ms | 0.83 ms | 26 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11943  | 11943  | 15807  | 16167  | 15474.4 | 1198.54 | 11943  | 154733  |
| **Bytes/Sec** | 621 kB | 621 kB | 822 kB | 841 kB | 805 kB  | 62.3 kB | 621 kB | 8.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.14 ms | 0.96 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 12751  | 12751  | 19551   | 21695   | 19026.55 | 2484.63 | 12750  | 209287 |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.68 MB | 1.87 MB | 1.64 MB  | 214 kB  | 1.1 MB | 18 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.53 ms | 1.1 ms | 57 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5999   | 5999   | 15247   | 15599   | 14177.8 | 2781.71 | 5998   | 141773  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 3.29 MB | 3.37 MB | 3.06 MB | 601 kB  | 1.3 MB | 30.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.37 ms | 42 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 16151   | 16151   | 33695   | 34527   | 31942.91 | 5072.89 | 16147   | 351392  |
| **Bytes/Sec** | 2.47 MB | 2.47 MB | 5.16 MB | 5.28 MB | 4.89 MB  | 776 kB  | 2.47 MB | 53.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.95 ms | 0.85 ms | 24 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 18959   | 18959   | 35295   | 36895   | 34008.81 | 5085.36 | 18950   | 340122  |
| **Bytes/Sec** | 2.12 MB | 2.12 MB | 3.95 MB | 4.13 MB | 3.81 MB  | 570 kB  | 2.12 MB | 38.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.55 ms | 0.85 ms | 24 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8567   | 8567   | 15095  | 15911   | 14534.4 | 2024.3 | 8563   | 145332  |
| **Bytes/Sec** | 797 kB | 797 kB | 1.4 MB | 1.48 MB | 1.35 MB | 188 kB | 796 kB | 13.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.33 ms | 1.41 ms | 63 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2511   | 2511   | 2773   | 3213   | 2869.4 | 205     | 2511   | 28690  |
| **Bytes/Sec** | 289 kB | 289 kB | 319 kB | 369 kB | 330 kB | 23.6 kB | 289 kB | 3.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.42 ms | 18.4 ms | 85 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2741   | 2741   | 5367    | 5463    | 5019.5  | 808.57 | 2740   | 50184   |
| **Bytes/Sec** | 778 kB | 778 kB | 1.52 MB | 1.55 MB | 1.43 MB | 230 kB | 778 kB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.41 ms | 3.38 ms | 186 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7247   | 7247   | 10823  | 11375   | 10578.6 | 1155.15 | 7246   | 105777  |
| **Bytes/Sec** | 667 kB | 667 kB | 995 kB | 1.05 MB | 973 kB  | 106 kB  | 667 kB | 9.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.2 ms | 60 ms |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5183   | 5183   | 7587   | 8019   | 7254.37 | 864.81  | 5181   | 79789   |
| **Bytes/Sec** | 404 kB | 404 kB | 592 kB | 626 kB | 566 kB  | 67.5 kB | 404 kB | 6.22 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 12 ms | 5.04 ms | 2.48 ms | 109 ms |


---

<p align="center">Generated 2021-03-18T00:17:52.123Z</p>