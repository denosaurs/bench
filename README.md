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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 7339   | 7339   | 11607  | 11983  | 11264.6 | 1323.86 | 7338   |
| **Bytes/Sec** | 572 kB | 572 kB | 905 kB | 935 kB | 879 kB  | 103 kB  | 572 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 2.93 ms | 1.63 ms | 42 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 9799   | 9799   | 18415   | 19183   | 17652.73 | 2532.28 | 9799   |
| **Bytes/Sec** | 902 kB | 902 kB | 1.69 MB | 1.77 MB | 1.62 MB  | 233 kB  | 902 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.65 ms | 1.42 ms | 62 ms |


### [deno](https://deno.land/std/http)

> Pure TypeScript and JavaScript Runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 17055  | 17055  | 24751   | 26127   | 24040   | 2429.52 | 17041  |
| **Bytes/Sec** | 869 kB | 869 kB | 1.26 MB | 1.33 MB | 1.23 MB | 124 kB  | 869 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.88 ms | 36 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 6555   | 6555   | 9495   | 9791   | 9234.21 | 902.63  | 6553   |
| **Bytes/Sec** | 341 kB | 341 kB | 494 kB | 509 kB | 480 kB  | 46.9 kB | 341 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.7 ms | 1.86 ms | 68 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 12223   | 12223   | 21839   | 22319   | 21001.82 | 2790.04 | 12219   |
| **Bytes/Sec** | 1.05 MB | 1.05 MB | 1.88 MB | 1.92 MB | 1.81 MB  | 240 kB  | 1.05 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.24 ms | 1.31 ms | 128 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 5407    | 5407    | 14183   | 14983   | 13231.82 | 2576.09 | 5406    |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 3.06 MB | 3.24 MB | 2.86 MB  | 556 kB  | 1.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.47 ms | 1.59 ms | 60 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 9895    | 9895    | 22127   | 22607   | 20982   | 3707.74 | 9894    |
| **Bytes/Sec** | 1.51 MB | 1.51 MB | 3.39 MB | 3.46 MB | 3.21 MB | 567 kB  | 1.51 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.28 ms | 1.39 ms | 74 ms |


### [fastro](https://deno.land/x/fastro)

> Fast and simple web framework for deno


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14399   | 14399   | 21999  | 23199   | 21280.4 | 2386.35 | 14396   |
| **Bytes/Sec** | 2.03 MB | 2.03 MB | 3.1 MB | 3.27 MB | 3 MB    | 336 kB  | 2.03 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.25 ms | 1.06 ms | 53 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 21423  | 21423  | 39935   | 42271   | 38236   | 5723.1 | 21411  |
| **Bytes/Sec** | 2.4 MB | 2.4 MB | 4.47 MB | 4.73 MB | 4.28 MB | 641 kB | 2.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.31 ms | 0.85 ms | 42 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- |
| **Req/Sec**   | 12359   | 12359   | 18687   | 19887   | 18147.28 | 1879.7 | 12355   |
| **Bytes/Sec** | 1.15 MB | 1.15 MB | 1.74 MB | 1.85 MB | 1.69 MB  | 175 kB | 1.15 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.49 ms | 1.3 ms | 74 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 1992   | 1992   | 2991   | 3481   | 2989.9 | 425.97 | 1992   |
| **Bytes/Sec** | 229 kB | 229 kB | 344 kB | 400 kB | 344 kB | 49 kB  | 229 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 4 ms  | 49 ms | 12.88 ms | 18.28 ms | 134 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2225   | 2225   | 4435    | 4695    | 4203.4  | 750.23 | 2224   |
| **Bytes/Sec** | 632 kB | 632 kB | 1.26 MB | 1.33 MB | 1.19 MB | 213 kB | 632 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 7 ms  | 8 ms  | 17 ms | 8.98 ms | 3.5 ms | 89 ms |


---

<p align="center">Generated 2020-10-13T13:35:04.078Z</p>