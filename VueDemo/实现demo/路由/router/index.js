// import Find from './views/Find.vue'
// import My from './views/My.vue'
// import Friend from './views/Friend.vue'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'

// 路由的步骤  5+2
// 1.下载 2.引入 3.安装注册vue.use 4.创建路由对象 5.注入到new Vue中，建立关联
// 1.创建需要的组件(views目录)，配置路由规则 2.配置导航，配置路由出口(路径匹配的组件显示的位置)
import VueRouter from 'vue-router'

import Vue from 'vue'

//插件初始化
Vue.use(VueRouter)
const router =new VueRouter({
  // 切换路由模式  分为hash(工程路径 带/#/home) 和 history(上线后 需要后端配置访问规则 正常路径/home)
  mode:"hash",
   // 路由规则
  routes:[//前面是 路径   后面是组件名称
  // 路由重定向，匹配path后强制跳转到后面的path路径
    {path:'/',redirect:'/home'},
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
    { path: '/home', component: Home },
    // 默认设置为  :参数名  表示必须要传参数，否则显示空白
    // 在:参数名后 加 ？ 表示参数可选
    {name: 'search', path: '/search/:words?', component: Search },
    
    // 在路由的最后配置， * 表示前面所有路由都没匹配上  启动NotFount组件   404界面
    {path:'*',component:NotFound}
  ],

  //link自定义高亮类名
  linkActiveClass:'active',//模糊匹配的类名
  linkExactActiveClass:'exact-active',//精确匹配的类名

})


// 导出路由
export default router