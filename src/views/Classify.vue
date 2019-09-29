<template>
  <div class="app">
    <div class="nav">
      <ul>
        <li v-for="(itm,i) in item" @click="tab(i)" :key="i" :class="{hove:changeRed == i}">{{itm}}</li>
        <div class="foot"></div>
      </ul>
    </div>
    <div class="box">
      <ul>
        <li v-for="(code,a) in codesss" :key="a" @click="detail(code.class2)">
          <img :src="code.classimg" alt />
          <span>{{code.classname}}</span>
        </li>
        <div class="foot"></div>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../api/user";
export default {
  name: "classify",
  data() {
    return {
      changeRed: 0,
      codesss: "",
      item: [
        "赛科龙摩托",
        "宗申摩托车",
        "宗申文化用品",
        "宗申摩托改装配件",
        "宗申摩托配件",
        "柴油三轮"
      ]
    };
  },
  methods: {
    tab(i) {
      this.changeRed = i;
      let par = this.item[i];
      let params = { class1: par };

      api.postClassClass(params).then(data => {
        console.log(data)
        this.codesss = data.data;
      });
    },
    detail(id) {
      this.$router.push("/listfile/" + id);
    }
  },
  mounted() {
    let params = { class1: "赛科龙摩托" };
    api.postClassClass(params).then(data => {
      // console.log(data)
      this.codesss = data.data;
    });
  }
};
</script>

<style scoped>
.app{
  width:100vw;
  display: flex;
  justify-content: space-between;
  
}
.app .nav {
  width: 30vw;
  height: 80vh;
  text-align: center;
  color: #999;
  font-size: 12px;
  overflow: auto;
}
.app .nav li {
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.hove {
  background: rgb(239, 239, 239);
}
.app .nav .foot {
  height: 50px;
}
.app .box {
  width: 70vw;
  height: 80vh;
  text-align: center;
  color: #55575a;
  font-size: 12px;
  overflow: auto;
}
.app .box ul {
  background: rgb(239, 239, 239);
}
.app .box li {
  height: 81px;
  border-bottom: 1px #e8e8e8 solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app .box li img {
  width: 64px;
  height: 40px;
  display: block;
  background: #fff;
}
</style>