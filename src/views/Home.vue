<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" :height="128">
      <van-swipe-item @click="btn()">
        <img src="../assets/1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item @click="btn1()">
        <img src="../assets/2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item @click="btn2()">
        <img src="../assets/3.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div>
      <p class="home_p">推荐购买</p>
    </div>
    <div>
      <van-tabs
        v-model="active"
        animated
        title-active-color="red"
        :ellipsis="false"
        :swipeable="true"
      >
        <van-tab title="宗申摩托">
          <van-grid :column-num="2">
            <van-grid-item v-for="(item,index) in list" :key="index" :to="'/detail?id='+item._id">
              <van-image :src="item.pimg" />
              <p class="pnames">{{item.pname}}</p>
              <p class="pnames1"><span><van-icon name="like-o" /></span>{{item.pfollow}}</p>
              <p class="pnames2">￥{{item.pprice}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="街跑系列(p)">
          <van-grid :column-num="2">
            <van-grid-item v-for="(item,index) in list1" :key="index" :to="'/detail?id='+item._id">
              <van-image :src="item.pimg" />
               <p class="pnames">{{item.pname}}</p>
              <p class="pnames1"><span><van-icon name="like-o" /></span>{{item.pfollow}}</p>
              <p class="pnames2">￥{{item.pprice}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="宗申文化用品">
          <van-grid :column-num="2">
            <van-grid-item v-for="(item,index) in list2" :key="index" :to="'/detail?id='+item._id">
              <van-image :src="item.pimg" />
              <p class="pnames">{{item.pname}}</p>
              <p class="pnames1"><span><van-icon name="like-o" /></span>{{item.pfollow}}</p>
              <p class="pnames2">￥{{item.pprice}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="赛科龙摩托" class="footer">
          <van-grid :column-num="2">
            <van-grid-item v-for="(item,index) in list3" :key="index" :to="'/detail?id='+item._id">
              <van-image :src="item.pimg" />
              <p class="pnames">{{item.pname}}</p>
              <p class="pnames1"><span><van-icon name="like-o" /></span>{{item.pfollow}}</p>
              <p class="pnames2">￥{{item.pprice}}</p>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottom-swipe">
      <van-swipe  :show-indicators="false">
        <van-swipe-item v-for="(item,index) in list4" :key="index">
          <van-card :price="item.pprice" :desc="item.pdesc" :title="item.pname" :thumb="item.pimg" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import api from "../api/user";
export default {
  name: "home",
  data() {
    return {
      active: 0,
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: []
    };
  },
  methods: {
    onClick(name, title) {},
    btn() {
      this.$router.push("/detail?id=5d664ad151f33e0d50985784");
    },
    btn1() {
      this.$router.push("/detail?id=5d6671a5948adf0774c0522b");
    },
    btn2() {
      this.$router.push("/detail?id=5d66746b948adf0774c0522e");
    },
    detail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    let params = { pclass1: "宗申摩托车" };
    api.postPclass1Product(params).then(res => {
      this.list = res.data;
    });
    let params1 = { pclass2: "街跑" };
    api.postPclass2Product(params1).then(res => {
      console.log(res)
      this.list1 = res.data;
    });
    let params2 = { pclass1: "宗申文化用品" };
    api.postPclass1Product(params2).then(res => {
      this.list2 = res.data;
    });
    let params3 = { pclass1: "赛科龙摩托" };
    api.postPclass1Product(params3).then(res => {
      this.list3 = res.data;
    });

    api.getProduct().then(res => {
      // console.log(res.data.data);
      this.list4 = res.data.data;
      console.log(this.list4[0])
    });
    
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.pnames{
  font-size: 13px;
  color: #999;
  line-height: 24px;
}
.pnames1,.pnames2{
  font-size: 13px;
  line-height: 24px;
  color:red
}

.home_p {
  font-size: 13px;
}
.swipeable-detail {
  font-size: 14px;
}
.bottom-swipe {
  margin-bottom: 60px;
}

</style>
