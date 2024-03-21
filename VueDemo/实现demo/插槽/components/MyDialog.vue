<template>
  <div class="dialog">
    <div class="dialog-header">
      <h3><slot name="head">友情提示</slot></h3>
      <span class="close">✖️</span>
    </div>

    <div class="dialog-content">
      <!-- 1.在需要定制的位置，使用slot占位 -->
      <!-- 在slot标签内填写内容，配置默认内容 -->
      <!-- <slot>当没有进行填写时，显示默认展示内容</slot> -->
      <!-- 一旦插槽取了名字，就是具名插槽，只支持定向分发 -->
      <!-- 使用name来给slot一个唯一标识< -->
      <slot name="content">确认要关闭系统吗？</slot>
    </div>
    <div class="dialog-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 470px;
  height: 230px;
  padding: 0 25px;
  background-color: #ffffff;
  margin: 40px auto;
  border-radius: 5px;
}
.dialog-header {
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.dialog-header .close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.dialog-content {
  height: 80px;
  font-size: 18px;
  padding: 15px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dialog-footer button {
  width: 65px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #e1e3e9;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
}
.dialog-footer button:last-child {
  background-color: #007acc;
  color: #fff;
}
</style>
