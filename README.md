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
| **Req/Sec**   | 4139   | 4139   | 6915   | 7163   | 6682   | 853.88  | 4139   |
| **Bytes/Sec** | 323 kB | 323 kB | 540 kB | 559 kB | 521 kB | 66.5 kB | 323 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------ | ------------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.49 ms | 2.1 ms | 40.426901 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ |
| **Req/Sec**   | 13071  | 13071  | 19503   | 20319   | 18958.19 | 1944.59 | 13071  |
| **Bytes/Sec** | 1.2 MB | 1.2 MB | 1.79 MB | 1.87 MB | 1.74 MB  | 179 kB  | 1.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.44 ms | 1.14 ms | 78.101149 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 7659   | 7659   | 10127  | 10487  | 9928.6 | 786.19  | 7657   |
| **Bytes/Sec** | 398 kB | 398 kB | 526 kB | 545 kB | 516 kB | 40.8 kB | 398 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------------ |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.4 ms | 1.35 ms | 29.072842 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 14343   | 14343   | 20287   | 21727   | 19754.55 | 1793.87 | 14341   |
| **Bytes/Sec** | 1.33 MB | 1.33 MB | 1.89 MB | 2.02 MB | 1.84 MB  | 167 kB  | 1.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.36 ms | 0.92 ms | 24.125197 ms |


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
| **Req/Sec**   | 1666   | 1666   | 3081   | 3269   | 2891.3 | 456.47  | 1666   |
| **Bytes/Sec** | 192 kB | 192 kB | 354 kB | 376 kB | 332 kB | 52.5 kB | 192 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.34 ms | 18.37 ms | 114.807727 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1928   | 1928   | 3709    | 3917    | 3525.82 | 544.2  | 1928   |
| **Bytes/Sec** | 548 kB | 548 kB | 1.05 MB | 1.11 MB | 1 MB    | 155 kB | 548 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------------ |
| **Latency** | 8 ms  | 10 ms | 19 ms | 10.85 ms | 4.84 ms | 260.04188 ms |


---

<p align="center">Generated 2020-09-12T13:33:55.527Z</p>