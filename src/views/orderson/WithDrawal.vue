<template>
  <div class="foter">
    <p>填写提现申请</p>
    <div class="biaodan">
      <van-cell-group>
        <van-field v-model="value" placeholder="收款人姓名"/>
        <van-field v-model="value1" placeholder="提现金额"/>
        <van-field v-model="value2" placeholder="填写必要的提现信息，如开户银行" type="textarea"/>
      </van-cell-group>
      <div class="but">
        <van-button type="danger" size="large" color="#ca151d">提交提现申请</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "withDrawal",
  data() {
    return {
      value:'',
      value1:'',
      value2:'',
    }
  },

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
.biaodan .van-cell{
  border:1px #e8e8e8 solid;
  border-bottom: 1px #ccc solid;
  margin-bottom:10px; 
}
.but{
  padding: 10px;
}
</style>
