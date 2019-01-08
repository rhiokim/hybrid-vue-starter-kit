import Vue from 'vue'
import axios from 'axios'

import PouchDB from 'pouchdb'
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

/**
 * TODO: clean up and configuration
 */
Vue.db = Vue.prototype.$db = new PouchDB('../.pouch/haroo')
Vue.db.sync('http://localhost:5984/haroo', {
  live: true,
  retry: true
}).on('change', info => {
  console.log(info)
}).on('paused', err => {
  if (err) {}
}).on('active', function () {
}).on('denied', function (err) {
  if (err) {}
}).on('complete', function (info) {
}).on('error', function (err) {
  if (err) {}
})

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
