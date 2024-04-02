/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store' // 如果 store 是 Vuex 的实例，需要引入 Vuex
// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading，禁止背景点击 (节流处理，防止多次无效触发)
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    IoadingType: 'spinner', // 配置loading图标
    duration: 0 // 不会自动消失
  })

  // 只要有token，就在请求时携带，便于请求时授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 默认axios会多包装一层data，需要响应拦截器中处理一下
  const res = response.data
  if (res.status !== 200) {
    // 给错误提示，Toast 默认是单例模式，后面的Toast调用了，会将前一个Toast效果覆盖
    // 同时只能存在一个Toast
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    // 正确情况,清楚loading效果
    Toast.clear()
  }
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
