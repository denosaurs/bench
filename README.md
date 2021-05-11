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
| deno_canary | 42152 | 463659 |
| deno | 38296.81 | 382984 |
| fastify | 37148.37 | 408667 |
| node | 25094 | 250944 |
| http | 17985.1 | 197828 |
| express | 16059.1 | 176631 |
| alosaur | 14924 | 149228 |
| dinatra | 13929.82 | 153223 |
| aqua | 12398.4 | 123974 |
| drash | 11977.4 | 119765 |
| abc | 11727 | 117267 |
| oak | 11494.6 | 114939 |
| reno | 9471 | 94716 |
| little_native | 7798.55 | 85781 |
| tinyhttp | 6949.3 | 69491 |
| little_std | 5247.73 | 57721 |
| opine | 5167.11 | 51662 |
| mandarinets | 3777.8 | 37774 |
| servest | 3307.91 | 36382 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8171   | 8171   | 11935   | 12535   | 11727   | 1237.89 | 8169   | 117267  |
| **Bytes/Sec** | 760 kB | 760 kB | 1.11 MB | 1.17 MB | 1.09 MB | 115 kB  | 760 kB | 10.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 2.93 ms | 1.38 ms | 62 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10359  | 10359  | 15407   | 15855   | 14924   | 1538.67 | 10353  | 149228  |
| **Bytes/Sec** | 953 kB | 953 kB | 1.42 MB | 1.46 MB | 1.37 MB | 142 kB  | 952 kB | 13.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.22 ms | 1.02 ms | 41 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8495   | 8495   | 12839   | 12959   | 12398.4 | 1307.4 | 8492   | 123974  |
| **Bytes/Sec** | 781 kB | 781 kB | 1.18 MB | 1.19 MB | 1.14 MB | 120 kB | 781 kB | 11.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.82 ms | 1.13 ms | 56 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27375   | 27375   | 39551   | 39999   | 38296.81 | 3675.03 | 27368   | 382984  |
| **Bytes/Sec** | 2.44 MB | 2.44 MB | 3.52 MB | 3.56 MB | 3.41 MB  | 327 kB  | 2.44 MB | 34.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.39 ms | 0.69 ms | 27 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 31295   | 31295   | 43391   | 43743   | 42152   | 3469.85 | 31286   | 463659  |
| **Bytes/Sec** | 2.79 MB | 2.79 MB | 3.86 MB | 3.89 MB | 3.75 MB | 309 kB  | 2.78 MB | 41.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.35 ms | 0.69 ms | 44 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10559  | 10559  | 14423  | 14535  | 13929.82 | 1100.14 | 10552  | 153223  |
| **Bytes/Sec** | 549 kB | 549 kB | 750 kB | 756 kB | 724 kB   | 57.3 kB | 549 kB | 7.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.01 ms | 24 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7515   | 7515   | 12479   | 12847  | 11977.4 | 1521.73 | 7515   | 119765  |
| **Bytes/Sec** | 647 kB | 647 kB | 1.07 MB | 1.1 MB | 1.03 MB | 131 kB  | 646 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.96 ms | 1.28 ms | 66 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7527    | 7527    | 16911   | 17375   | 16059.1 | 2713.88 | 7527    | 176631  |
| **Bytes/Sec** | 1.63 MB | 1.63 MB | 3.65 MB | 3.75 MB | 3.47 MB | 586 kB  | 1.63 MB | 38.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.14 ms | 1.15 ms | 46 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 21887   | 21887   | 38815   | 39455   | 37148.37 | 4882.95 | 21887   | 408667  |
| **Bytes/Sec** | 3.37 MB | 3.37 MB | 5.98 MB | 6.08 MB | 5.72 MB  | 752 kB  | 3.37 MB | 62.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.48 ms | 0.85 ms | 47 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12175  | 12175  | 18255  | 20271   | 17985.1 | 2108.77 | 12171  | 197828  |
| **Bytes/Sec** | 633 kB | 633 kB | 949 kB | 1.05 MB | 935 kB  | 110 kB  | 633 kB | 10.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.68 ms | 1.04 ms | 40 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 5095   | 5095   | 8003    | 8431    | 7798.55 | 867.32 | 5093   | 85781   |
| **Bytes/Sec** | 657 kB | 657 kB | 1.03 MB | 1.09 MB | 1.01 MB | 112 kB | 657 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 8 ms  | 4.54 ms | 1.59 ms | 32 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3089   | 3089   | 5555   | 5619   | 5247.73 | 714.15  | 3089   | 57721   |
| **Bytes/Sec** | 284 kB | 284 kB | 511 kB | 517 kB | 483 kB  | 65.7 kB | 284 kB | 5.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 6 ms  | 13 ms | 6.96 ms | 2.15 ms | 44 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%    | 2.5%  | 50%    | 95.5%  | Avg    | Stdev  | Min   | Total   |
| ------------- | ----- | ----- | ------ | ------ | ------ | ------ | ----- | ------- |
| **Req/Sec**   | 0     | 0     | 3151   | 9047   | 3777.8 | 3124.4 | 409   | 37774   |
| **Bytes/Sec** | 0 B   | 0 B   | 293 kB | 841 kB | 351 kB | 291 kB | 38 kB | 3.51 MB |


| **Stat**    | 2.5%    | 50%     | 95.5%   | Avg        | Stdev     | Max     |
| ----------- | ------- | ------- | ------- | ---------- | --------- | ------- |
| **Latency** | 1041 ms | 1830 ms | 3210 ms | 2014.26 ms | 760.98 ms | 3293 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13751   | 13751   | 26303   | 26991   | 25094   | 3820.57 | 13750   | 250944  |
| **Bytes/Sec** | 1.54 MB | 1.54 MB | 2.95 MB | 3.02 MB | 2.81 MB | 428 kB  | 1.54 MB | 28.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.03 ms | 55 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7807    | 7807    | 11815   | 12263   | 11494.6 | 1264.17 | 7807    | 114939  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.54 MB | 1.59 MB | 1.49 MB | 164 kB  | 1.01 MB | 14.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.17 ms | 1.07 ms | 53 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3617   | 3617   | 5339   | 5467   | 5167.11 | 525.48  | 3617   | 51662   |
| **Bytes/Sec** | 557 kB | 557 kB | 822 kB | 842 kB | 796 kB  | 80.9 kB | 557 kB | 7.96 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 11 ms | 7.36 ms | 2.54 ms | 162 ms |


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
| **Req/Sec**   | 6147   | 6147   | 9751   | 10207  | 9471   | 1138.37 | 6145   | 94716   |
| **Bytes/Sec** | 479 kB | 479 kB | 760 kB | 796 kB | 739 kB | 88.8 kB | 479 kB | 7.39 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.57 ms | 1.71 ms | 52 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 2507   | 2507   | 3311   | 3803   | 3307.91 | 396.29  | 2507   | 36382   |
| **Bytes/Sec** | 289 kB | 289 kB | 381 kB | 438 kB | 380 kB  | 45.5 kB | 288 kB | 4.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 48 ms | 11.6 ms | 17.79 ms | 89 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3995   | 3995   | 7291   | 7763    | 6949.3 | 1087.54 | 3995   | 69491   |
| **Bytes/Sec** | 531 kB | 531 kB | 970 kB | 1.03 MB | 924 kB | 145 kB  | 531 kB | 9.24 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 5 ms  | 11 ms | 5.27 ms | 2.13 ms | 63 ms |


---

<p align="center">Generated 2021-05-11T00:45:40.158Z</p>
