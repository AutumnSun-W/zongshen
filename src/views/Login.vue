<template>
  <div>
    <van-cell-group class="Form">
      <van-field id="username" class="ipt" v-model="username" placeholder="请输入用户名" />

      <van-field id="password" v-model="password" type="password" placeholder="密码" class="ipt" />
    </van-cell-group>
    <div class="qq">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1234567&site=qq&menu=yes">
        <img src="http://shop.zongshenmotor.com/plugins/oauth/images/QQ.png" alt />
      </a>
      <a
        href="https://open.weibo.cn/oauth2/authorize?client_id=YOUR_APPKEY&display=mobile&response_type=code;"
      >
        <img src="http://shop.zongshenmotor.com/plugins/oauth/images/wb.png" alt />
      </a>
    </div>
    <button class="login" @click="login">立即登录</button>
    <a href="/register" class="register">还没有注册?</a>
  </div>
</template>

<script>
import api from "../api/user";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let params = { username: username.value, password: password.value };
      api.postLogin(params).then(data => {
        console.log(data);
        this.$store.state.token = data.token
        let user = decodeURIComponent(escape(window.atob(data.token.split('.')[1])))
        this.$store.state.username = username.value;
        console.log(JSON.parse(user).username)
        this.$router.push('/individual')
      });
    }
}
}
</script>

<style scoped>
.ipt {
  padding: 10px;
  font-size: 10px;
  margin-bottom: 10px;
  border: 1px solid #e8e8e8;
  line-height: 10px;
}
.Form {
  padding: 10px;
}
.qq {
  border: 1px solid #e8e8e8;
  margin: 0 10px;
  height: 30px;
  padding: 10px;
}
.qq img {
  width: 25px;
  height: 25px;
}
.qq a {
  padding: 0 10px;
}
.login {
  color: #fff;
  background: #ca151d;
  margin: 10px 2.5vw;
  border: 0;
  border-radius: 4px;
  font-size: 10px;
  width: 95vw;
  height: 35px;
}
.register {
  color: #95a7ae;
  margin: 20px 10px;
  font-size: 14px;
}
</style>