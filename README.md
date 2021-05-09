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
  - [deno_canary](#deno_canary)
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
  - [opine](#opine)
  - [pogo](#pogo)
  - [reno](#reno)
  - [servest](#servest)
  - [tinyhttp](#tinyhttp)

## Overview

| **Framework** | **Average** | **Total** |
| --- | --- | --- |
| deno_canary | 41427.64 | 455729 |
| node | 40664 | 447268 |
| fastify | 35090.91 | 385981 |
| deno | 28225.6 | 282260 |
| http | 20248.41 | 202485 |
| alosaur | 15894 | 158937 |
| express | 15078 | 165845 |
| little_native | 12218.6 | 122194 |
| abc | 11924.8 | 119250 |
| drash | 11197 | 111970 |
| oak | 11098.6 | 110985 |
| reno | 10407.4 | 104064 |
| aqua | 10193.8 | 101936 |
| dinatra | 9243.1 | 101662 |
| mandarinets | 7678.37 | 84456 |
| tinyhttp | 5962.3 | 59627 |
| opine | 4753.9 | 47533 |
| servest | 3680.5 | 36799 |
| little_std | 3379.8 | 33792 |
| pogo | 0 | 0 |


## benchmark `bare`

### [abc](https://deno.land/x/abc)

> A better Deno framework to create web application.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 8255   | 8255   | 12247   | 12743   | 11924.8 | 1247.88 | 8255   | 119250  |
| **Bytes/Sec** | 768 kB | 768 kB | 1.14 MB | 1.19 MB | 1.11 MB | 116 kB  | 768 kB | 11.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------ | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.9 ms | 1.29 ms | 74 ms |


### [alosaur](https://deno.land/x/alosaur)

> Deno web framework with many decorators


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 10247  | 10247  | 16639   | 17103   | 15894   | 1934.26 | 10246  | 158937  |
| **Bytes/Sec** | 943 kB | 943 kB | 1.53 MB | 1.57 MB | 1.46 MB | 178 kB  | 943 kB | 14.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 1.07 ms | 66 ms |


### [aqua](https://deno.land/x/aqua)

> A minimal and fast 🏃 web framework for Deno


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5% | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ----- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7279   | 7279   | 10439  | 10887 | 10193.8 | 1004.39 | 7276   | 101936  |
| **Bytes/Sec** | 670 kB | 670 kB | 960 kB | 1 MB  | 938 kB  | 92.4 kB | 669 kB | 9.38 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 3 ms  | 5 ms  | 3.38 ms | 1.38 ms | 78 ms |


### [deno](https://deno.land/)

> A secure runtime for JavaScript and TypeScript


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 20767   | 20767   | 28607   | 30847   | 28225.6 | 2854.83 | 20758   | 282260  |
| **Bytes/Sec** | 1.85 MB | 1.85 MB | 2.55 MB | 2.75 MB | 2.51 MB | 254 kB  | 1.85 MB | 25.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 1 ms  | 2 ms  | 0.97 ms | 0.88 ms | 32 ms |


### [deno_canary](https://deno.land/)

> The current canary build of deno


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg      | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | -------- | ------- | ------- | ------- |
| **Req/Sec**   | 31551   | 31551   | 43039   | 43519   | 41427.64 | 3427.34 | 31547   | 455729  |
| **Bytes/Sec** | 2.81 MB | 2.81 MB | 3.83 MB | 3.87 MB | 3.69 MB  | 305 kB  | 2.81 MB | 40.6 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 1 ms  | 0.34 ms | 0.67 ms | 38 ms |


### [dinatra](https://github.com/syumai/dinatra)

> Sinatra like light weight web app framework for deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7635   | 7635   | 9399   | 9727   | 9243.1 | 535.06  | 7634   | 101662  |
| **Bytes/Sec** | 397 kB | 397 kB | 489 kB | 506 kB | 481 kB | 27.8 kB | 397 kB | 5.29 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 3 ms  | 4 ms  | 7 ms  | 3.82 ms | 1.27 ms | 25 ms |


### [drash](https://deno.land/x/drash)

> A REST microframework for Deno's HTTP server with zero dependencies.


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 7087   | 7087   | 11703   | 11943   | 11197  | 1379.37 | 7086   | 111970  |
| **Bytes/Sec** | 610 kB | 610 kB | 1.01 MB | 1.03 MB | 963 kB | 119 kB  | 609 kB | 9.63 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 3.18 ms | 1.56 ms | 65 ms |


### [express](https://expressjs.com/)

> Fast, unopinionated, minimalist web framework for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 6575    | 6575    | 15903   | 16479   | 15078   | 2721.74 | 6575    | 165845  |
| **Bytes/Sec** | 1.42 MB | 1.42 MB | 3.43 MB | 3.56 MB | 3.26 MB | 588 kB  | 1.42 MB | 35.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 2 ms  | 4 ms  | 2.18 ms | 1.19 ms | 29 ms |


### [fastify](https://www.fastify.io/)

> Fast and low overhead web framework, for Node.js


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5% | Avg      | Stdev  | Min     | Total   |
| ------------- | ------- | ------- | ------- | ----- | -------- | ------ | ------- | ------- |
| **Req/Sec**   | 21151   | 21151   | 35327   | 38975 | 35090.91 | 5011.3 | 21145   | 385981  |
| **Bytes/Sec** | 3.26 MB | 3.26 MB | 5.44 MB | 6 MB  | 5.4 MB   | 772 kB | 3.26 MB | 59.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.49 ms | 0.82 ms | 22 ms |


### [http](https://deno.land/std/http)

> Deno standard library


| **Stat**      | 1%     | 2.5%   | 50%     | 95.5%   | Avg      | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------- | ------- | -------- | ------- | ------ | ------- |
| **Req/Sec**   | 14607  | 14607  | 20847   | 21807   | 20248.41 | 1968.68 | 14601  | 202485  |
| **Bytes/Sec** | 759 kB | 759 kB | 1.08 MB | 1.13 MB | 1.05 MB  | 102 kB  | 759 kB | 10.5 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 1 ms  | 1 ms  | 3 ms  | 1.27 ms | 0.91 ms | 26 ms |


### [little_native](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 8095    | 8095    | 12727   | 12927   | 12218.6 | 1384.02 | 8095    | 122194  |
| **Bytes/Sec** | 1.04 MB | 1.04 MB | 1.64 MB | 1.67 MB | 1.58 MB | 179 kB  | 1.04 MB | 15.8 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 5 ms  | 2.96 ms | 0.97 ms | 29 ms |


### [little_std](https://deno.land/x/little)

> A minimalistic connect-like web framework. Automatically works out of the box with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2125   | 2125   | 3533   | 3715   | 3379.8 | 451.56  | 2125   | 33792   |
| **Bytes/Sec** | 196 kB | 196 kB | 325 kB | 342 kB | 311 kB | 41.5 kB | 196 kB | 3.11 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 9 ms  | 10 ms | 20 ms | 11.4 ms | 3.17 ms | 73 ms |


### [mandarinets](https://deno.land/x/mandarinets)

> A minimalist, 
decorator-driven, 
MVC framework for Deno.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 4671   | 4671   | 8075   | 8183   | 7678.37 | 974.52  | 4668   | 84456   |
| **Bytes/Sec** | 434 kB | 434 kB | 751 kB | 761 kB | 714 kB  | 90.7 kB | 434 kB | 7.85 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------- | ------- | ------ |
| **Latency** | 4 ms  | 4 ms  | 8 ms  | 4.64 ms | 1.72 ms | 103 ms |


### [node](https://nodejs.org)

> Node.js JavaScript runtime


| **Stat**      | 1%      | 2.5%    | 50%     | 95.5%   | Avg     | Stdev   | Min     | Total   |
| ------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec**   | 25807   | 25807   | 42399   | 44031   | 40664   | 4917.48 | 25793   | 447268  |
| **Bytes/Sec** | 2.89 MB | 2.89 MB | 4.75 MB | 4.93 MB | 4.55 MB | 551 kB  | 2.89 MB | 50.1 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 0 ms  | 0 ms  | 2 ms  | 0.34 ms | 0.69 ms | 23 ms |


### [oak](https://deno.land/x/oak)

> A middleware framework for Deno's net server 🐿️ 🦕


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%   | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7015   | 7015   | 11535  | 11887   | 11098.6 | 1406.62 | 7013   | 110985  |
| **Bytes/Sec** | 912 kB | 912 kB | 1.5 MB | 1.55 MB | 1.44 MB | 183 kB  | 912 kB | 14.4 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 6 ms  | 3.17 ms | 1.13 ms | 44 ms |


### [opine](https://deno.land/x/opine)

> Fast, minimalist web framework for Deno ported from ExpressJS.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 3513   | 3513   | 4903   | 5139   | 4753.9 | 471.98  | 3512   | 47533   |
| **Bytes/Sec** | 541 kB | 541 kB | 755 kB | 791 kB | 732 kB | 72.7 kB | 541 kB | 7.32 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 6 ms  | 7 ms  | 13 ms | 7.93 ms | 2.35 ms | 62 ms |


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


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg     | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------- | ------- | ------ | ------- |
| **Req/Sec**   | 7295   | 7295   | 10703  | 11175  | 10407.4 | 1064.08 | 7292   | 104064  |
| **Bytes/Sec** | 569 kB | 569 kB | 835 kB | 871 kB | 812 kB  | 83.1 kB | 569 kB | 8.12 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg     | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | ------- | ------- | ----- |
| **Latency** | 2 ms  | 3 ms  | 7 ms  | 3.35 ms | 1.46 ms | 35 ms |


### [servest](https://servestjs.org/)

> 🌾A progressive http server for Deno🌾


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev   | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------- | ------ | ------- |
| **Req/Sec**   | 2667   | 2667   | 3241   | 4995   | 3680.5 | 753.89  | 2667   | 36799   |
| **Bytes/Sec** | 307 kB | 307 kB | 373 kB | 574 kB | 423 kB | 86.7 kB | 307 kB | 4.23 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg      | Stdev   | Max   |
| ----------- | ----- | ----- | ----- | -------- | ------- | ----- |
| **Latency** | 0 ms  | 3 ms  | 48 ms | 10.39 ms | 17.2 ms | 81 ms |


### [tinyhttp](https://deno.land/x/tinyhttp)

> Deno port of tinyhttp, 0-legacy, tiny & fast web framework.


| **Stat**      | 1%     | 2.5%   | 50%    | 95.5%  | Avg    | Stdev  | Min    | Total   |
| ------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- |
| **Req/Sec**   | 4061   | 4061   | 6151   | 6427   | 5962.3 | 653.65 | 4061   | 59627   |
| **Bytes/Sec** | 540 kB | 540 kB | 818 kB | 855 kB | 793 kB | 87 kB  | 540 kB | 7.93 MB |


| **Stat**    | 2.5%  | 50%   | 95.5% | Avg    | Stdev   | Max    |
| ----------- | ----- | ----- | ----- | ------ | ------- | ------ |
| **Latency** | 3 ms  | 6 ms  | 11 ms | 6.2 ms | 2.45 ms | 112 ms |


---

<p align="center">Generated 2021-05-09T00:47:35.397Z</p>
