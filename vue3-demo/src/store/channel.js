import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useChannelStore = defineStore('channel', () => {
  const channelList = ref([])
  const getList = async () => {
    const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
    console.log(data.channels)
  }
  return{
    channelList,
    getList
  }
})