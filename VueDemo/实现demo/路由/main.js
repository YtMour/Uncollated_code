import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router //可简写router(当名字为router时)
}).$mount('#app')
