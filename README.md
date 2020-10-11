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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 3311   | 3311   | 6871   | 7103   | 6494.9 | 1075.13 | 3311   |
| **Bytes/Sec** | 258 kB | 258 kB | 536 kB | 554 kB | 507 kB | 83.8 kB | 258 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 12 ms | 5.77 ms | 2.71 ms | 77 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13959   | 13959   | 23167   | 23519   | 22290.8 | 2783.16 | 13954   |
| **Bytes/Sec** | 1.28 MB | 1.28 MB | 2.13 MB | 2.16 MB | 2.05 MB | 256 kB  | 1.28 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.19 ms | 0.99 ms | 57 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10311  | 10311  | 14711  | 15135  | 14228.8 | 1356.59 | 10305  |
| **Bytes/Sec** | 536 kB | 536 kB | 765 kB | 787 kB | 740 kB  | 70.6 kB | 536 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.29 ms | 1.38 ms | 58 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13431   | 13431   | 19919   | 21263   | 19521.2 | 2080.21 | 13425   |
| **Bytes/Sec** | 1.25 MB | 1.25 MB | 1.85 MB | 1.98 MB | 1.82 MB | 193 kB  | 1.25 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.26 ms | 1.2 ms | 84 ms |


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
| **Req/Sec**   | 1408   | 1408   | 2633   | 2883   | 2490.1 | 403.72  | 1408   |
| **Bytes/Sec** | 162 kB | 162 kB | 303 kB | 332 kB | 286 kB | 46.4 kB | 162 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 6 ms  | 52 ms | 15.58 ms | 19.17 ms | 93 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2743   | 2743   | 5659    | 5807    | 5258.5  | 899.49 | 2742   |
| **Bytes/Sec** | 779 kB | 779 kB | 1.61 MB | 1.65 MB | 1.49 MB | 256 kB | 779 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7.11 ms | 3.27 ms | 92 ms |


---

<p align="center">Generated 2020-10-11T00:14:12.935Z</p>