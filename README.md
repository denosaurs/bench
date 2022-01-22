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
  - [deco](#deco)
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
| deno | 38738.19 | 426130 |
| deno_canary | 38448 | 384542 |
| deco | 36840 | 405221 |
| node | 36296.81 | 362995 |
| fastify | 28914.4 | 289094 |
| alosaur | 28796.4 | 287948 |
| oak | 28384.73 | 312238 |
| reno | 20514.8 | 205150 |
| aqua | 15025.1 | 165266 |
| little_native | 13322.2 | 133217 |
| express | 12574 | 138307 |
| abc | 12384.6 | 123838 |
| little_std | 12329.28 | 135610 |
| dinatra | 10704 | 107034 |
| opine | 9025.8 | 90262 |
| tinyhttp | 5310 | 58402 |
| servest | 3061.6 | 30612 |
| drash | 1206 | 12060 |
| http | 0 | 0 |
| mandarinets | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7923   | 7923   | 12807   | 13167   | 12384.6 | 1498.64 | 7920   | 123838  |
| **Bytes/Sec** | 737 kB | 737 kB | 1.19 MB | 1.22 MB | 1.15 MB | 139 kB  | 737 kB | 11.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.69 ms | 1.6 ms | 106 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12631   | 12631   | 33407   | 34111   | 28796.4 | 7641.02 | 12624   | 287948  |
| **Bytes/Sec** | 1.12 MB | 1.12 MB | 2.97 MB | 3.04 MB | 2.56 MB | 680 kB  | 1.12 MB | 25.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.76 ms | 37 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9767    | 9767    | 15759   | 16127   | 15025.1 | 1740.87 | 9764    | 165266  |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 2.03 MB | 2.08 MB | 1.94 MB | 224 kB  | 1.26 MB | 21.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.24 ms | 1.23 ms | 41 ms |


### [deco](https://deno.land/x/deco)

> Deco is a utility library for Deno developers


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 22991   | 22991   | 40479   | 42175   | 36840   | 7017.6 | 22987   | 405221  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 5.22 MB | 5.44 MB | 4.75 MB | 905 kB | 2.97 MB | 52.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.28 ms | 0.72 ms | 19 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 21535   | 21535   | 43615   | 45887   | 38738.19 | 8574.9 | 21526   | 426130  |
| **Bytes/Sec** | 1.92 MB | 1.92 MB | 3.88 MB | 4.08 MB | 3.45 MB  | 763 kB | 1.92 MB | 37.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.45 ms | 0.73 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18511   | 18511   | 43807  | 44095   | 38448   | 8203.65 | 18505   | 384542  |
| **Bytes/Sec** | 1.65 MB | 1.65 MB | 3.9 MB | 3.92 MB | 3.42 MB | 730 kB  | 1.65 MB | 34.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.44 ms | 0.72 ms | 17 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 8639   | 8639   | 10839  | 11119  | 10704  | 703.87  | 8636   | 107034  |
| **Bytes/Sec** | 449 kB | 449 kB | 564 kB | 578 kB | 557 kB | 36.6 kB | 449 kB | 5.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.29 ms | 1.53 ms | 32 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 1094   | 1094   | 1215   | 1236   | 1206   | 38.7    | 1094   | 12060   |
| **Bytes/Sec** | 456 kB | 456 kB | 507 kB | 516 kB | 503 kB | 16.1 kB | 456 kB | 5.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 22 ms | 33 ms | 37 ms | 32.67 ms | 5.82 ms | 236 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 4859    | 4859    | 13671   | 13839   | 12574   | 2529.05 | 4857    | 138307  |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 2.95 MB | 2.99 MB | 2.72 MB | 546 kB  | 1.05 MB | 29.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.49 ms | 1.58 ms | 33 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 16495   | 16495   | 33247   | 34335   | 28914.4 | 7505.6  | 16484   | 289094  |
| **Bytes/Sec** | 2.54 MB | 2.54 MB | 5.12 MB | 5.28 MB | 4.45 MB | 1.16 MB | 2.54 MB | 44.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.03 ms | 0.98 ms | 25 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 7035   | 7035   | 14879   | 15103   | 13322.2 | 2625.2 | 7035   | 133217  |
| **Bytes/Sec** | 908 kB | 908 kB | 1.92 MB | 1.95 MB | 1.72 MB | 339 kB | 908 kB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.1 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6311   | 6311   | 13823   | 14191   | 12329.28 | 2695.96 | 6310   | 135610  |
| **Bytes/Sec** | 814 kB | 814 kB | 1.78 MB | 1.83 MB | 1.59 MB  | 348 kB  | 814 kB | 17.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.54 ms | 1.42 ms | 29 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 20031   | 20031   | 40991   | 42335   | 36296.81 | 7793.36 | 20031   | 362995  |
| **Bytes/Sec** | 2.24 MB | 2.24 MB | 4.59 MB | 4.74 MB | 4.07 MB  | 872 kB  | 2.24 MB | 40.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.57 ms | 0.78 ms | 20 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 19887   | 19887   | 29391   | 32367   | 28384.73 | 3843.82 | 19884   | 312238  |
| **Bytes/Sec** | 2.59 MB | 2.59 MB | 3.82 MB | 4.21 MB | 3.69 MB  | 500 kB  | 2.58 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.98 ms | 0.68 ms | 34 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 6791   | 6791   | 9271    | 9399   | 9025.8  | 753.23 | 6790   | 90262   |
| **Bytes/Sec** | 1.3 MB | 1.3 MB | 1.77 MB | 1.8 MB | 1.72 MB | 144 kB | 1.3 MB | 17.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 6 ms  | 3.93 ms | 1.28 ms | 51 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11071   | 11071   | 22735   | 25839   | 20514.8 | 5696.86 | 11064   | 205150  |
| **Bytes/Sec** | 1.43 MB | 1.43 MB | 2.93 MB | 3.33 MB | 2.65 MB | 735 kB  | 1.43 MB | 26.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.43 ms | 1.08 ms | 26 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2299   | 2299   | 3029   | 3585   | 3061.6 | 409.94  | 2298   | 30612   |
| **Bytes/Sec** | 264 kB | 264 kB | 348 kB | 412 kB | 352 kB | 47.2 kB | 264 kB | 3.52 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.57 ms | 18.14 ms | 80 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4171   | 4171   | 5391   | 5679   | 5310   | 386.12  | 4168   | 58402   |
| **Bytes/Sec** | 655 kB | 655 kB | 846 kB | 892 kB | 834 kB | 60.7 kB | 654 kB | 9.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ----- | ------ | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7 ms  | 2.7 ms | 89 ms |


---

<p align="center">Generated 2022-01-22T00:32:21.683Z</p>
