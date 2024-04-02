<template>
  <div id="app">
    <h1>根组件 - {{ title }} - {{ count }}</h1>
    <input type="text"
    :value="count" @input="handeInput"
    >
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  // created () {
  //   console.log(this.$store)
  // },
  data: function () {
    return {

    }
  },
  components: {
    Son1,
    Son2
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    handeInput (e) {
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
