const sync = (context, params) => {
  context.commit('SYNC', { syncing: true, date: new Date() })
}

export default {
  sync
}
