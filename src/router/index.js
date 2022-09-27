import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BemVindo from '../views/BemVindo.vue'
// import FormPrincipal from '../views/FormPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'BemVindo',
    component: BemVindo
  },
  {
    path: '/principal',
    name: 'FormPrincipal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPrincipal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
