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
| **Req/Sec**   | 5175   | 5175   | 9151   | 9415   | 8692.21 | 1203.61 | 5172   |
| **Bytes/Sec** | 403 kB | 403 kB | 714 kB | 734 kB | 678 kB  | 93.9 kB | 403 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.09 ms | 2.02 ms | 41 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 14927   | 14927   | 21519   | 25695   | 21800.37 | 2651.11 | 14925   |
| **Bytes/Sec** | 1.37 MB | 1.37 MB | 1.98 MB | 2.36 MB | 2.01 MB  | 244 kB  | 1.37 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.29 ms | 0.89 ms | 51 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 10847  | 10847  | 14503  | 14703  | 14053.6 | 1117.56 | 10843  |
| **Bytes/Sec** | 564 kB | 564 kB | 754 kB | 765 kB | 731 kB  | 58.1 kB | 564 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.29 ms | 44 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 8847   | 8847   | 15223   | 15535   | 14438.19 | 1826.78 | 8847   |
| **Bytes/Sec** | 823 kB | 823 kB | 1.42 MB | 1.44 MB | 1.34 MB  | 170 kB  | 823 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 2.33 ms | 1.41 ms | 46 ms |


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
| **Req/Sec**   | 1713   | 1713   | 2825   | 3209   | 2745.8 | 403.88  | 1713   |
| **Bytes/Sec** | 197 kB | 197 kB | 325 kB | 369 kB | 316 kB | 46.4 kB | 197 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max   |
| ----------- | ----- | ----- | ----- | -------- | -------- | ----- |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 14.03 ms | 18.65 ms | 94 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 2255   | 2255   | 5175    | 5291   | 4786    | 917.92 | 2255   |
| **Bytes/Sec** | 641 kB | 641 kB | 1.47 MB | 1.5 MB | 1.36 MB | 261 kB | 640 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ----- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8 ms  | 3.54 ms | 106 ms |


---

<p align="center">Generated 2020-10-03T00:13:31.285Z</p>