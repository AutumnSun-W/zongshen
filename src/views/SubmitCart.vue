<!-- 提交订单页面 -->
<template>
  <div>
      <div class="pending-detial">
<h4 class="pd-10">订单已提交</h4>
<ul class="block-row back_white mg-t-5">
<li class="mg-b-5 border_b_1_gray pd-10">订单编号：{{gId}}</li>
<li class="mg-b-5 border_b_1_gray pd-10">订单金额：<b class="price">￥{{gettotal+getdingjin}}</b></li>
<li class="mg-b-5 border_b_1_gray pd-10">订金总额 :{{getdingjin}}</li>
<li class="mg-b-5 border_b_1_gray pd-10">备货时间：1天</li>

<li class="mg-b-5 border_b_1_gray pd-10">配送方式：买家承担运费</li>
<li class="mg-b-5 border_b_1_gray pd-10">
<div>支付方式：</div>
<div class="pay_link">
<img class="payment_img" data-class-name="scan_wechat" src="http://shop.zongshenmotor.com/plugins/payments/images/wechat_qrcode.jpg" alt="0.00" title="微信二维码支付" data-payment-id="10">
<img class="payment_img" data-class-name="wap_alipay" src="http://shop.zongshenmotor.com/plugins/payments/images/alipay.jpg" alt="0.00" title="支付宝手机网站支付" data-payment-id="11">
</div>
</li>
</ul>
<ul class="block-row back_white mg-t-5">
<li class="mg-b-5 border_b_1_gray pd-10">收货人名：{{$route.params.name}}</li>
<li class="mg-b-5 border_b_1_gray pd-10">联系方式：{{$route.params.tel}}</li>
<li class="mg-b-5 border_b_1_gray pd-10">收货时间：任意</li>
<li class="mg-b-5 border_b_1_gray pd-10">
<span class="price">注：</span>
<span>
<font>微信二维码支付手续费：0.00</font>
<font>支付宝手机网站支付手续费：0.00</font>
</span>
</li>
</ul>

</div>
  </div>
</template>

<script>
import api from '../api/user'
export default {
  data () {
    return {
      gId:"20190824110852357820",
      items:[]
    };
  },

//   components: {},

  computed: {
    gettotal(){
      let totalMoney = 0 ;
      this.items.forEach(element => {
        totalMoney += element.pprice*element.num
      });
      return totalMoney
    },
    getdingjin(){
      let dingjin = 0 , n=0;
      this.items.forEach((i,n)=>{
        n+=1
        dingjin +=n*2000
      })
      return dingjin
    }
  },

  mounted(){
    let params = { uid: this.$store.state.username };
    api.postCart(params).then(data => {
      this.items = JSON.parse(localStorage.getItem("carts"));
      console.log(this.items)
    })
  },
  // methods: {
    
  // }
}

</script>
<style scoped>
.pending-detial{
    color: #999;
    font-size: 14px;
}
.mg-b-5{
    margin-bottom: 5px;
}
.border_b_1_gray{
    border-bottom: 1px solid #cecece;
}
.pd-10{
    padding: 10px;
}
.back_white{
    background: white
}
.mg-t-5{
    margin-top: 5px;
}
</style>