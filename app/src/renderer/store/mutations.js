
const SYNC = (state) => {
  state.syncing = true
}
const SYNCED = (state, info) => {
  state.syncing = false
  state.sync = info
}

const FETCHED_DOCS = (state, rows) => {
  state.docs = rows
}

const CREATED_DOC = (state, doc) => {
  state.doc = doc
}

export default {
  SYNC,
  SYNCED,
  FETCHED_DOCS,
  CREATED_DOC
}
