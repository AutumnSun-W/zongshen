<!-- 结算页面 -->
<template>
  <div id="payWrap">
    <h5 class="title">宗申商城配送</h5>
    <van-card class="item" v-for="(item, index) in items" :key="index" :thumb="item.pimg">
      <div slot="tags" class="itemInfo">
        <p>{{item.pname}}</p>
        <p>{{item.pdesc}}</p>
        <van-row type="flex" class="price">
          <van-col span="22">小计: ￥{{item.pprice*item.num}}</van-col>
          <van-col span="2" class="itemNum">×{{item.num}}</van-col>
        </van-row>
      </div>
    </van-card>
    <h5 class="title">结算信息</h5>
    <ul class="textList">
      <li class="mg-b-10">
        商品总金额：
        <span class="price">￥{{getTotal}}</span>
        <div>
          代金券：
          <span name="ticket_value" class="price">0</span>
          + 税金：
          <span id="tax_fee" class="price">0</span>
          + 运费总计：
          <span id="delivery_fee_show" class="price">0</span>
          + 保价：
          <span id="protect_price_value" class="price">0</span>
          + 支付手续费：
          <span id="payment_value" class="price">0</span>
        </div>
      </li>
      <li>
        <div class="mg-b-5">
          订金总金额：
          <span class="price">￥{{dingjin}}</span>
        </div>
        <b>不能使用代金券</b>
        <span class="red2">(注：订单中的商品不支持代金券支付)</span>:
      </li>
    </ul>
    <ul class="textList">
      <li class="mg-b-5">
        是否需要发票？(税金:￥0)
        <input class="radio" name="taxes" type="checkbox" value="0" />
      </li>
      <li class="mg-b-5">
        <label id="tax_title" style="display:none">
          发票抬头：
          <input type="text" name="tax_title" style="border:1px solid #e2e2e2" />
        </label>
      </li>
      <li class="mg-b-5">
        应付总额：
        <span class="price">
          ￥
          <strong id="final_sum">{{getTotal + dingjin}}</strong>
        </span>元
      </li>
      <li class="mg-b-5">
        定金总额：
        <span class="price">
          ￥
          <strong id="final_deposit_sum">{{dingjin}}</strong>
        </span>元
      </li>
    </ul>

    <van-collapse v-model="activeName">
      <van-collapse-item title="收货人信息" name="1">
        <van-address-list v-model="chosenAddressId" :list="list" @select="selectAdd"/>
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          save-button-text="添加"
          @save="addsave"
          :address-info="addressInfo"
          :search-result="searchResult"
        />
      </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="activeName2">
      <van-collapse-item title="配送方式" name="1">
        <p class="peisong">买家承担运费</p>
        <p class="peisong">运费: ￥0</p>
        <van-radio-group v-model="radio" class="peisong">
          <van-radio name="1" checked-color="red">买家承担运费 运费: ￥0</van-radio>
        </van-radio-group>
        <div class="thistime">
          <span class="radioitem timep">指定送货时间:</span>
          <van-radio-group v-model="radio2" class="peisong2">
            <van-radio name="1" class="radioitem" checked-color="red">任意</van-radio>
            <van-radio name="2" class="radioitem">周一到周五</van-radio>
            <van-radio name="3" class="radioitem">周末</van-radio>
          </van-radio-group>
        </div>
      </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="activeName3">
      <van-collapse-item title="订单附言" name="1">
        <div class="ddtext">
          <input type="text" id="ddtext" v-model="feihua" v-bind:class="{show:!isActive}"/>
      <p class="ipt" v-bind:class="{show:isActive}">{{feihua}}</p>
          <van-button size="small" color="red" class="ddtext-btn" @click="saveWord" v-bind:class="{show:!isActive}">保存订单附言</van-button>
          <van-button size="small" color="red" class="ddtext-btn" @click="saveWord" v-bind:class="{show:isActive}">修改</van-button>
        </div>
      </van-collapse-item>
    </van-collapse>
    <div class="Submit">
      <van-button class="Submit-btn" color="red" @click="submit">提交订单</van-button>
    </div>
  </div>
