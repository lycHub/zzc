import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    { path: '*', redirect: '/home'}
  ]
})

export default router
