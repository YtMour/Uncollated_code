<template>
  <div class="search">
    <!-- 查询路由传参 -->
    <!-- <p>搜索关键字:{{ $route.query.key }} </p> -->
    <!-- 动态路由传参 -->
    <p>搜索关键字:{{ $route.params.words }} </p>

    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyFriend',
  created(){
    //在created中，获取路由参数
    //查询参数this.$route.query.参数名 获取
    // 动态路由参数this.$route.params.参数名 获取
    this.$route.query.key
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>