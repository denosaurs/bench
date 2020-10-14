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

- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [alosaur](#alosaur)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [fastro](#fastro)
  - [node](#node)
  - [oak](#oak)
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 3781   | 3781   | 7259   | 7699   | 6901.5 | 1073.16 | 3781   |
| **Bytes/Sec** | 295 kB | 295 kB | 566 kB | 601 kB | 538 kB | 83.6 kB | 295 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.22 ms | 2.41 ms | 52 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 10207  | 10207  | 17871   | 18495  | 17236   | 2250.7 | 10200  |
| **Bytes/Sec** | 938 kB | 938 kB | 1.64 MB | 1.7 MB | 1.59 MB | 207 kB | 938 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.79 ms | 1.47 ms | 70 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 12815  | 12815  | 23119   | 24991   | 22420   | 3205.55 | 12815  |
| **Bytes/Sec** | 654 kB | 654 kB | 1.18 MB | 1.27 MB | 1.14 MB | 163 kB  | 654 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.27 ms | 1.11 ms | 56 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 13343  | 13343  | 17663  | 18607  | 17254.8 | 1413.91 | 13341  |
| **Bytes/Sec** | 694 kB | 694 kB | 919 kB | 967 kB | 897 kB  | 73.5 kB | 694 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 1.74 ms | 1.12 ms | 33 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------ | -------- | ------- | ------ |
| **Req/Sec**   | 10007  | 10007  | 17247   | 18543  | 16674.41 | 2311.17 | 10002  |
| **Bytes/Sec** | 861 kB | 861 kB | 1.48 MB | 1.6 MB | 1.43 MB  | 199 kB  | 860 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.01 ms | 1.28 ms | 43 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 4183   | 4183   | 9055    | 9879    | 8672.37 | 1555.08 | 4182   |
| **Bytes/Sec** | 904 kB | 904 kB | 1.96 MB | 2.13 MB | 1.87 MB | 336 kB  | 903 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 4 ms  | 9 ms  | 4.09 ms | 2.11 ms | 66 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 11719   | 11719   | 34079   | 35839   | 31967.64 | 6666.58 | 11719   |
| **Bytes/Sec** | 1.79 MB | 1.79 MB | 5.21 MB | 5.48 MB | 4.89 MB  | 1.02 MB | 1.79 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.95 ms | 1.08 ms | 82 ms |


### [fastro](https://deno.land/x/fastro)

> Fast and simple web framework for deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------- | ------- |
| **Req/Sec**   | 12167   | 12167   | 19263   | 21247 | 18892.41 | 2382.63 | 12160   |
| **Bytes/Sec** | 1.72 MB | 1.72 MB | 2.72 MB | 3 MB  | 2.66 MB  | 336 kB  | 1.71 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------ | ------ |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.5 ms | 1.4 ms | 108 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11463   | 11463   | 23407   | 24623   | 22188.4 | 3659.27 | 11461   |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 2.62 MB | 2.76 MB | 2.49 MB | 410 kB  | 1.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.26 ms | 1.18 ms | 54 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 15607   | 15607   | 22383   | 23759   | 21748.4 | 2151.83 | 15602   |
| **Bytes/Sec** | 1.45 MB | 1.45 MB | 2.08 MB | 2.21 MB | 2.02 MB | 200 kB  | 1.45 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.2 ms | 0.92 ms | 46 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 1845   | 1845   | 2863   | 3443   | 2894.6 | 425.79  | 1845   |
| **Bytes/Sec** | 212 kB | 212 kB | 329 kB | 396 kB | 333 kB | 48.9 kB | 212 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 13.33 ms | 18.35 ms | 69 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1695   | 1695   | 3947    | 4041    | 3589.6  | 734.24 | 1695   |
| **Bytes/Sec** | 482 kB | 482 kB | 1.12 MB | 1.15 MB | 1.02 MB | 209 kB | 481 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 21 ms | 10.64 ms | 5.86 ms | 287 ms |


---

<p align="center">Generated 2020-10-14T00:19:58.285Z</p>