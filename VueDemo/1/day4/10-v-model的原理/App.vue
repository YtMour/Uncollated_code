<template>
  <div class="app">
    <input type="text" v-model="msg1"/>
    <!-- v-model  语法糖    例如应用在输入框中  是= :value + @input 的组合 合写
     数据发生变化 页面自动便 :value  页面输入改变 数据自动变 @input 实时赋值给原数据 msg-->
    <br />
    <!-- 在模板中获取事件的形参 -> $event 来进行获取 -->
    <input type="text" :value="msg2" @input="msg2 =$event.target.valu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2: '',
    }
  },
}
</script>

<style>
</style>