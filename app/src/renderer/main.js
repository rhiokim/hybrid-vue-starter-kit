import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router.js'
import store from './store.js'

// import DB from './plugins/db.js'
// import { toHex } from './modules/utils.js'
// import { DB_HOST, DatabasePrefix } from './modules/constants.js'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

// const DB_NAME = `${DatabasePrefix}-${toHex('batman')}`

// Vue.use(DB, {
//   store,
//   local: `../.pouchdb/${DB_NAME}`,
//   remote: {
//     url: `${DB_HOST}/${DB_NAME}`,
//     auth: {
//       username: 'batman',
//       password: '1234'
//     },
//     skip_setup: false
//   }
// })
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
