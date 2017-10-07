'use strict'

const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const parser = require('cheerio')
const isString = require('lodash.isstring')

const fetchPage = (id) => fetch(`http://fahrinfo.bvg.de/Fahrinfo/bin/stboard.bin/en?view=STATIONINFO&start=&lang=en&REQ0JourneyStopsSID=A=1@L=${id}@p=1507202607@`).then((res) => res.text())

const extractData = (html) => {
    const $ = parser.load(html)
    const zoneString = $('p').filter((i, el) => $(el).text().slice(0, 14) === '\nTariff area: ').first().text().slice(14, -1)
    const splitPoint = zoneString.lastIndexOf('(')
    const name = zoneString.slice(0, splitPoint-1)
    const id = zoneString.slice(splitPoint+1, -1)
    return ({name, id})
}

const farezone = (id) => {
    if(!id || !isString(id) || id.length !== 12 || id[0] !== '9'){
        throw new Error('missing or invalid `id` parameter')
    }
    id = id[0]+''+id.slice(4)
    return fetchPage(id)
    .then(extractData)
    .catch((err) => {
        console.error(err)
        throw new Error(`station ${id} not found`)
    })
}

module.exports = farezone
