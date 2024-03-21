// import Find from './views/Find.vue'
// import My from './views/My.vue'
// import Friend from './views/Friend.vue'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
// 路由的步骤  5+2
// 1.下载 2.引入 3.安装注册vue.use 4.创建路由对象 5.注入到new Vue中，建立关联
// 1.创建需要的组件(views目录)，配置路由规则 2.配置导航，配置路由出口(路径匹配的组件显示的位置)
import VueRouter from 'vue-router'

import Vue from 'vue'

//插件初始化
Vue.use(VueRouter)
const router =new VueRouter({
   // 路由规则
  routes:[//前面是 路径   后面是组件名称
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
  ]
})


// 导出路由
export default router