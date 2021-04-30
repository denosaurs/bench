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
  - [oak](#oak)
  - [pogo](#pogo)
  - [reno](#reno)
  - [opine](#opine)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| ------------- | ----------- | --------- |
| deno          | 50272       | 502746    |
| node          | 22874       | 228736    |
| fastify       | 22715.28    | 249850    |
| http          | 18239.6     | 182389    |
| oak           | 16567.6     | 165694    |
| aqua          | 14589.6     | 145890    |
| express       | 14043.8     | 140445    |
| drash         | 12288.6     | 122871    |
| mandarinets   | 11092.2     | 110919    |
| abc           | 10535.8     | 105361    |
| dinatra       | 8246.55     | 90703     |
| reno          | 7627.1      | 83889     |
| tinyhttp      | 6886.4      | 68860     |
| little_native | 5553.3      | 55529     |
| little_std    | 5553.3      | 55529     |
| opine         | 4445.7      | 44444     |
| pogo          | 0           | 0         |

## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.

| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total  |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------ |
| **Req/Sec**   | 7275   | 7275   | 11023   | 11615   | 10535.8 | 1209.26 | 7274   | 105361 |
| **Bytes/Sec** | 677 kB | 677 kB | 1.03 MB | 1.08 MB | 980 kB  | 112 kB  | 676 kB | 9.8 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms | 3 ms | 5 ms  | 3.28 ms | 1.17 ms | 51 ms |

### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno

| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10823  | 10823  | 15055   | 15087   | 14589.6 | 1259.87 | 10822  | 145890  |
| **Bytes/Sec** | 996 kB | 996 kB | 1.39 MB | 1.39 MB | 1.34 MB | 116 kB  | 996 kB | 13.4 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms | 2 ms | 3 ms  | 2.17 ms | 0.81 ms | 55 ms |

### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 39711   | 39711   | 49855   | 54687   | 50272   | 4141.71 | 39704   | 502746  |
| **Bytes/Sec** | 3.53 MB | 3.53 MB | 4.44 MB | 4.87 MB | 4.47 MB | 368 kB  | 3.53 MB | 44.7 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms | 0 ms | 1 ms  | 0.29 ms | 0.53 ms | 14 ms |

### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 6127   | 6127   | 8431   | 8679   | 8246.55 | 684.75  | 6124   | 90703   |
| **Bytes/Sec** | 318 kB | 318 kB | 438 kB | 451 kB | 429 kB  | 35.7 kB | 318 kB | 4.72 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg    | Stdev  | Max   |
| ----------- | ---- | ---- | ----- | ------ | ------ | ----- |
| **Latency** | 3 ms | 4 ms | 8 ms  | 4.4 ms | 1.4 ms | 30 ms |

### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8043   | 8043   | 12767  | 12911   | 12288.6 | 1419.73 | 8042   | 122871  |
| **Bytes/Sec** | 692 kB | 692 kB | 1.1 MB | 1.11 MB | 1.06 MB | 122 kB  | 692 kB | 10.6 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms | 3 ms | 5 ms  | 2.93 ms | 1.05 ms | 57 ms |

### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 6075    | 6075    | 15095   | 15319   | 14043.8 | 2710.8 | 6075    | 140445  |
| **Bytes/Sec** | 1.31 MB | 1.31 MB | 3.26 MB | 3.31 MB | 3.03 MB | 585 kB | 1.31 MB | 30.3 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms | 2 ms | 5 ms  | 2.3 ms | 1.31 ms | 32 ms |

### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%  | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------ | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 11359   | 11359   | 23935   | 24703  | 22715.28 | 3646.48 | 11353   | 249850  |
| **Bytes/Sec** | 1.75 MB | 1.75 MB | 3.69 MB | 3.8 MB | 3.5 MB   | 562 kB  | 1.75 MB | 38.5 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms | 1 ms | 3 ms  | 1.26 ms | 1.04 ms | 24 ms |

### [http](https://deno.land/std/http)

> Deno standard library

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 12439  | 12439  | 18799  | 19247 | 18239.6 | 1946.54 | 12438  | 182389  |
| **Bytes/Sec** | 647 kB | 647 kB | 977 kB | 1 MB  | 948 kB  | 101 kB  | 647 kB | 9.48 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev | Max   |
| ----------- | ---- | ---- | ----- | ------- | ----- | ----- |
| **Latency** | 1 ms | 1 ms | 4 ms  | 1.59 ms | 1 ms  | 46 ms |

### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box
> with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3295   | 3295   | 5863   | 5951   | 5553.3 | 773.61  | 3295   | 55529   |
| **Bytes/Sec** | 303 kB | 303 kB | 540 kB | 547 kB | 511 kB | 71.2 kB | 303 kB | 5.11 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms | 6 ms | 12 ms | 6.65 ms | 1.93 ms | 39 ms |

### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box
> with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3295   | 3295   | 5863   | 5951   | 5553.3 | 773.61  | 3295   | 55529   |
| **Bytes/Sec** | 303 kB | 303 kB | 540 kB | 547 kB | 511 kB | 71.2 kB | 303 kB | 5.11 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms | 6 ms | 12 ms | 6.65 ms | 1.93 ms | 39 ms |

### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, decorator-driven, MVC framework for Deno.

| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7855   | 7855   | 10991   | 12367   | 11092.2 | 1223.73 | 7853   | 110919  |
| **Bytes/Sec** | 731 kB | 731 kB | 1.02 MB | 1.15 MB | 1.03 MB | 114 kB  | 730 kB | 10.3 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms | 3 ms | 6 ms  | 3.21 ms | 1.04 ms | 59 ms |

### [node](https://nodejs.org)

> Node.js JavaScript runtime

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 13535   | 13535   | 23759   | 24719   | 22874   | 3136.75 | 13528   | 228736  |
| **Bytes/Sec** | 1.52 MB | 1.52 MB | 2.66 MB | 2.77 MB | 2.56 MB | 352 kB  | 1.52 MB | 25.6 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev  | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------ | ----- |
| **Latency** | 0 ms | 1 ms | 3 ms  | 1.27 ms | 0.9 ms | 23 ms |

### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕

| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------ | ------- | ------- |
| **Req/Sec**   | 11991   | 11991   | 17071   | 17327   | 16567.6 | 1551.3 | 11986   | 165694  |
| **Bytes/Sec** | 1.56 MB | 1.56 MB | 2.22 MB | 2.25 MB | 2.15 MB | 202 kB | 1.56 MB | 21.5 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms | 2 ms | 3 ms  | 2.11 ms | 0.69 ms | 21 ms |

### [pogo](https://deno.land/x/pogo)

> Pogo is an easy-to-use, safe, and expressive framework for writing webservers
> and applications.

| **Stat**      | 1%  | 2.5% | 50% | 95.5% | Avg | Stdev | Min | Total |
| ------------- | --- | ---- | --- | ----- | --- | ----- | --- | ----- |
| **Req/Sec**   | 0   | 0    | 0   | 0     | 0   | 0     | 0   | 0     |
| **Bytes/Sec** | 0 B | 0 B  | 0 B | 0 B   | 0 B | 0 B   | 0 B | 0 B   |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg  | Stdev | Max  |
| ----------- | ---- | ---- | ----- | ---- | ----- | ---- |
| **Latency** | 0 ms | 0 ms | 0 ms  | 0 ms | 0 ms  | 0 ms |

### [reno](https://deno.land/x/reno)

> A thin, testable routing library designed to sit on top of Deno's standard
> HTTP module

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 4867   | 4867   | 7907   | 8131   | 7627.1 | 895.11  | 4864   | 83889   |
| **Bytes/Sec** | 380 kB | 380 kB | 617 kB | 634 kB | 595 kB | 69.8 kB | 379 kB | 6.54 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ---- | ---- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms | 4 ms | 9 ms  | 4.69 ms | 1.91 ms | 110 ms |

### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3139   | 3139   | 4547   | 4855   | 4445.7 | 467.16  | 3139   | 44444   |
| **Bytes/Sec** | 484 kB | 484 kB | 700 kB | 748 kB | 684 kB | 71.8 kB | 483 kB | 6.84 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 7 ms | 8 ms | 13 ms | 8.48 ms | 2.34 ms | 98 ms |

### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.

| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4671   | 4671   | 7151   | 7351   | 6886.4 | 767.38 | 4671   | 68860   |
| **Bytes/Sec** | 622 kB | 622 kB | 951 kB | 978 kB | 916 kB | 102 kB | 621 kB | 9.16 MB |

| **Stat**    | 2.5% | 50%  | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ---- | ---- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms | 5 ms | 9 ms  | 5.19 ms | 1.73 ms | 63 ms |

---

<p align="center">Generated 2021-04-29T07:47:55.573Z</p>
