#!/usr/bin/env node
'use strict'
const initIt = require('@zkat/create')

initIt(process.cwd(), `${__dirname}/node_modules/@zkat/create/template`, {
  github: 'npm',
  copyright: 'npm, Inc',
  namespaces: ['npmcorp', 'npm']
})
console.log('* project initialized')
