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
| **Req/Sec**   | 3775   | 3775   | 7063   | 7443   | 6743.3 | 1008.82 | 3775   |
| **Bytes/Sec** | 295 kB | 295 kB | 551 kB | 581 kB | 526 kB | 78.6 kB | 294 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.42 ms | 2.6 ms | 78 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- |
| **Req/Sec**   | 10879 | 10879 | 20223   | 20975   | 19434   | 2865.84 | 10876 |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.86 MB | 1.93 MB | 1.79 MB | 264 kB  | 1 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.35 ms | 1.2 ms | 47 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | -------- | ------- | ------ |
| **Req/Sec**   | 9735   | 9735   | 14239  | 14471  | 13777.82 | 1306.18 | 9728   |
| **Bytes/Sec** | 506 kB | 506 kB | 740 kB | 753 kB | 716 kB   | 68 kB   | 506 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.3 ms | 1.28 ms | 37 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 10439  | 10439  | 16167  | 17487   | 15790.91 | 1783.98 | 10433  |
| **Bytes/Sec** | 971 kB | 971 kB | 1.5 MB | 1.63 MB | 1.47 MB  | 166 kB  | 970 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.07 ms | 1.46 ms | 67 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 1533   | 1533   | 2607   | 3059   | 2595.81 | 430.25  | 1533   |
| **Bytes/Sec** | 176 kB | 176 kB | 300 kB | 352 kB | 299 kB  | 49.5 kB | 176 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | ------- | -------- | ----- |
| **Latency** | 0 ms  | 6 ms  | 51 ms | 14.9 ms | 18.92 ms | 85 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------ | ------ |
| **Req/Sec**   | 2707   | 2707   | 5671    | 5855    | 5295.3 | 911.93 | 2707   |
| **Bytes/Sec** | 769 kB | 769 kB | 1.61 MB | 1.66 MB | 1.5 MB | 259 kB | 769 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 5 ms  | 6 ms  | 14 ms | 7.07 ms | 3.72 ms | 199 ms |


---

<p align="center">Generated 2020-10-05T16:03:48.908Z</p>