import request from '@/utils/request'

// 订单结算确认
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      // mode: cart => obj { cartIds }
      // mode: buyNow => boj { goodsId goodsNum goodsSkuId }
      mode, // cart buyNow
      delivery: 10, // 10快递配送 20门店自提
      couponId: 0, // 优惠卷ID  0为不适用
      isUsePoints: 0, // 积分
      ...obj // 将传递过来的参数对象，动态展开
    }
  })
}

// 提交订单
export const submitOrder = (mode, params) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
