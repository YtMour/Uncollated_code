import './assets/main.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia() // 创建pinia实例
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).mount('#app')
