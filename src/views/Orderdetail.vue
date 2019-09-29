<template>
  <div class="box">
    
    <van-row class="toprow">
      <van-col offset="1" span="8" >
        用户名：
        <b>{{$store.state.username}}</b>
      </van-col>
      <van-col span="8" offset="7">
        余额：
        <strong>￥999999.00</strong>
      </van-col>
    </van-row>
    <van-row class="toprow">
      <van-col offset="1" span="8">
        积分：
        <strong>0分</strong>
      </van-col>
      <van-col span="8" offset="7">
        代金劵：
        <strong>0张</strong>
      </van-col>
    </van-row>
    <van-index-bar :index-list="[]">
      <van-cell title="我的订单" to="/myOrder"/>
      <van-cell title="我的积分" to="/myIntegral" />
      <van-cell title="账户余额" to="/balance" />
      <van-cell title="申请提现" to="/withDrawal" />
      <van-cell title="在线充值" to="/onlinetopup" />
      <van-cell title="退款申请" to="/drawback" />
      <van-cell title="我的代金劵" to="/myVoucher" />
      <van-cell title="我的评论" to="/myCritical" />
      <van-cell title="我的收藏" to="/myCollect" />
      <van-cell title="地址管理" to="/mySite" />
      <van-cell title="个人资料" to="/myData" />
      <van-cell title="密码修改" to="/changePassword" />
    </van-index-bar>
    <van-row>
      <van-button type="primary" size="large" color="#ca151d" to="/login" @click="quitlogin">退出登录</van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "orderdetail",
  data() {
    return {
      
    };
  },
  methods: {
    subpage(i) {
      this.$router.push(this.order[i].url);
    },
    quitlogin() {
      this.$store.state.token = "";
    }
  }
};
</script>

<style scoped>
.box {
  margin-bottom: 50px;
}
.toprow{
  line-height: 30px;
  font-size: 14px
}
.zican {
  width: 100vw;
  height: 48px;
  
  margin-bottom: 10px;
  font-size: 14px;
  color: #999;
}
.yonghu,
.zijin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding:0 10px;
}
strong {
  font-weight: bold;
  color: #dd5b53;
}
.xingqing {
  font-size: 14px;
  color: #666;
}
.xingqing li {
  height: 22px;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tuicu {
  padding: 20px 10px 20px 10px;
}
</style>