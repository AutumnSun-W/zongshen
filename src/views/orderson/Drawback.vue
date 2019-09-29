<template>
  <div class="box">
    <van-tabs type="card">
      <van-tab title="我要退款"></van-tab>
      <van-tab title="申请退款">
      
        <div class="ddhao "> 
          <span>涉及订单号：</span>
          <van-cell-group>
          <van-field v-model="value" placeholder="请填上你购买的订单账号"/>
          </van-cell-group>
        </div>
        <div class="ddhao">
           <span>申请原因：</span>
           <van-cell-group>
          <van-field v-model="value1" placeholder=""/>
          </van-cell-group>
        </div>
        <div class="ddhao tuikuan">
          <span>退款说明：</span>
          <van-cell-group>
          <van-field v-model="value2" placeholder="* 退款成功后金额直接转入到您的账户余额中" type="textarea"/>
          </van-cell-group>
        </div>
        <div class="btn">
          <van-button type="primary" color="#ca151d" size="large">提交退款申请</van-button>
          <van-button type="primary" color="#999" size="large">取消</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name:'drawback',
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
 .box {
  padding: 10px;
  color: #999;
  font-size: 14px;
}
.box .ddhao{
display: flex;
justify-content: space-between;
  align-items: center;
}
.box .ddhao spna{
  width:30%;
}
.box .van-cell-group{
  width:70%;
  border-bottom: 1px #ccc solid;
}
.box .tuikuan .van-cell-group{
  border: 0;
}
.box .tuikuan{
  border-bottom: 1px #ccc solid;
}
.box .btn{
  display: flex;
justify-content: space-between;
  align-items: center;
}
.box .btn .van-button{
  margin:20px;
}
</style>
