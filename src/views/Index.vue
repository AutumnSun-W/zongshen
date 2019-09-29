<template>
  <div id="root">
    <header>
      <van-row justify="center">
        <van-col span="4">
          <img src="../assets/logo.png" alt="宗申" />
        </van-col>
        <van-col span="16">
          <van-search
            v-model="value"
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
            @click="skip()"
            size="35px"
          />
        </van-col>
      </van-row>
      <div class="nav"></div>
    </header>
    <nav>
      <van-tabs v-model="active_nav" @click="onClick" background="#f5f5f5">
        <van-tab title="首页" name="/home"></van-tab>
        <van-tab title="宗申摩托车" name="/listfile/宗申摩托车"></van-tab>
        <van-tab title="赛科龙摩托" name="/listfile/赛科龙摩托"></van-tab>
        <van-tab title="文化用品" name="/listfile/宗申文化用品"></van-tab>
        <van-tab title="配件直营" name="/home"></van-tab>
        <van-tab title="改装配件" name="/home"></van-tab>
        <van-tab title="宗申原厂机油" name="/home"></van-tab>
        <van-tab title="淘宝店铺(配件)" name="/home"></van-tab>
        <van-tab title="天猫店铺" name="/home"></van-tab>
        <van-tab title="京东店铺" name="/home"></van-tab>
      </van-tabs>
    </nav>
    <router-view></router-view>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="tocart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="tomy">个人中心</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      active: 0,
      active_nav: 0,
      value: ""
    };
  },
  methods: {
    onSearch() {
      if (this.value.length > 0) {
       this.$router.push({name:'listfile',params:{id:this.value}});
      } else {
        this.$router.push("/listfile/赛科龙摩托");
      }
    },
    skip() {
      this.$router.push("/cart");
    },
    onClick(name, title) {
      this.$router.push(name);
    },
    tomy() {
      if (this.$store.state.token) {
        this.$router.push("/individual");
      } else {
        this.$router.push("/login");
      }
    },
    tocart() {
      if (this.$store.state.token) {
        this.$router.push("/cart");
      } else {
        this.$router.push("/login");
      }
    }
    
  }
};
</script>
<style  scoped>
header {
  background: #fafafa;
  width: 100%;
}
.van-row {
  width: 100%;
}
.van-search__content {
  background-color: #fff;
}

img {
  position: absolute;
  left: 25px;
  top: 15px;
  width: 35px;
  height: 20px;
}
.top-search {
  font-size: 24px;
  margin-top: 2px;
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
</style>