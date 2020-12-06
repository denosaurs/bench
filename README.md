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
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)
  - [aqua](#aqua)

## Overview

| **Framework** | abc | alosaur | deno | dinatra | drash | express | fastify | node | oak | pogo | servest | mandarinets | aqua |
| --- | --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| **Average** | 6748.1 | 20913.2 | 27411.2 | 15538.55 | 18094.8 | 13911.46 | 35686.55 | 35287.2 | 15434.4 | 7288.4 | 2685.7 | 4500 | 19371.28 |
| **Total** | 67479 | 209128 | 274103 | 170915 | 180960 | 153016 | 392566 | 352892 | 154350 | 72881 | 26849 | 44988 | 213082 |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3931   | 3931   | 6979   | 7303   | 6748.1 | 964.92  | 3930   | 67479   |
| **Bytes/Sec** | 366 kB | 366 kB | 649 kB | 679 kB | 628 kB | 89.8 kB | 365 kB | 6.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.44 ms | 3.47 ms | 196 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13895   | 13895   | 21807 | 22223   | 20913.2 | 2402.33 | 13894   | 209128  |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 2 MB  | 2.04 MB | 1.92 MB | 221 kB  | 1.28 MB | 19.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.14 ms | 74 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 20319   | 20319   | 28079   | 28879   | 27411.2 | 2398.47 | 20316   | 274103 |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.43 MB | 1.47 MB | 1.4 MB  | 122 kB  | 1.04 MB | 14 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.11 ms | 0.69 ms | 31 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10039  | 10039  | 15719  | 17247  | 15538.55 | 1879.27 | 10037  | 170915  |
| **Bytes/Sec** | 522 kB | 522 kB | 818 kB | 897 kB | 808 kB   | 97.7 kB | 522 kB | 8.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.15 ms | 1.23 ms | 45 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9071   | 9071   | 19311   | 19791  | 18094.8 | 3066.63 | 9066   | 180960  |
| **Bytes/Sec** | 780 kB | 780 kB | 1.66 MB | 1.7 MB | 1.56 MB | 264 kB  | 780 kB | 15.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.59 ms | 62 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5507    | 5507    | 14839   | 15207   | 13911.46 | 2709.32 | 5506    | 153016  |
| **Bytes/Sec** | 1.19 MB | 1.19 MB | 3.21 MB | 3.28 MB | 3 MB     | 585 kB  | 1.19 MB | 33.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.33 ms | 1.68 ms | 73 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 17039   | 17039   | 37759   | 38431   | 35686.55 | 5952.99 | 17026  | 392566  |
| **Bytes/Sec** | 2.61 MB | 2.61 MB | 5.78 MB | 5.88 MB | 5.46 MB  | 911 kB  | 2.6 MB | 60.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.74 ms | 0.9 ms | 39 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 16959  | 16959  | 37247   | 37695   | 35287.2 | 6115.1 | 16959  | 352892  |
| **Bytes/Sec** | 1.9 MB | 1.9 MB | 4.17 MB | 4.22 MB | 3.95 MB | 685 kB | 1.9 MB | 39.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.52 ms | 1.03 ms | 58 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9991   | 9991   | 15023  | 17919   | 15434.4 | 2227.79 | 9989   | 154350  |
| **Bytes/Sec** | 929 kB | 929 kB | 1.4 MB | 1.67 MB | 1.44 MB | 207 kB  | 929 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.25 ms | 1.77 ms | 100 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4339   | 4339   | 7627   | 7851   | 7288.4 | 1008.7  | 4338   | 72881   |
| **Bytes/Sec** | 399 kB | 399 kB | 702 kB | 722 kB | 671 kB | 92.8 kB | 399 kB | 6.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.75 ms | 2.34 ms | 65 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1746   | 1746   | 2787   | 2871   | 2685.7 | 317.06  | 1746   | 26849   |
| **Bytes/Sec** | 201 kB | 201 kB | 321 kB | 330 kB | 309 kB | 36.4 kB | 201 kB | 3.09 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.4 ms | 18.78 ms | 129 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2093   | 2093   | 4879    | 5091    | 4500    | 856.42 | 2092   | 44988   |
| **Bytes/Sec** | 594 kB | 594 kB | 1.39 MB | 1.45 MB | 1.28 MB | 243 kB | 594 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 7 ms  | 17 ms | 8.37 ms | 4.33 ms | 107 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14095  | 14095  | 19823   | 21903   | 19371.28 | 2000.33 | 14095  | 213082  |
| **Bytes/Sec** | 733 kB | 733 kB | 1.03 MB | 1.14 MB | 1.01 MB  | 104 kB  | 733 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.46 ms | 1.26 ms | 51 ms |


---

<p align="center">Generated 2020-12-06T00:23:30.358Z</p>