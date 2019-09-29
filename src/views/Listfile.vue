<template>
  <div>
    <div class="foter">{{biaosi}}</div>
    <div class="nav">
      <ul>
        <li
          v-for="(list,index) in navList"
          :class="{key:changeRed == index}"
          :key="index"
          @click="reds(index)"
        >{{list}}</li>
      </ul>
    </div>
    <div class="box">
      <ul>
        <li @click="datail(code._id)" v-for="(code,a) in codesss" :key="a">
          <img :src="code.pimg" alt />
          <div>
            <p>{{code.pdesc}}</p>
            <span>
              ￥{{code.pprice}}
              <del>￥{{code.pprice}}</del>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import api from "../api/user";
export default {
  name: "listfile",
  data() {
    return {
      value: "",
      navList: ["销量", "评分", "价格", "最新上架"],
      changeRed: 0,
      biaosi: "",
      codesss: "",
      par:""
    };
  },
  methods: {
    reds(index) {
      this.changeRed = index;
    },
    datail(id) {
      this.$router.push("/detail?id=" + id);
    },
    search() {
      this.par = this.$route.params.id;
      let params = { pclass4: this.par };
      api.postPclass4Product(params).then(data => {
        this.codesss = data.data;
        console.log(data);
        let dat = data.data;
        if (dat == "") {
          this.biaosi = "暂无数据";
        } else {
          this.biaosi = this.par;
        }
      });
    }
  },
  mounted() {
    this.search()
  },
  watch: {
    $route(to,from){
      this.search()
    }
  }
};
</script>

<style scoped>
.foter {
  height: 30px;
  padding: 10px;
  color: #999;
  font-size: 14px;
  line-height: 30px;
}
.nav {
  height: 41px;
  padding: 10px 2vw 0 2vw;
  background: rgb(249, 247, 247);
  margin-bottom: 10px;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ca151d;
  border-radius: 20px;
  font-size: 14px;
  color: #ca151d;
  background: #fff;
}
.nav ul li {
  width: 24vw;
  height: 39px;
  line-height: 39px;
  text-align: center;
  border-right: 1px solid #ca151d;
}
.nav ul li:last-child {
  border: 0;
  border-radius: 0 20px 20px 0;
}
.nav ul li:first-child {
  border-radius: 20px 0 0 20px;
}

.nav ul .key {
  background: rgba(253, 243, 243, 0.9);
  color: #000;
}

.box {
  background: #f9f7f7;
  padding: 1vw;
}
.box:after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.box ul {
  width: 98vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 50px;
}
.box li {
  width: 48.5vw;
  height: 249px;
  background: #fff;
  margin-bottom: 5px;
  text-align: center;
  font-size: 14px;
  color: #55575a;
}
.box li img {
  width: 42vw;
  height: 160px;
  margin: 5px auto;
  display: block;
}
.box li p {
  height: 40px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
}
.box li span {
  color: #dd5b53;
  text-align: center;
}
.box li span del {
  color: #55575a;
}
</style>