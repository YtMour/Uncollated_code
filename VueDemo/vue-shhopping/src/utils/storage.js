// 约定通用键名
const INFO_KEY = 'Yt_shopping_info'
export const getInfo = () => {
  const defaulObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaulObj
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 搜索
const HISTORY_KEY = 'Yt_history_list'
// 获取历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
