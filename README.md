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
| node | 43532.37 | 478809 |
| deno | 41314.4 | 413100 |
| deno_canary | 25676.8 | 256764 |
| fastify | 23564.4 | 235624 |
| http | 18351.6 | 183514 |
| oak | 17396.41 | 173952 |
| alosaur | 17221.2 | 172215 |
| dinatra | 13509.6 | 135096 |
| aqua | 13248.8 | 132482 |
| drash | 12653.6 | 126539 |
| little_native | 12041.6 | 120407 |
| abc | 10588.2 | 105869 |
| express | 10254.21 | 102534 |
| mandarinets | 8974.21 | 89729 |
| reno | 8314.73 | 91448 |
| tinyhttp | 6514.4 | 65137 |
| opine | 6387.6 | 63863 |
| little_std | 4958.82 | 54541 |
| servest | 4921.8 | 49216 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7319   | 7319   | 10887   | 11287   | 10588.2 | 1100.58 | 7319   | 105869  |
| **Bytes/Sec** | 681 kB | 681 kB | 1.01 MB | 1.05 MB | 985 kB  | 102 kB  | 681 kB | 9.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.33 ms | 1.16 ms | 50 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11919  | 11919  | 17711   | 18255   | 17221.2 | 1782.72 | 11913  | 172215  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.63 MB | 1.68 MB | 1.58 MB | 164 kB  | 1.1 MB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.06 ms | 0.91 ms | 45 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8623   | 8623   | 13663   | 14167  | 13248.8 | 1559.05 | 8620   | 132482  |
| **Bytes/Sec** | 793 kB | 793 kB | 1.26 MB | 1.3 MB | 1.22 MB | 143 kB  | 793 kB | 12.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.35 ms | 1.17 ms | 35 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 31279   | 31279   | 42527   | 43423   | 41314.4 | 3485.59 | 31265   | 413100  |
| **Bytes/Sec** | 2.78 MB | 2.78 MB | 3.78 MB | 3.86 MB | 3.68 MB | 310 kB  | 2.78 MB | 36.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.36 ms | 0.62 ms | 21 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18799   | 18799   | 26111   | 27503   | 25676.8 | 2440.47 | 18797   | 256764  |
| **Bytes/Sec** | 1.67 MB | 1.67 MB | 2.32 MB | 2.45 MB | 2.29 MB | 217 kB  | 1.67 MB | 22.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.25 ms | 0.82 ms | 29 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9863   | 9863   | 14031  | 14127  | 13509.6 | 1235.01 | 9863   | 135096  |
| **Bytes/Sec** | 513 kB | 513 kB | 730 kB | 735 kB | 702 kB  | 64.2 kB | 513 kB | 7.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.29 ms | 1.06 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8615   | 8615   | 13159   | 13455   | 12653.6 | 1377.57 | 8609   | 126539  |
| **Bytes/Sec** | 741 kB | 741 kB | 1.13 MB | 1.16 MB | 1.09 MB | 119 kB  | 740 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.56 ms | 1.16 ms | 48 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 5171    | 5171    | 10935   | 11511   | 10254.21 | 1784.89 | 5171    | 102534  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.36 MB | 2.49 MB | 2.21 MB  | 386 kB  | 1.12 MB | 22.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.45 ms | 1.69 ms | 30 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13239   | 13239   | 24639   | 25407   | 23564.4 | 3471.93 | 13238   | 235624  |
| **Bytes/Sec** | 2.04 MB | 2.04 MB | 3.79 MB | 3.91 MB | 3.63 MB | 535 kB  | 2.04 MB | 36.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.94 ms | 23 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12391  | 12391  | 19327   | 20079   | 18351.6 | 2114.43 | 12384  | 183514  |
| **Bytes/Sec** | 644 kB | 644 kB | 1.01 MB | 1.04 MB | 954 kB  | 110 kB  | 644 kB | 9.54 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.57 ms | 1.1 ms | 27 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8503   | 8503   | 12295   | 13175  | 12041.6 | 1236.05 | 8496   | 120407  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 1.59 MB | 1.7 MB | 1.55 MB | 159 kB  | 1.1 MB | 15.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.88 ms | 1.07 ms | 21 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2599   | 2599   | 5263   | 5399   | 4958.82 | 785.23  | 2599   | 54541   |
| **Bytes/Sec** | 239 kB | 239 kB | 484 kB | 497 kB | 456 kB  | 72.2 kB | 239 kB | 5.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 14 ms | 7.69 ms | 2.43 ms | 60 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 5451   | 5451   | 9431   | 9615   | 8974.21 | 1211.01 | 5450   | 89729   |
| **Bytes/Sec** | 507 kB | 507 kB | 877 kB | 894 kB | 834 kB  | 113 kB  | 507 kB | 8.34 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.24 ms | 1.4 ms | 42 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg      | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | -------- | ------- | ----- | ------- |
| **Req/Sec**   | 26831 | 26831 | 45311   | 45663   | 43532.37 | 5296.49 | 26824 | 478809  |
| **Bytes/Sec** | 3 MB  | 3 MB  | 5.07 MB | 5.11 MB | 4.88 MB  | 593 kB  | 3 MB  | 53.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.39 ms | 0.71 ms | 32 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 12631   | 12631   | 17871   | 18079   | 17396.41 | 1592.91 | 12630   | 173952  |
| **Bytes/Sec** | 1.64 MB | 1.64 MB | 2.32 MB | 2.35 MB | 2.26 MB  | 207 kB  | 1.64 MB | 22.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 3 ms  | 2.08 ms | 0.63 ms | 25 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4379   | 4379   | 6643    | 6695    | 6387.6 | 677.89 | 4376   | 63863   |
| **Bytes/Sec** | 674 kB | 674 kB | 1.02 MB | 1.03 MB | 984 kB | 104 kB | 674 kB | 9.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 5 ms  | 9 ms  | 5.54 ms | 1.56 ms | 43 ms |


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
| **Req/Sec**   | 5339   | 5339   | 8255   | 9591   | 8314.73 | 1198.96 | 5339   | 91448   |
| **Bytes/Sec** | 417 kB | 417 kB | 644 kB | 748 kB | 648 kB  | 93.5 kB | 416 kB | 7.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.28 ms | 1.89 ms | 84 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2647   | 2647   | 5387   | 5803   | 4921.8 | 1011.33 | 2646   | 49216   |
| **Bytes/Sec** | 304 kB | 304 kB | 620 kB | 668 kB | 566 kB | 116 kB  | 304 kB | 5.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 46 ms | 7.65 ms | 15.28 ms | 69 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4391   | 4391   | 6767   | 7011   | 6514.4 | 723.87  | 4391   | 65137   |
| **Bytes/Sec** | 584 kB | 584 kB | 900 kB | 932 kB | 866 kB | 96.2 kB | 584 kB | 8.66 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 10 ms | 5.71 ms | 2.19 ms | 61 ms |


---

<p align="center">Generated 2021-06-07T01:13:36.448Z</p>
