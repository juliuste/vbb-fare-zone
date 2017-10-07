# vbb-fare-zone

Get fare zone information for given VBB stations. Scraper for [bvg.de](https://www.bvg.de), therefore **unstable** and not suited for production environments. **Actually, information like this should be open data published by VBB.**

[![npm version](https://img.shields.io/npm/v/vbb-fare-zone.svg)](https://www.npmjs.com/package/vbb-fare-zone)
[![Build Status](https://travis-ci.org/juliuste/vbb-fare-zone.svg?branch=master)](https://travis-ci.org/juliuste/vbb-fare-zone)
[![dependency status](https://img.shields.io/david/juliuste/vbb-fare-zone.svg)](https://david-dm.org/juliuste/vbb-fare-zone)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/vbb-fare-zone.svg)](https://david-dm.org/juliuste/vbb-fare-zone#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/vbb-fare-zone.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install --save vbb-fare-zone
```

## Usage

Takes the VBB station `id` as a single parameter (**only stations, not stops!**).

```js
const farezone = require('vbb-fare-zone')

farezone('900000026202').then(console.log) // U Kaiserdamm
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in an object which looks as follows:

```json
{
    "id": "5555",
    "name": "Berlin A"
}
```

**Important:** Please note that *Berlin C* is technically **not** a separate zone. Instead, stations in *Berlin C* will have zones line *Schönefeld* or *Potsdam AB*…

## See also

- [vbb-fare-zones](https://github.com/derhuerst/vbb-fare-zones) - "All VBB stations and their fare zones"

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/vbb-fare-zone/issues).
