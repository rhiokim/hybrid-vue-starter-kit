import PouchDB from 'pouchdb'
import Auth from 'pouchdb-authentication'

PouchDB.plugin(Auth)

/**
 * couchperuser
 * - https://www.titrias.com/how-to-pouchdb-couchdb-database-per-user-made-simple/
 */

export default ({ local, remote }) => {
  const localDB = new PouchDB(local)
  const remoteDB = new PouchDB(remote.url, {
    auth: remote.auth,
    skip_setup: remote.skip_setup
  })

  return {
    local: localDB,
    remote: remoteDB
  }
}
