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
| fastify | 36224 | 362227 |
| node | 24879.6 | 248795 |
| oak | 18194.55 | 200123 |
| deno_canary | 15256 | 152552 |
| deno | 14923.6 | 149217 |
| aqua | 13996.8 | 139959 |
| http | 13355.4 | 133539 |
| alosaur | 12635.28 | 138978 |
| drash | 12417.82 | 136592 |
| dinatra | 10248.91 | 112741 |
| abc | 9751.4 | 97510 |
| reno | 6966.3 | 69650 |
| express | 6545.2 | 65446 |
| opine | 6134.1 | 61334 |
| little_native | 5878.55 | 64659 |
| little_std | 4818.46 | 52993 |
| servest | 3900.4 | 38997 |
| mandarinets | 3521.3 | 35208 |
| tinyhttp | 3024.4 | 30234 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4807   | 4807   | 10359  | 10431  | 9751.4 | 1656.45 | 4805   | 97510   |
| **Bytes/Sec** | 447 kB | 447 kB | 964 kB | 970 kB | 907 kB | 154 kB  | 447 kB | 9.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.44 ms | 1.94 ms | 46 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10191  | 10191  | 11567   | 15303   | 12635.28 | 2321.83 | 10191  | 138978  |
| **Bytes/Sec** | 938 kB | 938 kB | 1.06 MB | 1.41 MB | 1.16 MB  | 214 kB  | 938 kB | 12.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.55 ms | 1.15 ms | 75 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10207  | 10207  | 14447   | 14551   | 13996.8 | 1268.19 | 10204  | 139959  |
| **Bytes/Sec** | 939 kB | 939 kB | 1.33 MB | 1.34 MB | 1.29 MB | 117 kB  | 939 kB | 12.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.23 ms | 1 ms  | 69 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 10735  | 10735  | 11143  | 25119   | 14923.6 | 5447.8 | 10730  | 149217  |
| **Bytes/Sec** | 955 kB | 955 kB | 991 kB | 2.24 MB | 1.33 MB | 485 kB | 955 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.25 ms | 1.59 ms | 24 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10575  | 10575  | 11071  | 26431   | 15256   | 6078.03 | 10575  | 152552  |
| **Bytes/Sec** | 942 kB | 942 kB | 985 kB | 2.35 MB | 1.36 MB | 541 kB  | 941 kB | 13.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.22 ms | 1.59 ms | 22 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7787   | 7787   | 10527  | 10655  | 10248.91 | 790.25  | 7786   | 112741  |
| **Bytes/Sec** | 405 kB | 405 kB | 547 kB | 554 kB | 533 kB   | 41.1 kB | 405 kB | 5.86 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.31 ms | 1.29 ms | 30 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------ | ------ | ------- |
| **Req/Sec**   | 8735   | 8735   | 12823  | 12959   | 12417.82 | 1174.3 | 8728   | 136592  |
| **Bytes/Sec** | 751 kB | 751 kB | 1.1 MB | 1.12 MB | 1.07 MB  | 101 kB | 751 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.81 ms | 1.29 ms | 94 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 4331   | 4331   | 5451    | 10103   | 6545.2  | 1922.3 | 4330   | 65446   |
| **Bytes/Sec** | 935 kB | 935 kB | 1.18 MB | 2.18 MB | 1.41 MB | 415 kB | 935 kB | 14.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 5.62 ms | 2.59 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18111   | 18111   | 39647   | 40191   | 36224   | 7096.43 | 18097   | 362227  |
| **Bytes/Sec** | 2.79 MB | 2.79 MB | 6.11 MB | 6.19 MB | 5.58 MB | 1.09 MB | 2.79 MB | 55.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.97 ms | 24 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8143   | 8143   | 14079  | 14175  | 13355.4 | 1764.12 | 8140   | 133539  |
| **Bytes/Sec** | 423 kB | 423 kB | 732 kB | 737 kB | 694 kB  | 91.8 kB | 423 kB | 6.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.36 ms | 1.39 ms | 37 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4475   | 4475   | 5247   | 8327    | 5878.55 | 1327.46 | 4473   | 64659   |
| **Bytes/Sec** | 577 kB | 577 kB | 677 kB | 1.07 MB | 758 kB  | 171 kB  | 577 kB | 8.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 7 ms  | 11 ms | 6.3 ms | 2.15 ms | 29 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2863   | 2863   | 5059   | 5243   | 4818.46 | 642.88  | 2863   | 52993   |
| **Bytes/Sec** | 263 kB | 263 kB | 465 kB | 482 kB | 443 kB  | 59.2 kB | 263 kB | 4.88 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.77 ms | 2.44 ms | 46 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1841   | 1841   | 3645   | 4247   | 3521.3 | 717.3   | 1841   | 35208   |
| **Bytes/Sec** | 171 kB | 171 kB | 339 kB | 395 kB | 327 kB | 66.7 kB | 171 kB | 3.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 10 ms | 23 ms | 10.82 ms | 4.16 ms | 63 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13031   | 13031   | 26159   | 27055   | 24879.6 | 4039.82 | 13030   | 248795  |
| **Bytes/Sec** | 1.46 MB | 1.46 MB | 2.93 MB | 3.03 MB | 2.79 MB | 452 kB  | 1.46 MB | 27.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.21 ms | 0.98 ms | 32 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 12095   | 12095   | 18943   | 19103   | 18194.55 | 1946.79 | 12090   | 200123 |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 2.46 MB | 2.48 MB | 2.36 MB  | 253 kB  | 1.57 MB | 26 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.07 ms | 0.84 ms | 30 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 3279   | 3279   | 6463   | 6551    | 6134.1 | 956.98 | 3279   | 61334   |
| **Bytes/Sec** | 505 kB | 505 kB | 995 kB | 1.01 MB | 945 kB | 147 kB | 505 kB | 9.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 5 ms  | 12 ms | 5.82 ms | 2.51 ms | 128 ms |


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
| **Req/Sec**   | 2969   | 2969   | 7007   | 9367   | 6966.3 | 1712.03 | 2969   | 69650   |
| **Bytes/Sec** | 232 kB | 232 kB | 547 kB | 730 kB | 543 kB | 133 kB  | 232 kB | 5.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 5 ms  | 13 ms | 5.38 ms | 3.75 ms | 222 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 2373   | 2373   | 3433   | 5111   | 3900.4 | 964.16 | 2372   | 38997   |
| **Bytes/Sec** | 273 kB | 273 kB | 395 kB | 588 kB | 448 kB | 111 kB | 273 kB | 4.48 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.77 ms | 16.74 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2115   | 2115   | 2881   | 4081   | 3024.4 | 579.85  | 2114   | 30234   |
| **Bytes/Sec** | 332 kB | 332 kB | 452 kB | 641 kB | 475 kB | 91.1 kB | 332 kB | 4.75 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 12 ms | 27 ms | 12.78 ms | 4.88 ms | 60 ms |


---

<p align="center">Generated 2021-07-27T00:49:57.738Z</p>
