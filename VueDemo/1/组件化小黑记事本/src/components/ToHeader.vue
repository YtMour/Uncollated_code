<template>
   <!-- 输入框 -->
   <header class="header">
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" class="new-todo"
       v-model="toName"
       @keyup.enter="handleAdd"/>
      <button class="add" @click="handleAdd">添加任务</button>
    </header>
</template>

<script>
export default {
    data(){
        return{
            toName:'',
        }
    },
    methods:{
        handleAdd(){
            if (this.toName.trim() === "") {
              alert("输入为空");
              return;
            }
            
            this.$emit('add',this.toName)
            this.toName=''
        }
    }
}
</script>

<style>

</style>