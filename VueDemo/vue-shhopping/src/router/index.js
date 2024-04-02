import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'

const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const ProDetail = () => import('@/views/prodetail')
const Login = () => import('@/views/login')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'user',
          component: User
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})
// 所有的路由在真正被访问到之前，都会经过全局前置守卫
// 配置全局导航守卫
// 1. to 往哪里去，到哪去的路由信息对象(路径，参数)
// 2. from 从哪里来，从哪来的路由信息对象(路径，参数)
// 3. next() 是否放行
// 如果next()调用，就是放行
// next(路径) 拦截到某个路径页面
// 1. next() 直接放行，放行到to要去的路径
// 2. next(路径) 进行拦截，拦截到next里配置的路径

// 定义一个数组，专门存放所有需要权限访问的页面
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // 看to.path 是否在 authUrls 中出出现
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  // 是权限页面，判断 token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
  // console.log(token)
})
export default router
