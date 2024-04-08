<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div>
    我是  2.vue - {{ counterStore.count }} -
    <button @click="counterStore.delCount"> - </button>
  </div>
</template>

<style scoped>
</style>
