import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Index,
        meta: {
          title: '首页',
          index: 1
        }
      }
    ]
  })