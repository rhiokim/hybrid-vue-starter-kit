import Vue from 'vue'
import axios from 'axios'

import PouchDB from 'pouchdb'
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.db = Vue.prototype.$db = new PouchDB('../.pouch/haroo')
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
