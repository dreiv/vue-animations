import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/Drawer.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/Cards.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
