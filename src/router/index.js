import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import ContactPage from "@/views/Conatct.vue";
import authentication from "@/views/Authentication.vue"
import login from "@/components/authentication/LogInComp.vue"
import register from "@/components/authentication/Register.vue"
import AppLayoutDefault from '../layout/AppLayoutDefault.vue'
import AppLayoutHedearLess from '../layout/AppLayoutHeaderLess.vue'
import AppLayoutDashbord from '../layout/AppLayoutDashboard.vue'
import DashboardHome from '../views/Dashboard.vue'
import maindashboard from '../components/DashboardFolder/MainDashboard.vue'



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
    path: '/authentication',
    component: authentication,
    meta: {
      layout: AppLayoutHedearLess
    },
    children : [
      {
        path : 'login',
        component : login,
       
      },
      {
        path: 'register',
        component: register
      }
    ]
  },
  {
    path: '/dashboard',
    component: DashboardHome,
    meta: {
      layout: AppLayoutDashbord
    },
    children : [
      {
        path : 'maindashboard',
        component : maindashboard,
       
      }
    ]
  }



]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router