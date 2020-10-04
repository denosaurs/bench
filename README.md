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
| **Req/Sec**   | 4015   | 4015   | 7043   | 7459   | 6772.28 | 907.01  | 4014   |
| **Bytes/Sec** | 313 kB | 313 kB | 549 kB | 582 kB | 528 kB  | 70.7 kB | 313 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.37 ms | 2.44 ms | 71 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 10127  | 10127  | 21023   | 22143   | 20011.28 | 3239.52 | 10124  |
| **Bytes/Sec** | 932 kB | 932 kB | 1.93 MB | 2.04 MB | 1.84 MB  | 298 kB  | 931 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.37 ms | 1.25 ms | 42 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 9647   | 9647   | 13991  | 14463  | 13460.8 | 1326.64 | 9643   |
| **Bytes/Sec** | 502 kB | 502 kB | 728 kB | 752 kB | 700 kB  | 69 kB   | 501 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.37 ms | 1.4 ms | 50 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%    | 2.5%  | 50%     | 95.5%   | Avg     | Stdev   | Min   |
| ------------- | ----- | ----- | ------- | ------- | ------- | ------- | ----- |
| **Req/Sec**   | 10799 | 10799 | 17807   | 18719   | 17237.2 | 2195.17 | 10792 |
| **Bytes/Sec** | 1 MB  | 1 MB  | 1.65 MB | 1.74 MB | 1.6 MB  | 204 kB  | 1 MB  |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 5 ms  | 1.73 ms | 1.47 ms | 67 ms |


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
| **Req/Sec**   | 1789   | 1789   | 3203   | 4115   | 3174.3 | 565.42 | 1789   |
| **Bytes/Sec** | 206 kB | 206 kB | 368 kB | 473 kB | 365 kB | 65 kB  | 206 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev | Max   |
| ----------- | ----- | ----- | ----- | -------- | ----- | ----- |
| **Latency** | 0 ms  | 4 ms  | 50 ms | 12.09 ms | 18 ms | 71 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2371   | 2371   | 4963    | 5167    | 4643.7  | 795.57 | 2370   |
| **Bytes/Sec** | 673 kB | 673 kB | 1.41 MB | 1.47 MB | 1.32 MB | 226 kB | 673 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 6 ms  | 7 ms  | 16 ms | 8.16 ms | 4.41 ms | 241 ms |


---

<p align="center">Generated 2020-10-04T00:12:59.902Z</p>