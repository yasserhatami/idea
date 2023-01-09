import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import ContactPage from "@/views/Conatct.vue";
import authentication from "@/views/Authentication.vue"
import AppLayoutDefault from '../layout/AppLayoutDefault.vue'
import AppLayoutHedearLess from '../layout/AppLayoutHeaderLess.vue'


const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      layout: AppLayoutDefault
    }
  },

  {
    path: '/about',
    component: AboutPage,
    meta: {
      layout: AppLayoutHedearLess
    }
  },

  {
    path: '/contact', component: ContactPage,
    meta: {
      layout: AppLayoutHedearLess
    }
  },

  
  {
    path: '/authentication', component: authentication,
    meta: {
      layout: AppLayoutHedearLess
    }
  },



]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router