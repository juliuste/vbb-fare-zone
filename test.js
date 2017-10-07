'use strict'

const tape = require('tape')
const farezone = require('./index')

tape('vbb-fare-zone', (t) => {
	t.plan(8)
	farezone('900000026202').then((res) => { // U Kaiserdamm
		t.ok(res.id === '5555', 'Kaiserdamm zone id')
		t.ok(res.name === 'Berlin A', 'Kaiserdamm zone name')
	}).catch((err) => {throw new Error(err)})
	farezone('900000009202').then((res) => { // U Osloer Str.
		t.ok(res.id === '5656', 'Osloer Str. zone id')
		t.ok(res.name === 'Berlin B', 'Osloer Str. zone name')
	}).catch((err) => {throw new Error(err)})
	farezone('900000321435').then((res) => { // Gorgast, Bhf
		t.ok(res.id === '5473', 'Gorgast zone id')
		t.ok(res.name === 'Golzow (MOL)', 'Gorgast zone name')
	}).catch((err) => {throw new Error(err)})
	farezone('900000230000').then((res) => { // S Babelsberg
		t.ok(res.id === '5851', 'Babelsberg zone id')
		t.ok(res.name === 'Potsdam AB', 'Babelsberg zone name')
	}).catch((err) => {throw new Error(err)})
})
