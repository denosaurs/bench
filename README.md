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
| deno | 38613.6 | 386145 |
| drash | 36493.82 | 401420 |
| deno_canary | 35256 | 387812 |
| alosaur | 35146.4 | 351464 |
| node | 34975.28 | 384756 |
| fastify | 33077.6 | 330792 |
| oak | 23350.55 | 256850 |
| aqua | 23185.82 | 255054 |
| reno | 20353.2 | 203537 |
| abc | 17093.2 | 170947 |
| express | 16668.73 | 183342 |
| little_std | 14598 | 160588 |
| mandarinets | 13553.1 | 149077 |
| dinatra | 11759.64 | 129350 |
| opine | 10106.21 | 101061 |
| little_native | 7085.8 | 70852 |
| tinyhttp | 6260.8 | 62608 |
| servest | 4020.1 | 40196 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 12239   | 12239   | 17695   | 17887   | 17093.2 | 1640.31 | 12235   | 170947  |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.64 MB | 1.66 MB | 1.59 MB | 153 kB  | 1.14 MB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 3 ms  | 2.11 ms | 0.88 ms | 58 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 19727   | 19727   | 39423   | 40031   | 35146.4 | 7263.5 | 19720   | 351464  |
| **Bytes/Sec** | 2.21 MB | 2.21 MB | 4.42 MB | 4.49 MB | 3.94 MB | 814 kB | 2.21 MB | 39.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.72 ms | 24 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13383   | 13383   | 25599   | 26191   | 23185.82 | 4327.34 | 13382   | 255054  |
| **Bytes/Sec** | 2.03 MB | 2.03 MB | 3.89 MB | 3.98 MB | 3.52 MB  | 658 kB  | 2.03 MB | 38.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.66 ms | 23 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20303   | 20303   | 43135   | 43455   | 38613.6 | 7670.31 | 20298   | 386145  |
| **Bytes/Sec** | 2.28 MB | 2.28 MB | 4.83 MB | 4.87 MB | 4.33 MB | 859 kB  | 2.27 MB | 43.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.68 ms | 16 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 17903 | 17903 | 39775   | 40255   | 35256   | 7740.05 | 17899 | 387812  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 4.46 MB | 4.51 MB | 3.95 MB | 867 kB  | 2 MB  | 43.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.36 ms | 0.87 ms | 45 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9119   | 9119   | 12111  | 12279  | 11759.64 | 861.67  | 9115   | 129350  |
| **Bytes/Sec** | 474 kB | 474 kB | 630 kB | 638 kB | 611 kB   | 44.8 kB | 474 kB | 6.73 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.22 ms | 1.31 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 27487   | 27487   | 37567   | 37983   | 36493.82 | 2918.79 | 27476   | 401420  |
| **Bytes/Sec** | 3.79 MB | 3.79 MB | 5.18 MB | 5.24 MB | 5.04 MB  | 403 kB  | 3.79 MB | 55.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 1 ms  | 0.74 ms | 0.65 ms | 32 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 8199    | 8199    | 19055   | 19599   | 16668.73 | 4046.56 | 8195    | 183342  |
| **Bytes/Sec** | 1.77 MB | 1.77 MB | 4.11 MB | 4.24 MB | 3.6 MB   | 874 kB  | 1.77 MB | 39.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.92 ms | 1.17 ms | 24 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18319   | 18319   | 37919   | 38719   | 33077.6 | 8096.73 | 18317   | 330792  |
| **Bytes/Sec** | 2.82 MB | 2.82 MB | 5.84 MB | 5.96 MB | 5.09 MB | 1.25 MB | 2.82 MB | 50.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 3 ms  | 0.55 ms | 0.94 ms | 25 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4247   | 4247   | 7827    | 8375    | 7085.8  | 1388.23 | 4246   | 70852   |
| **Bytes/Sec** | 646 kB | 646 kB | 1.19 MB | 1.27 MB | 1.08 MB | 211 kB  | 645 kB | 10.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 5.09 ms | 2.07 ms | 30 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 7555    | 7555    | 16159   | 16639   | 14598   | 2961.93 | 7555    | 160588  |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 2.46 MB | 2.53 MB | 2.22 MB | 450 kB  | 1.15 MB | 24.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.3 ms | 1.02 ms | 19 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8671   | 8671   | 14071   | 14159   | 13553.1 | 1547.47 | 8670   | 149077  |
| **Bytes/Sec** | 806 kB | 806 kB | 1.31 MB | 1.32 MB | 1.26 MB | 144 kB  | 806 kB | 13.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.26 ms | 1.05 ms | 59 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 22367  | 22367  | 36479   | 37215   | 34975.28 | 4064.24 | 22356  | 384756  |
| **Bytes/Sec** | 2.5 MB | 2.5 MB | 4.09 MB | 4.17 MB | 3.92 MB  | 456 kB  | 2.5 MB | 43.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.71 ms | 0.76 ms | 28 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13375   | 13375   | 26463   | 26895   | 23350.55 | 5133.56 | 13372   | 256850  |
| **Bytes/Sec** | 2.05 MB | 2.05 MB | 4.05 MB | 4.11 MB | 3.57 MB  | 785 kB  | 2.05 MB | 39.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 0.96 ms | 47 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 7563    | 7563    | 10399   | 10463   | 10106.21 | 850.64 | 7560    | 101061  |
| **Bytes/Sec** | 1.62 MB | 1.62 MB | 2.23 MB | 2.24 MB | 2.16 MB  | 182 kB | 1.62 MB | 21.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 3 ms  | 5 ms  | 3.4 ms | 1.27 ms | 53 ms |


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


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%  | Avg     | Stdev   | Min   | Total   |
| ------------- | ----- | ----- | ------- | ------ | ------- | ------- | ----- | ------- |
| **Req/Sec**   | 13143 | 13143 | 21183   | 21679  | 20353.2 | 2448.31 | 13139 | 203537  |
| **Bytes/Sec** | 2 MB  | 2 MB  | 3.22 MB | 3.3 MB | 3.09 MB | 372 kB  | 2 MB  | 30.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.05 ms | 33 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2905   | 2905   | 4021   | 5231   | 4020.1 | 703.29  | 2904   | 40196   |
| **Bytes/Sec** | 334 kB | 334 kB | 462 kB | 602 kB | 462 kB | 80.9 kB | 334 kB | 4.62 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 2 ms  | 47 ms | 9.44 ms | 16.56 ms | 65 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4239   | 4239   | 6463    | 6723    | 6260.8 | 686.15 | 4239   | 62608   |
| **Bytes/Sec** | 666 kB | 666 kB | 1.01 MB | 1.06 MB | 983 kB | 108 kB | 666 kB | 9.83 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 6 ms  | 14 ms | 6.1 ms | 2.15 ms | 67 ms |


---

<p align="center">Generated 2022-06-03T01:14:42.247Z</p>
