<template>
  <div class="foter">
    <p>修改密码</p>
    <div class="biaodan">
      <van-cell-group>
        <van-field v-model="username" placeholder="请输入你的账号" @blur="checkusername" />
        <div class="usernametip" v-text="msg" v-if="condition"></div>
        <van-field v-model="password" placeholder="你想要的新密码" @blur="checkpassword" />
        <div class="usernametip" v-text="msg1" v-if="condition1"></div>
        <van-field v-model="password2" placeholder="请再次输入密码" @blur="checkpassword2" />
        <div class="usernametip" v-text="msg2" v-if="condition2"></div>
      </van-cell-group>
    </div>
    <div class="but">
      <van-button type="danger" size="large" color="#ca151d" @click="passname()">修改密码</van-button>
    </div>
  </div>
</template>
<script>
import api from "../../api/user";
export default {
  name: "changePassword",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      msg: "",
      msg1: "",
      msg2: "",
      condition: false,
      condition1: false,
      condition2: false
    };
  },
  methods: {
    passname() {},
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
    passname() {
      this.$store.state.token = "";
      if (
        this.checkusername() &&
        this.checkpassword() &&
        this.checkpassword2()
      ) {
        let params = { username: this.username, password: this.password };
        api.postUpdateUser(params).then(data => {
          console.log(data);
          this.$router.push("/login");
        });
      }
    }
  }
};
</script>
<style  >
.foter {
  padding: 10px;
  color: #999;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 4vh;
}
.foter .biaodan {
  padding: 10px;
}
.biaodan .van-cell {
  border: 1px #e8e8e8 solid;
  border-bottom: 1px #ccc solid;
  height: 35px;
  padding: 0 10px;
  line-height: 35px;
}
.but {
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
</style>
