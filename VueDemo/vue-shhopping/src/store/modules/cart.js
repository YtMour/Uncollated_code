import { changeCount, getCartList, delSelect } from '@/api/cart'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    // 提供一个设置 cartList 的 mutation
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      // 让小选矿进行同步
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeCount (state, { goodsId, value }) {
      const obj = state.cartList.find(item => item.goods_id === goodsId)
      obj.goods_num = value
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      // 后台返回的数据中，不包含复选框的选中状态，需要进行手动维护数据，给每个对象添加isCheacked 状态 来标记商品是否选中
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    // 购物车修改数量
    async changeCountAction (context, obj) {
      const { goodsId, value, skuId } = obj
      // 先本地修改
      context.commit('changeCount', {
        goodsId,
        value
      })
      // 在同步到后台
      await changeCount(goodsId, value, skuId)
    },
    // 删除商品
    async delSelect (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      await delSelect(cartIds)
      Toast('删除成功')
      // 删除成功后，查询渲染购物车
      context.dispatch('getCartAction')
    }
  },
  getters: {
    // 所有商品的累计总数
    cartTotal (state) {
      return state.cartList.reduce((A, item) => A + item.goods_num, 0)
    },
    // 选中的商品项
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 选中的总数
    selCount (state, getters) {
      return getters.selCartList.reduce((A, item) => A + item.goods_num, 0)
    },
    // 选中的总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((A, item) => {
        return A + item.goods_num * item.goods.goods_price_min
      }, 0)
    },
    // 是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
