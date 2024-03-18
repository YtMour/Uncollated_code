<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    handleEdit(){
      // 显示输入框(异步dom更新)
      this.isShowEdit = true;
      // 让输入框 获取焦点
      // $neixtTick   等dom更新后,立刻执行准备的函数体
      this.$nextTick(() => {
        this.$refs.inp.focus();
      })
      // 使用setTimeout 等待时间不精准
      // setTimeout(() => {
      //   this.$refs.inp.focus();
      // }, 1000)
    }
  },
}
</script>

<style>
</style>