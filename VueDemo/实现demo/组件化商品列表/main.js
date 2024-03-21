import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 封装全局指令 focus   自动聚焦
Vue.directive('focus',{
  // 指令所在的dom元素，被插入道页面中时触发
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
