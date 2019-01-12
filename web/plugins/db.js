import Vue from 'vue'

import PouchCore from 'pouchdb-core'
import HTTP from 'pouchdb-adapter-http'
import MapReduce from 'pouchdb-mapreduce'

const PouchDB = PouchCore.plugin(HTTP).plugin(MapReduce)

export default ({ app }, inject) => {
  inject('db', new PouchDB('http://127.0.0.1:5984/haroo'))
}
