import PouchCore from 'pouchdb-core'
import Auth from 'pouchdb-authentication'
import HTTP from 'pouchdb-adapter-http'
import MapReduce from 'pouchdb-mapreduce'

import { DB_HOST, DatabasePrefix } from '@/modules/constants.js'
import { toHex } from '@/modules/utils.js'

const PouchDB = PouchCore.plugin(HTTP)
  .plugin(Auth)
  .plugin(MapReduce)

const DB_NAME = `${DatabasePrefix}-${toHex('batman')}`

/**
 * couchperuser
 * - https://www.titrias.com/how-to-pouchdb-couchdb-database-per-user-made-simple/
 */
export default new PouchDB(`${DB_HOST}/${DB_NAME}`, {
  auth: {
    username: 'batman',
    password: '1234'
  },
  skip_setup: false
})
