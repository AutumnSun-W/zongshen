<template>
  <div>
    <div class="foter">
      <span class="biaoti">积分记录</span>
      <p>
        你当前的积分：
        <span>0</span>分
      </p>
      <div class="caxun">
        <p>查询时间：</p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
        <van-button type="primary" color="#ca151d" size="small">确认查询</van-button>
      </div>
      <van-pagination v-model="currentPage" :page-count="1" mode="simple" />
    </div>
    <div class="duihuan">
        <span class="biaoti">积分兑换</span>
        <p class="tes">暂无代金劵</p>
        <van-button type="danger" color="#ca151d">兑换代金劵</van-button>
        <br/>
        <span class="biaoti">提示：</span>
        <p>1、您兑换的代金券为电子券，根据代金券的不同，会具有不同的有效期
          <br/>2、电子代金券仅限本ID使用，不能折算为现金、也不能再次兑换为积分
        </p>
        
    </div>
      
    
  </div>
</template>
<script>
export default {
  name: "myIntegral",
  data() {
    return {
      currentPage: 1,
      value: 0,
      option: [
        { text: "3个月之外积分记录", value: 0 },
        { text: "近3个月之内积分记录", value: 1 }
      ]
    };
  }
};
</script>
<style  >
.foter {
  padding: 10px;
  color: #999;
  font-size: 14px;
  line-height: 30px;
  padding-bottom:50px;
  border-bottom:1px solid #eaeaea; 
}
.biaoti {
  font-weight: bold;
}
.caxun {
  display: flex;
}
.caxun {
  widows: 30vw;
  font-size: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
}
.duihuan{
  padding: 10px;
  color: #999;
  font-size: 14px;
  
  padding-bottom:50px;;
}


.duihuan .tes{
  border-bottom:1px solid #ca151d;
  text-align: center;
  line-height: 30px;
  
}
.duihuan .van-button{
  width:30vw;
  margin:3vh 30vw;
}
</style>
