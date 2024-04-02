<template>
  <!-- <div> -->
    <!-- <div class="footer_wrap"> -->
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a> -->
      <!-- router-link  会自动给当前导航添加两个高亮类名，router-link-exact-active(精准搜索) 和 router-link-active(模糊搜索,用的多) -->
      <!-- router-link-active ,可以多匹配  如:to="/my" 可匹配到/my /my/a /my/b....-->
      <!-- router-link-exact-active 精确匹配 如:to="/my" 只能匹配到 /my -->
      <!-- <router-link to="/find">发现音乐</router-link> -->
      <!-- <router-link to="/my">我的音乐</router-link> -->
      <!-- <router-link to="/friend">朋友</router-link> -->
    <!-- </div> -->
    <!-- <div class="top"> -->
      <!-- 路由出口 -> 匹配的组件所展示的位置-->
      <!-- <router-view></router-view> -->
    <!-- </div> -->
  <!-- </div> -->

  <div id="app">
    <div class="link">
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索页</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
  margin: -8px -8px 0 -8px;
  margin-bottom: 50px;
}
.link a {
  display: block;
  text-decoration: none;
  background-color: #ad2a26;
  width: 100px;
  text-align: center;
  margin-right: 5px;
  color: #fff;
  border-radius: 5px;
}
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
/* 模糊匹配 */
/* .footer_wrap a.router-link-active{
  background-color: pink;
} */
/* 自定义模糊匹配类名 */
.footer_wrap a.active{
  background-color: green;
 }
</style>