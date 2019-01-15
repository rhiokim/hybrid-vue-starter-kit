import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'

import actions from '@/store/actions.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import states from '@/store/states.js'

import modules from '@/store/modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  mutations,
  actions,
  states,
  modules,
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})

export default store
