import PouchDB from 'pouchdb'
import Auth from 'pouchdb-authentication'

import actions from './db/actions.js'
import mutations from './db/mutations.js'
import states from './db/states.js'

/**
 * TODO: clean up and configuration
 */
PouchDB.plugin(Auth)

const PouchDBPlugin = {
  install: (Vue, { store, local, remote }) => {
    if (!store) {
      throw new Error('Please provide vuex store.')
    }

    store.registerModule('pouchdb', { states, mutations, actions })

    /**
   * options {
   *  local: '../.pouch/db_name',
   *  remote: 'http://localhost:5984/db_name'
   * }
   */
    if (!local) {
      throw new Error('required local path')
    }
    if (!remote) {
      throw new Error('required remote path')
    }

    /**
     * couchperuser
     * - https://www.titrias.com/how-to-pouchdb-couchdb-database-per-user-made-simple/
     */
    const localDB = new PouchDB(local)
    const remoteDB = new PouchDB(remote.url, {
      auth: remote.auth,
      skip_setup: remote.skip_setup
    })

    Object.defineProperties(Vue.prototype, {
      $local: {
        get () {
          return localDB
        }
      },
      $remote: {
        get () {
          return remoteDB
        }
      },
      $db: {
        get () {
          return {
            sync: () => {
              store.commit('SYNC', { syncing: true })

              PouchDB.sync(localDB, remoteDB)
                .on('change', function (info) {
                  console.log('change', info)
                  // handle change
                }).on('paused', function (err) {
                  console.log('paused', err)
                  // replication paused (e.g. replication up to date, user went offline)
                }).on('active', function () {
                  console.log('active')
                  // replicate resumed (e.g. new changes replicating, user went back online)
                }).on('denied', function (err) {
                  console.log('denied', err)
                  // a document failed to replicate (e.g. due to permissions)
                }).on('complete', function (info) {
                  store.commit('SYNCED', info)
                  console.log('complete', info)
                  // handle complete
                }).on('error', function (err) {
                  console.log('error', err)
                  // handle error
                })
            }
          }
        }
      }
    })

    // Vue.db = {}
    // Vue.db.local = Vue.prototype.$local = localDB
    // Vue.db.remote = Vue.prototype.$remote = remoteDB
  }
}

export default PouchDBPlugin
