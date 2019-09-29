<template>
  <div>
    <header>
      <van-row justify="center">
        <van-col span="4">
          <img class="logo" src="../assets/logo.png" alt="宗申" />
        </van-col>
        <van-col span="16">
          <van-search
            v-model="val"
            placeholder="请输入搜索关键词"
            show-action
            left-icon
            @search="onSearch"
            background="#fafafa"
          >
            <div slot="action" @click="onSearch" class="top-search">
              <van-icon name="search" class="top-search-icon" />
            </div>
          </van-search>
        </van-col>

        <van-col span="4">
          <van-icon
            name="http://shop.zongshenmotor.com/views/new_zs/javascript/mobile/images/cart_icocc.png"
            class="search-cart"
            @click="tocart"
            size="35px"
          />
        </van-col>
      </van-row>
    </header>
    <nav>
      <van-tabs v-model="active_nav" @click="onClick" background="#f5f5f5">
        <van-tab title="首页" name="/home"></van-tab>
        <van-tab title="宗申摩托车" name="/listfile/宗申摩托车"></van-tab>
        <van-tab title="赛科龙摩托" name="/listfile/赛科龙摩托"></van-tab>
        <van-tab title="文化用品" name="/listfile/文化用品"></van-tab>
        <van-tab title="配件直营" name="/listfile/配件直营"></van-tab>
        <van-tab title="改装配件" name="/listfile/改装配件"></van-tab>
        <van-tab title="宗申原厂机油" name="/listfile/宗申原厂机油"></van-tab>
        <van-tab title="淘宝店铺(配件)" name="/home"></van-tab>
        <van-tab title="天猫店铺" name="/home"></van-tab>
        <van-tab title="京东店铺" name="/home"></van-tab>
      </van-tabs>
    </nav>

    <van-swipe :autoplay="3000" indicator-color="red" style="height: 278px;">
      <van-swipe-item v-for="(item,index) in pro.pimgl" :key="index">
        <img :src="item.pimg" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="detail_price">
      <div class="price">
        销售价:
        <span id="ture_price">￥{{pro.pprice}}</span>
      </div>
      <div class="price">
        预付订金:
        <span>￥{{pro.pprice / 8}}</span>
      </div>
    </div>

    <van-row>
      <van-col span="14" offset="1" class="pdesc">
        <p>{{pro.pname}}</p>
      </van-col>
      <van-col span="6" offset="2" class="pdesc">
        <van-stepper v-model="value" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="14" offset="1" class="pdesc1">
        <p>品牌: {{pro.pclass3}}</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="14" offset="1" class="pdesc1">
        <p>库存: 现货 ({{pro.pnum}})</p>
      </van-col>
    </van-row>

    <div class="gray">
      <div>
        关注度：已有
        <span class="color_red">{{pro.pfollow}}</span>关注
      </div>
      <div>
        收藏人气：已有
        <span class="color_red">{{pro.Popularity}}</span>人收藏
      </div>
    </div>
    <div class="rate">
      顾客评分：(已有
      <span class="color_red">{{pro.pbbs.length}}</span>人评价)
    </div>
    <div class="choice">
      <van-row class="flex">
        <van-col span="4" class="choice_title">WEEK8:</van-col>
        <van-col offset="2">
          <ul class="guige">
            <li v-bind:class="{on:isActive}" @click="toggle($event)">
              <a href="javascript:;">{{pro.pdesc}}</a>
              <span v-bind:class="'duigou'"></span>
            </li>
          </ul>
        </van-col>
      </van-row>
      <van-row class="flex">
        <van-col span="4" class="choice_title">WEEK8FI颜色:</van-col>
        <van-col offset="2">
          <ul class="guige">
            <li
              @click="xiangqing(index)"
              v-bind:class="{on:index==xiangqingSpan}"
              v-for="(item, index) in pro.pother"
              :key="index"
              :value="item.other"
            >
              <a href="javascript:;">{{item.other}}</a>
              <span v-bind:class="{duigou:index==xiangqingSpan}"></span>
            </li>
          </ul>
        </van-col>
      </van-row>
    </div>
    <div style="display:none">
      <vshare :vshareConfig="vshareConfig"></vshare>
    </div>
    <div class="choiced">
      已选择：
      <span v-bind:class="{block:isActive}">“{{pro.pdesc}}”</span>
      <span
        v-bind:class="{block:index==xiangqingSpan}"
        v-for="(item, index) in pro.pother"
        :key="index"
      >“{{item.other}}”</span>
    </div>
    <nav class="footer1">
      <van-tabs background="#fff">
        <van-tab title="商品详情">
          <van-panel title="商品详情">
            <div v-for="(item,index) in pro.pimgd" :key="index">
              <img :src="item.pimg" alt />
            </div>
          </van-panel>
        </van-tab>
        <van-tab title="规格参数">
          <van-panel title="规格参数">
            <div>内容</div>
          </van-panel>
        </van-tab>
        <van-tab title="购买记录">
          <van-panel title="购买记录">
            <div>内容</div>
          </van-panel>
        </van-tab>
        <van-tab title="售后服务">
          <van-panel title="售后服务">
            <div>内容</div>
          </van-panel>
        </van-tab>
        <van-tab title="顾客评价">
          <van-panel title="顾客评价">
            <div>内容</div>
          </van-panel>
        </van-tab>
        <van-tab title="购买前咨询">
          <van-panel title="购买前咨询">
            <div>内容</div>
          </van-panel>
        </van-tab>
      </van-tabs>
    </nav>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="like" text="收藏" @click="addlove" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addcart" />
        <van-goods-action-button type="danger" text="立即购买" @click="buy" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import api from "../api/user";
