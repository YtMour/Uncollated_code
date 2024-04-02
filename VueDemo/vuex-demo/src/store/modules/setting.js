const state = {
  theme: 'light', // 主题色
  desc: '测试demo'
}

const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}
const actions = {
  setTheme2 (context, newTheme) {
    // 大部分场景是发请求，这里用延时器来模拟异步
    setTimeout(() => {
      context.commit('setTheme', newTheme)
    }, 1000)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
