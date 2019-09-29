<template>
  <div>
    <van-cell-group class="Form">
      <van-field class="ipt" v-model="email" placeholder="邮箱" @blur="checkemail" />
      <div class="usernametip" v-text="msg3" v-if="condition3"></div>
      <van-field
        class="ipt"
        v-model="username"
        id="username"
        placeholder="用户名"
        @blur="checkusername"
      />
      <div class="usernametip" v-text="msg" v-if="condition"></div>
      <van-field
        v-model="password"
        id="password"
        type="password"
        placeholder="密码"
        class="ipt"
        @blur="checkpassword"
      />
      <div class="usernametip" v-text="msg1" v-if="condition1"></div>
      <van-field
        v-model="password2"
        type="password"
        placeholder="确认密码"
        class="ipt"
        @blur="checkpassword2"
      />
      <div class="usernametip" v-text="msg2" v-if="condition2"></div>
    </van-cell-group>
    <button class="login" @click="register">立即注册</button>
    <van-popup v-model="show">此账号已被注册</van-popup>
  </div>
</template>

<script>
import api from "../api/user";

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
      password2: "",
      email: "",
      condition: false,
      condition1: false,
      condition3: false,
      msg: "",
      msg1: "",
      msg2: "",
      msg3: "",
      condition2: false
    };
  },
  methods: {
    register() {
      if (this.email !== "") {
        this.condition3 = true;
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var result = reg.test(this.email);
        if (result) {
          this.msg3 = "格式正确";
          if (
            this.checkusername() &&
            this.checkpassword() &&
            this.checkpassword2()
          ) {
            let params = { username: this.username, password: this.password };

            api.postRegister(params).then(data => {
              console.log(data);
              if (data.code == 200) {
                this.$router.push("/login");
              } else {
                this.show = true;
              }
            });
          }
        } else {
          this.msg3 = "填写正确格式";
        }
      }
    },
    checkusername() {
      if (this.username !== "") {
        this.condition = true;
        var reg = /^[a-z0-9_-]{2,20}$/;
        var result = reg.test(this.username);
        if (!result) {
          this.msg = "填写2-20个字符";
          return false;
        } else {
          this.msg = "填写正确";
          return true;
        }
      } else {
        this.msg = "填写2-20个字符";
        return false;
      }
    },
    checkpassword() {
      if (this.password !== "") {
        this.condition1 = true;
        var reg = /^[a-z0-9_-]{6,32}$/;
        var result = reg.test(this.password);
        if (!result) {
          this.msg1 = "填写6-32个字符";
          return false;
        } else {
          this.msg1 = "验证通过";
          return true;
        }
      } else {
        this.msg1 = "填写6-32个字符";
        return false;
      }
    },
    checkpassword2() {
      if (this.password !== "") {
        this.condition2 = true;

        if (this.password !== this.password2) {
          this.msg2 = "两次输入密码不一致";
          return false;
        } else {
          this.msg2 = "验证通过";
          return true;
        }
      } else {
        this.msg2 = "填写6-32个字符";
        return false;
      }
    },
    checkemail() {
      if (this.email !== "") {
        this.condition3 = true;
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var result = reg.test(this.email);
        if (result) {
          this.msg3 = "格式正确";
          return true;
        } else {
          this.msg3 = "填写正确格式"; 
          return false;
        }
      }
    }
  }
};
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
.usernametip {
  font-size: 14px;
  color: #999;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  margin-bottom: 10px;
  /* display: none */
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