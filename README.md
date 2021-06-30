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
| deno_canary | 43815.28 | 481979 |
| deno | 37111.2 | 371120 |
| fastify | 31604 | 347641 |
| node | 24649.82 | 271133 |
| oak | 16644 | 166435 |
| http | 15391.64 | 169307 |
| alosaur | 14509.6 | 145091 |
| express | 13807.46 | 151872 |
| aqua | 11681.4 | 116815 |
| little_native | 10912.91 | 120029 |
| abc | 10462.37 | 115079 |
| dinatra | 10383.1 | 114204 |
| reno | 9169.8 | 91703 |
| drash | 8625 | 86249 |
| mandarinets | 8081.2 | 80795 |
| opine | 6124 | 61237 |
| little_std | 4974.82 | 54716 |
| servest | 4724.73 | 51963 |
| pogo | 0 | 0 |
| tinyhttp | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%   | 95.5%   | Avg      | Stdev | Min    | Total   |
| ------------- | ------ | ------ | ----- | ------- | -------- | ----- | ------ | ------- |
| **Req/Sec**   | 7703   | 7703   | 10791 | 11231   | 10462.37 | 925.5 | 7703   | 115079  |
| **Bytes/Sec** | 717 kB | 717 kB | 1 MB  | 1.04 MB | 973 kB   | 86 kB | 716 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.16 ms | 29 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10511  | 10511  | 14927   | 15135   | 14509.6 | 1344.62 | 10505  | 145091  |
| **Bytes/Sec** | 967 kB | 967 kB | 1.37 MB | 1.39 MB | 1.33 MB | 124 kB  | 966 kB | 13.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.19 ms | 0.9 ms | 34 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7435   | 7435   | 12047   | 12711   | 11681.4 | 1447.28 | 7433   | 116815  |
| **Bytes/Sec** | 684 kB | 684 kB | 1.11 MB | 1.17 MB | 1.07 MB | 133 kB  | 684 kB | 10.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.05 ms | 1.19 ms | 30 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 25823  | 25823  | 38495   | 40095   | 37111.2 | 3929.9 | 25816  | 371120 |
| **Bytes/Sec** | 2.3 MB | 2.3 MB | 3.43 MB | 3.57 MB | 3.3 MB  | 350 kB | 2.3 MB | 33 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.59 ms | 0.83 ms | 30 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%   | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ----- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 32863   | 32863   | 44895 | 46047  | 43815.28 | 3528.54 | 32855   | 481979  |
| **Bytes/Sec** | 2.92 MB | 2.92 MB | 4 MB  | 4.1 MB | 3.9 MB   | 314 kB  | 2.92 MB | 42.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.18 ms | 0.64 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7439   | 7439   | 10687  | 10839  | 10383.1 | 939.64  | 7438   | 114204  |
| **Bytes/Sec** | 387 kB | 387 kB | 556 kB | 564 kB | 540 kB  | 48.9 kB | 387 kB | 5.94 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.3 ms | 1.14 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5487   | 5487   | 8967   | 9199   | 8625   | 1058.72 | 5486   | 86249   |
| **Bytes/Sec** | 472 kB | 472 kB | 771 kB | 791 kB | 742 kB | 91.1 kB | 472 kB | 7.42 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.32 ms | 1.69 ms | 104 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5755    | 5755    | 14863   | 15007   | 13807.46 | 2602.73 | 5754    | 151872  |
| **Bytes/Sec** | 1.24 MB | 1.24 MB | 3.21 MB | 3.24 MB | 2.98 MB  | 562 kB  | 1.24 MB | 32.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.31 ms | 1.35 ms | 39 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16279   | 16279   | 33599   | 34079   | 31604   | 4956.26 | 16273   | 347641  |
| **Bytes/Sec** | 2.51 MB | 2.51 MB | 5.17 MB | 5.25 MB | 4.87 MB | 764 kB  | 2.51 MB | 53.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.07 ms | 0.85 ms | 29 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 11383  | 11383  | 15855  | 16311  | 15391.64 | 1363.37 | 11383  | 169307 |
| **Bytes/Sec** | 592 kB | 592 kB | 824 kB | 848 kB | 800 kB   | 70.8 kB | 592 kB | 8.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.16 ms | 0.93 ms | 26 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7323   | 7323   | 11383   | 11655  | 10912.91 | 1167.26 | 7322   | 120029  |
| **Bytes/Sec** | 945 kB | 945 kB | 1.47 MB | 1.5 MB | 1.41 MB  | 151 kB  | 945 kB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.24 ms | 1.1 ms | 24 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2943   | 2943   | 5291   | 5307   | 4974.82 | 674.35 | 2942   | 54716   |
| **Bytes/Sec** | 271 kB | 271 kB | 487 kB | 488 kB | 458 kB  | 62 kB  | 271 kB | 5.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 14 ms | 7.65 ms | 1.98 ms | 47 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5019   | 5019   | 8407   | 8607   | 8081.2 | 1032.39 | 5017   | 80795   |
| **Bytes/Sec** | 467 kB | 467 kB | 781 kB | 800 kB | 751 kB | 96 kB   | 467 kB | 7.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.36 ms | 1.33 ms | 32 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13615   | 13615   | 25727   | 26959   | 24649.82 | 3596.43 | 13608   | 271133  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.88 MB | 3.02 MB | 2.76 MB  | 403 kB  | 1.52 MB | 30.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.17 ms | 0.92 ms | 40 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 11575  | 11575  | 17311   | 18047   | 16644   | 1805.5 | 11570  | 166435  |
| **Bytes/Sec** | 1.5 MB | 1.5 MB | 2.25 MB | 2.35 MB | 2.16 MB | 235 kB | 1.5 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.96 ms | 0.94 ms | 22 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4351   | 4351   | 6315   | 6411   | 6124   | 595.92  | 4349   | 61237   |
| **Bytes/Sec** | 670 kB | 670 kB | 973 kB | 987 kB | 943 kB | 91.7 kB | 670 kB | 9.43 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 10 ms | 6.25 ms | 1.88 ms | 121 ms |


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
| **Req/Sec**   | 6455   | 6455   | 9511   | 9623   | 9169.8 | 916.55  | 6455   | 91703   |
| **Bytes/Sec** | 504 kB | 504 kB | 742 kB | 751 kB | 715 kB | 71.5 kB | 503 kB | 7.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.89 ms | 1.36 ms | 36 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 2509   | 2509   | 5039   | 5643   | 4724.73 | 875.05 | 2508   | 51963   |
| **Bytes/Sec** | 289 kB | 289 kB | 580 kB | 649 kB | 543 kB  | 101 kB | 288 kB | 5.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.98 ms | 15.52 ms | 57 ms |


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

<p align="center">Generated 2021-06-30T00:49:54.201Z</p>
