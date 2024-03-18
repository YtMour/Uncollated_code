<template>
  <div class="app">
    <button class="logout"
    @click="isShow=true"
    >退出按钮</button>
    <!--  :visible.sync => :visible + @update:visible   -->
    <BaseDialog
    :visible.sync="isShow"
    >
    </BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>