
const SYNC = state => {
  state.syncing = true
}

const SYNCED = (state, info) => {
  state.syncing = false
  state.sync = info
}

export default {
  SYNC,
  SYNCED
}
