<!-- 购物车主页面 -->
<template>
  <van-row type="flex" class="cart">
    <van-col span="24" class="shopList">
      <van-row type="flex" class="title">
        <van-col span="22">购物清单</van-col>
        <van-col span="2" offset="12">
          <van-icon name="delete" />
        </van-col>
      </van-row>
      <van-row type="flex" class="content">
        <van-col span="24" class="body">
          <van-card
            class="item"
            v-for="(item, index) in items"
            :key="index"
            :desc="item.pdesc"
            :title="item.pname"
            :thumb="item.pimg"
          >
            <van-row type="flex" slot="tags" class="itemInfo">
              <van-col span="12" class="priceBox">
                <p>
                  单价:
                  <span class="price">￥{{item.pprice}}</span>
                </p>
                <p>
                  小计:
                  <span class="price">￥{{item.num*item.pprice}}</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-row class="numBox">
                  <van-stepper
                    v-model="item.num"
                    plus="item.num++"
                    minus="item.num--"
                    @change="update"
                  />
                </van-row>
              </van-col>
            </van-row>
            <van-row type="flex" slot="footer">
              <van-col span="17" offset="6">
                <van-button
                  color="#999999"
                  class="deleteBtn"
                  size="small"
                  @click="remove(index,item.pid,item)"
                >删除</van-button>
              </van-col>
            </van-row>
          </van-card>
          <van-row v-show="flag">
            <p class="empyt">购物车内暂时没有商品，赶紧去选购吧！</p>
            <van-button color="#ca151d" class="empytBtn" size="mini" to="/home">去逛逛</van-button>
          </van-row>
        </van-col>
      </van-row>

      <van-row type="flex" class="fiexdPrice">
        <van-col span="12" class="leftInfo">
          <p>
            商品总重量:
            <span class="price">￥</span>
          </p>
          <p>
            商品优惠:
            <span class="price">￥</span>
          </p>
          <p>
            促销活动优惠:
            <span class="price">￥</span>
          </p>
          <p>
            商品总金额:
            <span class="price">￥{{getTotal}}</span>
          </p>
          <p>
            金额总计:
            <span class="price">￥{{getTotal}}</span>
          </p>
        </van-col>
        <van-col span="12">
          <van-row type="flex" justify="space-around" class="rightBtn">
            <van-col span="10">
              <van-button color="#ca151d" class="goShopBtn p-btn" url="/index">继续购物</van-button>
            </van-col>
            <van-col span="10">
              <van-button color="#ca151d" class="endBtn p-btn" @click="tocheckout">去结算</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
var aaa = JSON.parse(localStorage.getItem("carts") || "[]");
console.log(aaa);
import api from "../api/user";
export default {
  name: "cart",
  data() {
    return {
      items:'',
      flag:''
    };
  },
  mounted() {
    let params = { uid: this.$store.state.username };
    api.postCart(params).then(data => {
      this.items = data.data[0].items;
      localStorage.setItem("carts", JSON.stringify(this.items));
      console.log(data.data[0].items.length)
      if (data.data[0].items.length) {
        this.flag = 0;  
      } else {
        this.flag = 1;
      }
      
    });
  },
  created() {},
  computed: {
    getTotal() {
      if (this.items) {
        let totalP = 0;
        this.items.forEach(element => {
          return (totalP += element.pprice * element.num);
        });
        return totalP;
      } else {
        return 0;
      }
    },
  },
  methods: {
    tocheckout() {
      if (this.$store.state.token) {
        this.$router.push("/payment?pid=" + this.$store.state.username);
      } else {
        this.$router.push("/login");
      }
    },
    remove(index, pid, item) {
      let params = {
        username: this.$store.state.username,
        pid: pid,
        num: item.num,
        pname: item.pname,
        pimg: item.pimg,
        pdesc: item.pdesc,
        pprice: item.pprice
      };
      api.postDelCart(params).then(data => {
        this.items.splice(index, 1);
        let list = JSON.parse(localStorage.getItem("carts"));
        console.log(list);
        list.splice(index, 1);
        localStorage.setItem("carts", JSON.stringify(list));
        if (this.items.length) {
        this.flag = 0;  
      } else {
        this.flag = 1;
      }
      
      });
    },
    update() {
      localStorage.setItem("carts", JSON.stringify(this.items));
    }
  }
};
</script>
<style scoped>
.cart {
  background: #f5f5f5;
}

.title {
  padding: 10px;
  margin-top: 5px;
  background: #fff;
  border-bottom: 1px #f5f5f5 solid;
  color: #999999;
}

.item {
  background: #fff;
  padding: 30px 10px;
  border-bottom: #f5f5f5 1px solid;
  width: 100%;
}

.numBox {
  border: 1px #dbdbdb solid;
  border-radius: 100px;
  line-height: 28px;
  text-align: center;
}

.numBox .num {
  border-right: #dbdbdb 1px solid;
  border-left: #dbdbdb 1px solid;
}

.deleteBtn {
  width: 100%;
  line-height: 26px;
}
.body {
  margin-bottom: 160px;
}
.empyt {
  padding: 50px 0;
  text-align: center;
  color: #999999;
  font-size: 14px;
}
.empytBtn {
  width: 60px;
  height: 28px;
  position: absolute;
  left: calc(50% - 30px);
}
.fiexdPrice {
  width: 100%;
  position: fixed;
  bottom: 60px;
  padding: 0 10px;
  font-size: 14px;
  color: #999999;
  border-top: #dbdbdb 1px solid;
  background: #fff;
  margin-bottom: -10px;
}

.leftInfo p {
  line-height: 22px;
}

.rightBtn {
  font-size: 12px;
  position: relative;
  top: 63px;
  right: 15px;
}

.p-btn {
  padding: 0;
  width: 100%;
  height: 35px;
  line-height: 35px;
}
</style>
