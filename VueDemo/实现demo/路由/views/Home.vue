<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text" v-model="inpValue">
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 查询路由传参 -->
      <!-- <router-link to="/search?key=前端培训">前端培训</router-link>
      <router-link to="/search?key=如何成为前端大牛">如何成为前端大牛</router-link>
      <router-link to="/search?key=黑马程序员">黑马程序员</router-link> -->
      <!-- 动态路由传参 -->
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <!-- 查询参数传参(适合多个传参) -->
      <!-- 动态路由传参(优雅简洁，适合单个传参) -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data(){
    return{
      inpValue:''
    }
  },
  methods:{
    goSearch(){
      // 通过路径的方式跳转
      // (1)简写this.$router.push('路由路径')
      // 简写传参this.$router.push(`/路由路径?参数名=参数值`)
      // this.$router.push(`/search?key=${this.inpValue}`)
      // (2)完整写法(传参)this.$router.push({
      //      path:'路由路径'
      //         query:{
      //           参数名1:参数值1,
      //           参数名1:参数值2
      //          }
      // })
      // 查询传参
      // this.$router.push({
      //   path:'search',
      //   query:{
      //     key:this.inpValue
      //   }
      // })
      // 动态路由传参
      // this.$router.push(`/search/${this.inpValue}`)
      this.$router.push({
        path:`/search/${this.inpValue}`,
      })


      // 通过命名路由来进行跳转(需要先给路由起名字，适合长路径的路由，便捷跳转)
      // this.$router.push({
      //     name:'路由名'
      // })
      // 命名路由传参
      // 查询传参  只有一种
      // this.$router.push({
      //   name:'路由名字',
      //   query:{
      //     参数1:'参数1',
      //     参数2:'参数2'
      //   }
      // })
      // 动态传参  通过params传 由params接收
      // this.$router.push({
      //   name:'路由名字',
      //   params:{
      //     参数1:'参数1',
      //     参数2:'参数2'
      //   }
      // })
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>