import { createRouter, createWebHistory } from 'vue-router'

// import pages
import HomePage from "@/views/Home.vue";
import AboutPage from "@/views/About.vue";
import ContactPage from "@/views/Conatct.vue";
import authentication from "@/views/Authentication.vue"
import DashboardHome from '../views/Dashboard.vue'
// import components
import login from "@/components/authentication/LogInComp.vue"
import register from "@/components/authentication/Register.vue"
import maindashboard from '@/components/DashboardFolder/MainDashboard.vue'
// import layouts
import AppLayoutDefault from '../layout/AppLayoutDefault.vue'
import AppLayoutHedearLess from '../layout/AppLayoutHeaderLess.vue'
import AppLayoutDashbord from '../layout/AppLayoutDashboard.vue'


import store from '@/store';



const routes = [
  {
    path: '/',

    name: 'Home',
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
    children: [
      {
        name: 'login',
        path: 'login',
        component: login,

      },
      {
        path: 'register',
        component: register
      }
    ]
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: DashboardHome,
    meta: {
      layout: AppLayoutDashbord,
      roles: ['admin', 'programer', 'owner']
    },
    children: [
      {

        name: 'maindashboard',
        path: 'maindashboard',
        component: maindashboard,
        beforeEnter: (to, from, next) => {
          if (store.state.auth.isAuthenticated) {
            let roles = Object.values(store.state.auth.user.roles);

            if (roles.includes('Programer')) {
              next()
            } else {
              next("/")
            }
          } else {
            next("/authentication/login")
          }
        }
      }
    ],


  }]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router