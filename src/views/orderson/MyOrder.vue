<template>
  <div>
    <div class="foter">订单列表</div>
    <van-card
      :num="item.num"
      :price="'订单金额：￥'+item.pprice"
      currency=""
      :desc="'商品描述：'+item.pdesc"
      :title="'商品名：'+item.pname"
      :thumb="item.pimg"
      v-for="(item,i) in items"
      :key="i"
    >
      <div slot="footer">
        <van-button size="small" @click="xqye(item.pid)">查看详情</van-button>
      </div>
    </van-card>
    
    <van-row v-show="sty">
            <p class="empyt">暂时没有订单数据</p>
    </van-row>
  </div>
</template>
<script>
import api from "../../api/user";
export default {

  
  name: "myOrde",
  data() {
    return {
      currentPage: 1,
      items:'',
      sty:''
    };
  },
  mounted(){
    let params = { uid: this.$store.state.username };
    console.log(params)
    api.postCart(params).then(data => {
     console.log(data)
      console.log(data.data[0].items)
      
      if(data.data[0].items.length){
        this.sty=false;
        this.items=data.data[ 0].items;
      }else{
        this.sty=true;
        
      }
    });
    
  },
  methods:{
    xqye(pid){
      this.$router.push("/detail?id=" + pid);
    }
  }

};
</script>
<style  >
.foter {
  height: 30px;
  padding: 10px;
  color: #999;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
}
h1 {
  width: 100vw;
  text-align: center;
}
.van-card__content{
  font-size: 14px;
}
.empyt {
  padding: 20px 0;
  text-align: center;
  color: #999999;
  font-size: 14px;
}
</style>
