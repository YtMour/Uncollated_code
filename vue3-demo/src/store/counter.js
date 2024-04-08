import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// 定义store
// defineStore(仓库的唯一标识,() => {...})


export const useCounterStore = defineStore('counter', ()=> {
// 声明数据 state - count
  const count = ref(1)
// 声明操作数据的方法 action(普通函数)
  const addCount = () => count.value++
  const delCount = () => count.value--

// 声明基于数据派生的计算属性 getters(computed)
const double = computed(() => count.value * 2)

// // 声明数据 state - msg
  const msg = ref('hello pinia')
  return {
    count,
    addCount,
    delCount,
    double,
    msg,
  }
},{
  persist: {
    key: 'Yt-key',
    paths: ['count']
  }
})
