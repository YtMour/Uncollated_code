<template>
  <!-- 主体区域 -->
  <section id="app">
    <ToHeader @add="handleAdd"></ToHeader>                                    
    <ToMain :list="list" @del="handleDel"></ToMain>
    <ToFooter :list="list" @clear="clear" ></ToFooter>
  </section>
</template>

<script>
import ToHeader from './components/ToHeader'
import ToMain from './components/ToMain'
import ToFooter from './components/ToFooter'

// 渲染功能：
// 1.提供数据->提供在公共的父组件 app.vue
// 2.通过父传子 将数据传递给 ToHeader.vue组件
// v-for渲染
// 添加
// 1.收集数据 ->v-model 
// 2.监听 事件(回车+点击)
// 3.传回,修改数据  子传父
// 4.进行添加 unshift 
// 删除
// 1.监听(监听删除的点击) 携带 id
// 2.返回id  进行删除 filter方法
// 清空
// 1, 子传父  通知到父组件 由父组件来清空
// 本地持久化
// 本地存储   watch深度监视list的变化-> 本地存储->一进页面优先读取
export default {
  data () {
    return {
      list:JSON.parse(localStorage.getItem('list')) ||[
        {
          id:1,
          name:'小明',
          
        },
        {
          id:2,
          name:'小红',
          
        },
        {
          id:3,
          name:'小红',
      
        }
      ]
    }
  },
  components:{
    ToHeader,
    ToMain,
    ToFooter
  },
  methods:{
    handleAdd(toName){
      this.list.unshift({
        id:this.list.length+1,
        name:toName
      })
    },
    handleDel(id){
      this.list=this.list.filter(item=>item.id!==id)
    },
    clear(){
      this.list=[]
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))

      }
    }
  }
}
</script>

<style> 

</style>
