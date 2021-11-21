import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import ('@/views/user/Login.vue')
  },
  {
    path: '/user/register',
    name: 'Register',
    component: () => import ('@/views/user/Register.vue')
  },
  {
    path: '/app/',
    name: 'App',
    component: () => import ('@/views/app/AppRender.vue'),
    children: [
      {
        path: 'users',
        name: 'Admins',
        component: () => import ('@/views/app/admin/Users.vue')
      },
      {
        path: 'update/:id',
        component: () => import ('@/views/app/admin/Update.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import ('@/views/error.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
