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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Req/Sec**   | 4147   | 4147   | 6915   | 7391   | 6735.6 | 897.26 | 4144   |
| **Bytes/Sec** | 323 kB | 323 kB | 540 kB | 577 kB | 525 kB | 70 kB  | 323 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 4 ms  | 5 ms  | 11 ms | 5.37 ms | 2.23 ms | 51 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 12719   | 12719   | 19151   | 20463   | 18824.41 | 2109.33 | 12714   |
| **Bytes/Sec** | 1.17 MB | 1.17 MB | 1.76 MB | 1.88 MB | 1.73 MB  | 194 kB  | 1.17 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 1 ms  | 1 ms  | 4 ms  | 1.46 ms | 1.3 ms | 69 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ |
| **Req/Sec**   | 10039  | 10039  | 13951  | 14223  | 13508  | 1133.51 | 10034  |
| **Bytes/Sec** | 522 kB | 522 kB | 726 kB | 740 kB | 702 kB | 59 kB   | 522 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 2 ms  | 2 ms  | 6 ms  | 2.32 ms | 1.4 ms | 52 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- |
| **Req/Sec**   | 12207   | 12207   | 18431   | 18927   | 17862.91 | 1833.37 | 12203   |
| **Bytes/Sec** | 1.14 MB | 1.14 MB | 1.71 MB | 1.76 MB | 1.66 MB  | 170 kB  | 1.13 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 1.88 ms | 1.31 ms | 97 ms |


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
| **Req/Sec**   | 1691   | 1691   | 2813   | 3321   | 2782.8 | 446.53  | 1691   |
| **Bytes/Sec** | 195 kB | 195 kB | 324 kB | 382 kB | 320 kB | 51.3 kB | 194 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev    | Max    |
| ----------- | ----- | ----- | ----- | -------- | -------- | ------ |
| **Latency** | 0 ms  | 5 ms  | 51 ms | 13.87 ms | 18.77 ms | 135 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 1778   | 1778   | 3979    | 4081    | 3645.9  | 728.66 | 1778   |
| **Bytes/Sec** | 505 kB | 505 kB | 1.13 MB | 1.16 MB | 1.04 MB | 207 kB | 505 kB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | -------- | ------- | ------ |
| **Latency** | 8 ms  | 9 ms  | 20 ms | 10.49 ms | 4.67 ms | 216 ms |


---

<p align="center">Generated 2020-10-05T00:13:07.287Z</p>