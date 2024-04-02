<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值: {{ count }}<label></label>
      <br />
      <button @click="subCount(1)">值 - 1</button>
      <button @click="subCount(5)">值 - 5</button>
      <button @click="subCount(10)">值 - 10</button>
      <button @click="chengeCountAction(666)">在 1 秒后修改为666</button>
      <button @click="changeTitle('使用mapMutations进行修改标题')">改标题</button>
      <hr>
      <div>{{ filterList }}</div>
      <!-- 简写 -->
      <div>{{ user.userInfo.name }}</div>
      <div>{{ setting.theme }}</div>
      <div>{{ userInfo }}</div>
      <button @click="setUser({name: 'Mour'})">更新个人信息</button>
      <button @click="setUser2({name: '延迟更新简写'})">1 秒后更新信息</button>
      <div>{{ theme }} - {{ desc }}</div>
      <button @click="setTheme('back')">更新主题</button>
      <button @click="setTheme2('简写')">1 秒后更新主题</button>
      <hr>
      <!-- 访问getters -->
      <div>{{ UpperCaseName }}</div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // 全局级别的映射
    ...mapMutations(['subCount', 'changeTitle']),
    // hCount () {
    //   this.$store.dispatch('chengeCountAction', 666)
    // }
    ...mapActions(['chengeCountAction']),
    // 分模块的映射
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser']),
    ...mapActions('user', ['setUser2']),
    ...mapActions('setting', ['setTheme2'])
  }
}
</script>

<style lang="css" scoped>
.box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
}
h2 {
    margin-top: 10px;
}
</style>
