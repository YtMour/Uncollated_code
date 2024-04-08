<script setup>
import s1 from '@/components/s1.vue'
import s2 from '@/components/s2.vue'

// import { reactive } from 'vue'
// import { ref, computed, watch } from 'vue'


// //  reactive 接收了一个对象类型的数据,返回一个响应式的对象
// const state = reactive({
//   count: 100
// })
// const setCount = () => {
//   state.count++
// }
// // ref: 接收简单类型 或 复杂类型，返回一个响应式的对象
// // 本质 在原有的数据上，外包一层对象，实现复杂类型   再借助reactice 实现响应式
// // 1.在脚本中访问数据, 需要通过   .value
// // 2.在template中,   .value不用加(自动拔一层)
// const count = ref(0)
// const setCount2 = () => {
//   count.value++
// }
// // 推荐: 声明数据 , 统一用ref => 统一了编码规范,且更灵活
// const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
// const computedList = computed(() => {
//   return list.value.filter(item => item > 2)
// })
// const addFn = () => {
//   list.value.push(66)
// }
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
console.log(counterStore)
import { useChannelStore } from '@/store/channel'
const channelStore = useChannelStore()

import { storeToRefs } from 'pinia'
const { channelList } = storeToRefs(channelStore)
const { getList } = channelStore


</script>

<template>
  <div>
    <!-- <div>{{ state.count }}</div>
    <button @click="setCount">+1</button>

    <div>{{ count }}</div>
    <button @click="setCount2">+1</button>

    <div>原始数据:{{ list }}</div>
    <div>计算后:{{ computedList }}</div>
    <button @click="addFn" type="button">修改</button>
    <hr> -->
    <div>我是根组件 - {{ counterStore.count }} - {{ counterStore.msg }}</div>
    <s1></s1>
    <s2></s2>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
