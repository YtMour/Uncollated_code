// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
  // 开启严格模式,上线时，不用
  strict: true,
  state: {
    count: 100,
    title: '大标题',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },

  // 通过 mutations 来修改数据
  mutations: {
    addCount (state, n) {
      state.count += n
    },
    subCount (state, s) {
      state.count -= s
    },
    changeTitle (state, a) {
      state.title = a
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // 3.actions 处理异步 注：不能直接操作 state，需要commit mutation
  actions: {
    // context 上下文(此处未分模块，可以当成store仓库)
    // context.commit('mutation名字'， 额外参数)
    chengeCountAction (context, num) {
      // 大部分场景是发请求，这里用延时器来模拟异步
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4.getters 类似于计算属性
  // 1.形参第一个参数，就是state
  // 2.必须有返回值，返回值就是getters的值
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 5.modules模块
  modules: {
    user,
    setting
  }
})

// 导出仓库
export default store
