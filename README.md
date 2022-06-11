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
| node | 46472 | 511181 |
| deno | 41575.2 | 415724 |
| deno_canary | 37908 | 379077 |
| drash | 30426.55 | 334646 |
| reno | 29335.28 | 322648 |
| fastify | 29058.8 | 290592 |
| aqua | 24182.91 | 266024 |
| oak | 24132 | 265446 |
| alosaur | 19105.2 | 191055 |
| little_native | 14279.82 | 157084 |
| little_std | 12954.73 | 142488 |
| mandarinets | 11697.28 | 128681 |
| dinatra | 11494.91 | 126438 |
| abc | 9696.21 | 96959 |
| opine | 8271 | 82702 |
| express | 6673.5 | 66733 |
| tinyhttp | 5762 | 57615 |
| servest | 3067.4 | 30670 |
| http | 0 | 0 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6791   | 6791   | 9991   | 10279  | 9696.21 | 990.57  | 6790   | 96959   |
| **Bytes/Sec** | 632 kB | 632 kB | 929 kB | 956 kB | 902 kB  | 92.1 kB | 631 kB | 9.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.59 ms | 1.81 ms | 98 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10759   | 10759   | 20159   | 22223   | 19105.2 | 3009.71 | 10752  | 191055  |
| **Bytes/Sec** | 1.21 MB | 1.21 MB | 2.26 MB | 2.49 MB | 2.14 MB | 337 kB  | 1.2 MB | 21.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.67 ms | 1.27 ms | 35 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13967   | 13967   | 27023   | 27295   | 24182.91 | 4369.06 | 13965   | 266024  |
| **Bytes/Sec** | 2.12 MB | 2.12 MB | 4.11 MB | 4.15 MB | 3.68 MB  | 664 kB  | 2.12 MB | 40.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 2 ms  | 1.17 ms | 0.62 ms | 22 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 32671   | 32671   | 42879  | 43071   | 41575.2 | 3067.31 | 32657   | 415724  |
| **Bytes/Sec** | 3.66 MB | 3.66 MB | 4.8 MB | 4.83 MB | 4.66 MB | 344 kB  | 3.66 MB | 46.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.27 ms | 0.58 ms | 18 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 26527   | 26527   | 38815   | 42367   | 37908   | 4167.64 | 26527   | 379077  |
| **Bytes/Sec** | 2.97 MB | 2.97 MB | 4.35 MB | 4.74 MB | 4.25 MB | 467 kB  | 2.97 MB | 42.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.32 ms | 0.67 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 9015   | 9015   | 11807  | 11879  | 11494.91 | 798.76  | 9011   | 126438  |
| **Bytes/Sec** | 469 kB | 469 kB | 614 kB | 618 kB | 598 kB   | 41.5 kB | 469 kB | 6.57 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.26 ms | 1.44 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 9495    | 9495    | 33759   | 34143   | 30426.55 | 7373.21 | 9488    | 334646  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 4.66 MB | 4.71 MB | 4.2 MB   | 1.02 MB | 1.31 MB | 46.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.11 ms | 0.88 ms | 45 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 3437   | 3437   | 7199    | 8399    | 6673.5  | 1808.15 | 3436   | 66733   |
| **Bytes/Sec** | 742 kB | 742 kB | 1.55 MB | 1.81 MB | 1.44 MB | 391 kB  | 742 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 13 ms | 5.5 ms | 2.89 ms | 37 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13807   | 13807   | 33599   | 35455   | 29058.8 | 8565.65 | 13802   | 290592  |
| **Bytes/Sec** | 2.13 MB | 2.13 MB | 5.17 MB | 5.46 MB | 4.48 MB | 1.32 MB | 2.13 MB | 44.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.05 ms | 1.06 ms | 35 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 7263   | 7263   | 15655   | 15983   | 14279.82 | 2674.83 | 7263   | 157084  |
| **Bytes/Sec** | 1.1 MB | 1.1 MB | 2.38 MB | 2.43 MB | 2.17 MB  | 406 kB  | 1.1 MB | 23.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.27 ms | 1.02 ms | 23 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6431   | 6431   | 14591   | 15263   | 12954.73 | 2933.75 | 6430   | 142488  |
| **Bytes/Sec** | 977 kB | 977 kB | 2.22 MB | 2.32 MB | 1.97 MB  | 446 kB  | 977 kB | 21.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.46 ms | 1.27 ms | 25 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------ |
| **Req/Sec**   | 7799   | 7799   | 12095   | 12199   | 11697.28 | 1236.12 | 7799   | 128681 |
| **Bytes/Sec** | 726 kB | 726 kB | 1.13 MB | 1.13 MB | 1.09 MB  | 115 kB  | 725 kB | 12 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 4 ms  | 3.16 ms | 1.28 ms | 74 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 29503   | 29503   | 48575   | 48799   | 46472  | 5439.81 | 29498  | 511181  |
| **Bytes/Sec** | 3.31 MB | 3.31 MB | 5.44 MB | 5.46 MB | 5.2 MB | 609 kB  | 3.3 MB | 57.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.27 ms | 0.61 ms | 18 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13647   | 13647   | 26959   | 27247   | 24132   | 4853.86 | 13642   | 265446  |
| **Bytes/Sec** | 2.09 MB | 2.09 MB | 4.13 MB | 4.17 MB | 3.69 MB | 742 kB  | 2.09 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.23 ms | 0.79 ms | 27 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 5883    | 5883    | 8503    | 8639    | 8271    | 800.2  | 5880    | 82702   |
| **Bytes/Sec** | 1.26 MB | 1.26 MB | 1.82 MB | 1.85 MB | 1.77 MB | 171 kB | 1.26 MB | 17.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 7 ms  | 4.22 ms | 1.44 ms | 49 ms |


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


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total  |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------ |
| **Req/Sec**   | 16927   | 16927   | 32511   | 33663   | 29335.28 | 5608.51 | 16918   | 322648 |
| **Bytes/Sec** | 2.57 MB | 2.57 MB | 4.94 MB | 5.12 MB | 4.46 MB  | 853 kB  | 2.57 MB | 49 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 1.12 ms | 0.59 ms | 19 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2219   | 2219   | 3057   | 3587   | 3067.4 | 343.35  | 2219   | 30670   |
| **Bytes/Sec** | 255 kB | 255 kB | 352 kB | 413 kB | 353 kB | 39.5 kB | 255 kB | 3.53 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 49 ms | 12.53 ms | 18.13 ms | 88 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4335   | 4335   | 6203   | 6307   | 5762   | 722.05 | 4332   | 57615   |
| **Bytes/Sec** | 680 kB | 680 kB | 974 kB | 990 kB | 904 kB | 113 kB | 680 kB | 9.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 6 ms  | 15 ms | 6.59 ms | 2.9 ms | 98 ms |


---

<p align="center">Generated 2022-06-11T01:20:15.288Z</p>
