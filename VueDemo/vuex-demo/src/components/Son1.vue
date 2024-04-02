<template>
    <div class="box">
      <h2>Son1 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br>
      <button @click="handleAdd(1)">值 + 1</button>
      <button @click="handleAdd(5)">值 + 5</button>
      <button @click="handleAdd(10)">值 + 10</button>
      <button @click="chengefn('YT')">改标题</button>
      <button @click="chengefn('标题')">改标题</button>
      <button @click="chengefn('无')">改标题</button>
      <hr>
      <div>{{ $store.state.list }}</div>
      <div>{{ $store.getters.filterList }}</div>
      <hr>
      <!-- 测试访问模块中的state 原生 -->
      <div>{{ $store.state.user.userInfo.name }}</div>
      <button @click="updataUser">更新个人信息</button>
      <button @click="updataUser2">1 秒后更新信息</button>
      <div>{{ $store.state.setting.theme }}</div>
      <button @click="updataTheme">更新主题</button>
      <button @click="updataTheme2">1 秒后更新主题</button>
      <hr>
      <!-- 访问getters 原生 -->
      <div>{{ $store.getters['user/UpperCaseName'] }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleAdd (n) {
      // mutation函数传参 `this.$store.commit('xxx', 参数)`
      // 只能传递一个参数，传递多个参数，需要包装成一个 对象 或 数组 来进行传输
      this.$store.commit('addCount', n)
    },
    chengefn (a) {
      this.$store.commit('changeTitle', a)
    },
    updataUser () {
      this.$store.commit('user/setUser', {
        name: 'Yt',
        age: 20
      })
    },
    updataTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    updataUser2 () {
      this.$store.dispatch('user/setUser2', {
        name: 'yanchi 1'
      })
    },
    updataTheme2 () {
      this.$store.dispatch('setting/setTheme2', 'qwer')
    }
  }
}

</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
