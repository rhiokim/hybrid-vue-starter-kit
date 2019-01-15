import DB from '@/modules/db.js'
import { DB_HOST, DatabasePrefix } from '@/modules/constants.js'
import { toHex } from '@/modules/utils.js'

const DB_NAME = `${DatabasePrefix}-${toHex('batman')}`

const { local, remote } = new DB({
  local: `../.pouchdb/${DB_NAME}`,
  remote: {
    url: `${DB_HOST}/${DB_NAME}`,
    auth: {
      username: 'batman',
      password: '1234'
    },
    skip_setup: false
  }
})

const sync = (context, params) => {
  context.commit('SYNC')
  local.sync(remote)
    .on('change', function (info) {
    // handle change
    }).on('paused', function (err) {
      console.log(err)
    // replication paused (e.g. replication up to date, user went offline)
    }).on('active', function () {
    // replicate resumed (e.g. new changes replicating, user went back online)
    }).on('denied', function (err) {
      console.log(err)
    // a document failed to replicate (e.g. due to permissions)
    }).on('complete', function (info) {
      context.commit('SYNCED', info)
      getDocs(context)
    // handle complete
    }).on('error', function (err) {
      console.log(err)
    // handle error
    })
}

const getDocs = (context) => {
  local.allDocs({
    include_docs: true,
    limit: 10
  }).then(result => {
    context.commit('FETCHED_DOCS', result.rows)
  }).catch(err => {
    console.log(err)
  })
}

const postDoc = (context, doc) => {
  local.post(doc)
    .then(function (response) {
      context.commit('CREATED_DOC', { ...response, ...doc })
      getDocs(context)
    }).catch(function (err) {
      console.log(err)
    })
}

export default {
  sync,
  getDocs,
  postDoc
}
