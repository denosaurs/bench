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
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| node | 24333.2 | 243329 |
| http | 24125.82 | 265374 |
| fastify | 20833.1 | 229131 |
| deno | 20452.41 | 204521 |
| alosaur | 15718.55 | 172896 |
| express | 13391 | 133910 |
| aqua | 11909.6 | 119094 |
| drash | 11621.4 | 116205 |
| abc | 10310.37 | 113403 |
| reno | 10213 | 102131 |
| dinatra | 7478.8 | 74782 |
| mandarinets | 6746.1 | 67455 |
| tinyhttp | 6478 | 64766 |
| opine | 4421.37 | 48629 |
| little_native | 3270.82 | 35977 |
| little_std | 3270.82 | 35977 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 6391   | 6391   | 10815   | 10999   | 10310.37 | 1259.85 | 6391   | 113403  |
| **Bytes/Sec** | 594 kB | 594 kB | 1.01 MB | 1.02 MB | 959 kB   | 117 kB  | 594 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.39 ms | 1.49 ms | 73 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 10743  | 10743  | 16367   | 16703   | 15718.55 | 1651.66 | 10742  | 172896  |
| **Bytes/Sec** | 989 kB | 989 kB | 1.51 MB | 1.54 MB | 1.45 MB  | 152 kB  | 988 kB | 15.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 1.04 ms | 50 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 8399   | 8399   | 12127   | 12959   | 11909.6 | 1231   | 8399   | 119094 |
| **Bytes/Sec** | 773 kB | 773 kB | 1.12 MB | 1.19 MB | 1.1 MB  | 113 kB | 773 kB | 11 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.09 ms | 1.02 ms | 29 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 13815   | 13815   | 20911   | 22495 | 20452.41 | 2353.65 | 13808   | 204521  |
| **Bytes/Sec** | 1.23 MB | 1.23 MB | 1.86 MB | 2 MB  | 1.82 MB  | 209 kB  | 1.23 MB | 18.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.41 ms | 1.17 ms | 43 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 5263   | 5263   | 7639   | 8031   | 7478.8 | 755.82  | 5262   | 74782   |
| **Bytes/Sec** | 274 kB | 274 kB | 397 kB | 418 kB | 389 kB | 39.3 kB | 274 kB | 3.89 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 9 ms  | 4.8 ms | 1.87 ms | 48 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7891   | 7891   | 11911   | 12719   | 11621.4 | 1360.85 | 7891   | 116205  |
| **Bytes/Sec** | 679 kB | 679 kB | 1.02 MB | 1.09 MB | 999 kB  | 117 kB  | 679 kB | 9.99 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.01 ms | 1.17 ms | 30 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 5475    | 5475    | 14399   | 14879   | 13391   | 2695.11 | 5473    | 133910  |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 3.11 MB | 3.21 MB | 2.89 MB | 582 kB  | 1.18 MB | 28.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.43 ms | 1.52 ms | 31 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 10191   | 10191   | 21951   | 23311   | 20833.1 | 3421.35 | 10188   | 229131  |
| **Bytes/Sec** | 1.57 MB | 1.57 MB | 3.38 MB | 3.59 MB | 3.21 MB | 527 kB  | 1.57 MB | 35.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.33 ms | 1.14 ms | 28 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 18767  | 18767  | 24799   | 25135   | 24125.82 | 1733.05 | 18754  | 265374  |
| **Bytes/Sec** | 975 kB | 975 kB | 1.29 MB | 1.31 MB | 1.25 MB  | 90.2 kB | 975 kB | 13.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.13 ms | 0.62 ms | 37 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1967   | 1967   | 3465   | 3529   | 3270.82 | 439.44  | 1967   | 35977   |
| **Bytes/Sec** | 181 kB | 181 kB | 319 kB | 325 kB | 301 kB  | 40.4 kB | 181 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.69 ms | 3.23 ms | 85 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 1967   | 1967   | 3465   | 3529   | 3270.82 | 439.44  | 1967   | 35977   |
| **Bytes/Sec** | 181 kB | 181 kB | 319 kB | 325 kB | 301 kB  | 40.4 kB | 181 kB | 3.31 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 9 ms  | 11 ms | 20 ms | 11.69 ms | 3.23 ms | 85 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3971   | 3971   | 6983   | 7387   | 6746.1 | 939.5   | 3971   | 67455   |
| **Bytes/Sec** | 369 kB | 369 kB | 649 kB | 687 kB | 627 kB | 87.4 kB | 369 kB | 6.27 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 10 ms | 5.43 ms | 2.15 ms | 52 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13231   | 13231   | 26047   | 26607   | 24333.2 | 3910.42 | 13225   | 243329  |
| **Bytes/Sec** | 1.48 MB | 1.48 MB | 2.92 MB | 2.98 MB | 2.73 MB | 438 kB  | 1.48 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.2 ms | 1.01 ms | 39 ms |


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
| **Req/Sec**   | 6879   | 6879   | 10559  | 10831  | 10213  | 1125.47 | 6876   | 102131  |
| **Bytes/Sec** | 537 kB | 537 kB | 824 kB | 845 kB | 797 kB | 87.9 kB | 536 kB | 7.97 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.5 ms | 66 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 3119   | 3119   | 4587   | 4643   | 4421.37 | 422.61 | 3119   | 48629   |
| **Bytes/Sec** | 481 kB | 481 kB | 707 kB | 715 kB | 681 kB  | 65 kB  | 480 kB | 7.49 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 8 ms  | 8 ms  | 14 ms | 8.59 ms | 1.96 ms | 50 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4559   | 4559   | 6647   | 6887   | 6478   | 657.35  | 4556   | 64766   |
| **Bytes/Sec** | 606 kB | 606 kB | 884 kB | 916 kB | 861 kB | 87.5 kB | 606 kB | 8.61 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 6 ms  | 10 ms | 5.74 ms | 1.81 ms | 47 ms |


---

<p align="center">Generated 2021-05-02T00:56:34.277Z</p>
