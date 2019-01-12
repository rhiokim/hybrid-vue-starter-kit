const PouchCore = require('pouchdb-core')
const Auth = require('pouchdb-authentication')
const HTTP = require('pouchdb-adapter-http')
const MapReduce = require('pouchdb-mapreduce')

const PouchDB = PouchCore.plugin(HTTP)
  .plugin(Auth)
  .plugin(MapReduce)

const db = new PouchDB('http://127.0.0.1:5984/haroo', { skip_setup: true })

db.logOut((err, response) => {
  console.log(err, response)
  if (err) {
    if (err.name === 'unauthorized' || err.name === 'forbidden') {
      // name or password incorrect
    } else {
      // cosmic rays, a meteor, etc.
    }
  }
})
