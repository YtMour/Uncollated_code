import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';
import Collect from "@/views/Collect";
import Like from "@/views/Like";
import User from "@/views/User";



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/', component:Layout, redirect:'/article',
      //通过 children配置项，来进行配置嵌套子路由
      // 1.在children配置项中，配规则
      // 2.准备二级路由出口
      children:[
        {path:'/article', component:Article},
        {path:'/Collect',component:Collect},
        {path:'/Like',component:Like},
        {path:'/User',component:User}
      ]
    },
    {path:'/detail', component:ArticleDetail},
    
  ]
})

export default router