</template>

<script>
import area from "../data/area";
import api from "../api/user";
export default {
  name: "payment",
  data() {
    return {
      areaList: area,
      searchResult: [],
      activeName: ["0"],
      activeName2: ["0"],
      activeName3: ["0"],
      isActive:true,
      radio: "1",
      radio2: "1",
      items: [],
      list: [],
      chosenAddressId: 0,
      addressInfo:{
        
      },
      reciever:{},
      selectAddress:'',
      feihua:''
    };
  },

  //   components: {},


  computed: {
    getTotal() {
      let total = 0;
      this.items.forEach(element => {
        total += element.pprice * element.num;
      });
      this.$store.state.totalMoney = total
      return total;
    },
    dingjin() {
      let dingjin = 0;
      this.items.forEach(element => {
        dingjin += 2000 * element.num;
      });
      return dingjin;
    }
  },
  mounted() {
    let params = { uid: this.$store.state.username };
    api.postCart(params).then(data => {
      this.items = JSON.parse(localStorage.getItem("carts"));
      console.log(this.items)
    });
  let params1={username:this.$store.state.username}
    api.postadress(params1).then(data=>{
      let obj = data.data[0].list
      for(let i=0,len=obj.length;i<len;i++){
        this.list.push(
          {
            id:i,
            address:obj[i].address,
            name:obj[i].name,
            tel:obj[i].tel
          }
        )
      }
      this.selectAddress = this.list[this.chosenAddressId].address
      console.log(this.selectAddress)
    })
    

  },
  methods: {

    addsave(content) {
      let params = {username:this.$store.state.username,address:content.addressDetail,tel:content.tel,name:content.name}
      api.postaddaddress(params).then(data =>{
        if(data.code==200){
          let obj = {
            id:'',
            name:content.name,
            tel:content.tel,
            address:content.addressDetail
          }
          this.list.push(obj)
        }
      })
    },
    selectAdd(item,index){
      console.log(item)
      this.reciever = item
      this.selectAddress = item.address
    },
    saveWord(){
      this.isActive = !this.isActive
    },
    submit(){
      let params = {username:this.$store.state.username,address:this.selectAddress,text:this.feihua}
    api.postaddorder(params).then(data =>{
      console.log(data)
      this.$router.push({
        name:'submitcart',
        params:{
          name:this.reciever.name,
          tel:this.reciever.tel
        }
      })
    })
    }
  }
};
</script>
<style scoped>
.show{
  display: none
}
.ipt{
  text-align: left
}
#payWrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  margin-bottom: 60px;
}
.van-address-item__edit{
  display: none
}
.title {
  height: 40px;
  line-height: 40px;
  color: #999999;
  text-indent: 15px;
}
.van-address-list{
  padding-bottom: 0
}
.item {
  width: 100%;
  background: #ffffff;
}
.itemInfo p {
  line-height: 30px;
  color: #999;
  font-size: 14px;
}
.van-address-list__add{
  display:none
}
.price {
  font-size: 14px;
  line-height: 30px;
}
.itemNum {
  color: #999;
}
.textList {
  padding: 10px;
  font-size: 14px;
  color: #999;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
}
.radioitem {
  float: left;
}
.peisong {
  line-height: 30px;
  height: 30px;
}
.thistime {
  width: 100%;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  line-height: 40px;
  height: 40px;
}
.timep {
  margin-right: 10px;
}
.peisong2 {
  margin-top: 10px;
}
.ddtext {
  text-align: center;
  height: 100px;

  width: 100%;
}
#ddtext {
  width: 80%;
  height: 30px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}
.ddtext-btn {
  margin-top: 40px;
}
.Submit {
  height: 80px;
  background: #ffffff;
  text-align: center;
  line-height: 80px;
}
.Submit-btn {
  width: 90%;
}
</style>