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
      path: '/main',
      name: 'main',
      component: require('@/views/Main').default
    },
    {
      path: '/signup',
      name: 'signup',
      component: require('@/views/SignUp').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/views/Login').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
