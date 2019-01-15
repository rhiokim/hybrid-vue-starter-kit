import DB from '@/modules/db.js'

export const state = () => ({
  counter: 0,
  total_rows: 0,
  offset: 0,
  docs: []
})

export const actions = {
  GET_ALL_DOCS(context) {
    DB.allDocs({
      include_docs: true,
      limit: 10
    })
      .then(response => {
        context.commit('FETCHED_DOCS', response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

/**
 * getters with parameters - https://github.com/nuxt/nuxt.js/issues/2723
 */
export const getters = {
  docs: state => state.docs,
  total_rows: state => state.total_rows
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  FETCHED_DOCS(state, payload) {
    state.docs = payload.rows
    state.total_rows = payload.total_rows
    state.offset = payload.offset
  }
}