import { Dialog } from "vant";
export default {
  name: "Detail",
  data() {
    return {
      active_nav: 0,
      value1: "",
      value: 1,
      val: "",
      pro: {},
      checkedArr: [],
      isActive: true,
      xiangqingSpan: "-1",
      id: this.$route.query.id,
      vshareConfig: {
        shareList: [
          // 此处放分享列表（ID）
          "more",
          "qzone",
          "tsina",
          "tqq",
          "renren",
          "weixin"
        ],
        common: {
          //此处放置通用设置
        },
        share: [
          {
            //此处放置分享按钮设置
          }
        ],
        slide: [
          //此处放置浮窗分享设置
        ],
        selectShare: [
          //此处放置划词分享设置
        ]
      }
    };
  },
  mounted() {
    let params = { pid: this.$route.query.id };
    api.postDetail(params).then(data => {
      // console.log(data);
      this.pro = data.data[0];
    });
  },
  methods: {
    onClick(name, title) {
      this.$router.push(name);
    },
    onSearch() {
      this.$router.push(`/listfile/${this.value}`);
    },
    addlove() {
      if (this.$store.state.token) {
        this.$router.push("/individual");
      } else {
        this.$router.push("/login");
      }
    },
    addcart() {
      if (this.$store.state.token) {
        if (this.isActive && this.xiangqingSpan !== "-1") {
          let params = {
            username: this.$store.state.username,
            pid: this.$route.query.id,
            num: this.value,
            pname: this.pro.pname,
            pimg: this.pro.pimg,
            pprice: this.pro.pprice,
            pdesc: this.pro.pdesc
          };
          api.postAddCart(params).then(data => {
            Dialog.alert({
              message: "加入购物车成功"
            });
          });
        } else {
          Dialog.alert({
            title: "错误",
            message: "请先选择商品的规格"
          }).then(() => {
            // on close
          });
        }
      } else {
        this.$router.push("/login");
      }
    },
    buy() {
      //判断是否登录
      if (this.$store.state.token) {
        //订单页面

        //判断规格选中是否
        if (this.isActive && this.xiangqingSpan !== "-1") {
          this.$router.push("/payment?id=" + this.$route.query.id);
        } else {
          Dialog.alert({
            title: "错误",
            message: "请先选择商品的规格"
          }).then(() => {
            // on close
          });
        }
      } else {
        this.$router.push("/login");
      }
    },
    intocart() {},
    xiangqing(index) {
      if (this.xiangqingSpan == index) {
        this.xiangqingSpan = "-1";
      } else {
        this.xiangqingSpan = index;
      }
    },
    toggle(e) {
      this.isActive = !this.isActive;
    },
    tocart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  align-items: center;
}
ul.guige li.on span.duigou {
  position: absolute;
  background: url("../../public/select_ico.png");
  width: 12px;
  height: 12px;
  bottom: 0px;
  right: 0px;
}
ul.guige li.on {
  border: 1px solid #ca151d;
  border-radius: 2px;
}
header {
  background: #fafafa;
  width: 100%;
}

.van-search__content {
  background-color: #fff;
}
.logo {
  position: absolute;
  left: 25px;
  top: 15px;
  width: 35px;
  height: 20px;
}
.choiced span.block {
  display: block;
}
.choiced span {
  display: none;
  color: red;
}
img {
  width: 100%;
  height: 100%;
}
.top-search {
  font-size: 24px;
}
.top-search-icon {
  background-color: #fff;
  height: 34px;
  line-height: 34px;
}
.van-search__action {
  padding: 0;
}
.search-cart {
  font-size: 28px;
  position: absolute;
  right: 20px;
  top: 10px;
}
.price {
  height: 38px;
  line-height: 38px;
  color: red;
  font-size: 14px;
  padding-left: 14px;
}
.detail_price {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: block;
}
.pdesc {
  font-size: 14px;
  color: #999;
  line-height: 28px;
  margin-top: 20px;
}
.pdesc1 {
  font-size: 14px;
  color: #999;
  line-height: 28px;
  margin-top: 5px;
}

.stepper {
  display: flex;
}

.banner img {
  width: 100%;
  height: 100%;
}
.gray {
  background: #f9f7f7;
  height: 20px;
  padding: 10px;
  display: flex;
  font-size: 14px;
  color: #999;
  justify-content: space-between;
}
.pro-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100px;
  color: #999;
  font-size: 14px;
  justify-content: space-around;
}
.color_red {
  color: red;
}
.rate {
  height: 30px;
  padding: 10px;
  color: #999;
  font-size: 14px;
}
.choice {
  padding-left: 10px;
  overflow: hidden;
}
.choice ul li {
  padding: 5px;
  margin: 5px;
  border: 1px solid #e4e4e4;
  float: left;
  border-radius: 2px;
  position: relative;
}
.choice ul li a {
  color: #999;
  font-size: 14px;
}
.choiced {
  padding: 0px 10px 12px 10px;
  font-size: 14px;
  color: #999;
  display: flex;
}
.choice_title {
  padding-top: 10px;
  color: #999;
  font-size: 14px;
}
.footer1 {
  margin-bottom: 50px;
}
.footer {
  margin-bottom: 50px;
}
</style>