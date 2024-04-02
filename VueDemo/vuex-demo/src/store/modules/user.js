const state = {
  userInfo: {
    name: 'zs',
    age: 18
  }
}

const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUser2 (context, newUserInfo) {
    // 大部分场景是发请求，这里用延时器来模拟异步
    setTimeout(() => {
      context.commit('setUser', newUserInfo)
    }, 1000)
  }
}
const getters = {
  // 分模块后，state指代子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
