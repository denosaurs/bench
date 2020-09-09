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
| **Req/Sec**   | 3923   | 3923   | 6983   | 7383   | 6793.3 | 968.53  | 3923   |
| **Bytes/Sec** | 306 kB | 306 kB | 545 kB | 576 kB | 530 kB | 75.5 kB | 306 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.42 ms | 2.23 ms | 47.514633 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ |
| **Req/Sec**   | 8327   | 8327   | 15999   | 16751   | 15377.6 | 2370.72 | 8327   |
| **Bytes/Sec** | 775 kB | 775 kB | 1.49 MB | 1.56 MB | 1.43 MB | 220 kB  | 774 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.26 ms | 1.42 ms | 77.521509 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 1996   | 1996   | 2827   | 3161   | 2704.7 | 324.94  | 1996   |
| **Bytes/Sec** | 230 kB | 230 kB | 325 kB | 364 kB | 311 kB | 37.3 kB | 230 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | ------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 50 ms | 14.3 ms | 18.63 ms | 100.175244 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 2028   | 2028   | 4275    | 4523    | 3959.4  | 705.23 | 2028   |
| **Bytes/Sec** | 576 kB | 576 kB | 1.21 MB | 1.28 MB | 1.12 MB | 200 kB | 576 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------------- |
| **Latency** | 7 ms  | 9 ms  | 18 ms | 9.6 ms | 4.38 ms | 224.756576 ms |


---

<p align="center">Generated 2020-09-09T23:38:30.770Z</p>