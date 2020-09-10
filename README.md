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
| **Req/Sec**   | 4599   | 4599   | 8543   | 8743   | 8154.4 | 1198.36 | 4598   |
| **Bytes/Sec** | 359 kB | 359 kB | 666 kB | 682 kB | 636 kB | 93.5 kB | 359 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------- |
| **Latency** | 3 ms  | 4 ms  | 10 ms | 4.59 ms | 2.24 ms | 105.843727 ms |


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
| **Req/Sec**   | 9919   | 9919   | 16495   | 17279   | 15896.8 | 2033.98 | 9913   |
| **Bytes/Sec** | 922 kB | 922 kB | 1.53 MB | 1.61 MB | 1.48 MB | 189 kB  | 922 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max          |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------------ |
| **Latency** | 1 ms  | 2 ms  | 5 ms  | 2.22 ms | 1.21 ms | 62.565048 ms |


### [servest](https://deno.land/x/servest)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ |
| **Req/Sec**   | 1958   | 1958   | 2851   | 3337   | 2859.28 | 398.75  | 1958   |
| **Bytes/Sec** | 225 kB | 225 kB | 328 kB | 384 kB | 329 kB  | 45.8 kB | 225 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max           |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------------- |
| **Latency** | 0 ms  | 5 ms  | 49 ms | 13.47 ms | 18.43 ms | 105.032781 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1825   | 1825   | 3841    | 4063    | 3577.6  | 653.54 | 1825   |
| **Bytes/Sec** | 518 kB | 518 kB | 1.09 MB | 1.15 MB | 1.02 MB | 186 kB | 518 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max           |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------------- |
| **Latency** | 8 ms  | 10 ms | 21 ms | 10.71 ms | 4.76 ms | 239.104727 ms |


---

<p align="center">Generated 2020-09-10T00:10:57.722Z</p>