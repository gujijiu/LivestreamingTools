import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../views/Register.vue'
// import Subtitle from '@/pages/Subtitle/index.vue'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Index" */ '@/views/Index.vue'),
        meta: {
          title: '首页',
          index: 1
        }
      },
      {
        path:'/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
      },
      {
        path:'/register',
        name: 'Register',
        component: Register,
      }
    ]
  })

export default router

// import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
// import Index from '../views/Index.vue'
// import Login from '../views/Login.vue'

// //由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
// //RouterRecordRaw是路由组件对象
// Index.displayName = 'Index';
// Login.displayName = 'Login';
// const routes: RouteRecordRaw[] = [
// //  { path: '/', redirect: '/home' },
//  { path: '/home', name: 'Index', component: () => Index,},
//  { path: '/login', name: 'Login', component: () => Login,},
// ]

// // RouterOptions是路由选项类型
// const options: RouterOptions = {
//  history: createWebHashHistory(),
//  routes,
// }

// // Router是路由对象类型
// const router: Router = createRouter(options)

// export default router