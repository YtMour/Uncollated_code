<template>
  <div class="my-tag">
    <input
    v-if="isEdit"
    ref="inp"
    v-focus
    @blur="isEdit=false "
    class="input"
    type="text"
    :value="value"
    @keyup.enter="handleEnter"
    placeholder="输入标签"/>
     

    <div v-else
    class="text" 
    @dblclick="handleClick">
        {{ value}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    value:String
  },
data(){
  return{
    isEdit:false
  }
},
 methods:{
  handleClick(){
  // 双击后切换显示状态
    this.isEdit=true
    // this.$nextTick(()=>{this.$refs.inp.focus()})
  },
  handleEnter(e){
    if(e.target.value.trim()===''){
      return alert('不能为空')
    }
    // 由于父组件是v-model，需要触发input事件，提交给父组件更新
    this.$emit('input',e.target.value)
    // 提交后关闭输入状态 
    this,this.isEdit=false
  }
 }
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>