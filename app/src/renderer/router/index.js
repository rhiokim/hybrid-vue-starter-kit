import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/LandingPage').default
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: require('@/views/Preferences').default
    },
    {
      path: '/new',
      name: 'new',
      component: require('@/views/New').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
