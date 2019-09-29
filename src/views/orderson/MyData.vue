<template>
  <div class="foter">
    <p>个人资料</p>
    <div class="biaodan">
      <van-cell-group>
        <van-field v-model="value" placeholder="姓名" />
      </van-cell-group>
      <p>性别</p>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="女" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <p>出生日期</p>
      <van-cell-group>
        <van-field v-model="value1" placeholder="出生日期" />
      </van-cell-group>

      <p>联系地址</p>
      <van-cell-group>
        <van-field v-model="value2" placeholder="联系地址" />
      </van-cell-group>

      <p>邮编</p>
      <van-cell-group>
        <van-field v-model="value3" placeholder="邮编" />
      </van-cell-group>

      <p>联系电话</p>
      <van-cell-group>
        <van-field v-model="value4" placeholder="联系电话" />
      </van-cell-group>

      <p>QQ</p>
      <van-cell-group>
        <van-field v-model="value5" placeholder="QQ" />
      </van-cell-group>

      <p>MSN</p>
      <van-cell-group>
        <van-field v-model="value6" placeholder="MSN" />
      </van-cell-group>
      <van-button type="danger" size="large" color="#ca151d" @click="but">保存基本信息</van-button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "myData",
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      radio: "1",
      show: false
    };
  },
  methods: {
    but() {
     Dialog.confirm({
  title: '个人资料',
  message: '是否保存个人资料'
}).then(() => {
  console.log(1)
  this.$router.push('/orderdetail')
}).catch(() => {
  // on cancel
  console.log(2)
});
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
  margin-bottom: 50px;
}
.foter .biaodan {
  padding: 10px;
}
.biaodan .van-cell {
  border: 1px #e8e8e8 solid;
  border-bottom: 1px #ccc solid;
  height: 35px;
  margin-bottom: 10px;
  padding: 0 10px;
  line-height: 35px;
}
</style>
