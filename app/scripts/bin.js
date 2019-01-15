#!/usr/bin/env node

const argv = require('optimist').argv
const Promise = require('bluebird')
const nano = require('nano')('http://haroo:haroo@localhost:5984')

const views = require('./views/docs')
const metas = require('./docs/meta')

function newUser (dbname) {
  nano.db.create(dbname, function (err, res) {
    if (!err) {
      const db = nano.use(dbname)
      console.log('database %s created!', dbname)

      Object.keys(views).forEach(function (key) {
        db.insert(views[key], key, function (err, body) {
          if (!err) {
            console.log('created view %s', key)
          }
        })
      })
    }
  })
}

function destoryDb () {
  nano.db.destroy(argv.db, function (err, res) {
    if (!err || err.errid === 'non_200') {
      console.log('database %s destory!', argv.db)
    }
  })
}

if (argv.db) {
  newUser(argv.db)
}
