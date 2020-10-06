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
| **Req/Sec**   | 3177   | 3177   | 6547   | 6955   | 6257.9 | 1062.11 | 3176   |
| **Bytes/Sec** | 248 kB | 248 kB | 511 kB | 543 kB | 488 kB | 82.9 kB | 248 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------ |
| **Latency** | 4 ms  | 5 ms  | 13 ms | 5.97 ms | 3.2 ms | 156 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 12679   | 12679   | 20719   | 21199   | 19946.55 | 2346.22 | 12679   |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.91 MB | 1.95 MB | 1.83 MB  | 216 kB  | 1.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.32 ms | 1.39 ms | 112 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 6731   | 6731   | 9511   | 9815   | 9233.64 | 830.05  | 6728   |
| **Bytes/Sec** | 350 kB | 350 kB | 495 kB | 510 kB | 480 kB  | 43.2 kB | 350 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 8 ms  | 3.78 ms | 1.71 ms | 60 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 8187   | 8187   | 15319   | 16111  | 14630.2 | 2200.54 | 8187   |
| **Bytes/Sec** | 762 kB | 762 kB | 1.42 MB | 1.5 MB | 1.36 MB | 204 kB  | 761 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.31 ms | 1.48 ms | 62 ms |


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
| **Req/Sec**   | 1721   | 1721   | 2679   | 3105   | 2699.8 | 381.39  | 1721   |
| **Bytes/Sec** | 198 kB | 198 kB | 308 kB | 357 kB | 310 kB | 43.8 kB | 198 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.29 ms | 18.9 ms | 132 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1877   | 1877   | 3961    | 4195    | 3694.4  | 674.83 | 1877   |
| **Bytes/Sec** | 534 kB | 534 kB | 1.13 MB | 1.19 MB | 1.05 MB | 192 kB | 533 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.33 ms | 3.98 ms | 94 ms |


---

<p align="center">Generated 2020-10-06T00:14:09.096Z</p>