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
| **Req/Sec**   | 3777   | 3777   | 7103   | 7239   | 6767.5 | 1009.07 | 3776   |
| **Bytes/Sec** | 295 kB | 295 kB | 554 kB | 565 kB | 528 kB | 78.7 kB | 295 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.45 ms | 2.17 ms | 42.622893 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14815   | 14815   | 21871   | 24063   | 21242   | 2332.21 | 14812   |
| **Bytes/Sec** | 1.36 MB | 1.36 MB | 2.01 MB | 2.21 MB | 1.95 MB | 215 kB  | 1.36 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max         |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----------- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.34 ms | 1.02 ms | 57.52173 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------ | ------ |
| **Req/Sec**   | 7975   | 7975   | 10143  | 10623  | 9907.46 | 673.73 | 7975   |
| **Bytes/Sec** | 415 kB | 415 kB | 527 kB | 552 kB | 515 kB  | 35 kB  | 415 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 3 ms  | 3 ms  | 7 ms  | 3.42 ms | 1.31 ms | 28.422701 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 10487  | 10487  | 16479   | 17263   | 16033.1 | 1786.47 | 10481  |
| **Bytes/Sec** | 975 kB | 975 kB | 1.53 MB | 1.61 MB | 1.49 MB | 166 kB  | 975 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.19 ms | 1.21 ms | 72.510026 ms |


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
| **Req/Sec**   | 1814   | 1814   | 2855   | 2981   | 2761.28 | 313.73  | 1814   |
| **Bytes/Sec** | 209 kB | 209 kB | 328 kB | 343 kB | 317 kB  | 36.1 kB | 209 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 13.98 ms | 18.58 ms | 105.262115 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2743   | 2743   | 4627    | 5003    | 4490.5  | 624.77 | 2743   |
| **Bytes/Sec** | 779 kB | 779 kB | 1.31 MB | 1.42 MB | 1.28 MB | 177 kB | 779 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 6 ms  | 8 ms  | 15 ms | 8.42 ms | 3.62 ms | 210.017612 ms |


---

<p align="center">Generated 2020-09-13T00:12:29.983Z</p>