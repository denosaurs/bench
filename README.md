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
  - [dinatra](#dinatra)
  - [oak](#oak)
  - [pogo](#pogo)
  - [servest](#servest)
  - [mandarinets](#mandarinets)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 3691   | 3691   | 7307   | 7679   | 7030.82 | 1075.63 | 3691   |
| **Bytes/Sec** | 288 kB | 288 kB | 570 kB | 599 kB | 548 kB  | 83.9 kB | 288 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 4 ms  | 11 ms | 5.08 ms | 2.41 ms | 56 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev  | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------ | ------- |
| **Req/Sec**   | 12839   | 12839   | 19999   | 20783   | 19428.73 | 2129.7 | 12838   |
| **Bytes/Sec** | 1.18 MB | 1.18 MB | 1.84 MB | 1.91 MB | 1.79 MB  | 196 kB | 1.18 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.32 ms | 73 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10351  | 10351  | 14431  | 14591  | 13853.6 | 1229.17 | 10346  |
| **Bytes/Sec** | 538 kB | 538 kB | 751 kB | 759 kB | 720 kB  | 64 kB   | 538 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.38 ms | 51 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 10319  | 10319  | 17743   | 18911   | 17234.55 | 2246.65 | 10315  |
| **Bytes/Sec** | 959 kB | 959 kB | 1.65 MB | 1.76 MB | 1.6 MB   | 209 kB  | 959 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.02 ms | 1.28 ms | 58 ms |


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
| **Req/Sec**   | 1688   | 1688   | 3047   | 3249   | 2929.5 | 434.14  | 1688   |
| **Bytes/Sec** | 194 kB | 194 kB | 350 kB | 374 kB | 337 kB | 49.9 kB | 194 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.18 ms | 18.38 ms | 76 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2489   | 2489   | 4579   | 4779    | 4330.7  | 648.37 | 2488   |
| **Bytes/Sec** | 707 kB | 707 kB | 1.3 MB | 1.36 MB | 1.23 MB | 184 kB | 707 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms  | 8 ms  | 16 ms | 8.75 ms | 3.13 ms | 76 ms |


---

<p align="center">Generated 2020-09-21T00:12:40.246Z</p>