import * as VueRouter from 'vue-router'
import WelcomeView from '../views/WecolmeView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'WelcomeView',
    component: WelcomeView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
