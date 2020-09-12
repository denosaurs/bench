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
  - [drash](#drash)
  - [oak](#oak)
  - [servest](#servest)
  - [mandarinets](#mandarinets)

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 5951   | 5951   | 10071  | 10375  | 9663.4 | 1255.26 | 5951   |
| **Bytes/Sec** | 464 kB | 464 kB | 785 kB | 809 kB | 754 kB | 97.8 kB | 464 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.55 ms | 1.68 ms | 35.904017 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.
⚠️ Drash seems to have problems running in GH action...


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg    | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 19487   | 19487   | 25311   | 26207   | 24712  | 1811.58 | 19472   |
| **Bytes/Sec** | 1.81 MB | 1.81 MB | 2.35 MB | 2.44 MB | 2.3 MB | 169 kB  | 1.81 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.14 ms | 0.71 ms | 50.606787 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 1928   | 1928   | 2709   | 2909   | 2675.7 | 270.62  | 1928   |
| **Bytes/Sec** | 222 kB | 222 kB | 312 kB | 335 kB | 308 kB | 31.1 kB | 222 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.43 ms | 18.74 ms | 127.261962 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1994   | 1994   | 4009    | 4319    | 3795.3  | 682.8  | 1994   |
| **Bytes/Sec** | 567 kB | 567 kB | 1.14 MB | 1.23 MB | 1.08 MB | 194 kB | 566 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------------- |
| **Latency** | 8 ms  | 9 ms  | 18 ms | 10.04 ms | 4.71 ms | 225.874062 ms |


---

<p align="center">Generated 2020-09-12T00:09:58.923Z</p>