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

- [Overview](#overview)
- [benchmark bare](#benchmark-bare)
  - [abc](#abc)
  - [alosaur](#alosaur)
  - [aqua](#aqua)
  - [deno](#deno)
  - [dinatra](#dinatra)
  - [drash](#drash)
  - [express](#express)
  - [fastify](#fastify)
  - [http](#http)
  - [little_native](#little_native)
  - [little_std](#little_std)
  - [mandarinets](#mandarinets)
  - [node](#node)
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno | 38599.2 | 385997 |
| fastify | 34189.6 | 341904 |
| node | 24374 | 243728 |
| alosaur | 16468 | 164680 |
| http | 16028.8 | 160277 |
| dinatra | 15416.8 | 154157 |
| abc | 12792 | 127921 |
| aqua | 12771.2 | 127710 |
| drash | 12052.2 | 120516 |
| mandarinets | 10733 | 107306 |
| reno | 9539.4 | 95403 |
| express | 8652 | 86497 |
| tinyhttp | 5163.3 | 51625 |
| little_native | 4726.1 | 51975 |
| little_std | 4726.1 | 51975 |
| opine | 4392.9 | 43918 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 9335   | 9335   | 13191   | 13447   | 12792   | 1165.42 | 9328   | 127921  |
| **Bytes/Sec** | 868 kB | 868 kB | 1.23 MB | 1.25 MB | 1.19 MB | 109 kB  | 868 kB | 11.9 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.4 ms | 1.06 ms | 24 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 11119   | 11119   | 17167   | 17375  | 16468   | 1808.46 | 11112   | 164680  |
| **Bytes/Sec** | 1.02 MB | 1.02 MB | 1.58 MB | 1.6 MB | 1.52 MB | 167 kB  | 1.02 MB | 15.2 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.13 ms | 0.86 ms | 26 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------- |
| **Req/Sec**   | 8983   | 8983   | 13135   | 13375   | 12771.2 | 1269.8 | 8976   | 127710  |
| **Bytes/Sec** | 826 kB | 826 kB | 1.21 MB | 1.23 MB | 1.17 MB | 117 kB | 826 kB | 11.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 4 ms  | 2.43 ms | 1.07 ms | 59 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 27231   | 27231   | 40095   | 40447  | 38599.2 | 3882.44 | 27227   | 385997  |
| **Bytes/Sec** | 2.42 MB | 2.42 MB | 3.57 MB | 3.6 MB | 3.44 MB | 345 kB  | 2.42 MB | 34.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------ | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.4 ms | 0.7 ms | 21 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11655  | 11655  | 15831  | 16335  | 15416.8 | 1301.54 | 11648  | 154157  |
| **Bytes/Sec** | 606 kB | 606 kB | 823 kB | 850 kB | 802 kB  | 67.7 kB | 606 kB | 8.02 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 2 ms  | 5 ms  | 2.21 ms | 0.87 ms | 23 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8159   | 8159   | 12463   | 12735  | 12052.2 | 1310.88 | 8159   | 120516  |
| **Bytes/Sec** | 702 kB | 702 kB | 1.07 MB | 1.1 MB | 1.04 MB | 113 kB  | 702 kB | 10.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.05 ms | 1.05 ms | 46 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4335   | 4335   | 9031    | 9871    | 8652    | 1523.79 | 4332   | 86497   |
| **Bytes/Sec** | 936 kB | 936 kB | 1.95 MB | 2.13 MB | 1.87 MB | 329 kB  | 936 kB | 18.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 9 ms  | 4.09 ms | 1.88 ms | 38 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 18623   | 18623   | 35711  | 36415   | 34189.6 | 5199.19 | 18619   | 341904  |
| **Bytes/Sec** | 2.87 MB | 2.87 MB | 5.5 MB | 5.61 MB | 5.27 MB | 800 kB  | 2.87 MB | 52.7 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.6 ms | 0.87 ms | 26 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 11359  | 11359  | 16543  | 17439  | 16028.8 | 1720.83 | 11357  | 160277  |
| **Bytes/Sec** | 591 kB | 591 kB | 860 kB | 906 kB | 833 kB  | 89.4 kB | 591 kB | 8.33 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 6 ms  | 1.96 ms | 1.59 ms | 75 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2675   | 2675   | 5003   | 5067   | 4726.1 | 678.91  | 2674   | 51975   |
| **Bytes/Sec** | 246 kB | 246 kB | 460 kB | 466 kB | 435 kB | 62.5 kB | 246 kB | 4.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 15 ms | 7.8 ms | 2.36 ms | 45 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2675   | 2675   | 5003   | 5067   | 4726.1 | 678.91  | 2674   | 51975   |
| **Bytes/Sec** | 246 kB | 246 kB | 460 kB | 466 kB | 435 kB | 62.5 kB | 246 kB | 4.78 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 7 ms  | 7 ms  | 15 ms | 7.8 ms | 2.36 ms | 45 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6775   | 6775   | 11031   | 12239   | 10733  | 1398.89 | 6773   | 107306  |
| **Bytes/Sec** | 630 kB | 630 kB | 1.03 MB | 1.14 MB | 998 kB | 130 kB  | 630 kB | 9.98 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 6 ms  | 3.25 ms | 1.07 ms | 43 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%    | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------ | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 14359   | 14359   | 24991  | 27391   | 24374   | 3545.21 | 14352   | 243728  |
| **Bytes/Sec** | 1.61 MB | 1.61 MB | 2.8 MB | 3.07 MB | 2.73 MB | 397 kB  | 1.61 MB | 27.3 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 3 ms  | 1.22 ms | 1.07 ms | 50 ms |


### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework
for writing webservers and applications. 


| **Stat**      | 1%    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Min   | Total |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Req/Sec**   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| **Bytes/Sec** | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   | 0 B   |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg   | Stdev | Max   |
| ----------- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Latency** | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  | 0 ms  |


### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard HTTP module


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 6511   | 6511   | 9751   | 10263  | 9539.4 | 1071.95 | 6508   | 95403   |
| **Bytes/Sec** | 508 kB | 508 kB | 761 kB | 800 kB | 744 kB | 83.7 kB | 508 kB | 7.44 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 8 ms  | 3.63 ms | 1.73 ms | 49 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2999   | 2999   | 4503   | 4803   | 4392.9 | 483.97  | 2999   | 43918   |
| **Bytes/Sec** | 462 kB | 462 kB | 694 kB | 739 kB | 676 kB | 74.4 kB | 462 kB | 6.76 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------ | ----- |
| **Latency** | 7 ms  | 8 ms  | 13 ms | 8.63 ms | 2.1 ms | 84 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3443   | 3443   | 5271   | 5691   | 5163.3 | 614.58  | 3443   | 51625   |
| **Bytes/Sec** | 458 kB | 458 kB | 701 kB | 757 kB | 687 kB | 81.7 kB | 458 kB | 6.87 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 5 ms  | 7 ms  | 13 ms | 7.26 ms | 2.57 ms | 85 ms |


---

<p align="center">Generated 2021-05-04T11:48:56.763Z</p>
