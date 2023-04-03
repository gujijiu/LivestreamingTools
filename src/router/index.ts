// import { createRouter, createWebHashHistory } from 'vue-router'
// import Index from '@/views/Index.vue'
// import Subtitle from '@/pages/Subtitle/index.vue'

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//       {
//         path: '/',
//         redirect: '/home'
//       },
//       {
//         path: '/home',
//         name: 'Home',
//         component: Index,
//         meta: {
//           title: '首页',
//           index: 1
//         }
//       },
//       {
//         path: '/Subtitle',
//         name: 'Subtitle',
//         component: Subtitle,
//         meta: {
//           title: '字幕组件',
//           index: 2
//         }
//       }
//     ]
//   })

// export default router

import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象
Index.displayName = 'Index';
const routes: RouteRecordRaw[] = [
 { path: '/', redirect: '/home' },
 { path: '/home', name: 'Index', component: () => Index,},
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router