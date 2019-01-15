import Vue from 'vue'
import db from '@/modules/db.js'

/**
 * To access db instance with asyncData method for ssr
 */
export default ({ app }, inject) => {
  inject('db', db)
}
