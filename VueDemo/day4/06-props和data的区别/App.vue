<template>
  <div class="app">
    <BaseCount
        @changeCount="handelChange"
       :count="count"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count:100
    }
  },
  methods:{
    handelChange(newCount){
      console.log(newCount)
      this,count = newCount
    }
  },
  components:{
    BaseCount
  }
}
</script>

<style>

</style>