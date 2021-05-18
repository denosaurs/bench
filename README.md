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
| deno_canary | 39410.4 | 394044 |
| fastify | 38807.2 | 388031 |
| deno | 38460.37 | 423094 |
| http | 22336 | 223371 |
| node | 21385.2 | 213842 |
| alosaur | 18777.2 | 187769 |
| oak | 16963.6 | 169649 |
| aqua | 15552.8 | 155513 |
| drash | 10460.6 | 104597 |
| abc | 9883 | 98833 |
| express | 9813.4 | 98136 |
| reno | 9584.6 | 95846 |
| mandarinets | 9196.6 | 91952 |
| little_native | 7576.8 | 75769 |
| dinatra | 7550.8 | 75504 |
| tinyhttp | 6507.2 | 65058 |
| servest | 5301.1 | 53011 |
| opine | 4650.5 | 46498 |
| little_std | 3715 | 40861 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6243   | 6243   | 10231  | 10655  | 9883   | 1230.58 | 6243   | 98833   |
| **Bytes/Sec** | 581 kB | 581 kB | 952 kB | 991 kB | 919 kB | 115 kB  | 581 kB | 9.19 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.47 ms | 1.48 ms | 34 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 14135  | 14135  | 19119   | 20159   | 18777.2 | 1649.45 | 14133  | 187769  |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.76 MB | 1.85 MB | 1.73 MB | 152 kB  | 1.3 MB | 17.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 1.63 ms | 0.9 ms | 24 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11359   | 11359   | 15919   | 16527   | 15552.8 | 1428.89 | 11359   | 155513  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.47 MB | 1.52 MB | 1.43 MB | 131 kB  | 1.05 MB | 14.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.75 ms | 37 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27615   | 27615   | 39519   | 40159   | 38460.37 | 3456.23 | 27613   | 423094  |
| **Bytes/Sec** | 2.46 MB | 2.46 MB | 3.52 MB | 3.57 MB | 3.42 MB  | 308 kB  | 2.46 MB | 37.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.37 ms | 0.64 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 29199  | 29199  | 40831   | 41151   | 39410.4 | 3516.49 | 29196  | 394044  |
| **Bytes/Sec** | 2.6 MB | 2.6 MB | 3.63 MB | 3.66 MB | 3.51 MB | 313 kB  | 2.6 MB | 35.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.39 ms | 0.64 ms | 18 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5615   | 5615   | 7739   | 7979   | 7550.8 | 667.68  | 5613   | 75504   |
| **Bytes/Sec** | 292 kB | 292 kB | 402 kB | 415 kB | 393 kB | 34.7 kB | 292 kB | 3.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.72 ms | 1.52 ms | 36 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 6947   | 6947   | 10807  | 11431  | 10460.6 | 1216.63 | 6945   | 104597 |
| **Bytes/Sec** | 598 kB | 598 kB | 929 kB | 983 kB | 900 kB  | 105 kB  | 597 kB | 9 MB   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.37 ms | 1.4 ms | 75 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4499   | 4499   | 10319   | 11087  | 9813.4  | 1819.79 | 4498   | 98136   |
| **Bytes/Sec** | 972 kB | 972 kB | 2.23 MB | 2.4 MB | 2.12 MB | 393 kB  | 972 kB | 21.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.58 ms | 1.74 ms | 32 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 24319   | 24319   | 40511   | 41439   | 38807.2 | 4911.76 | 24313   | 388031  |
| **Bytes/Sec** | 3.75 MB | 3.75 MB | 6.23 MB | 6.38 MB | 5.98 MB | 756 kB  | 3.74 MB | 59.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.43 ms | 0.79 ms | 30 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 16543  | 16543  | 22927   | 23439   | 22336   | 1942.28 | 16543  | 223371  |
| **Bytes/Sec** | 861 kB | 861 kB | 1.19 MB | 1.22 MB | 1.16 MB | 101 kB  | 860 kB | 11.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.16 ms | 0.74 ms | 38 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4771   | 4771   | 7835    | 8071    | 7576.8 | 940.25 | 4770   | 75769   |
| **Bytes/Sec** | 615 kB | 615 kB | 1.01 MB | 1.04 MB | 977 kB | 121 kB | 615 kB | 9.77 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.69 ms | 1.75 ms | 33 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2143   | 2143   | 3941   | 4047   | 3715   | 536.24  | 2143   | 40861   |
| **Bytes/Sec** | 197 kB | 197 kB | 363 kB | 372 kB | 342 kB | 49.3 kB | 197 kB | 3.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 10.26 ms | 2.72 ms | 53 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 5483   | 5483   | 9615   | 9711   | 9196.6 | 1242.7 | 5480   | 91952   |
| **Bytes/Sec** | 510 kB | 510 kB | 894 kB | 903 kB | 855 kB | 116 kB | 510 kB | 8.55 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 4.09 ms | 1.3 ms | 72 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%  | Avg     | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------ | ------ | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 11127   | 11127   | 22319  | 23247  | 21385.2 | 3457.14 | 11127   | 213842 |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 2.5 MB | 2.6 MB | 2.4 MB  | 387 kB  | 1.25 MB | 24 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.14 ms | 35 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11887   | 11887   | 17599   | 17903   | 16963.6 | 1723.37 | 11881   | 169649  |
| **Bytes/Sec** | 1.55 MB | 1.55 MB | 2.29 MB | 2.33 MB | 2.21 MB | 224 kB  | 1.54 MB | 22.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.75 ms | 35 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3119   | 3119   | 4791   | 4967   | 4650.5 | 524.07  | 3118   | 46498   |
| **Bytes/Sec** | 480 kB | 480 kB | 738 kB | 765 kB | 716 kB | 80.7 kB | 480 kB | 7.16 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 7 ms  | 8 ms  | 13 ms | 8.11 ms | 3.27 ms | 157 ms |


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
| **Req/Sec**   | 6379   | 6379   | 9935   | 10375  | 9584.6 | 1092.25 | 6377   | 95846   |
| **Bytes/Sec** | 497 kB | 497 kB | 775 kB | 809 kB | 748 kB | 85.2 kB | 497 kB | 7.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.53 ms | 1.73 ms | 46 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 3585   | 3585   | 5255   | 6135   | 5301.1 | 723.89  | 3585   | 53011  |
| **Bytes/Sec** | 412 kB | 412 kB | 605 kB | 706 kB | 610 kB | 83.2 kB | 412 kB | 6.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 45 ms | 7.07 ms | 14.89 ms | 62 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4479   | 4479   | 6823   | 6995   | 6507.2 | 724.02  | 4476   | 65058   |
| **Bytes/Sec** | 595 kB | 595 kB | 908 kB | 930 kB | 865 kB | 96.4 kB | 595 kB | 8.65 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.65 ms | 2 ms  | 65 ms |


---

<p align="center">Generated 2021-05-18T00:58:05.288Z</p>
