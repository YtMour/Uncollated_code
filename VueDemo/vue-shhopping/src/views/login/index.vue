<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text" v-model="mobile">
        </div>
        <div class="form-item">
          <input class="inp" maxlength="5" placeholder="请输入图形验证码" type="text" v-model="picCode">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" v-model="msgCode" maxlength="6">
          <button @click="getCode">
            {{ second === totalSecond ? '获取验证码' : second + '秒后重新进行发送' }}
          </button>
        </div>
      </div>

      <div class="login-btn" @click="login" >登录</div>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request'
import { codeLogin, getMsgCode, getPicCode } from '@/api/login'
export default {
  name: 'LoginPage',
  async created () {
    this.getPicCode()
  },
  data () {
    return {
      picUrl: '', // 请求传递的图像验证码唯一标识
      picKey: '', // 存储请求渲染的图片地址
      picCode: '', // 用户输入的图形验证码
      totalSecond: 60, // 总秒数
      second: 60, // 当前秒数，开定时器
      timer: null, // 定时器id
      mobile: '', // 手机号
      msgCode: '' // 短信验证码
    }
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.picUrl = base64
      this.picKey = key
      // this.$toast('获取图形验证码成功  ')
    },
    // 校验手机号和图像验证码是否合法
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    // 获取验证码
    async getCode () {
      if (!this.validFn()) {
        // 没通过就停止
        return
      }
      // 当目前没有后定时器开着，且 totalSecond和 second一致 秒数归位，才可以开始倒计时
      if (!this.timer && this.second === this.totalSecond) {
        // 发送请求
        await getMsgCode(this.picCode, this.picKey, this.mobile)
        this.$toast('短信发送发送成功')
        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--
          // 判断 秒数 为负
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.second = this.totalSecond
          }
        }, 1000)
      }
    },
    // 登录
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res = await codeLogin(this.mobile, this.msgCode)
      this.$store.commit('user/setUserInfo', res.data)
      // 判断有无回跳地址
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
      this.$toast('登录成功')
    }
  },
  // 离开页面，清楚定时器
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
