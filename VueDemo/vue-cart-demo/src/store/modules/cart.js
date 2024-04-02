import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, payload) {
      state.list = payload
    },
    updateCount (state, obj) {
      // 根据id找到对应的对象，更新count属性
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    async getList (contexr) {
      const res = await axios.get('http://localhost:3000/cart')
      contexr.commit('updateList', res.data)
    },
    async updateCountAsync (contexr, obj) {
      // 向修改同步道后端
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        console: obj.newCount
      })
      // 将更新同步道 vuex
      contexr.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}
