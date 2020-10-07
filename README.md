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
| **Req/Sec**   | 4699   | 4699   | 8671   | 8927   | 8291   | 1208.91 | 4696   |
| **Bytes/Sec** | 366 kB | 366 kB | 676 kB | 696 kB | 647 kB | 94.4 kB | 366 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ------- | ----- | ----- |
| **Latency** | 4 ms  | 4 ms  | 10 ms | 4.55 ms | 2 ms  | 62 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11631   | 11631   | 18719   | 19679   | 18244   | 2154.53 | 11624   |
| **Bytes/Sec** | 1.07 MB | 1.07 MB | 1.72 MB | 1.81 MB | 1.68 MB | 198 kB  | 1.07 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.6 ms | 1.27 ms | 62 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 7575   | 7575   | 10231  | 10719  | 9824.37 | 988.16  | 7575   |
| **Bytes/Sec** | 394 kB | 394 kB | 532 kB | 558 kB | 511 kB  | 51.4 kB | 394 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.54 ms | 1.61 ms | 52 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 9431   | 9431   | 15663   | 16167  | 15100  | 1920.15 | 9427   |
| **Bytes/Sec** | 877 kB | 877 kB | 1.46 MB | 1.5 MB | 1.4 MB | 179 kB  | 877 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.45 ms | 69 ms |


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
| **Req/Sec**   | 2015   | 2015   | 3169   | 4731   | 3319.1 | 876.14 | 2015   |
| **Bytes/Sec** | 232 kB | 232 kB | 365 kB | 544 kB | 382 kB | 101 kB | 232 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 11.54 ms | 17.62 ms | 108 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1813   | 1813   | 3919    | 4107    | 3645.1  | 654.68 | 1813   |
| **Bytes/Sec** | 515 kB | 515 kB | 1.11 MB | 1.17 MB | 1.03 MB | 186 kB | 515 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 10 ms | 20 ms | 10.49 ms | 4.41 ms | 105 ms |


---

<p align="center">Generated 2020-10-07T00:14:22.638Z</p>