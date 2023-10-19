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

# Table of Contents

- [Overview](#overview)
  - [Hello, bench!](#hello-bench)
- [Frameworks](#frameworks)
  - [Abc](#abc)
  - [Acorn](#acorn)
  - [Alosaur](#alosaur)
  - [Aqua](#aqua)
  - [Bun](#bun)
  - [Cheetah](#cheetah)
  - [Danet (Oak)](#danet-oak)
  - [Deno](#deno)
  - [Deso](#deso)
  - [Dinatra](#dinatra)
  - [Express](#express)
  - [Express (Deno)](#express-deno)
  - [Fast](#fast)
  - [Fastify](#fastify)
  - [Fastro](#fastro)
  - [Hono](#hono)
  - [http](#http)
  - [Hyper Express](#hyper-express)
  - [Little](#little)
  - [Megalo](#megalo)
  - [NHttp](#nhttp)
  - [Node](#node)
  - [Oak](#oak)
  - [Opine](#opine)
  - [Peko](#peko)
  - [Reno](#reno)
  - [Router](#router)
  - [Stric](#stric)
  - [Servest](#servest)
  - [Vixeny (Deno)](#vixeny-deno)
- [Benchmarks](#benchmarks)
  - [Hello, bench!](#hello-bench-1)
    - [Abc](#abc-1)
    - [Acorn](#acorn-1)
    - [Alosaur](#alosaur-1)
    - [Aqua](#aqua-1)
    - [Bun](#bun-1)
    - [Cheetah](#cheetah-1)
    - [Danet (Oak)](#danet-oak-1)
    - [Deno](#deno-1)
    - [Deso](#deso-1)
    - [Dinatra](#dinatra-1)
    - [Express](#express-1)
    - [Express (Deno)](#express-deno-1)
    - [Fast](#fast-1)
    - [Fastify](#fastify-1)
    - [Fastro](#fastro-1)
    - [Hono](#hono-1)
    - [http](#http-1)
    - [Hyper Express](#hyper-express-1)
    - [Little](#little-1)
    - [Megalo](#megalo-1)
    - [NHttp](#nhttp-1)
    - [Node](#node-1)
    - [Oak](#oak-1)
    - [Opine](#opine-1)
    - [Peko](#peko-1)
    - [Reno](#reno-1)
    - [Router](#router-1)
    - [Stric](#stric-1)
    - [Servest](#servest-1)
    - [Vixeny (Deno)](#vixeny-deno-1)

# Overview

## Hello, bench!

> Requests per second

| Framework                                                                            | Mean     | Stddev   | Max       | Relative |
| ------------------------------------------------------------------------------------ | -------- | -------- | --------- | -------- |
| Megalo                                                                               | 67286.48 | 10029.32 | 73743.55  | 100%     |
| Deso                                                                                 | 66808.93 | 10151.49 | 72049.56  | 99%      |
| Fast                                                                                 | 66787.64 | 17714.72 | 79074.92  | 99%      |
| NHttp                                                                                | 66569.90 | 20604.47 | 85592.31  | 99%      |
| Vixeny (Deno)                                                                        | 66558.34 | 18192.44 | 79632.78  | 99%      |
| Fastro                                                                               | 65885.34 | 16960.97 | 77204.68  | 98%      |
| Hono                                                                                 | 63523.04 | 17657.24 | 76036.84  | 94%      |
| Bun                                                                                  | 61647.78 | 13015.18 | 98845.52  | 92%      |
| Deno                                                                                 | 60937.22 | 17783.47 | 80233.32  | 91%      |
| Stric                                                                                | 60527.47 | 10547.50 | 86294.42  | 90%      |
| Hyper Express                                                                        | 57331.71 | 14066.25 | 85220.67  | 85%      |
| Cheetah                                                                              | 56084.63 | 7647.86  | 60438.14  | 83%      |
| Reno                                                                                 | 55631.21 | 5577.97  | 58997.99  | 83%      |
| Node                                                                                 | 40801.87 | 6505.84  | 45220.50  | 61%      |
| http                                                                                 | 39852.57 | 9006.38  | 49172.58  | 59%      |
| Fastify                                                                              | 35759.34 | 6136.40  | 38574.07  | 53%      |
| Alosaur                                                                              | 31878.69 | 6809.57  | 65692.81  | 47%      |
| Router                                                                               | 29294.21 | 5022.75  | 35114.24  | 44%      |
| Aqua                                                                                 | 27035.89 | 4267.40  | 32689.81  | 40%      |
| Oak                                                                                  | 26012.04 | 5181.68  | 31477.39  | 39%      |
| Little                                                                               | 25937.41 | 4456.50  | 33735.96  | 39%      |
| Dinatra                                                                              | 22369.89 | 4398.84  | 28439.70  | 33%      |
| Abc                                                                                  | 21155.84 | 3397.52  | 25576.37  | 31%      |
| Danet (Oak)                                                                          | 18507.20 | 3611.53  | 25254.71  | 28%      |
| Express (Deno)                                                                       | 11846.17 | 2395.23  | 14816.22  | 18%      |
| Opine                                                                                | 11583.59 | 1909.96  | 16308.32  | 17%      |
| Express                                                                              | 7352.74  | 1716.73  | 13314.66  | 11%      |
| Servest                                                                              | 7317.66  | 2430.78  | 12163.97  | 11%      |
| Acorn                                                                                | 4918.93  | 7499.71  | 128196.91 | 7%       |
| Peko                                                                                 | 0.00     | 0.00     | 0.00      | 0%       |
| ![Chart](https://quickchart.io/chart/render/sf-b1191bee-8668-4247-b3ef-8701a128de99) |          |          |           |          |

# Frameworks

## [Abc](https://deno.land/x/abc)

A better Deno framework to create web application

## [Acorn](https://deno.land/x/acorn)

A focused RESTful server framework for Deno 🌰🦕

## [Alosaur](https://deno.land/x/alosaur)

Deno web framework with many decorators

## [Aqua](https://deno.land/x/aqua)

A minimal and fast 🏃 web framework for Deno

## [Bun](https://bun.sh/)

Bun is a fast all-in-one JavaScript runtime

## [Cheetah](https://github.com/azurystudio/cheetah)

🐈 A blazing fast framework for the modern web.

## [Danet (Oak)](https://docs.danet.land/)

The most mature backend framework for Deno

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript

## [Deso](https://github.com/gothammm/deso)

A simple & fast HTTP web framework for Deno

## [Dinatra](https://github.com/syumai/dinatra)

Sinatra like light weight web app framework for deno.

## [Express](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js

## [Express (Deno)](https://expressjs.com/)

Fast, unopinionated, minimalist web framework for Node.js, run on Deno

## [Fast](https://deno.land/x/fast)

Small web framework with near-native performance.

## [Fastify](https://www.fastify.io/)

Fast and low overhead web framework, for Node.js

## [Fastro](https://fastro.dev)

Fast and simple web application framework for deno

## [Hono](https://github.com/honojs/hono)

Ultrafast web framework for Cloudflare Workers and Deno. Fast, but not only
fast.

## [http](https://deno.land/std/http)

The deno standard library http server

## [Hyper Express](https://github.com/kartikk221/hyper-express)

High performance Node.js webserver with a simple-to-use API powered by
uWebsockets.js under the hood.

## [Little](https://deno.land/x/little)

A minimalistic connect-like web framework. Automatically works out of the box
with Deno Deploy, Deno's Native HTTP and Deno's Standard HTTP server.

## [Megalo](https://github.com/tsar-boomba/megalo)

Deno HTTP server framework focused on speed

## [NHttp](https://github.com/nhttp/nhttp)

An Simple web-framework for Deno and Friends

## [Node](https://nodejs.org/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## [Oak](https://deno.land/x/oak)

A middleware framework for Deno's native HTTP server, Deno Deploy and Node.js
16.5 and later. It also includes a middleware router.

## [Opine](https://deno.land/x/opine)

Fast, minimalist web framework for Deno ported from ExpressJS.

## [Peko](https://peko.deno.dev)

Featherweight server/router framework + middleware and handler library 🐣

## [Reno](https://deno.land/x/reno)

A thin, testable routing library designed to sit on top of Deno's standard HTTP
module.

## [Router](https://crux.land/router@0.0.12)

The tiny, modern and fast router by the denosaurs for deno and deno deploy. Used
by projects like fresh

## [Stric](https://bun.sh/docs/ecosystem/stric)

Stric is a minimalist, fast web framework for Bun.

## [Servest](https://servestjs.org/)

🌾A progressive http server for Deno🌾

## [Vixeny (Deno)](https://github.com/mimiMonads/functor)

A pure functional web framework

# Benchmarks

## Hello, bench!

A simple benchmark which expects a response simply containing the text
"`Hello, Bench!`"

### [Abc](#abc)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 21155.84 | 3397.52 | 25576.37 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 17948.68 | 20812.17 | 21862.13 | 22602.75 | 24281.92 | 24723.33 | 25280.86 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Acorn](#acorn)

| **Stat** | Mean    | Stddev    | Max |
| -------- | ------- | --------- | --- |
| 4918.93  | 7499.71 | 128196.91 |     |

| **Stat**    | 10    | 25    | 50      | 75      | 90      | 95       | 99       |
| ----------- | ----- | ----- | ------- | ------- | ------- | -------- | -------- |
| **Req/Sec** | 55.01 | 99.54 | 3556.66 | 7291.32 | 9847.27 | 11163.64 | 24538.14 |
| **Latency** | 5ms   | 7ms   | 15ms    | 22ms    | 27ms    | 29ms     | 32ms     |

### [Alosaur](#alosaur)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 31878.69 | 6809.57 | 65692.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 26642.12 | 29504.16 | 34594.89 | 35620.03 | 36222.48 | 36637.94 | 37699.10 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Aqua](#aqua)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 27035.89 | 4267.40 | 32689.81 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 24906.52 | 26106.83 | 28422.21 | 29171.21 | 29684.79 | 30116.28 | 31973.51 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Bun](#bun)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 61647.78 | 13015.18 | 98845.52 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 47010.95 | 51122.34 | 59601.96 | 74819.67 | 77553.65 | 78867.32 | 84197.61 |
| **Latency** | 467µs    | 596µs    | 719µs    | 996µs    | 1ms      | 1ms      | 1ms      |

### [Cheetah](#cheetah)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 56084.63 | 7647.86 | 60438.14 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 54022.39 | 57383.08 | 58301.19 | 58913.48 | 59316.59 | 59518.36 | 59899.96 |
| **Latency** | 759µs    | 824µs    | 856µs    | 886µs    | 998µs    | 1ms      | 2ms      |

### [Danet (Oak)](#danet-oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 18507.20 | 3611.53 | 25254.71 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 16020.39 | 18227.23 | 19484.84 | 20336.46 | 20803.58 | 21403.96 | 22577.88 |
| **Latency** | 2ms      | 2ms      | 2ms      | 2ms      | 3ms      | 3ms      | 6ms      |

### [Deno](#deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60937.22 | 17783.47 | 80233.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 31544.62 | 45504.05 | 69540.10 | 76111.33 | 77226.23 | 77727.83 | 78541.20 |
| **Latency** | 522µs    | 605µs    | 695µs    | 768µs    | 1ms      | 1ms      | 1ms      |

### [Deso](#deso)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66808.93 | 10151.49 | 72049.56 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 63528.45 | 68731.49 | 69855.63 | 70606.20 | 71157.07 | 71380.50 | 71796.49 |
| **Latency** | 631µs    | 671µs    | 708µs    | 746µs    | 822µs    | 886µs    | 1ms      |

### [Dinatra](#dinatra)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 22369.89 | 4398.84 | 28439.70 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 20277.08 | 20924.19 | 24037.39 | 25105.59 | 25425.21 | 26025.27 | 27494.58 |
| **Latency** | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      | 3ms      | 5ms      |

### [Express](#express)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7352.74  | 1716.73 | 13314.66 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99      |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| **Req/Sec** | 5206.86 | 5642.67 | 8413.73 | 8614.31 | 8711.68 | 8752.53 | 8805.20 |
| **Latency** | 5ms     | 5ms     | 5ms     | 6ms     | 9ms     | 10ms    | 14ms    |

### [Express (Deno)](#express-deno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11846.17 | 2395.23 | 14816.22 |     |

| **Stat**    | 10      | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | ------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 9024.07 | 11702.07 | 12611.26 | 13118.83 | 13348.65 | 13579.91 | 13936.62 |
| **Latency** | 3ms     | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 10ms     |

### [Fast](#fast)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66787.64 | 17714.72 | 79074.92 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29123.81 | 68921.20 | 75820.64 | 76922.93 | 77558.14 | 77970.58 | 78411.57 |
| **Latency** | 572µs    | 612µs    | 655µs    | 707µs    | 838µs    | 1ms      | 1ms      |

### [Fastify](#fastify)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 35759.34 | 6136.40 | 38574.07 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 35626.80 | 36635.18 | 37308.54 | 37877.61 | 38095.96 | 38207.21 | 38360.57 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Fastro](#fastro)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 65885.34 | 16960.97 | 77204.68 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 28800.24 | 70431.15 | 74045.68 | 74914.28 | 75635.59 | 76008.22 | 76547.51 |
| **Latency** | 596µs    | 635µs    | 669µs    | 703µs    | 842µs    | 1ms      | 1ms      |

### [Hono](#hono)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 63523.04 | 17657.24 | 76036.84 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 27726.04 | 65373.95 | 72809.83 | 73945.10 | 74646.27 | 74940.89 | 75373.86 |
| **Latency** | 606µs    | 646µs    | 681µs    | 723µs    | 980µs    | 1ms      | 1ms      |

### [http](#http)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 39852.57 | 9006.38 | 49172.58 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23029.70 | 37945.81 | 44609.34 | 45747.05 | 46335.65 | 46704.59 | 47205.72 |
| **Latency** | 989µs    | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Hyper Express](#hyper-express)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 57331.71 | 14066.25 | 85220.67 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 39324.39 | 42549.83 | 58129.66 | 69163.25 | 76647.67 | 79327.06 | 83590.94 |
| **Latency** | 510µs    | 606µs    | 740µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Little](#little)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 25937.41 | 4456.50 | 33735.96 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23407.92 | 25615.12 | 27015.14 | 28270.95 | 28729.76 | 29204.95 | 29932.88 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 3ms      |

### [Megalo](#megalo)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 67286.48 | 10029.32 | 73743.55 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 64027.96 | 69233.37 | 70306.47 | 71050.78 | 71617.93 | 71935.28 | 72325.35 |
| **Latency** | 629µs    | 674µs    | 707µs    | 736µs    | 796µs    | 894µs    | 1ms      |

### [NHttp](#nhttp)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66569.90 | 20604.47 | 85592.31 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29339.18 | 53316.13 | 79154.24 | 80439.84 | 81134.91 | 81511.00 | 82093.08 |
| **Latency** | 515µs    | 583µs    | 633µs    | 691µs    | 1ms      | 1ms      | 2ms      |

### [Node](#node)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 40801.87 | 6505.84 | 45220.50 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 40213.81 | 41753.90 | 42400.99 | 42945.99 | 43385.18 | 43618.03 | 44262.56 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 3ms      |

### [Oak](#oak)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 26012.04 | 5181.68 | 31477.39 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 23715.52 | 25570.33 | 27664.21 | 28551.14 | 29076.51 | 29545.53 | 30592.21 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 2ms      | 4ms      |

### [Opine](#opine)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 11583.59 | 1909.96 | 16308.32 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 10279.22 | 11336.48 | 12140.22 | 12475.32 | 12685.28 | 13171.18 | 14171.12 |
| **Latency** | 3ms      | 3ms      | 4ms      | 4ms      | 5ms      | 5ms      | 8ms      |

### [Peko](#peko)

| **Stat** | Mean | Stddev | Max |
| -------- | ---- | ------ | --- |
| 0.00     | 0.00 | 0.00   |     |

| **Stat**    | 10   | 25   | 50   | 75   | 90   | 95   | 99   |
| ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **Req/Sec** | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| **Latency** | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  | 0ms  |

### [Reno](#reno)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 55631.21 | 5577.97 | 58997.99 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 55109.12 | 56212.96 | 56731.81 | 57237.16 | 57750.55 | 58022.37 | 58381.48 |
| **Latency** | 781µs    | 850µs    | 887µs    | 913µs    | 948µs    | 1ms      | 1ms      |

### [Router](#router)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 29294.21 | 5022.75 | 35114.24 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 25384.30 | 28478.62 | 31159.69 | 31945.42 | 32541.22 | 32951.66 | 34101.59 |
| **Latency** | 1ms      | 1ms      | 1ms      | 1ms      | 1ms      | 2ms      | 3ms      |

### [Stric](#stric)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 60527.47 | 10547.50 | 86294.42 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 48194.94 | 52160.12 | 58299.32 | 69443.30 | 75637.33 | 79413.15 | 82519.04 |
| **Latency** | 455µs    | 585µs    | 741µs    | 1ms      | 1ms      | 1ms      | 1ms      |

### [Servest](#servest)

| **Stat** | Mean    | Stddev   | Max |
| -------- | ------- | -------- | --- |
| 7317.66  | 2430.78 | 12163.97 |     |

| **Stat**    | 10      | 25      | 50      | 75      | 90      | 95      | 99       |
| ----------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| **Req/Sec** | 4078.81 | 6235.34 | 8167.79 | 8804.48 | 9417.32 | 9672.20 | 11913.51 |
| **Latency** | 3ms     | 5ms     | 6ms     | 8ms     | 10ms    | 14ms    | 18ms     |

### [Vixeny (Deno)](#vixeny-deno)

| **Stat** | Mean     | Stddev   | Max |
| -------- | -------- | -------- | --- |
| 66558.34 | 18192.44 | 79632.78 |     |

| **Stat**    | 10       | 25       | 50       | 75       | 90       | 95       | 99       |
| ----------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| **Req/Sec** | 29427.86 | 63678.71 | 76405.94 | 77622.71 | 78305.20 | 78644.65 | 79105.26 |
| **Latency** | 538µs    | 605µs    | 656µs    | 710µs    | 972µs    | 1ms      | 1ms      |

---

<p align="center">Generated 2023-10-19T01:25:16.843Z</p>
